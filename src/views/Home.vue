<style lang="scss">
    .categories-grid {
        display: flex;
        grid-gap: 20px;
        max-width: 600px;
        margin: 0 auto;
        flex-wrap: wrap;
        a {
            margin: 10px;
            flex: 1;
            background-color: transparent;
            border: 1px solid #ccc;
            border-radius: 5px;
            text-decoration: none;
            color: #4e7da8;
            transition: background .15s, border .15s;
            padding: 1em 3em;
            &:hover {
                background-color: #f5f5f5;
                border-color: #aaa;
            }
        }
    }
    #home {
        h2 {
            margin-top: 50px;
        }
    }
    .home-demo {
        margin-top: 50px;
        .tooltip-demo {
            display: inline-block;
            margin: 10px;
        }
    }
</style>

<template>
    <div id="home">
        <h1>Demo of the EgElements</h1>
        <div class="categories-grid">
            <router-link :to="{name:'buttons'}"><h3>&lt;Btn&gt;</h3></router-link>
            <router-link :to="{name:'inputs'}"><h3>&lt;MyInput&gt;</h3></router-link>
        </div>
        <div class="home-demo">
            <span>and</span>
            <h2>
                <eg-popover v-model="open"><button class="sem-btn">It's broken now...</button></eg-popover>
                Directive v-tooltip
            </h2>
            <span class="tooltip-demo" v-tooltip="'Okok'">Tooltip default</span> |
            <span class="tooltip-demo" v-tooltip.l="'Okok'">Tooltip left</span>
            <span class="tooltip-demo" v-tooltip.m="'Okok'">Tooltip middle</span>
            <span class="tooltip-demo" v-tooltip.r="'Okok'">Tooltip right</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: "Write here",
                icons: ['fa:fab fa-500px', 'fa:fas fa-ambulance'],
                args: {text: 'Yolo!'},
                open: false
            }
        }
    }
</script>