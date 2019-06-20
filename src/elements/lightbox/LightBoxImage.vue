<style lang="scss">
    .lightbox-image {
        width: 100%;
    }
    .lightbox-loader {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 40px;
        height: 40px;
        margin-left: -20px;
        margin-top: -20px;
        background-color: #444;
        background-color: rgba(#000, 0.5);
        border-radius: 40px;
        &:after {
            content: '';
            width: 20px;
            height: 20px;
            border-radius: 20px;
            background-color: #fff;
            position: absolute;
            top: 10px;
            left: 10px;
            animation: lightbox-loading 2s ease infinite;
        }
    }
    @keyframes lightbox-loading {
        0% {
            opacity: 0.5;
            transform: scale(.75);
        }
        50% {
            opacity: 1;
            transform: scale(1.8);
        }
        100% {
            opacity: 0.5;
            transform: scale(.75);
        }
    }

    .lightbox-fade-enter-active, .lightbox-fade-leave-active {
        transition: opacity 0.3s;
    }
    .lightbox-fade-enter, .lightbox-fade-leave {
        opacity: 0;
    }
</style>

<template>
    <div @click.stop>
        <transition name="lightbox-fade">
            <img class="lightbox-image" :src="src" :style="style">
        </transition>
        <div v-if="loading" class="lightbox-loader"></div>
    </div>
</template>

<script>
    export default {
        props: {
            image: null
        },
        data() {
            return {
                loading: true,
                src: false,
                style: {},
                resizeEvent: null
            }
        },
        methods: {
            resizeImage: image => {
                let w = image.width;
                let h = image.height;
                if(w > window.innerWidth || h > window.innerHeight) {
                    let ratio = w / h;
                    let windowRatio = window.innerWidth / window.innerHeight;
                    if(ratio > windowRatio) {
                        w = window.innerWidth;
                        h = w / h
                    }
                    else {
                        h = window.innerHeight;
                        w = h * ratio;
                    }
                }
                this.style = {
                    width: w + 'px'
                };
            }
        },
        mounted() {
            let image = new window.Image();
            image.onload = () => {
                this.loading = false;
                this.src = this.image;
                this.resizeImage(image);
            };
            image.src = this.image;
            this.resizeEvent = () => {
                this.resizeImage(image);
            };
            window.addEventListener('resize', this.resizeEvent);
        },
        destroyed() {
            window.removeEventListener('resize', this.resizeEvent)
        }
    }
</script>