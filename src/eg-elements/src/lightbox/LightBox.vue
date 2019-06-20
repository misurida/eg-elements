<style lang="scss">
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        background-color: rgba(#fff, 0.9);
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .lightbox-close {
        position: fixed;
        top: 20px;
        right: 20px;
        height: 50px;
        width: 50px;
        transition: transform 0.3s;
        cursor: pointer;
        background: url(Cross.svg) transparent no-repeat;
        background-size: 50px 50px;
        z-index: 1;
        &:hover {
            transform: scale(1.2);
        }
    }
    .lightbox-btn {
        position: fixed;
        top: 50%;
        width: 50px;
        height: 90px;
        margin-top: -40px;
        background-size: 50px 80px;
        background-color: transparent;
        background-repeat: no-repeat;
        cursor: pointer;
        &:hover {
            transform: scale(1.2);
        }
    }
    .lightbox-next {
        background-image: url(Right-caret.svg);
        right: 20px;
    }
    .lightbox-prev {
        background-image: url(Left-caret.svg);
        left: 20px;
    }

    // lighbox next
    .lightbox-next-enter-active, .lightbox-next-leave-active {
        transition: transform 0.5s, opacity 0.5s;
        opacity: 1;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .lightbox-next-enter {
        opacity: 0;
        transform: translateX(100px);
    }
    .lightbox-next-leave-active {
        opacity: 0;
        transform: translateX(-100px);
    }
    .lightbox-next-enter-active {
        transition-delay: 0.3s;
    }

    // lightbox prev
    .lightbox-prev-enter-active, .lightbox-prev-leave-active {
        transition: transform 0.5s, opacity 0.5s;
        opacity: 1;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .lightbox-prev-enter {
        opacity: 0;
        transform: translateX(100px);
    }
    .lightbox-prev-leave-active {
        opacity: 0;
        transform: translateX(-100px);
    }
    .lightbox-prev-enter-active {
        transition-delay: 0.3s;
    }

    // basic fade
    .lightbox-fade-enter-active, .lightbox-fade-leave-active {
        transition: opacity 0.3s;
    }
    .lightbox-fade-enter, .lightbox-fade-leave {
        opacity: 0;
    }
</style>

<template>
    <transition name="lightbox-fade">
        <div class="lightbox" v-if="images.length>0" @click="close">
            <transition-group :name="transition">
                <light-box-image :image="f.url" v-for="(f,j) in images" :key="j+'-'+images.length" v-if="j==i"></light-box-image>
            </transition-group>
            <div class="lightbox-close" @click="close"></div>
            <div v-if="false" class="lightbox-prev lightbox-btn" @click.stop.prevent="prev"></div>
            <div v-if="false" class="lightbox-next lightbox-btn" @click.stop.prevent="next"></div>
        </div>
    </transition>
</template>

<script>
    import LightBoxImage from './LightBoxImage'

    export default {
        components: {
            LightBoxImage
        },
        props: {
            images: {type: Array, default() {return[]}},
            index: 0
        },
        data() {
            return {
                url: '??',
                direction: 'next',
                i: false
            }
        },
        methods: {
            close() {
                this.$emit('close');
            },
            prev() {
                this.direction = 'prev';
            },
            next() {
                this.direction = 'next';
            }
        },
        watch: {
            index: {
                immediate: true,
                handler() {
                    this.i = this.index;
                }
            }
        },
        computed: {
            transition() {
                return 'lightbox-' + this.direction;
            }
        }
    }
</script>