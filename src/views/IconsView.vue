<style lang="scss">
    .icons-row {
        display: flex;
        flex-wrap: wrap;
        .eg-icon {
            margin-right: 10px;
            margin-bottom: 10px;
        }
        &.f24 {
            font-size: 24px;
        }
        &.f36 {
            font-size: 36px;
        }
        &.f48 {
            font-size: 48px;
        }
    }
</style>

<template>
    <div>
        <h1>Icons</h1>
        <p>The icons element <code>&#60;eg-icon&#62;</code> is usable with core <code>.svg</code> icons, but you can plug adittional sources of icon, and add your own as well.</p>
        The following webfonts are available if you import them is the base <code>html</code> file:
        <ul class="classic-ul">
            <li><strong>Google icons</strong>: <code>&#60;link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"&#62;</code></li>
            <li><strong>Fontawesome</strong> (you have to create an account to access the api): <code>&#60;script&nbsp;src="https://kit.fontawesome.com/793c864fe7.js"&#62;&#60;/script&#62;</code></li>
        </ul>

        Ceci est le test: <eg-icon icon="pdf"></eg-icon> et <eg-icon fas="file-pdf"></eg-icon>. Fonctionnel ?

        <h2>Default icons</h2>
        <p>With a default font-size (<code>16px</code>):</p>
        <div class="icons-row"><eg-icon v-for="i in nativeIcons" :icon="i" :key="i"></eg-icon></div>
        <p>With a <code>24px</code> font-size:</p>
        <div class="icons-row f24"><eg-icon v-for="i in nativeIcons" :icon="i" :key="i"></eg-icon></div>
        <p>With a <code>36px</code> font-size:</p>
        <div class="icons-row f36"><eg-icon v-for="i in nativeIcons" :icon="i" :key="i"></eg-icon></div>
        <p>With a <code>48px</code> font-size:</p>
        <div class="icons-row f48"><eg-icon v-for="i in nativeIcons" :icon="i" :key="i"></eg-icon></div>

        <eg-button icon="caret">Icon test</eg-button>

        <h2>Fontawesome</h2>
        <p>With a default font-size (<code>16px</code>):</p>
        <div class="icons-row"><eg-icon v-for="i in fontawesomeIcons" :fas="i" :key="i"></eg-icon></div>
        <p>With a <code>24px</code> font-size:</p>
        <div class="icons-row f24"><eg-icon v-for="i in fontawesomeIcons" :fas="i" :key="i"></eg-icon></div>
        <p>With a <code>36px</code> font-size:</p>
        <div class="icons-row f36"><eg-icon v-for="i in fontawesomeIcons" :fas="i" :key="i"></eg-icon></div>
        <p>With a <code>48px</code> font-size:</p>
        <div class="icons-row f48"><eg-icon v-for="i in fontawesomeIcons" :fas="i" :key="i"></eg-icon></div>

        <h2>Google Icons</h2>
        <p>With a default font-size (<code>16px</code>):</p>
        <div class="icons-row"><eg-icon v-for="i in googleIcons" :ma="i" :key="i"></eg-icon></div>
        <p>With a <code>24px</code> font-size:</p>
        <div class="icons-row f24"><eg-icon v-for="i in googleIcons" :ma="i" :key="i"></eg-icon></div>
        <p>With a <code>36px</code> font-size:</p>
        <div class="icons-row f36"><eg-icon v-for="i in googleIcons" :ma="i" :key="i"></eg-icon></div>
        <p>With a <code>48px</code> font-size:</p>
        <div class="icons-row f48"><eg-icon v-for="i in googleIcons" :ma="i" :key="i"></eg-icon></div>
    </div>
</template>

<script>
    import EgIcon from '../components/Icon'

    export default {
        components: {
            EgIcon
        },
        data() {
            return {
                nativeIcons: [
                    'glass',
                    'check',
                    'cross',
                    'audio',
                    'other',
                    'archive',
                    'video',
                    'script',
                    'data',
                    'doc',
                    'font',
                    'image',
                    'tag',
                    'slides',
                    'spreadsheet',
                    'pdf',
                    'java'
                ],
                fontawesomeIcons: [
                    'angle-double-up',
                    'angry',
                    'bomb',
                    'arrow-alt-circle-down',
                    'arrow-alt-circle-left',
                    'balance-scale',
                    'battery-three-quarters',
                    'binoculars',
                    'biohazard',
                    'birthday-cake',
                    'bicycle'
                ],
                googleIcons: [
                    'alarm',
                    'delete',
                    'cached',
                    'done',
                    'favorite',
                    'eco',
                    'home',
                    'perm_identity',
                    'zoom_in',
                    'games',
                    'mic'
                ]
            }
        }
    }
</script>
































































































