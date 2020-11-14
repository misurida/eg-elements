<style lang="scss">
    .eg-icon {
        font-size: inherit;
        vertical-align: bottom;
        transform-origin: center;
        color: currentColor;
        user-select: none;
        i {
            transition: opacity .2s, transform .2s;
        }
        svg {
            height: 1em;
            color: currentColor;
            fill: currentColor;
            transition: opacity .2s, transform .2s;
            path {
                color: currentColor;
                fill: currentColor;
            }
        }
        .material-icons {
            font-size: inherit;
            vertical-align: middle;
        }
        &.clickable {
            cursor: pointer;
            &:hover {
                i, svg {
                    opacity: 0.5;
                }
            }
            svg {
                cursor: pointer;
            }
        }
        & > * {
            transition: transform .2s;
        }
        &.flip > * {
            transform: rotate(-180deg)!important;
        }
        &.small {
            padding: var(--input-padding-small);
        }
        &.medium {
            padding: var(--input-padding);
        }
        &.big {
            padding: var(--input-padding-big);
        }
        &.fr, &.float-right { float: right }
        &.fl, &.float-left { float: left }
    }
</style>

<template>
    <span
            class="eg-icon"
            :title="title"
            @click.exact="hClick($event,'click')"
            @dblclick="hClick($event,'dblclick')"
            @click.ctrl="hClick($event,'ctrlClick')"
            :class="{clickable, fr, fl, flip}">

        <!-- Font Awesome integration -->
        <i v-if="useFontAwesome" :class="t"></i>

        <!-- Google Material Icons integration -->
        <i v-else-if="useMaterialIcons" class="material-icons">{{ t }}</i>

        <template v-else-if="useSvg">
            <template v-if="t === 'cross'">
                <svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="m9.1647 5.5907a3.5527 3.5533 0 0 0-2.4745 6.1023l38.284 38.294-38.321 38.33a3.5537 3.5545 0 1 0 5.0254 5.0266l38.321-38.33 38.321 38.33a3.5537 3.5545 0 1 0 5.0254-5.0266l-38.321-38.33 38.284-38.294a3.5527 3.5533 0 0 0-2.4745-6.1023 3.5527 3.5533 0 0 0-2.5508 1.0756l-38.284 38.294-38.284-38.294a3.5527 3.5533 0 0 0-2.5508-1.0756z" color="#000000" color-rendering="auto" dominant-baseline="auto" fill-rule="evenodd" image-rendering="auto" shape-rendering="auto" solid-color="#000000" stroke-width="1.1842" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
                </svg>
            </template>
            <template v-else-if="t === 'scross'">
                <svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="m20.854 20.302a2.5358 2.5362 0 0 0-1.7662 4.3556l27.326 27.333-27.352 27.358a2.5365 2.5371 0 1 0 3.5869 3.5878l27.352-27.358 27.352 27.358a2.5365 2.5371 0 1 0 3.5869-3.5878l-27.352-27.358 27.326-27.333a2.5358 2.5362 0 0 0-1.7662-4.3556 2.5358 2.5362 0 0 0-1.8207 0.76776l-27.326 27.333-27.326-27.333a2.5358 2.5362 0 0 0-1.8207-0.76776z" color="#000000" color-rendering="auto" dominant-baseline="auto" fill-rule="evenodd" image-rendering="auto" shape-rendering="auto" solid-color="#000000" stroke-width=".84527" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
                </svg>
            </template>
            <template v-else-if="t === 'plus'">
                <svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="m43.578 9.3223-0.003906 34.203-33.404 0.003906v12.902l33.402-0.003907-0.003907 34.25h12.902l0.003906-34.252 35.051-0.003906v-12.902l-35.049 0.003907 0.003907-34.201h-12.902z" color="#000000" color-rendering="auto" dominant-baseline="auto" fill-rule="evenodd" image-rendering="auto" shape-rendering="auto" solid-color="#000000" stroke-width="2.1497" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
                </svg>
            </template>
            <template v-else-if="t === 'minus'">
                <svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="m10.17 43.529h81.355v12.893h-81.355z"/>
                </svg>
            </template>
            <template v-else-if="t === 'search' || t === 'glasses'">
                <svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="m35.494 2.6135c-18.13 0-32.88 14.75-32.88 32.88 0 18.13 14.75 32.88 32.88 32.88 7.7517 0 14.88-2.7029 20.508-7.2069l35.097 35.097a3.6537 3.6537 0 1 0 5.1661-5.1661l-35.097-35.097c4.504-5.6272 7.2069-12.755 7.2069-20.508 0-18.13-14.75-32.88-32.88-32.88zm0 4.8712c15.498 0 28.009 12.512 28.009 28.009s-12.512 28.009-28.009 28.009-28.009-12.512-28.009-28.009 12.512-28.009 28.009-28.009z" color="#000000" color-rendering="auto" dominant-baseline="auto" image-rendering="auto" shape-rendering="auto" solid-color="#000000" stroke-width="1.2178" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
                </svg>
            </template>
            <template v-else-if="t === 'success' || t === 'check'">
                <svg version="1.1" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <path d="m45.772 2.437a2.8747 2.8747 0 0 0-2.1811 1.0554s-12.985 15.647-23.313 34.599c-4.1019-3.9584-7.6408-6.8926-10.114-8.5419-3.0411-2.0282-5.0331-2.7454-5.0331-2.7454a2.8748 2.8748 0 1 0-1.8442 5.4457s1.0315 0.30801 3.6885 2.0801c2.657 1.7721 6.6855 4.9237 11.905 10.341l2.7875 2.8912 1.8386-3.5706c10.151-19.717 24.486-36.8 24.486-36.8a2.8747 2.8747 0 0 0-2.2203-4.7552z" color="#000000" color-rendering="auto" dominant-baseline="auto" fill="#000" image-rendering="auto" shape-rendering="auto" solid-color="#000000" stroke-width="1.4372" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
                </svg>
            </template>
            <template v-else-if="t === 'error'">
                <svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="m50 2.5c-26.193 0-47.5 21.307-47.5 47.5s21.307 47.5 47.5 47.5 47.5-21.307 47.5-47.5-21.307-47.5-47.5-47.5zm0 6.7852c22.526 0 40.715 18.188 40.715 40.715s-18.188 40.715-40.715 40.715c-22.526 0-40.715-18.188-40.715-40.715s18.188-40.715 40.715-40.715zm-6.4405 11.222 1.6096 40.17h9.7771l1.4943-40.17zm-0.16588 48.292v10.482h13.164v-10.482z" color="#000000" color-rendering="auto" dominant-baseline="auto" fill-opacity=".99061" image-rendering="auto" shape-rendering="auto" solid-color="#000000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
                </svg>
            </template>
            <template v-else-if="t === 'warning'">
                <svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="m50 0.45508c-0.0014 0-2.461 0.8883-2.7246 1.1445s-0.35597 0.38301-0.43555 0.48633c-0.15914 0.20664-0.2092 0.29498-0.26172 0.37695-0.10504 0.16394-0.16258 0.26495-0.23047 0.38281-0.13578 0.23573-0.28365 0.50355-0.4707 0.84766-0.37411 0.68821-0.88959 1.6548-1.5371 2.8828-1.295 2.4561-3.1137 5.9453-5.2852 10.131-4.3429 8.3711-10.093 19.526-15.826 30.693-5.7334 11.167-11.449 22.343-15.725 30.758-2.1376 4.2075-3.9142 7.7236-5.1582 10.213-0.62199 1.2446-1.1082 2.2291-1.4512 2.9375-0.17148 0.35422-0.30627 0.63271-0.41992 0.88281-0.056824 0.12505-0.10596 0.23175-0.17969 0.41602-0.036865 0.09213-0.078635 0.18505-0.1582 0.44336-0.039784 0.12915-0.092694 0.2831-0.1582 0.66797-0.065509 0.38487 0.48367 3.2232 0.48437 3.2246 7.038e-4 0.0014 1.9111 1.9534 2.2402 2.082 0.32915 0.12864 0.47439 0.1519 0.59375 0.17773 0.23871 0.05166 0.33249 0.060152 0.42188 0.070313 0.17877 0.02033 0.28544 0.026023 0.41016 0.033203 0.24943 0.01437 0.53014 0.023093 0.88867 0.033203 0.71706 0.02023 1.7188 0.04006 2.9883 0.05664 2.539 0.03315 6.1323 0.060072 10.441 0.082032 8.6182 0.04392 20.086 0.066406 31.553 0.066406 11.467 0 22.931-0.022486 31.549-0.066406 4.3091-0.02196 7.9063-0.048882 10.445-0.082032 1.2695-0.01657 2.2712-0.0364 2.9883-0.05664 0.35853-0.01012 0.63924-0.018833 0.88867-0.033203 0.12471-0.0072 0.23138-0.012884 0.41016-0.033203 0.08939-0.01016 0.18316-0.018643 0.42188-0.070313 0.11936-0.02583 0.2646-0.049094 0.59375-0.17773 0.32915-0.12864 2.2395-2.0807 2.2402-2.082 7.1e-4 -0.0014 0.54988-2.8397 0.48437-3.2246-0.065496-0.38487-0.12036-0.53882-0.16015-0.66797-0.0796-0.25831-0.11939-0.35123-0.15625-0.44336-0.0737-0.18426-0.12286-0.29097-0.17969-0.41602-0.11364-0.2501-0.24845-0.52859-0.41992-0.88281-0.34295-0.70845-0.82918-1.6929-1.4512-2.9375-1.244-2.4893-3.0206-6.0054-5.1582-10.213-4.2753-8.415-9.9912-19.591-15.725-30.758-5.7334-11.167-11.483-22.322-15.826-30.693-2.1715-4.1856-3.9901-7.6748-5.2852-10.131-0.64752-1.2281-1.163-2.1946-1.5371-2.8828-0.18706-0.34411-0.33492-0.61193-0.4707-0.84766-0.067891-0.11786-0.12543-0.21887-0.23047-0.38281-0.052519-0.081968-0.10453-0.17031-0.26367-0.37695-0.079572-0.10332-0.16995-0.23009-0.43359-0.48633-0.26364-0.25623-2.7232-1.1445-2.7246-1.1445zm0 13.746c1.1218 2.1424 2.2119 4.2238 3.7637 7.2148 4.3324 8.3508 10.078 19.5 15.807 30.658 5.7287 11.158 11.442 22.326 15.707 30.721 1.528 3.0075 2.5866 5.1134 3.6758 7.2773-2.2107 0.02125-4.3603 0.04095-7.4395 0.05664-8.5973 0.04381-20.056 0.066407-31.514 0.066406-11.457 0-22.916-0.022596-31.514-0.066406-3.0792-0.01569-5.2287-0.03539-7.4395-0.05664 1.0892-2.164 2.1478-4.2698 3.6758-7.2773 4.2649-8.3946 9.9745-19.563 15.703-30.721 5.7287-11.158 11.478-22.307 15.811-30.658 1.5517-2.991 2.6419-5.0724 3.7637-7.2148zm-4.7637 23.568 1.1953 32.342h7.2598l1.1094-32.342h-9.5645zm-0.12305 35.855v7.7812h9.7734v-7.7812h-9.7734z" color="#000000" color-rendering="auto" dominant-baseline="auto" fill-opacity=".99061" image-rendering="auto" shape-rendering="auto" solid-color="#000000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
                </svg>
            </template>
            <template v-else-if="t === 'caret'">
                <svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="m50.063 66.938a1.1894 0.88912 0 0 0 0.96732-0.4438l24.791-32.1a1.1894 0.88912 0 0 0-1.03-1.3342h-49.583a1.1894 0.88912 0 0 0-1.03 1.3342l24.791 32.1a1.1894 0.88912 0 0 0 1.0927 0.4438z" color="#000000" color-rendering="auto" dominant-baseline="auto" fill-opacity=".99061" image-rendering="auto" shape-rendering="auto" solid-color="#000000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
                </svg>
            </template>
            <template v-else-if="t === 'lcaret'">
                <svg version="1.1" viewBox="0 0 5.2917 5.2917" xmlns="http://www.w3.org/2000/svg">
                    <path d="m4.6272 4.9354c-0.00686 0.00396-1.976-1.1408-1.9828-1.1448-0.00686-0.00396-1.9828-1.1369-1.9828-1.1448 0-0.00792 1.976-1.1408 1.9828-1.1448 0.00686-0.00396 1.976-1.1488 1.9828-1.1448 0.00686 0.003962-1e-7 2.2817-1e-7 2.2896 0 0.00792 0.00686 2.2856-1e-7 2.2896z"/>
                </svg>
            </template>
            <template v-else-if="t === 'rcaret'">
                <svg version="1.1" viewBox="0 0 5.2917 5.2917" xmlns="http://www.w3.org/2000/svg">
                    <path d="m4.6302 2.6458c0 0.00792-1.976 1.1408-1.9828 1.1448-0.00686 0.00396-1.976 1.1488-1.9828 1.1448-0.006863-0.00396-1.2e-7 -2.2817-1.2e-7 -2.2896 0-0.00792-0.006863-2.2856 1.2e-7 -2.2896 0.006863-0.003962 1.976 1.1408 1.9828 1.1448 0.00686 0.00396 1.9828 1.1369 1.9828 1.1448z"/>
                </svg>
            </template>
            <template v-else-if="t === 'gear'">
                <svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="m41.018 0.36523c-3.9921 0.74389-7.8786 1.9713-11.574 3.6543 0.43321 3.952 0.80661 7.3756 1.1582 10.619-3.1078 1.6933-5.9794 3.7884-8.541 6.2305-3.2303-1.0315-6.5985-2.1097-10.467-3.3496-2.4518 2.9633-4.5529 6.1998-6.2637 9.6445 2.7526 2.6346 5.1 4.885 7.4687 7.1562-1.6336 3.8951-2.646 8.0215-3 12.23-3.1374 1.2847-6.2184 2.5466-9.7988 4.0098 0.081342 3.6268 0.55697 7.2338 1.418 10.758 3.67 0.2402 6.793 0.44734 10.072 0.66406 1.4142 4.5641 3.628 8.8403 6.5371 12.631-1.5411 2.9307-2.9963 5.702-4.7031 8.9434 2.3788 2.5776 5.0209 4.8969 7.8848 6.9219 2.9139-2.1371 5.4015-3.9569 8.0488-5.8965 4.2409 2.5461 8.9135 4.2913 13.785 5.1484 0.69034 3.1779 1.338 6.1548 2.0977 9.6602 1.6205 0.16013 3.2486 0.24266 4.877 0.24414 1.9213-0.02063 3.8399-0.1533 5.7461-0.39453 0.86672-3.5439 1.6041-6.5565 2.3848-9.7402 4.5532-0.93736 8.9119-2.6539 12.881-5.0742 2.528 1.9567 4.9319 3.8153 7.7812 6.0234 3.0555-2.1513 5.8593-4.6384 8.3613-7.4141-1.6837-3.4134-3.1162-6.327-4.5723-9.2852 2.3664-3.2503 4.2339-6.8365 5.541-10.639 3.1892-0.1276 6.3687-0.25638 10.117-0.40234 1.0434-3.8265 1.6281-7.7639 1.7422-11.729-3.6378-1.6004-6.7862-2.9868-9.7852-4.3105-0.28751-3.3575-0.99416-6.6658-2.1035-9.8477 2.3624-2.1496 4.8826-4.4387 7.7949-7.082-1.6335-3.7977-3.7321-7.3783-6.2461-10.66-3.9171 1.142-7.3592 2.1424-10.473 3.0449-2.0735-2.166-4.3824-4.0951-6.8828-5.75 0.43252-3.2053 0.91726-6.7777 1.4707-10.834-3.6777-1.965-7.5856-3.4634-11.635-4.459-2.2649 3.3906-4.2578 6.3703-6.0566 9.0547-2.012-0.3243-4.0461-0.49645-6.084-0.51367-1.0198 0.00322-2.0381 0.04655-3.0547 0.12695-1.7688-2.7966-3.7197-5.8824-5.9277-9.3848zm8.9824 26.117a23.517 23.517 0 0 1 23.518 23.518 23.517 23.517 0 0 1-23.518 23.518 23.517 23.517 0 0 1-23.518-23.518 23.517 23.517 0 0 1 23.518-23.518z"/>
                </svg>
            </template>
            <template v-else-if="t === 'grabber'">
                <svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="m35.805 12.5a7.2034 7.2034 0 0 0-7.2031 7.2031 7.2034 7.2034 0 0 0 7.2031 7.2031 7.2034 7.2034 0 0 0 7.2051-7.2031 7.2034 7.2034 0 0 0-7.2051-7.2031zm28.391 0a7.2034 7.2034 0 0 0-7.2031 7.2031 7.2034 7.2034 0 0 0 7.2031 7.2031 7.2034 7.2034 0 0 0 7.2031-7.2031 7.2034 7.2034 0 0 0-7.2031-7.2031zm-28.391 30.297a7.2034 7.2034 0 0 0-7.2031 7.2031 7.2034 7.2034 0 0 0 7.2031 7.2031 7.2034 7.2034 0 0 0 7.2051-7.2031 7.2034 7.2034 0 0 0-7.2051-7.2031zm28.391 0a7.2034 7.2034 0 0 0-7.2031 7.2031 7.2034 7.2034 0 0 0 7.2031 7.2031 7.2034 7.2034 0 0 0 7.2031-7.2031 7.2034 7.2034 0 0 0-7.2031-7.2031zm-28.391 30.295a7.2034 7.2034 0 0 0-7.2031 7.2051 7.2034 7.2034 0 0 0 7.2031 7.2031 7.2034 7.2034 0 0 0 7.2051-7.2031 7.2034 7.2034 0 0 0-7.2051-7.2051zm28.391 0a7.2034 7.2034 0 0 0-7.2031 7.2051 7.2034 7.2034 0 0 0 7.2031 7.2031 7.2034 7.2034 0 0 0 7.2031-7.2031 7.2034 7.2034 0 0 0-7.2031-7.2051z"/>
                </svg>
            </template>
            <template v-else-if="t === 'grabber2'">
                <svg version="1.1" viewBox="0 0 5.2917 5.2917" xmlns="http://www.w3.org/2000/svg">
                    <path d="m4.3005 0.41208a0.53057 0.53057 0 0 0-0.53072 0.53021 0.53057 0.53057 0 0 0 0.53072 0.53072 0.53057 0.53057 0 0 0 0.5302-0.53072 0.53057 0.53057 0 0 0-0.5302-0.53021zm-1.6547 0.014a0.53057 0.53057 0 0 0-0.53072 0.5302 0.53057 0.53057 0 0 0 0.53072 0.53072 0.53057 0.53057 0 0 0 0.53072-0.53072 0.53057 0.53057 0 0 0-0.53072-0.5302zm-1.6547 0.014a0.53057 0.53057 0 0 0-0.5302 0.5302 0.53057 0.53057 0 0 0 0.5302 0.53072 0.53057 0.53057 0 0 0 0.53072-0.53072 0.53057 0.53057 0 0 0-0.53072-0.5302zm3.3094 1.6614a0.53057 0.53057 0 0 0-0.53072 0.53072 0.53057 0.53057 0 0 0 0.53072 0.5302 0.53057 0.53057 0 0 0 0.5302-0.5302 0.53057 0.53057 0 0 0-0.5302-0.53072zm-1.6547 0.014a0.53057 0.53057 0 0 0-0.53072 0.53072 0.53057 0.53057 0 0 0 0.53072 0.5302 0.53057 0.53057 0 0 0 0.53072-0.5302 0.53057 0.53057 0 0 0-0.53072-0.53072zm-1.6547 0.0139a0.53057 0.53057 0 0 0-0.5302 0.53072 0.53057 0.53057 0 0 0 0.5302 0.53021 0.53057 0.53057 0 0 0 0.53072-0.53021 0.53057 0.53057 0 0 0-0.53072-0.53072zm3.3094 1.6614a0.53057 0.53057 0 0 0-0.53072 0.53072 0.53057 0.53057 0 0 0 0.53072 0.5302 0.53057 0.53057 0 0 0 0.5302-0.5302 0.53057 0.53057 0 0 0-0.5302-0.53072zm-1.6547 0.0139a0.53057 0.53057 0 0 0-0.53072 0.53072 0.53057 0.53057 0 0 0 0.53072 0.53021 0.53057 0.53057 0 0 0 0.53072-0.53021 0.53057 0.53057 0 0 0-0.53072-0.53072zm-1.6547 0.014a0.53057 0.53057 0 0 0-0.5302 0.53072 0.53057 0.53057 0 0 0 0.5302 0.5302 0.53057 0.53057 0 0 0 0.53072-0.5302 0.53057 0.53057 0 0 0-0.53072-0.53072z"/>
                </svg>
            </template>
            <template v-else-if="t === 'duplicate'">
                <svg version="1.1" viewBox="0 0 13.229 13.229" xmlns="http://www.w3.org/2000/svg">
                    <path d="m5.2315 0.54286a0.48204 0.48204 0 0 0-0.48266 0.48007v6.9748a0.48204 0.48204 0 0 0 0.48266 0.48266h6.9748a0.48204 0.48204 0 0 0 0.48007-0.48266v-6.9748a0.48204 0.48204 0 0 0-0.48007-0.48007zm0.48266 0.96273h6.0095v6.0094h-6.0095zm-2.5998 1.1524c-0.2657 8e-4 -0.48065 0.21644-0.48059 0.48214v5.611h0.96325v-5.1284h0.65577v-0.9648zm6.4921 6.3185v0.65578h-5.1284v0.96325h5.611c0.2657 5e-5 0.48134-0.2149 0.48214-0.48059v-1.1384zm-7.9515 0.52245v1.1121h-1.1121v0.96325h1.1121v1.1121h0.96325v-1.1121h1.1121v-0.96325h-1.1121v-1.1121z"/>
                </svg>
            </template>
            <template v-else-if="t === 'download'">
                <svg version="1.1" viewBox="0 0 13.229 13.229" xmlns="http://www.w3.org/2000/svg">
                    <path d="m5.856 0.69867v6.3345h-2.5487l3.3073 3.3073 3.3073-3.3073h-2.5487v-6.3345zm-4.7599 3.2055v7.8884c-4.489e-4 0.40696 0.35624 0.7373 0.79685 0.73794h9.4434c0.44061-6.4e-4 0.7973-0.33098 0.79685-0.73794v-7.8884h-1.5958v7.1505h-7.846v-7.1505z"/>
                </svg>
            </template>
            <template v-else-if="t === 'upload'">
                <svg version="1.1" viewBox="0 0 13.229 13.229" xmlns="http://www.w3.org/2000/svg">
                    <path d="m6.6146 0.69867-3.3073 3.3073h2.5487v6.3345h1.5172v-6.3345h2.5487zm-5.5185 3.2055v7.8884c-4.489e-4 0.40696 0.35624 0.7373 0.79685 0.73794h9.4434c0.44061-6.4e-4 0.7973-0.33098 0.79685-0.73794v-7.8884h-1.5958v7.1505h-7.846v-7.1505z"/>
                </svg>
            </template>
            <template v-else-if="t === 'info' || t === 'help'">
                <svg version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="m437.02 74.98c-48.353-48.351-112.64-74.98-181.02-74.98s-132.67 26.629-181.02 74.98c-48.351 48.353-74.98 112.64-74.98 181.02s26.629 132.67 74.98 181.02c48.353 48.351 112.64 74.98 181.02 74.98s132.67-26.629 181.02-74.98c48.351-48.353 74.98-112.64 74.98-181.02s-26.629-132.67-74.98-181.02zm-181.02-4.98c30.327 0 55 24.673 55 55s-24.673 55-55 55-55-24.673-55-55 24.673-55 55-55zm70 350h-140v-30h30v-150h-30v-30h110v180h30v30z"/>
                </svg>
            </template>
        </template>

        <!-- Fontello custom Web Font -->
        <i v-else :class="`icon-${t}`"></i>
    </span>
