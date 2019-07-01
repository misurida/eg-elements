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
        padding-left: 15px;
        padding-right: 15px;
    }
    h1 {
        margin: 0;
        padding: 30px 15px;
    }
    body {
        margin: 0;
    }
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        .content-wrapper,
        #home {
            flex: 1;
        }
    }
    #nav {
        padding: 30px;
        color: #777;
        font-weight: 400;
        a {
            color: #aaa;
            &.router-link-exact-active {
                color: #4e7da8;
                font-weight: bold;
            }
        }
    }
    .content-wrapper {
        display: flex;
        flex-direction: column;
        h2 {
            margin: 0;
        }
    }
    .categories-grid {
        display: flex;
        grid-gap: 20px;
        max-width: 600px;
        margin: 0 auto;
        padding: 0 13px;
        flex-wrap: wrap;
        a {
            margin: 2px;
            flex: 1;
            background-color: transparent;
            border: 1px solid #ccc;
            border-radius: 5px;
            text-decoration: none;
            color: #4e7da8;
            display: flex;
            align-items: center;
            justify-content: center;
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
        .icon-demo {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
        .svg-icon {
            margin: 0 20px;
        }
        .example-span {
            display: inline-block;
            text-decoration: underline;
            cursor: pointer;
        }
    }
    .side-menu-demo {
        max-width: 90vw;
        display: flex;
        margin: 0 auto;
        .side-menu {
            width: 300px;
            padding: 10px 15px;
            border: 1px solid #ccc;
            text-align: left;
            &.active {
                padding: 10px 15px;
            }
        }
        .side-menu-wrapper {
            margin: 0 5px;
        }
        .side-menu-buttons {
            display: flex;
            button {
                margin: 0 10px;
                &.btn-hide-1000 {
                    @media screen and (min-width: 1000px) {
                        display: none;
                    }
                }
                &.btn-hide-500 {
                    @media screen and (min-width: 500px) {
                        display: none;
                    }
                }
            }
        }
    }
    .demo-zone {
        padding: 40px;
        max-width: 1400px;
        margin: 0 auto 20px;
        & > div:first-child {
            padding: 20px 0;
        }
        @media screen and (max-width: 500px) {
            padding: 20px 0;
        }
    }
    pre {
        text-align: left;
        background-color: #f5f5f5;
        border-radius: 5px;
        padding: 10px 15px;
        overflow-x: auto;
        flex: 1;
        margin: 10px auto 0 auto;
        width: 80%;
    }
    .demo-hero {
        margin: 40px 0;
    }
    .demo-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        & > div {
            min-width: 300px;
            margin: 10px;
            padding-top: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
        }
    }
    .title-bloc {
        background-color: #f5f5f5;
        padding: 20px 40px;
        border-radius: 15px;
        width: 90%;
        margin: 0 auto;
    }
    .inputs-grid {
        & > * {
            margin: 0 10px;
        }
        padding-top: 40px;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-wrap: wrap;
        .eg-input {
            margin-bottom: 10px;
        }
        .textarea {
            margin-bottom: 20px;
        }
    }
    .popover-pre {
        pre {
            display:inline-block;
            width:auto;
            padding: 20px 30px;
        }
    }
    .code-description-panel {
        display: flex;
        flex-direction: column;
        span {
            display: inline-block;
            padding: 20px;
        }
    }
    .popover-demo {
        display: flex;
        flex-wrap: wrap;
        margin: 40px 0;
        justify-content: center;
        & > * {
            display: inline-block;
            margin: 10px 20px;
        }
    }
    .tooltip-zone {
        padding: 100px 0;
        display: inline-block;
        width: 100%;
        border-radius: 15px;
        background-color: #f5f5f5;
        margin: 0 auto 60px auto;
        .preview-panel {
            text-align: center;
            .preview-target {
                display: inline-block;
                text-decoration: underline;
            }
        }
    }
    .desc-p {
        max-width: 800px;
        margin: 0 auto 20px auto;
        color: #aaa;
        padding: 0 15px;
        a {
            color: #222;
        }
    }
    .desc-ul {
        max-width: 500px;
        margin: 0 auto 60px auto;
        padding-left: 50px;
        text-align: left;
        color: #aaa;
        line-height: 1.2rem;
        li {
            margin-bottom: 10px;
        }
        a {
            color: #222;
        }
    }
    .page-footer {
        background-color: #f5f5f5;
        color: #aaa;
        padding: 9px;
        font-size: 12px;
    }
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
        @media screen and (max-width: 500px) {
            padding: 20px 0;
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
    .modal-view {
        .title-bloc {
            width: inherit;
        }
    }
</style>

<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/buttons">Buttons</router-link> |
            <router-link to="/inputs">Inputs</router-link> |
            <router-link to="/popover">Popover</router-link> |
            <router-link to="/modal">Modal / Sidemenu</router-link>
        </div>
        <router-view/>
        <div class="page-footer">Demo made by <span>Erwan Guyomarch</span> | 2019</div>
    </div>
</template>
