<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Lato|Source+Sans+Pro:300,400,600&display=swap');
    * {
        font-family: 'Lato', sans-serif;
    }
    h1, h2, h3 ,h4 , h5, h6 {
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 400;
    }
    h2 {
        font-weight: 600;
    }

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #nav {
        padding: 30px;
        color: #ccc;
        font-weight: 400;
        a {
            color: #ccc;
            &.router-link-exact-active {
                color: #4e7da8;
            }
        }
    }
</style>

<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/buttons">Buttons</router-link> |
            <router-link to="/inputs">Inputs</router-link>
        </div>
        <router-view/>
    </div>
</template>
