<style lang="scss">
    .eg-sidemenu-wrapper {
        &.active {
            padding: 0;
        }
    }
    // menu panel
    .sidemenu {
        position: fixed;
        padding: 0;
        box-sizing: border-box;
        z-index: 1;
        overflow-y: auto;
        &.left-sidemenu {
            top: 0;
            bottom: 0;
        }
        &.right-sidemenu {
            top: 0;
            bottom: 0;
        }
        &.bottom-sidemenu {
            left: 0;
            right: 0;
        }
        .icon-zone {
            position: absolute;
            height: 50px;
            text-align: right;
            display: none;
            right: 0;
            span {
                height: 20px;
                width: 20px;
                font-size: 20px;
                margin: 5px;
                color: #CCC;
                cursor: pointer;
                transition: color .2s;
            }
        }
        i:hover {
            color: #777;
        }
        &:not(.active) {
            left: 0 !important;
            width: 100% !important;
            position: relative;
        }
        &.active {
            padding: 0;
            z-index: 10;
        }
        &.display {
            .icon-zone.display {
                display: inherit;
            }
        }
    }
    // touch zone
    .touch-zone {
        position: absolute;
        display: none;
        &.left-touch-zone {
            left: 0;
            top: 0; bottom: 0;
        }

        &.right-touch-zone {
            right: 0;
            top: 0; bottom: 0;
        }

        &.bottom-touch-zone {
            left: 0; right: 0;
            bottom: 0;
        }
        &.display {
            display: inherit;
        }
    }
    // shadow zone
    .shadow-zone {
        position: fixed;
        top: 0; left: 0; bottom: 0; right: 0;
        height: 100%;
        width: 100%;
        background: #222;
        cursor: pointer;
    }
</style>

<template>
    <div class="sidemenu-wrapper" :class="{active}">
        <div class="sidemenu" :class="sideMenuClass" :style="getPanelStyleArray">
            <slot></slot>
        </div>
        <div
                v-if="enableTouch"
                class="touch-zone"
                :class="touchZoneClass"
                :id="appendDirection('touch-zone')"
                :style="this.orientation == 'bottom' ? bottomTouchStyle : lateralTouchStyle" @click="touchClick">
        </div>
        <div class="shadow-zone" :style="shadow" @click="tryClosingMenu"></div>
    </div>
</template>

