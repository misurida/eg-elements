<template>
    <div class="content-wrapper">
        <h1 id="popover-anchor">Demo of &lt;Popover&gt;</h1>
        <div class="title-bloc">
            <h2>Popover with action buttons:</h2>
            <span><eg-btn link @click="showPopoverCode=!showPopoverCode">See code</eg-btn></span>
        </div>
        <div class="demo-zone">
            <pre style="width:500px;" v-if="showPopoverCode">
&lt;eg-btn id="popover-btn-right"&gt;Right&lt;/eg-btn&gt;
&lt;popover w="100" side="right" target="popover-btn-right" v-model="p1"&gt;
    &lt;p class="popover-text"&gt;Yeah, that's a popover{{b? '!' : '?'}}&lt;/p&gt;
    &lt;div class="popover-footer"&gt;
        &lt;eg-btn @click="b=!b"&gt;Nope&lt;/eg-btn&gt;
        &lt;eg-btn @click="p1=0"&gt;Okay&lt;/eg-btn&gt;
    &lt;/div&gt;
&lt;/popover&gt;</pre>
            <div class="popover-demo">
                <div>
                    <eg-btn id="popover-btn-right">Right</eg-btn>
                    <popover w="100" side="right" target="popover-btn-right" v-model="p1">
                        <p class="popover-text">Yeah, that's a popover{{b? '!' : '?'}}</p>
                        <div class="popover-footer">
                            <eg-btn @click="b=!b">Nope</eg-btn>
                            <eg-btn @click="p1=0">Okay</eg-btn>
                        </div>
                    </popover>
                </div>
                <div>
                    <eg-btn id="popover-btn-top">Top</eg-btn>
                    <popover w="100" side="top" target="popover-btn-top" v-model="p2">
                        <p class="popover-text">Yeah, that's a popover{{b? '!' : '?'}}</p>
                        <div class="popover-footer">
                            <eg-btn @click="b=!b">Nope</eg-btn>
                            <eg-btn @click="p2=0">Okay</eg-btn>
                        </div>
                    </popover>
                </div>
                <div>
                    <eg-btn id="popover-btn-bottom">Bottom</eg-btn>
                    <popover w="100" side="bottom" target="popover-btn-bottom" v-model="p3">
                        <p class="popover-text">Yeah, that's a popover{{b? '!' : '?'}}</p>
                        <div class="popover-footer">
                            <eg-btn @click="b=!b">Nope</eg-btn>
                            <eg-btn @click="p3=0">Okay</eg-btn>
                        </div>
                    </popover>
                </div>
                <div>
                    <eg-btn id="popover-btn-left">Left</eg-btn>
                    <popover w="100" side="left" target="popover-btn-left" v-model="p4">
                        <p class="popover-text">Yeah, that's a popover{{b? '!' : '?'}}</p>
                        <div class="popover-footer">
                            <eg-btn @click="b=!b">Nope</eg-btn>
                            <eg-btn @click="p4=0">Okay</eg-btn>
                        </div>
                    </popover>
                </div>
            </div>
        </div>

        <div class="title-bloc" id="tooltip-anchor">
            <h2>Custom v-tooltip directive</h2>
            <span><eg-btn link @click="showTooltipCode=!showTooltipCode">See code</eg-btn></span>
        </div>

        <div class="demo-zone popover-pre">
            <p class="desc-p">You can play here with the different attributes, the popover will be updated automatically:</p>
            <div class="code-description-panel" v-if="showTooltipCode">
                <pre>&lt;div v-tooltip:[args]&gt;{{ args.display == 'hover' ? 'Hover' : 'Click' }} here to see the tooltip !&lt;/div&gt;</pre>
                <span>in component data:</span>
                <pre>
args: {
    text: '{{args.text}}',
    display: '{{args.display}}',
    position: '{{args.position}}',
    side: '{{args.side}}',
    width: '{{args.width}}',
}</pre>
            </div>
            <div class="inputs-grid">
                <eg-input type="textarea" auto-height v-model="args.text" label="Text"></eg-input>
                <eg-input type="select" v-model="args.side" width="150px" label="Side" :list="['top', 'left', 'bottom', 'right']"></eg-input>
                <eg-input type="select" v-model="args.position" width="150px" label="Position" :list="['l', 'c', 'r', 't', 'b']"></eg-input>
                <eg-input type="select" v-model="args.display" width="150px" label="Display" :list="['click', 'hover', 'clickout']"></eg-input>
                <eg-input type="number" label="Width" :min="0" :increment="2" :max="800" width="150px" message="Between 0 (not defined) and 800px" e-change :value="computedWidth" @change="args.width=$event+'px'"></eg-input>
                <eg-input type="number" label="Height" :min="0" :increment="2" :max="800" width="150px" message="Between 0 (not defined) and 800px" e-change :value="computedHeight" @change="args.height=$event+'px'"></eg-input>
            </div>
        </div>
        <div class="demo-zone tooltip-zone">
            <div class="preview-panel" v-if="!showoff">
                <div class="preview-target" v-tooltip:[args]>{{ args.display == 'hover' ? 'Hover' : 'Click' }} here to see the tooltip !</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                args: {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    display: 'hover',
                    position: 'c',
                    side: 'top',
                    width: '200px',
                    height: '0px',
                },
                showoff: false,
                p1: false,
                p2: false,
                p3: false,
                p4: false,
                b: true,
                showPopoverCode: false,
                showTooltipCode: false,
            }
        },
        computed: {
            computedWidth() { return parseInt(this.args.width); },
            computedHeight() { return parseInt(this.args.height); },
        }
    }
</script>
