# Laravel + Vuejs

This file is a walthrough to install [Laravel](https://laravel.com/docs/5.8/routing) (5.8.27) and [Vuejs](https://vuejs.org/v2/guide/) for a quick build.

## Laravel installation

```
laravel new my-app
npm install -g @vue/cli
```

## NPM installation

```
cd my-app
npm init
npm install
```

## Laravel parameters

```
php artisan key:generate
```

## Database

```
php artisan make:model DbItem --migration
```

### Migration:

In the migration file:

```
$table->increments('id');
    $table->boolean('boolean');
    $table->dateTime('dateTime');
    $table->integer('integer');
    $table->text('text');
    $table->string('string')->nullable();
    $table->integer('model_id')->unsigned()->nullable()->index();
    $table->foreign('model_id')
          ->references('id')->on('models')->onDelete('cascade')->onUpdate('cascade');
    $table->timestamps();
});
```

### Model:
In the model class:

```
protected $table = "finished";
protected $primaryKey = "id";
protected $fillable = ['fillable_name', 'displayed_name', 'status'];
protected $visible = ['displayed_name', 'id'];
protected $with = ['sources'];
protected $attributes = [
    'displayed_name' => null,
    'status' => 1
];
```

With *hasMany()* and *belongsTo()*:

```
public function finished() {
    return $this->hasMany( 'App\Finished' );
}
public function training() {
    return $this->belongsTo( 'App\Training' );
}
```

With *belongsToMany()*:

```
public function sources() {
    return $this->belongsToMany('App\Source')->as('info')->select(['source_name']);
}
public function exercises() {
    return $this->belongsToMany('App\Exercise')->select(['id', 'name', 'icon']);
}
```

## Serve

Apache:
```
php artisan serve
```

Vuejs:
```
npm run dev
```

## Vue elements

```
/my-app
    /app
        /Http
            /Controllers
                ... (controller.php)
            /Middleware
            ... (model.php)
    /database
        /migrations
    /resources
        /js
            /components
                ExampleComponents.vue
            app.js
        /sass
            _variables.scss
            app.scss
        /views
            welcome.blade.php

```

The `<head>` is in *welcome.blade.php*. You can change the title:

```
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script>window.Laravel = { csrfToken: '{{ csrf_token() }}' }</script>
<meta name="csrf-token" content="{{ csrf_token() }}">
api
<title>My Wonderful Application</title>
```

Then remove the css and the content and place the base div for the vuejs app:

```
<div id="app">
    <example-component></example-component>
</div>
```

And then still in the body:

```
<script src={{ asset('js/app.js') }}></script>
```

## Simple API

In the file *api.php*:

```
Route::middleware(['auth:api'])->group(function () {
    /** App init */
    Route::get('user/{id?}', 'AppController@getUser')->where(['id' => '[0-9]+']);
    Route::get('users/{id?}', 'AppController@getUser')->where(['id' => '[0-9]+']);
    Route::get('lists', 'AppController@getLists');

    /** Users */
    Route::prefix('users')->group(function () {
        // create
        Route::post('/', function(Request $request) { return User::create($request->all()); });
        // edit
        Route::put('/{id}', function(Request $request, Int $id) {
            $model= User::findOrFail($id);
            $model->update($request->all());
            return $model;
        })->where(['id' => '[0-9]+']);
        // delete
        Route::delete('/{id}', function(Int $id) {
            $exercise = User::find($id);
            $id = $exercise['id'];
            $success = $exercise->delete();
            return ['success' => $success, 'id' => $id];
        })->where(['id' => '[0-9]+']);
	});

	/** Exercises */
	Route::prefix('exercises')->group(function () {
        // get all
        Route::get('/', function() { return Exercise::with(['muscles', 'sources', 'tags', 'favorite'])->get(); });
        // get one
        Route::get('/{id}', function(Int $id) { return Exercise::findOrFail($id); })->where(['id' => '[0-9]+']);
        // create
        Route::post('/', function(Request $request) {
            $all = $request->all();
            $exo = Exercise::create($all);
            $exo->sources()->sync($all['sources']);
            $exo->tags()->sync($all['tags']);
            if(!empty($all['muscles'])) {
                foreach($all['muscles'] as $m) {
                    $m['exercise_id'] = $exo['id'];
                    $recruit = Recruit::create([
                        'weighting' => $m['weighting'],
                        'exercise_id' => $exo['id'],
                        'muscle_id' => $m['muscle']['id'],
                    ]);
                    if(!empty($m['sources']))
                        $recruit->sources()->sync($m['sources']);
                }
            }
            return Exercise::find($exo['id']);
        });
        // edit
        Route::put('/{id}', function(Request $request, Int $id) {
            $model = Exercise::findOrFail($id);
            $model->update($request->all());
            // sources
            if($request->get('sources'))
                $model->sources()->sync($request->get('sources'));
            // tags
            if($request->get('tags'))
                $model->tags()->sync($request->get('tags'));
            // muscles
            if($request->get('muscles')) {
                $ids = [];
                foreach ($request->get('muscles') as $m) {
                    $ids[$m['muscle']['id']] = array(
                        'weighting' => $m['weighting']
                    );
                    $recruitSources = [];
                    foreach($m['sources'] as $s) {
                        $recruitSources[] = $s['info']['source_id'];
                    }
                    $recruit = Recruit::findOrFail($m['id']);
                    $recruit->sources()->sync($recruitSources);
                }
                $model->recruits()->sync($ids);
            }
            return Exercise::with(['sources', 'muscles'])->findOrFail($id);
        })->where(['id' => '[0-9]+']);
        // delete
        Route::delete('/{id}', function(Int $id) {
            $exo = Exercise::find($id)->delete();
            $id = $exo['id'];
            return ['success' => true, 'id' => $id];
        })->where(['id' => '[0-9]+']);
    });
});
```