<template>
    <div id="home">
        <h1>Demo of Eg-Elements Vuejs Components</h1>
        <p class="desc-p"><a href="https://github.com/misurida/eg-elements#eg-elements">Here</a> is the Github and the doc:</p>
        <div class="categories-grid">
            <router-link :to="{name:'buttons'}"><h3>&lt;EgBtn&gt;</h3></router-link>
            <router-link :to="{name:'inputs'}"><h3>&lt;EgInput&gt;</h3></router-link>
            <router-link :to="{name:'popover'}"><h3>&lt;Popover&gt;</h3></router-link>
            <router-link :to="{name:'modal'}"><h3>&lt;Modal&gt; and &lt;Sidemenu&gt;</h3></router-link>
        </div>
        <div class="home-demo">
            <h2>And other stuff like the &lt;EgIcon&gt; wrapper</h2>
            <p class="desc-p">You can use the icons list on the input just below, or (if you have done the proper installation): </p>
            <ul class="desc-ul">
                <li>the <a href="https://material.io/tools/icons">Google's Material Icons</a>, using the prefix <strong>ma:</strong> <span class="example-span" @click="icon='ma:send'">(ex: 'ma:send')</span></li>
                <li>the <a href="https://fontawesome.com/icons">Font Awesome icons</a>, using the prefix <strong>fa:</strong> <span class="example-span" @click="icon='fa:fas fa-smile'">(ex: 'fa:fas fa-smile')</span></li>
            </ul>
            <div class="icon-demo">
                <eg-input
                        placeholder="Icon preview..."
                        width="300px"
                        :restrictToOptions="false"
                        v-model="icon"
                        editable
                        type="select"
                        :domLevel="false"
                        topAlign
                        :list="icons">
                </eg-input>
                <eg-icon class="demo-icon" :type="icon"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                icon: null,
                icons: [
                    'glass',
                    'check',
                    'cross',
                    'audio',
                    'other',
                    'archive',
                    'video',
                    'script',
                    'data',
                    'doc',
                    'font',
                    'image',
                    'tag',
                    'slides',
                    'spreadsheet',
                    'pdf',
                    'java'
                ]
            }
        }
    }
</script>
































































































