<style lang="scss">
    .categories-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        max-width: 600px;
        margin: 0 auto;
        a {
            background-color: transparent;
            border: 1px solid #ccc;
            border-radius: 5px;
            text-decoration: none;
            color: #4e7da8;
            transition: background .15s, border .15s;
            padding: 1em 10px;
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
    }
</style>

<template>
    <div id="home">
        <h1>Demo of the EgElements</h1>
        <div class="categories-grid">
            <router-link :to="{name:'buttons'}"><h3>&lt;Btn&gt;</h3></router-link>
            <router-link :to="{name:'inputs'}"><h3>&lt;MyInput&gt;</h3></router-link>
        </div>
        <h2>Directive v-tooltip</h2>
        <div class="home-demo">
            <span v-tooltip="'Tooltip content'">Tooltip test</span>
        </div>
        <div class="home-demo">
            <eg-input label="Testing" left-icon="fa:fas fa-biohazard" v-model="text"></eg-input>
            <eg-input label="Testing2" icon="ma:sentiment_satisfied_alt" v-model="text"></eg-input>
        </div>
        <div class="home-demo">
            <eg-input label="Testing2" type="textarea" icon="fa:fas fa-biohazard" v-model="text"></eg-input>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: "Write here"
            }
        }
    }
</script>