<script>
    import Hammer from 'hammerjs'

    export default {
        props: {
            value: { default: 0 },
            orientation: {type: String, default: 'left'},
            show: {type: Number, default: 0},
            width: {type: Number, default: 300},
            height: {type: Number, default: 300},
            touchWidth: {type: Number, default: 10},
            enableTouch: {type: Boolean, default: true},
            bounce: {type: Boolean, default: false},
            shadowBackground: {type: String, default: '#222'},
            touchBackground: {type: String, default: 'transparent'},
            opacityMax: {type: Number, default: 0.5},
            zIndexMult: {type: Number, default: 2.0},
            shadowSpeed: {type: Number, default: 2},
            showBigSize: {type: Boolean, default: false},
            viewportResize: {type: Boolean, default: true},
            invisible: {type: Boolean, default: false},
            thinScroll: {type: Boolean, default: false},
            background: {type: String, default: "#FFF"},
            trigger: {type: Number, default: Infinity},
            enableClickDeploy: {type: Boolean, default: false},
            enablePan: {type: Boolean, default: false},
            enableSwipe: {type: Boolean, default: true},
            disabled: {type: Boolean, default: false}
        },
        data() {
            return {
                w: 0,
                h: 0,
                lateralStyle: {
                    transform: 'translateX(0)',
                    '-webkit-transition': 'transform 0s',
                    '-moz-transition': 'transform 0s',
                    '-ms-transition': 'transform 0s',
                    '-o-transition': 'transform 0s',
                    'transition': 'transform 0s'
                },
                bottomStyle: {
                    transform: 'translateY(0)',
                    '-webkit-transition': 'transform .3s',
                    '-moz-transition': 'transform .3s',
                    '-ms-transition': 'transform .3s',
                    '-o-transition': 'transform .3s',
                    'transition': 'transform .3s',
                    bottom: '-' + this.height + 'px',
                    height: this.width + 'px'
                },
                leftStyle: {
                    left:this.w + 17 < 1480 || !this.showBigSize ? '-' + this.width + 'px' : 0,
                    width: this.width + 'px'
                },
                rightStyle: {
                    right: this.w + 17 < 1480 || !this.showBigSize ? '-' + this.width + 'px' : 0,
                    width: this.width + 'px'
                },
                bottomTouchStyle: {
                    transform: 'translateY(0)',
                    'transition': 'transform .1s',
                    height: this.touchWidth + 'px',
                    background: this.touchBackground,
                    zIndex: 2 * this.zIndexMult
                },
                shadow: {
                    'opacity': 0,
                    'z-index': -1,
                    'transition': 'opacity .3s',
                    background: this.shadowBackground
                },
                settings: {
                    suppressScrollX: true
                },
                x: 0,
                y: 0,
                touchZoneClass: '',
                sideMenuClass: '',
                panLock: false
            }
        },
        methods: {
            getTouchName() {
                return this.orientation + '-touch-zone';
            },
            appendDirection( e ) {
                return this.orientation + '-' + e;
            },
            computeW() { return Math.max(document.documentElement.clientWidth, window.innerWidth || 0) },
            computeH() { return Math.max(document.documentElement.clientHeight, window.innerHeight || 0) },
            handleResize() {
                this.w = this.computeW();
                this.h = this.computeH();
            },
            setShortAnim() {
                this.lateralStyle['transition'] = 'transform 0s, opacity 0s';
                this.bottomStyle['transition'] = 'transform 0s, opacity 0s';
                this.shadow['transition'] = 'transform 0s, opacity 0s';
            },
            setLongAnim() {
                this.lateralStyle['transition'] = 'transform .3s, opacity .3s';
                this.bottomStyle['transition'] = 'transform .3s, opacity .3s';
                this.shadow['transition'] = 'transform .3s, opacity .3s';
            },
            setShadowOpacity( e ) {

                let d = e.direction; // 2: left, 4: right, 8: bottom
                let maxOpacity = this.opacityMax;
                if(maxOpacity == undefined)
                    maxOpacity = 0.5;

                if(this.orientation == 'left') {
                    if(d == 4)
                        this.x = e.center.x;
                    else if(d == 2)
                        this.x = this.w - e.center.x;

                    let newOpacity = 0;
                    if(d == 4) {
                        newOpacity = (this.x / this.width) / this.shadowSpeed;
                    }
                    else if(d == 2) {
                        newOpacity = ((this.w - this.x) / this.width) / this.shadowSpeed;
                    }
                    if((d == 2 || d == 4) && (e.deltaX + this.width)>0) {
                        if(newOpacity > 1)
                            newOpacity = 1;

                        if(this.x > 0) {
                            if (newOpacity > maxOpacity)
                                this.shadow.opacity = maxOpacity;
                            else
                                this.shadow.opacity = newOpacity;
                        }
                    }
                }
                else if(this.orientation == 'right' && (e.deltaX + this.width)>0) {
                    if(d == 4)
                        this.x = e.center.x;
                    else if(d == 2)
                        this.x = this.w - e.center.x;

                    let newOpacity = 0;
                    if(d == 2) {
                        newOpacity = (this.x / this.width) / this.shadowSpeed;
                    }
                    else if(d == 4) {
                        newOpacity = ((this.w - this.x) / this.width) / this.shadowSpeed;
                    }
                    if(d == 2 || d == 4) {
                        if(newOpacity > 1)
                            newOpacity = 1;

                        if(this.x > 0) {
                            if (newOpacity > maxOpacity)
                                this.shadow.opacity = maxOpacity;
                            else
                                this.shadow.opacity = newOpacity;
                        }
                    }
                }

            },
            tryClosingMenu() {
                if(this.open) {
                    this.closeMenu();
                }
            },
            openMenu() {
                this.setLongAnim();

                if(this.orientation == 'left')
                    this.lateralStyle.transform = 'translateX('+this.width+'px)';
                else if(this.orientation == 'right')
                    this.lateralStyle.transform = 'translateX(-'+this.width+'px)';
                else if(this.orientation == 'bottom')
                    this.bottomStyle.transform = 'translateY(-'+this.width+'px)';

                if(this.orientation == 'left')
                    this.lateralTouchStyle.transform = 'translateX('+this.width+'px)';
                else if(this.orientation == 'right')
                    this.lateralTouchStyle.transform = 'translateX(-'+this.width+'px)';
                else if(this.orientation == 'bottom')
                    this.bottomTouchStyle.transform = 'translateY(-'+this.width+'px)';

                this.shadow.opacity = this.opacityMax;
                this.shadow['z-index'] = 2 * this.zIndexMult;
                this.lateralTouchStyle['z-index'] = 3 * this.zIndexMult;
                this.bottomTouchStyle['z-index'] = 3 * this.zIndexMult;
                this.x = this.width;
                this.$emit('input', 1);

                this.lateralTouchStyle.width = "calc(100% - "+ this.width +"px)";
                this.bottomTouchStyle.height = "calc(100vh - "+ this.width +"px)";
            },
            closeMenu() {
                this.setLongAnim();
                this.lateralStyle.transform = 'translateX(0)';
                this.lateralTouchStyle.transform = 'translateX(0)';
                this.bottomStyle.transform = 'translateY(0)';
                this.bottomTouchStyle.transform = 'translateY(0)';
                this.shadow.opacity = 0;
                this.x = 0;
                this.y = 0;
                this.$emit('input', 0);

                this.lateralTouchStyle.width = this.touchWidth + 'px';
                this.bottomTouchStyle.height = this.touchWidth + 'px';

                let s = this;
                setTimeout(function() { s.shadow['z-index'] = -1 }, 300);
            },
            touchClick() {
                if(this.enableClickDeploy || this.open)
                    this.$emit('input', !this.open);
            },
            togglePanLock() {
                this.panLock = true;
                setTimeout(() => { this.panLock = false }, 500);
            }
        },
        watch: {
            open() {
                this.open ? this.openMenu() : this.closeMenu();
            },
            w() {
                this.touchZoneClass = [this.appendDirection('touch-zone')];
                if(this.active)
                    this.touchZoneClass += ' display';

                this.sideMenuClass = this.appendDirection('sidemenu');
                if(this.active)
                    this.sideMenuClass += ' active';
            },
        },
        computed: {
            getPanelStyleArray() {
                let out = [];
                let o = this.orientation;

                if(o == 'right') {
                    out.push(this.lateralStyle);
                    out.push(this.rightStyle);
                }
                else if(o == 'left') {
                    out.push(this.lateralStyle);
                    out.push(this.leftStyle);
                }
                else if(o == 'bottom') {
                    out.push(this.bottomStyle);
                }

                if(this.active)
                    out.push({background: this.background});
                return out;
            },
            active() {
                return this.w <= this.trigger;
            },
            open() {
                return this.active ? this.value : 0;
            },
            lateralTouchStyle() {
                return {
                    transform: 'translateX(0)',
                    transition: 'transform .3s',
                    width: this.touchWidth + 'px',
                    background: this.touchBackground,
                    zIndex: 1 * this.zIndexMult,
                };
            },
        },
        mounted() {
            this.w = this.computeW();
            this.h = this.computeH();

            if(this.enableTouch && !this.disabled) {
                let s = this;
                let menu = new Hammer(this.$el.querySelector('.touch-zone'));
                let shadow = new Hammer(this.$el.querySelector('.shadow-zone'));

                if(this.orientation == 'left') {
                    if(this.enableSwipe) {
                        menu.on('swiperight', function() {
                            if(s.open)
                                return true;
                            s.togglePanLock();
                            s.openMenu();
                        });
                        menu.on('swipeleft', function() {
                            if(!s.open)
                                return true;
                            s.closeMenu();
                        });
                        shadow.on('swipeleft', function() {
                            if(!s.open)
                                return true;
                            s.closeMenu();
                        });
                    }
                    if(this.enablePan) {
                        menu.on('pan', function(e) {
                            if(!s.panLock) {
                                s.setShortAnim();
                                this.zIndexMult > 1 ? s.shadow['z-index'] = (1 * this.zIndexMult) : s.shadow['z-index'] = 1;
                                if(e.deltaX > 0 && !s.open) {
                                    if(e.deltaX < s.width)
                                        s.lateralStyle.transform = 'translateX(' + e.deltaX + 'px)';
                                    else
                                        s.lateralStyle.transform = 'translateX(' +s.width+ 'px)';
                                }
                                else if(e.deltaX < 0 && s.open || (s.bounce && s.open))
                                    s.lateralStyle.transform = 'translateX(' + (s.width + e.deltaX) + 'px)';
                                s.setShadowOpacity(e);
                            }
                        });
                        menu.on('panend', function(e) {
                            if(!s.panLock) {
                                if(e.center.x > (s.width/2))
                                    s.openMenu();
                                else
                                    s.closeMenu();
                            }
                        });
                    }
                }
                else if(this.orientation == 'right') {
                    if(this.enableSwipe) {
                        menu.on('swiperight', function() {
                            if(!s.open)
                                return true;
                            s.closeMenu();
                        });
                        shadow.on('swiperight', function() {
                            if(!s.open)
                                return true;
                            s.closeMenu();
                        });
                        menu.on('swipeleft', function() {
                            if(s.open)
                                return true;
                            s.togglePanLock();
                            s.openMenu();
                        });

                    }
                    if(this.enablePan) {
                        menu.on('pan', function(e) {
                            if(!s.panLock) {
                                s.setShortAnim();
                                if(this.zIndexMult > 1)
                                    s.shadow['z-index'] = (1 * this.zIndexMult);
                                else
                                    s.shadow['z-index'] = 1;

                                if(((e.direction == 2 || e.direction == 4) && e.deltaX < 0 && !s.open) && (e.deltaX + s.width)>0) {
                                    if(e.deltaX > (-1 * s.width))
                                        s.lateralStyle.transform = 'translateX(' + (e.deltaX) + 'px)';
                                    else
                                        s.lateralStyle.transform = 'translateX(-' + s.width + 'px)';
                                }
                                else if(e.deltaX > 0 && s.open || (s.bounce && s.open))
                                    s.lateralStyle.transform = 'translateX(-' + (s.width - e.deltaX) + 'px)';
                                s.setShadowOpacity(e);
                            }
                        });
                        menu.on('panend', function(e) {
                            if(!s.panLock) {
                                if(e.center.x < s.w - (s.width/2))
                                    s.openMenu();
                                else
                                    s.closeMenu();
                            }
                        });
                    }
                }

                /*
                bottom menu (prototype)
                else if(this.orientation == 'bottom') {
                    if(this.enableSwipe) {
                        menu.on('swipeup', function() {
                            if(s.open)
                                return true;
                            s.openMenu();
                        });
                        menu.on('swipedown', function() {
                            if(!s.open)
                                return true;
                            s.closeMenu();
                        });
                    }
                    if(this.enablePan) {
                        menu.on('pan', function(e) {
                            s.setShortAnim();
                            if(this.zIndexMult > 1)
                                s.shadow['z-index'] = (1 * this.zIndexMult);
                            else
                                s.shadow['z-index'] = 1;

                            if(e.deltaY < 0 && !s.open) {
                                if(e.deltaY > (-1 * s.width))
                                    s.bottomStyle.transform = 'translateY(' + (e.deltaY) + 'px)';
                                else
                                    s.bottomStyle.transform = 'translateY(-' + s.width + 'px)';
                            }
                            else if(e.deltaY > 0 && s.open || (s.bounce && s.open))
                                s.bottomStyle.transform = 'translateY(-' + (s.width - e.deltaY) + 'px)';
                            s.setShadowOpacity(e);
                        });
                        menu.on('panend', function(e) {
                            if(e.center.y < s.h - (s.width/2))
                                s.openMenu();
                            else
                                s.closeMenu();
                        });
                    }
                }

                let shadow = this.$el.children[2];
                if(this.orientation == 'left') {
                    new Hammer(shadow)
                        .on('swipeleft', function() {
                            if(!s.open)
                                return true;
                            s.closeMenu();
                        })
                }
                else if(this.orientation == 'right') {
                    new Hammer(shadow)
                        .on('swiperight', function() {
                            if(!s.open)
                                return true;
                            s.closeMenu();
                        })
                }
                */
            }
            window.addEventListener('resize', this.handleResize)
        },
        beforeDestroy: function () {
            window.removeEventListener('resize', this.handleResize)
        }
    }
</script>