<template>
    <div class="content-wrapper">
        <h1>Demo of &lt;EgBtn&gt;</h1>
        <div class="demo-hero-btn">
            <eg-input placeholder="Enter the button text..." auto-width label="Button text" v-model="text" :delete-cross="false"></eg-input>
            <eg-input placeholder="Select a style..." label="Style" type="select" :list="styles" v-model="selectedStyle"></eg-input>
            <eg-input placeholder="Select an icon..." :restrictToOptions="false" e-change @change="leftIcon=$event" editable label="Left icon" type="select" :list="icons" v-model="leftIcon"></eg-input>
            <eg-input placeholder="Select an icon..." :restrictToOptions="false" e-change @change="rightIcon=$event" editable label="Right icon" type="select" :list="icons" v-model="rightIcon"></eg-input>
            <eg-btn @click="mainLoad=!mainLoad" :icon="mainLoad?'ma:thumb_up':'fa:fas fa-pause'" :secondary="!mainLoad"></eg-btn>
            <eg-btn :sty="selectedStyle" :ri="rightIcon" :li="leftIcon" :loading="mainLoad" :light="mainLoad">{{ text }}</eg-btn>
        </div>
        <div class="demo-zone-btn" :id="'#btn-zone-'+s" v-for="s in styles" :key="s">
            <div class="title-bloc">
                <h2>{{ s }} style</h2>
                <span><eg-btn link @click="show[s]=!show[s]">See code</eg-btn></span>
            </div>
            <div class="demo-grid">
                <div class="grid-block">
                    <div>
                        <span>Default:</span>
                        <eg-btn :sty="s">{{ text }}</eg-btn>
                        <pre v-if="show[s]">&lt;eg-btn sty="{{s}}"&gt;{{ text }}&lt;/eg-btn&gt;</pre>
                    </div>
                    <div>
                        <span>Disabled:</span>
                        <eg-btn :sty="s" disabled>{{ text }}</eg-btn>
                        <pre v-if="show[s]">&lt;eg-btn sty="{{s}}" disabled&gt;{{ text }}&lt;/eg-btn&gt;</pre>
                    </div>
                    <div>
                        <span>Loading:</span>
                        <eg-btn :sty="s" :loading="load" @click="load=!load">{{ text }}</eg-btn>
                        <pre v-if="show[s]">&lt; :sty="s" :loading="load" @click="load=!load"&gt;{{ text }}&lt;/eg-btn&gt;</pre>
                    </div>
                    <div>
                        <span>Valid:</span>
                        <eg-btn :sty="s" valid @click="active=true">{{ text }}</eg-btn>
                        <pre v-if="show[s]">&lt;eg-btn sty="{{s}}" valid&gt;{{ text }}&lt;/eg-btn&gt;</pre>
                    </div>
                    <div>
                        <span>Warning:</span>
                        <eg-btn :sty="s" warning>{{ text }}</eg-btn>
                        <pre v-if="show[s]">&lt;eg-btn sty="{{s}}" warning&gt;{{ text }}&lt;/eg-btn&gt;</pre>
                    </div>
                    <div>
                        <span>Error:</span>
                        <eg-btn :sty="s" error @click="active=false">{{ text }}</eg-btn>
                        <pre v-if="show[s]">&lt;eg-btn sty="{{s}}" error&gt;{{ text }}&lt;/eg-btn&gt;</pre>
                    </div>
                    <div>
                        <span>Active:</span>
                        <eg-btn :sty="s" :active="active">{{ text }}</eg-btn>
                        <pre v-if="show[s]">&lt;eg-btn sty="{{s}}" active&gt;{{ text }}&lt;/eg-btn&gt;</pre>
                    </div>
                </div>
                <div class="grid-block">
                    <div>
                        <span>small:</span>
                        <eg-btn :sty="s" small>{{ text }}</eg-btn>
                        <pre v-if="show[s]">&lt;eg-btn sty="{{s}}" small&gt;{{ text }}&lt;/eg-btn&gt;</pre>
                    </div>
                    <div>
                        <span>big:</span>
                        <eg-btn :sty="s" big>{{ text }}</eg-btn>
                        <pre v-if="show[s]">&lt;eg-btn sty="{{s}}" big&gt;{{ text }}&lt;/eg-btn&gt;</pre>
                    </div>
                    <div>
                        <span>thin:</span>
                        <eg-btn :sty="s" thin>{{ text }}</eg-btn>
                        <pre v-if="show[s]">&lt;eg-btn sty="{{s}}" thin&gt;{{ text }}&lt;/eg-btn&gt;</pre>
                    </div>
                    <div>
                        <span>fat:</span>
                        <eg-btn :sty="s" fat>{{ text }}</eg-btn>
                        <pre v-if="show[s]">&lt;eg-btn sty="{{s}}" fat&gt;{{ text }}&lt;/eg-btn&gt;</pre>
                    </div>
                    <div>
                        <span>square:</span>
                        <eg-btn :sty="s" square>{{ text }}</eg-btn>
                        <pre v-if="show[s]">&lt;eg-btn sty="{{s}}" square&gt;{{ text }}&lt;/eg-btn&gt;</pre>
                    </div>
                    <div>
                        <span>round:</span>
                        <eg-btn :sty="s" round>{{ text }}</eg-btn>
                        <pre v-if="show[s]">&lt;eg-btn sty="{{s}}" round&gt;{{ text }}&lt;/eg-btn&gt;</pre>
                    </div>
                    <div style="width: 200px;">
                        <span>wide:</span>
                        <eg-btn :sty="s" wide>{{ text }}</eg-btn>
                        <pre v-if="show[s]">&lt;eg-btn sty="{{s}}" wide&gt;{{ text }}&lt;/eg-btn&gt;</pre>
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
                icons: ['', 'pdf', 'fa: fas fa-child', 'ma:get_app'],
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
                leftIcon: 'ma:favorite',
                rightIcon: '',
                load: true,
                active: true,
                mainLoad: false
            }
        }
    }
</script>
