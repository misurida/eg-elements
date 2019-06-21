<style lang="scss">
    .demo-zone-btn {
        padding: 40px;
        max-width: 1400px;
        margin: 0 auto;
        margin-bottom: 20px;
        .title-bloc {
            margin-bottom: 40px;
        }
        h2 {
            text-transform: capitalize;
        }
        pre {
            text-align: left;
            background-color: #f5f5f5;
            border-radius: 5px;
            padding: 20px;
            overflow-x: auto;
            width: auto;
        }
        & > div:first-child {
            padding: 20px 0;
        }
        .demo-grid {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            .grid-block {
                display: inline-block;
                margin: 0;
                justify-content: center;
                padding: 0;
                & > div {
                    text-align: center;
                    min-width: 100px;
                    margin: 10px;
                    display: inline-block;
                    & > span {
                        opacity: 0.5;
                        display: inline-block;
                        margin: 10px;
                        font-size: 0.8rem;
                        text-transform: capitalize;
                    }
                }
            }
        }
    }
    .demo-hero-btn {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        flex-wrap: wrap;
        & > * {
            margin: 20px;
        }
        .eg-button {
            margin: 20px;
        }
    }
</style>

<template>
    <div class="home">
        <h1>Demo of the EgButton &lt;Btn&gt;</h1>
        <div class="demo-hero-btn">
            <eg-input placeholder="Enter the button text..." auto-width label="Button text" v-model="text" :delete-cross="false"></eg-input>
            <eg-input placeholder="Select a style..." label="Style" type="select" :list="styles" v-model="selectedStyle"></eg-input>
            <eg-input placeholder="Select an icon..." label="Left icon" type="select" :list="icons" v-model="leftIcon"></eg-input>
            <eg-input placeholder="Select an icon..." label="Right icon" type="select" :list="icons" v-model="rightIcon"></eg-input>
            <btn :sty="selectedStyle" :ri="rightIcon" :li="leftIcon" :loading="!load" @click="load=!load">{{ text }}</btn>
        </div>
        <div class="demo-zone-btn" :id="'#btn-zone-'+s" v-for="s in styles">
            <div class="title-bloc">
                <h2>{{ s }} style</h2>
                <span><a :href="'#btn-zone-'+s" @click="show[s]=!show[s]">See code</a></span>
            </div>
            <div class="demo-grid">
                <div class="grid-block">
                    <div>
                        <span>Default:</span>
                        <btn :sty="s">{{ text }}</btn>
                        <pre v-if="show[s]">&lt;btn sty="{{s}}"&gt;{{ text }}&lt; /btn&gt;</pre>
                    </div>
                    <div>
                        <span>Disabled:</span>
                        <btn :sty="s" disabled>{{ text }}</btn>
                        <pre v-if="show[s]">&lt;btn sty="{{s}}" disabled&gt;{{ text }}&lt; /btn&gt;</pre>
                    </div>
                    <div>
                        <span>Loading:</span>
                        <btn :sty="s" :loading="load" @click="load=!load">{{ text }}</btn>
                        <pre v-if="show[s]">&lt; :sty="s" :loading="load" @click="load=!load"&gt;{{ text }}&lt; /btn&gt;</pre>
                    </div>
                    <div>
                        <span>Valid:</span>
                        <btn :sty="s" valid @click="active=true">{{ text }}</btn>
                        <pre v-if="show[s]">&lt;btn sty="{{s}}" valid&gt;{{ text }}&lt; /btn&gt;</pre>
                    </div>
                    <div>
                        <span>Warning:</span>
                        <btn :sty="s" warning>{{ text }}</btn>
                        <pre v-if="show[s]">&lt;btn sty="{{s}}" warning&gt;{{ text }}&lt; /btn&gt;</pre>
                    </div>
                    <div>
                        <span>Error:</span>
                        <btn :sty="s" error @click="active=false">{{ text }}</btn>
                        <pre v-if="show[s]">&lt;btn sty="{{s}}" error&gt;{{ text }}&lt; /btn&gt;</pre>
                    </div>
                    <div>
                        <span>Active:</span>
                        <btn :sty="s" :active="active">{{ text }}</btn>
                        <pre v-if="show[s]">&lt;btn sty="{{s}}" active&gt;{{ text }}&lt; /btn&gt;</pre>
                    </div>
                </div>
                <div class="grid-block">
                    <div>
                        <span>small:</span>
                        <btn :sty="s" small>{{ text }}</btn>
                        <pre v-if="show[s]">&lt;btn sty="{{s}}" small&gt;{{ text }}&lt; /btn&gt;</pre>
                    </div>
                    <div>
                        <span>big:</span>
                        <btn :sty="s" big>{{ text }}</btn>
                        <pre v-if="show[s]">&lt;btn sty="{{s}}" big&gt;{{ text }}&lt; /btn&gt;</pre>
                    </div>
                    <div>
                        <span>thin:</span>
                        <btn :sty="s" thin>{{ text }}</btn>
                        <pre v-if="show[s]">&lt;btn sty="{{s}}" thin&gt;{{ text }}&lt; /btn&gt;</pre>
                    </div>
                    <div>
                        <span>fat:</span>
                        <btn :sty="s" fat>{{ text }}</btn>
                        <pre v-if="show[s]">&lt;btn sty="{{s}}" fat&gt;{{ text }}&lt; /btn&gt;</pre>
                    </div>
                    <div>
                        <span>square:</span>
                        <btn :sty="s" square>{{ text }}</btn>
                        <pre v-if="show[s]">&lt;btn sty="{{s}}" square&gt;{{ text }}&lt; /btn&gt;</pre>
                    </div>
                    <div>
                        <span>round:</span>
                        <btn :sty="s" round>{{ text }}</btn>
                        <pre v-if="show[s]">&lt;btn sty="{{s}}" round&gt;{{ text }}&lt; /btn&gt;</pre>
                    </div>
                    <div style="width: 200px;">
                        <span>wide:</span>
                        <btn :sty="s" wide>{{ text }}</btn>
                        <pre v-if="show[s]">&lt;btn sty="{{s}}" wide&gt;{{ text }}&lt; /btn&gt;</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                styles: ['default', 'primary', 'secondary', 'ternary', 'link', 'thick', 'light', 'dark', 'transparent', 'yoga'],
                icons: ['', 'pdf'],
                text: "Example",
                show: {
                    default: false,
                    primary: false,
                    secondary: false,
                    ternary: false,
                    link: false,
                    thick: false,
                    light: false,
                    dark: false,
                    transparent: false,
                    yoga: false,
                },
                selectedStyle: 'primary',
                leftIcon: null,
                rightIcon: 'pdf',
                load: true,
                active: true
            }
        }
    }
</script>
