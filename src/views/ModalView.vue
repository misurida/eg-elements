<template>
    <div class="content-wrapper modal-view">
        <h1 id="modal-anchor">Demo of the &lt;Modal&gt; and &lt;Sidemenu&gt; element</h1>
        <div class="title-bloc">
            <h2>&lt;Modal&gt; element</h2>
            <span><a href="#modal-anchor" @click="showModalCode=!showModalCode">See code</a></span>
        </div>
        <div class="popover-demo">
            <div>
                <eg-btn @click="showModal1=1" small>Small</eg-btn>
                <modal small v-model="showModal1" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequuntur ducimus, excepturi exercitationem magni maiores officia quam quos vero voluptates. Ab accusamus architecto culpa debitis delectus impedit molestiae quibusdam voluptas?"></modal>
                <pre v-if="showModalCode">
&lt;eg-btn @click="showModal1=1" small&gt;Small&lt;/eg-btn&gt;
&lt;modal small v-model="showModal1" title="Small modal" content="Lorem ipsum [...]"&gt;&lt;/modal&gt;
                </pre>
            </div>
            <div>
                <eg-btn @click="showModal2=1">Medium</eg-btn>
                <modal v-model="showModal2" @validate="showModal2=false" title="Medium modal" b v>
                    <span slot="body">This is a slot-based content. Check out the code!</span>
                </modal>
                <pre v-if="showModalCode">
&lt;eg-btn @click="showModal2=1"&gt;Medium&lt;/eg-btn&gt;
&lt;modal v-model="showModal2" @validate="showModal2=false" title="Medium modal" b v&gt;
    &lt;span slot="body"&gt;This is a slot-based content. Check out the code!&lt;/span&gt;
&lt;/modal&gt;
                </pre>
            </div>
            <div>
                <eg-btn big @click="showModal3=1">Big</eg-btn>
                <modal big v-model="showModal3">
                    <h2 slot="header">Big modal</h2>
                    <div slot="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est mollitia quo reprehenderit sequi. A ab adipisci atque deleniti doloribus dolorum earum error, fuga fugiat odit praesentium similique ullam veniam voluptas!</p>
                        <p>Full content including inputs or buttons!</p>
                        <eg-input type="star" :count="5" v-model="rating"></eg-input>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, natus, officia! Ad, aliquid animi consequatur culpa cum debitis dolore fugit hic id nobis numquam quae quaerat quasi quis tempore velit?</p>
                    </div>
                    <div slot="footer">
                        <eg-btn @click="showModal3=0">Close it!</eg-btn>
                        <eg-btn @click="showModal3=0" pri>Go on!</eg-btn>
                    </div>
                </modal>
                <pre v-if="showModalCode">
&lt;eg-btn big @click="showModal3=1"&gt;Big&lt;/eg-btn&gt;
&lt;modal big v-model="showModal3"&gt;
    &lt;h2 slot="header"&gt;Big modal&lt;/h2&gt;
    &lt;div slot="content"&gt;
        &lt;p&gt;Lorem ipsum [...]&lt;/p&gt;
        &lt;p&gt;Full content including inputs or buttons!&lt;/p&gt;
        &lt;eg-input type="star" :count="5" v-model="rating"&gt;&lt;/eg-input&gt;
        &lt;p&gt;Lorem ipsum [...]&lt;/p&gt;
    &lt;/div&gt;
    &lt;div slot="footer"&gt;
        &lt;eg-btn @click="showModal3=0"&gt;Close it!&lt;/eg-btn&gt;
        &lt;eg-btn @click="showModal3=0" pri&gt;Go on!&lt;/eg-btn&gt;
    &lt;/div&gt;
&lt;/modal&gt;
                </pre>
            </div>
        </div>
        <div class="title-bloc">
            <h2 id="sidemenu-anchor">Demo of the &lt;Sidemenu&gt; element</h2>
            <span><a href="#sidemenu-anchor" @click="showPopoverCode=!showPopoverCode">See code</a></span>
        </div>
        <div class="demo-zone">
            <pre v-if="showPopoverCode">
&lt;sidemenu :trigger="1000" v-model="leftMenu"&lt;This is the left menu. You can put any content in it and will be hidden if the viewport size is smaller than 1000px.&lt;/sidemenu&gt;
            </pre>
        </div>
        <div class="side-menu-demo">
            <sidemenu :trigger="1000" v-model="leftMenu">This is the left menu. You can put any content in it and will be hidden if the viewport size is smaller than 1000px.</sidemenu>
            <div class="side-menu-buttons">
                <eg-btn class="btn-hide-1000" pri @click="leftMenu=true">Trigger left menu</eg-btn>
                <eg-btn class="btn-hide-500" pri @click="rightMenu=true">Trigger right menu</eg-btn>
            </div>
            <sidemenu orientation="right" :trigger="500"  v-model="rightMenu">This is the right menu. You can put any content in it and will be hidden if the viewport size is smaller than 500px.</sidemenu>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showModalCode: false,
                showPopoverCode: false,

                leftMenu: false,
                rightMenu: false,
                rating: 5,

                showModal1: false,
                showModal2: false,
                showModal3: false,
            }
        }
    }
</script>
