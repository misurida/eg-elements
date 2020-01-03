<style lang="scss">
    @import "/elements/variables";
    @import "/style/style";

    @import url('https://fonts.googleapis.com/css?family=Lato|Source+Sans+Pro:300,400,600&display=swap');
</style>

<template>
    <div id="app">
        <div class="page-navbar">
            <div class="brand-title">EgElements</div>
        </div>
        <div class="main-wrapper">
            <div class="main-page">
                <div class="left-panel">
                    <div class="left-menu">
                        <router-link to="/">Home</router-link>
                        <router-link to="/icons">Icons</router-link>
                        <router-link to="/buttons">Buttons</router-link>
                        <router-link to="/inputs/text">Text input</router-link>
                        <router-link to="/inputs/select">Select</router-link>
                    </div>
                </div>
                <div class="right-panel">
                    <router-view/>
                </div>
            </div>
        </div>
        <div class="page-footer">Demo made by <span>Erwan Guyomarch</span> | 2019</div>
    </div>
</template>