</template>



<script>
    export default {
        props: {
            type: {type: String, default: null},
            icon: {type: String, default: null},
            i: {type: String, default: null},
            clickable: {type: Boolean, default: false},
            fr: {type: Boolean, default: false},
            fl: {type: Boolean, default: false},
            svg: {type: Boolean, default: false},
            title: {default: null},
            stop: {type: Boolean, default: false},
            flip: {type: Boolean, default: false}
        },
        methods: {
            hClick(e, method) {
                if(this.stop) {
                    e.stopPropagation();
                }
                e.eventName = method;
                this.$emit("click", e);
                if(method != "click") {
                    this.$emit(method, e);
                }
            }
        },
        computed: {
            hasDefaultSlot() { return !!this.$slots.default },
            theType() {
                let t = null;
                if(this.i) t = this.i;
                if(this.icon) t = this.icon;
                if(this.type) t = this.type;
                if(this.$slots.default && this.$slots.default[0].text) t = this.$slots.default[0].text;
                // shorthands
                if(t) {
                    if(t.indexOf('+') === 0) {
                        t = "ma:" + t.substr(1);
                    }
                    if(t.indexOf('/') === 1) {
                        t = "fa:fa" + t[0] + " fa-" + t.substr(2);
                    }
                }
                return t;
            },
            useFontAwesome() { return this.theType && this.theType.indexOf('fa:') === 0 },
            useMaterialIcons() { return this.theType && this.theType.indexOf('ma:') === 0 },
            useSvg() { return this.svg || this.theType.indexOf('svg:') === 0 },
            t() {
                if(this.useFontAwesome || this.useMaterialIcons) {
                    return this.theType.substr(3);
                }
                if(this.theType.indexOf('svg:') >= 0) {
                    return this.theType.substr(4);
                }
                return this.theType;
            }
        },
        mounterd() {
            if(this.svg) {
                let fs = this.$el ? window.getComputedStyle(this.$el).fontSize : null;
                if(!this.width && !this.height && fs) {
                    let sel = this.$el.querySelector('svg');
                    if(sel) {
                        sel.style.height = fs;
                        sel.style.width = fs;
                    }
                }
            }
        }
    }
</script>