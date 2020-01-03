<style lang="scss">
    @import '../variables.scss';

    @function getContrastedColor($color) {
        @if (lightness($color) > 50) {
            @return #000000; // Lighter background, return dark color
        } @else {
            @return #f5f5f5; // Darker background, return light color
        }
    }

    // ===== Structure =====
    //  .eg-input
    //      .eg-input-wrapper
    //          .prefix, etc
    //          .eg-input-content (.input-style-wrapper)
    //              <input>
    //              .input-icon
    //              .select-panel
    //          .suffix
    //      .message, etc
    //  </>


    // ----- Loader -----
    .eg-loader-container {
        text-align: center;
        display: flex;
        align-items: center;
        .eg-loader {
            position: relative;
            display: inline-block;
            width: 20px;
            height: 20px;
            overflow: hidden;
            transition: .2s;
            max-width: 20px;
            &.hidden {
                max-width: 0;
            }
            .eg-loader-inside {
                position: relative;
                top: 0;
                left: 0;
                display: block;
                border: 2px solid rgba(#000,.05);
                border-radius: 50%;
                border-top: 2px solid var(--color-gray-2);
                width: 15px;
                height: 15px;
                animation: spin 1s linear infinite;
            }
            &.small {
                height: 15px;
                width: 15px;
                .eg-loader-inside {
                    height: 10px;
                    width: 10px;
                }
            }
        }
        @keyframes spin {
            from { transform: rotate(0deg) }
            to { transform: rotate(360deg) }
        }
    }

    .eg-inner-style {
        font-size: var(--font-size);
        padding: var(--padding);
        border: none;
        line-height: 1.5rem;
        color: var(--color-gray);
        background-color: transparent;
        &:focus {
            outline: none;
        }
    }
    .eg-boxing-style {
        display: flex;
        align-items: center;
        border: var(--border);
        border-radius: var(--border-radius);
        flex-wrap: wrap;
        &:hover {
            box-shadow: var(--lighter-bs);
        }
    }


    // Outer wrapper
    .eg-input {
        text-align: left;
        position: relative;

        // Inner wrapper
        .eg-input-wrapper {
            border-radius: var(--border-radius);
        }
        // Main content
        .eg-input-content {
            cursor: pointer;
            @extend .eg-boxing-style;
            input,
            .prefix,
            .suffix {
                @extend .eg-inner-style;
            }
            input {
                flex: 1;
                width: 100%;
                border-radius: var(--border-radius);
            }
            textarea {
                @extend .eg-inner-style;
                resize: none;
                flex: 1;
            }
            .prefix {
                padding-right: 0;
                color: var(--color-gray-3);
            }
            .suffix {
                padding-left: 0;
                color: var(--color-gray-3);
            }
            .inner-input-button {
                @extend .eg-inner-style;
                flex: 1;
                text-align: left;
                cursor: pointer;
            }

            // Focus
            &.focus {
                border-color: var(--color-primary);
                .input-icon .svg-icon {
                    width: 1.2em;
                    height: 1.2em;
                    svg {
                        fill: var(--color-primary);
                    }
                }
            }
        }

        // Tag position
        .eg-tag {
            margin-right: 0;
            &+input {

            }
        }

        // States
        &.error {
            .eg-label {
                color: var(--color-error);
            }
            .eg-input-content {
                border-color: var(--color-error);
                .input-icon .svg-icon svg {
                    fill: var(--color-error);
                }
            }
            .messages-zone {
                color: var(--color-error);
            }
        }
        &.disabled {
            opacity: 0.8;
            .input-icon {
                cursor: default;
                &:hover {
                    opacity: 1;
                }
            }
            .eg-label {
                cursor: default;
            }
            .eg-tag {
                cursor: default;
                .cross-pill {
                    cursor: default;
                    &:hover {
                        opacity: 1;
                    }
                }
            }
        }

        // Outsiders
        .messages-zone {
            font-size: 0.8rem;
            margin: 5px 0;
            color: var(--color-gray-4);
            .message-counter {
                float: right;
            }
            .message-list {
                padding: 0 0 0 20px;
                margin: 5px 0 0 0;
            }
        }

        // Specials
        .autowidth-shadow {
            position: absolute;
            visibility: hidden;
        }

        .select-legacy {
            @extend .eg-inner-style;
            @extend .eg-boxing-style;
        }

        // ===> Specific targeting

        // textarea
        &.textarea {
            .eg-input-content {
                .input-icon {
                    position: absolute;
                    right: 0;
                    align-items: flex-start;
                }
            }
        }

        // select
        &.select {
            user-select: none;
            .select-legacy {
                width: 100%;
                &.focus {
                    border-color: var(--color-primary);
                    .input-icon .svg-icon svg {
                        fill: var(--color-primary);
                    }
                }
            }
            .inner-input-button,
            input {
                box-sizing: content-box;
                min-width: 20px // to align the icons on the right when multiple is used
            }
        }

        // number
        &.number {
            .minus-icon {
                padding-left: 0;
            }
        }

        // checkbox
        &.checkbox {
            .checkbox-input {
                // (custom input)
                height: 14px;
                width: 14px;
                margin-right: 8px;
                position: relative;
                cursor: pointer;
                border: none;
                background-color: transparent;
                box-shadow: none;
                svg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    path {
                        stroke: var(--color-gray);
                        transition: stroke-dashoffset .1s;
                        &.arrow {
                            stroke-dasharray: 50px;
                            stroke-dashoffset: 50px;
                        }
                        &.box {
                            fill: #E3E3E3;
                        }
                    }
                }
                &.selected {
                    path {
                        &.arrow {
                            stroke-dashoffset: 0;
                        }
                    }
                }
                &:hover,
                &:focus {
                    box-shadow: var(--box-shadow);
                    outline-width: 0;
                }
            }
            .eg-input-wrapper {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                input {
                    margin: 0 0.5em 0 0;
                    width: 1em;
                    height: 1em;
                    cursor: pointer;
                }

                .checkbox-group {
                    margin-bottom: 5px;
                }
            }
            .checkbox-label {
                margin-right: 15px;
            }
        }

        // radio
        &.radio {
            .radio-container {
                display: flex;
                flex-wrap: wrap;
            }
            .radio-group {
                display: inline-block;
                margin-right: 20px;
                &:hover,
                &:focus {
                    box-shadow: none;
                    &::after {
                        background-color: var(--light-bg);
                        opacity: 1;
                    }
                    svg {
                        path {
                            &.circle {
                                fill: var(--color-gray-2);
                            }
                            &.dot {
                                stroke: var(--color-gray-2);
                            }
                        }
                    }
                }
            }
            .radio-inner {
                display: flex;
                align-items: center;
                input {
                    width: inherit;
                    margin-right: 10px;
                    margin-top: 0;
                }
            }
            .radiobox {
                height: 16px;
                width: 16px;
                margin-right: 8px;
                position: relative;
                cursor: pointer;
                background-color: transparent;
                padding: 0;
                border: none;
                border-radius: 50%;
                svg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    path {
                        &.circle {
                            fill: var(--color-gray-4);
                        }
                        &.dot {
                            stroke: var(--color-gray-4);
                        }
                    }
                }
                &:focus {
                    box-shadow: var(--box-shadow);
                    outline-width: 0;
                    svg {
                        path {
                            &.circle {
                                fill: var(--color-gray);
                            }
                            &.dot {
                                stroke: var(--color-gray);
                            }
                        }
                    }
                }
                &.round {
                    svg {
                        path {
                            transition: stroke-dashoffset .2s;
                            &.dot {
                                stroke-dasharray: 55px;
                                stroke-dashoffset: 55px;
                            }
                        }
                    }
                }
                &.zoom {
                    svg {
                        path {
                            transition: transform .2s;
                            &.dot {
                                transform-origin: center;
                                transform: scale(0);
                            }
                        }
                    }
                }
                &.selected {
                    &.round {
                        path {
                            &.dot {
                                stroke-dashoffset: 0;
                            }
                        }
                    }
                    &.zoom {
                        path {
                            &.dot {
                                transform: scale(1);
                            }
                        }
                    }
                    svg {
                        path {
                            &.circle {
                                fill: var(--color-primary);
                            }
                            &.dot {
                                stroke: var(--color-primary);
                            }
                        }
                    }
                }
                &::after {
                    content: '';
                    position: absolute;
                    top: -3px;
                    left: -3px;
                    right: -3px;
                    bottom: -3px;
                    border-radius: 50%;
                    opacity: 0;
                    z-index: -1;
                }
            }
            &.legacy {
                input {
                    margin-top: 3px;
                    height: 15px;
                    width: 15px;
                    position: relative;
                    &::after {
                        content: '';
                        position: absolute;
                        top: -3px;
                        left: -3px;
                        right: -3px;
                        bottom: -3px;
                        border-radius: 50%;
                        opacity: 0;
                        z-index: -1;
                    }
                    &:hover,
                    &:focus {
                        box-shadow: none;
                        &::after {
                            background-color: var(--light-bg);
                            opacity: 1;
                        }
                    }
                }
            }
        }

        // switch
        &.switch {
            .eg-label {
                margin-bottom: 5px;
            }
            .switch-wrapper {
                display: flex;
                cursor: pointer;
                & > div:not(.switch-bloc) {
                    display: flex;
                    align-items: center;
                    font-size: 0.8rem;
                    &:first-child {
                        margin-right: 15px;
                        justify-content: flex-end;
                    }
                    &:last-child {
                        margin-left: 15px;
                    }
                    span {
                        user-select: none;
                    }
                }
                .switch-bloc {
                    position: relative;
                }
                .switch-line {
                    height: 10px;
                    border-radius: 5px;
                    width: 100%;
                    background-color: var(--color-gray-5);
                    top: 50%;
                    position: absolute;
                    transform: translateY(-50%);
                    &.positive {
                        background-color: rgba(var(--rgb-primary), 0.3);
                    }
                }
            }
            .slider-dot {
                transition: left 100ms ease-out, background 100ms ease-out;
                &.positive {
                    background-color: var(--color-primary);
                    border-color: var(--color-primary);
                }
                &:focus,
                &:hover {
                    box-shadow: var(--box-shadow);
                    outline-width: 0;
                }
            }
            .slider-dot {
                background-color: #fff;
                box-shadow: 1px 1px 2px .1rem rgba(0,0,0,0.05);
                height: 25px;
                width: 25px;
                display: inline-block;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                z-index: 1;
                outline-width: 0;
                cursor: pointer;
                border: var(--border);
                &.dragging {
                    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);
                    .slider-dot-label {
                        opacity: 1;
                    }
                }
                .slider-dot-label {
                    position: absolute;
                    bottom: 35px;
                    transform: translateX(-50%);
                    box-shadow: 1px 1px 2px .1rem rgba(0,0,0,0.1);
                    padding: 5px 10px;
                    border-radius: 5px;
                    background-color: rgba(#fff,0.95);
                    font-size: 0.8rem;
                    opacity: 0;
                    display: none;
                    transition: opacity .2s;
                    .dot-arrow {
                        position: absolute;
                        content: '';
                        border-left: 5px solid transparent;
                        border-right: 5px solid transparent;
                        border-top: 5px solid rgba(#fff,0.95);
                        bottom: -5px;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    .dot-label-content {
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        display: block;
                    }
                }
            }
        }

        // time and date
        &.time,
        &.date {
            //@import url('https://fonts.googleapis.com/css?family=Encode+Sans+Expanded&display=swap');
            //font-family: 'Encode Sans Expanded', sans-serif;
            input {
                width: 6em;
            }
        }
        &:not(.time),
        &:not(.date) {
            .eg-input-content {
                width: auto;
            }
        }
        &.date {

        }
        &.date.time {

        }
        &.date.legacy,
        &.time.legacy,
        &.datetime,
        &.date-range,
        &.time-range {
            .eg-input-content {
                input {
                    width: 100%;
                }
            }
        }
        &.datetime-range,
        &.datetime,
        &.date-range {

        }
        &.file {
            .eg-input-content {
                display: flex;
                flex-wrap: nowrap;
            }
            .file-element,
            .file-wrapper {
                @extend .eg-inner-style;
                display: flex;
                align-items: center;
                flex-wrap: nowrap;
                width: 100%;
                cursor: pointer;
                label {
                    cursor: pointer;
                    display: flex;
                    width: 100%;
                    &.file-placeholder {
                        color: var(--color-gray-4);
                        &.drop-placeholder {
                            text-align: center;
                            justify-content: center;
                            pointer-events: none;
                        }
                    }
                    & > span.file-name {
                        -ms-word-break: break-all;
                        word-break: break-all;
                        word-break: break-word;
                        -webkit-hyphens: auto;
                        -moz-hyphens: auto;
                        hyphens: auto;
                        flex: 1;
                        text-align: left;
                    }
                }
                .file-size {
                    font-size: 0.75rem;
                    opacity: 0.5;
                    margin-left: calc(2 * var(--h-padding));
                }
                .invisible {
                    display: none;
                }
            }
            .file-list {
                margin-bottom: 10px;
                .file-element {
                    position: relative;
                    border: 1px solid transparent;
                    margin-top: 5px;
                    border-radius: 5px;
                    height: var(--file-height);
                    padding: 0 0 0 var(--h-padding);
                    background-color: transparent;
                    font-size: 0.8rem;
                    text-align: left;
                    box-sizing: border-box;
                    &.loaded {
                        border-color: var(--color-gray-5);
                        background-color: var(--color-gray-6);
                    }
                    .input-icon {
                        cursor: pointer;
                        opacity: 0;
                        transition: opacity .2s;
                        path {
                            opacity: 0.5;
                        }
                    }
                    &:not(.error):focus,
                    &:not(.error):hover {
                        .input-icon {
                            opacity: 1;
                        }
                        outline-width: 0;
                        box-shadow: var(--box-shadow);
                        border-color: var(--color-gray-4);
                    }
                    .file-content {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        .file-size {
                            margin-right: 5px;
                        }
                        &.file-check-pad {
                            padding-right: calc(2 * var(--button-width) + var(--h-padding));
                        }
                        & > span.file-name {
                            -ms-word-break: break-all;
                            word-break: break-all;
                            word-break: break-word;
                            -webkit-hyphens: auto;
                            -moz-hyphens: auto;
                            hyphens: auto;
                            flex: 1;
                            text-align: left;
                            line-height: 1rem;
                        }
                    }
                    &.has-icon {
                        padding-right: calc(2 * var(--n-h-padding) + 1 * var(--button-width));
                        &.file-check-pad {
                            padding-right: calc(2 * var(--n-h-padding) + 2 * var(--button-width));
                        }
                    }
                    &.error {
                        background-color: rgba(var(--rgb-error), 0.1);
                        &:focus,
                        &:hover {
                            outline-width: 0;
                            opacity: 0.8;
                        }
                        .input-icon {
                            opacity: 1;
                            path {
                                fill: var(--color-error);
                            }
                        }
                    }
                }
                .message-list {
                    color: var(--color-error);
                    margin-bottom: 5px;
                }
                .file-picture {
                    margin: 0 10px 0 0;
                }
            }
            .file-picture {
                display: inline-block;
                min-width: var(--file-pic-size);
                height: var(--file-pic-size);
                margin: calc(-1 * var(--file-pic-size) / 4) 10px calc(-1 * var(--file-pic-size) / 4) calc(-1 * var(--file-pic-size) / 8);
                background: no-repeat center;
                background-size: contain;
                border-radius: 5px;
                .svg-icon {
                    background-color: #f0f0f0;
                    border-radius: 5px;
                    height: 100%;
                    svg {
                        height: var(--file-pic-size);
                        width: var(--file-pic-size);
                    }
                }
            }
            .file-label {
                align-items: center;
            }

        }
        &.star {
            .star-wrapper {
                svg {
                    cursor: pointer;
                    width: 2.5em;
                    height: 2.5em;
                    path {
                        fill: url(#light-to-transparent);
                        stroke: url(#light-to-transparent);
                    }
                    &.active:not(.hover) {
                        path {
                            fill: url(#active-to-transparent);
                            stroke: url(#active-to-transparent);
                        }
                    }
                    &.active {
                        &.full {
                            path {
                                fill: url(#dark-to-light);
                                stroke: url(#dark-to-light);
                            }
                        }
                    }
                    &.hover {
                        &.active,
                        &.activated {
                            path {
                                fill: url(#dark-to-active);
                                stroke: url(#dark-to-active);
                            }
                        }
                    }
                }
            }
        }
        &.color {
            input {
                height: 42px;
                min-width: 75px;
            }
        }
    }

    .input-icon {
        padding: 10px;
        cursor: pointer;
        align-self: stretch;
        display: flex;
        align-items: center;
        &+.input-icon {
            padding-left: 0;
        }
        &.reversed {
            transform: rotate(180deg);
        }
        &:hover {
            opacity: 0.5;
        }
        width: 1em;
        .svg-icon {
            height: 1em;
            width: 1em;
            svg {
                height: 100%;
                width: 100%;
                fill: var(--color-gray-4);
            }
        }
        svg {
            width: 1em;
            height: 1em;
        }
    }

    // labels
    .eg-label {
        display: inline-block;
        margin-bottom: 5px;
        flex: 1;
        border: none;
        background-color: transparent;
        padding: 0;
        font-size: 1rem;
        color: var(--color-gray-2);
        cursor: pointer;
        user-select: none;
        font-family: inherit;
        font-weight: normal;
        &.group-label {
            margin-bottom: 5px;
        }
        &.small {
            font-size: 0.8rem;
        }
    }
    .checkbox-label {
        user-select: none;
        cursor: pointer;
        color: var(--text-label);
    }

    // pill (items on the multiple input)
    .eg-tag {
        color: var(--color-gray-2);
        border-radius: var(--border-radius);
        font-size: 0.8rem;
        cursor: pointer;
        background-color: var(--light-bg);
        border: var(--border);
        padding: 2px calc(1.75 * var(--h-padding)) 2px var(--h-padding);
        align-items: center;
        margin: var(--padding);
        position: relative;
        &:focus {
            outline-width: 0;
            border-color: var(--color-gray-6);
        }
        .cross-pill {
            position: absolute;
            right: 5%;
            top: 15%;
            height: 15px;
            width: 15px;
            svg {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                right: 0;
                transform: scale(.6);
            }
            &:hover {
                opacity: 0.5;
            }
        }
        &+.eg-tag {
            margin-right: 0;
        }
    }

    // floating panel
    .select-panel {
        position: absolute;
        &.top-align {
            bottom: 0;
            &:not(.dom-level) {
                bottom: 45px;
            }
        }
        background-color: #fff;
        box-shadow: var(--light-bs);
        border-radius: var(--border-radius);
        z-index: 1000;
        margin-bottom: 0;
        width: 100%;
        font-size: var(--font-size);
        overflow-y: auto;
        overflow-x: hidden;
        max-height: 0;
        transform: scale(0.95) translateY(-6px);
        transition: transform .2s, opacity .3s;
        font-family: inherit;
        // custom scrollbar
        &::-webkit-scrollbar {
            width: 0;
        }
        &::-webkit-scrollbar-track {
            background: transparent;
        }
        &::-webkit-scrollbar-thumb {
            background: transparent;
            cursor: pointer;
        }
        &.show-scrollbar {
            &::-webkit-scrollbar {
                width: 5px;
            }
            &::-webkit-scrollbar-track {
                background: rgba(var(--color-gray), 0.05);
            }
            &::-webkit-scrollbar-thumb {
                background: rgba(var(--color-gray), 0.2);
                cursor: pointer;
            }
        }
        .select-panel-content {
            padding: var(--v-padding) var(--h-padding);
            font-family: inherit;
        }
        // item (select option)
        .select-item {
            text-align: left;
            border: none;
            border-bottom: 1px solid rgba(var(--color-gray), 0.1);
            cursor: pointer;
            width: 100%;
            padding: 0;
            background-color: transparent;
            &:focus,
            &:hover {
                background-color: var(--light-bg);
                outline-width: 0;
            }
            &.selected {
                box-shadow: none;
                background-color: var(--light-bg);
                border: none;
                &:focus,
                &:hover {
                    opacity: .5;
                }
                .list-item {
                    border: none;
                }
            }
            .list-item {
                display: flex;
                align-items: center;
                border: 1px solid transparent;
                .content {
                    flex: 1;
                    padding: var(--v-padding) var(--h-padding);
                }
                .color-pill {
                    margin: var(--v-padding) 0 var(--v-padding) var(--h-padding);
                    height: 15px;
                    width: 15px;
                    border-radius: 50%;
                }
                &.empty {
                    color: var(--color-gray-3);
                }
            }
        }
        // item group wrapper
        .item-group {
            margin: 0;
            padding: 0;
            list-style-type: none;
            .select-item:first-child {
                border-top: 1px solid rgba(var(--color-gray), 0.1);
            }
        }
        // item label
        .item-group-label {
            display: block;
            padding: 2em 1em 0.6em 1em;
            font-size: 0.7rem;
            color: var(--color-gray);
            text-align: left;
        }
        // for deployment animation
        &.visible {
            max-height: 1000px;
            transform: scale(1) translateY(0);
            opacity: 1;
            margin-bottom: 10px;
        }

        &.date {
            min-width: 250px;
            .calendar-header {
                .caret svg {
                    height: 15px;
                    width: 15px;
                }
            }
            .calendar-preview {
                border: none;
            }
            .grid-selector {
                border: none;
            }
        }
        &.time,
        &.datetime { // to get the time format
            min-width: 250px;
            .timer-wrapper {
                font-family: inherit;
                display: flex;
                font-size: 0.75rem;
                flex-direction: column;
                padding: var(--padding);
                .time-col {
                    font-family: inherit;
                    flex: 1;
                    margin-left: 5px;
                    &:first-child {
                        min-width: 90px;
                    }
                    span {
                        color: darken(#f5f5f5,40%);
                        font-family: inherit;
                    }
                    .time-grid {
                        font-family: inherit;
                        border-radius: 3px;
                        background-color: #f5f5f5;
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                    }
                    button {
                        background-color: transparent;
                        border: none;
                        cursor: pointer;
                        padding: 5px 0;
                        font-size: 0.75rem;
                        border-radius: 3px;
                        font-family: inherit;
                        &:focus,
                        &:hover {
                            outline-width: 0;
                            background-color: darken(#f5f5f5,5%);
                        }
                        &.selected {
                            background-color: darken(#f5f5f5,10%);
                        }
                    }
                    &:first-child {
                        margin-left: 0;
                        .time-grid {
                            grid-template-columns: 1fr 1fr 1fr 1fr;
                        }
                    }
                }
                .timer-footer {
                    text-align: right;
                    padding: 5px;
                    margin-top: 5px;
                    background-color: #f5f5f5;
                    button {
                        padding: 4px;
                        font-size: 0.75rem;
                        background-color: transparent;
                        margin-left: 4px;
                        cursor: pointer;
                        border: 1px solid transparent;
                        border-radius: 3px;
                        color: darken(#f5f5f5, 50%);
                        font-family: inherit;
                        &:hover {
                            background-color: darken(#f5f5f5, 5%);
                        }
                        &:focus {
                            outline-width: 0;
                            border: 1px solid #ccc;
                        }
                        &.selected {
                            border: 1px solid #ccc;
                        }
                    }
                }
            }
            .timer-content {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
            }
        }
        &.time {
            width: 250px;
        }
        &.datetime {
            min-width: 500px;
            .calendar-wrapper {
                display: grid;
                grid-template-columns: 280px 1fr;
            }
            .timer-wrapper {
                flex-direction: column;
                justify-content: space-evenly;
                padding: 0;
                .time-col {
                    margin-left: 0;
                    margin-bottom: 5px;
                    flex: 0;
                }
            }
            .timer-content {
                flex: 1;
                grid-gap: 5px;
                padding: calc(2 * var(--v-padding)) var(--h-padding) calc(var(--v-padding) / 2) var(--h-padding);
            }
            .select-panel {
                width: 450px;
            }
            @media screen and (max-width: 500px) {
                .calendar-wrapper {
                    grid-template-columns: 1fr;
                }
                .select-panel {
                    width: 280px;
                }
            }
        }
    }

    // uniblocs
    .eg-input-unibloc {
        display: flex;
        .eg-input {
            .input-style-wrapper, .select-facade, textarea, input {
                border-radius: 0;
                border-left-color: transparent;
                border-right-color: transparent;
            }
            &:first-child {
                .input-style-wrapper, .select-facade, textarea, input {
                    border-left-color: var(--color-gray);
                    border-top-left-radius: var(--border-radius);
                    border-bottom-left-radius: var(--border-radius);
                }
            }
            &:last-child {
                .input-style-wrapper, .select-facade, textarea, input {
                    border-right-color: var(--color-gray);
                    border-top-right-radius: var(--border-radius);
                    border-bottom-right-radius: var(--border-radius);
                }
            }
        }
    }
</style>

<template>
    <div
            class="eg-input"
            :style="style"
            @click="handleWrapperClick"
            @mousedown="handleWrapperMousedown"
            @mouseup="handleWrapperMouseup"
            :class="inputClass">
        <!-- Label -->
        <label class="eg-label group-label" :for="theId" v-if="isCheckbox&&!legacy&&multiple">{{ label }}</label>
        <template v-else-if="!(isCheckbox&&!multiple)">
            <label class="eg-label" :for="theId" v-if="label">{{ labelText }}</label>
        </template>
        <!-- Checkbox -->
        <div class="eg-input-wrapper" v-if="isCheckbox">
            <div class="checkbox-group" v-for="(c,i) in checkboxes" :key="i">
                <!-- Checkbox legacy -->
                <input
                        v-if="legacy"
                        :class="{hidden:!legacy}"
                        :id="checkboxes.length==1&&legacy?theId:theId+'-'+i"
                        :name="checkboxes.length==1&&legacy?theId:theId+'-'+i"
                        type="checkbox"
                        :value="value"
                        :checked="isInList(c)"
                        @keyup.enter="toggleSwitch"
                        @click="handleCheckboxLegacy(c)"
                        :disabled="disabled||isLoading">
                <!-- Checkbox svg -->
                <button
                        v-if="!legacy"
                        :id="checkboxes.length==1?theId:theId+'-'+i"
                        :disabled="disabled||isLoading"
                        class="checkbox-input"
                        @click="handleInput(c)"
                        :class="{selected:isInList(c)}">
                    <svg fill="none" version="1.1" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <path class="arrow" d="m10.54 27.806s4.2098 1.4275 11.649 9.1491c7.198-13.981 17.284-25.977 17.284-25.977" fill="none" stroke="#000" stroke-linecap="round" stroke-width="6"/>
                        <path class="box" d="m0 0v50h50v-50zm3 3h44v44h-44z" color="#000000" color-rendering="auto" dominant-baseline="auto" fill="#000" image-rendering="auto" shape-rendering="auto" solid-color="#000000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
                    </svg>
                </button>
                <!-- Input text -->
                <label class="checkbox-label" :for="checkboxes.length==1?theId:theId+'-'+i" v-if="label||c">{{ c }}</label>
            </div>
        </div>
        <!-- Radio -->
        <div v-else-if="isRadio" class="radio-container">
            <div v-for="(v,label,i) in elements" class="radio-group" :key="i">
                <div class="radio-inner">
                    <!-- Radio legacy -->
                    <template v-if="legacy">
                        <input
                                @change="$emit('input', v)"
                                type="radio"
                                :id="theId+'-'+v"
                                :name="theId"
                                :value="v"
                                :disabled="disabled||isLoading"
                                :checked="checkIfCheck(v)">
                        <label class="checkbox-label" :for="theId+'-'+v">{{ label }}</label>
                    </template>
                    <!-- Radio svg -->
                    <template v-else>
                        <button
                                class="radiobox zoom"
                                :id="theId+'-radio-'+i"
                                :disabled="disabled||isLoading"
                                :class="{selected:checkIfCheck(v)}"
                                @keyup.left="selectValueBefore(i)"
                                @keyup.up="selectValueBefore(i)"
                                @keyup.right="selectValueAfter(i)"
                                @keyup.down="selectValueAfter(i)"
                                @click="handleValue(v)">
                            <svg fill="none" version="1.1" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                <path class="circle" d="m25 0c-13.789 0-25 11.211-25 25s11.211 25 25 25 25-11.211 25-25-11.211-25-25-25zm0 3c12.168 0 22 9.832 22 22s-9.832 22-22 22-22-9.832-22-22 9.832-22 22-22z" color="#000000" color-rendering="auto" dominant-baseline="auto" fill="#000" image-rendering="auto" shape-rendering="auto" solid-color="#000000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
                                <path class="dot" d="m28.756 32.809c2.0445-0.98342 3.6715-2.8024 4.4218-4.9435s0.61456-4.5778-0.36887-6.6223-2.8024-3.6715-4.9435-4.4218-4.5778-0.61456-6.6223 0.36887-3.6715 2.8024-4.4218 4.9435-0.61456 4.5778 0.36887 6.6223 2.8024 3.6715 4.9435 4.4218 4.5778 0.61456 6.6223-0.36887" fill="none" stroke="#000" stroke-width="17.42"/>
                            </svg>
                        </button>
                        <label class="checkbox-label" @click="handleValue(v)">{{ label }}</label>
                    </template>
                </div>
            </div>
        </div>
        <!-- Slider -->
        <div
                v-else-if="isSlider"
                class="slider-wrapper"
                :id="theId+'-slider'"
                :style="sliderWrapperStyle"
                @pan="mousePan"
                @mousemove="mouseMove"
                @mousedown="mouseLine"
                @click="focusField">
            <span class="slider-value" v-if="displayNumber">{{ value }}</span>
            <div :id="theId+'-slider'" class="slider-content" @mouseup="mouseStop" :style="sliderContentStyle">
                <button
                        class="slider-dot"
                        :class="{dragging}"
                        :id="theId"
                        :style="dotStyle"
                        :disabled="disabled||isLoading"
                        @keydown.right.prevent.stop="plusDown"
                        @keyup.right.prevent.stop="plusUp"
                        @keydown.up.prevent.stop="plusUp"
                        @keyup.up.prevent.stop="plusDown"
                        @keydown.down.prevent.stop="minusDown"
                        @keyup.down.prevent.stop="minusUp"
                        @keydown.left.prevent.stop="minusDown"
                        @keyup.left.prevent.stop="minusUp"
                        @blur="mouseStop">
                    <span class="slider-dot-label" v-if="showDotLabel&&(value||value==0)" :style="sliderDotLabelStyle">
                        <span class="dot-arrow"></span>
                        <span class="dot-label-content">
                            <span v-if="prefix">{{prefix}}</span>
                            {{ !isNaN(value) && value%1!=0 ? Number.parseFloat(value).toFixed(toFixed) : value }}
                            <span v-if="suffix">{{suffix}}</span>
                        </span>
                    </span>
                </button>
                <div class="slider-line" :style="sliderLineStyle">
                    <template>
                        <div class="slider-step" :class="{restricted, transparent:!showSteps}" v-for="(s,i) in sliderRange" :key="i" :style="buildStepStyle(i)">
                            <div class="slider-step-label" :class="{shy:showStepLabelsOnHover}" v-if="showStepLabels" :style="buildSliderStepLabelStyle(i)">{{ !isNaN(s) && s%1!=0 ? s.toFixed(toFixed) : s }}</div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <!-- Star -->
        <div v-else-if="isStar" :id="theId+'-star-wrapper'" class="star-wrapper" @mouseleave="starOff">
            <template v-for="i in count">
                <svg @mousemove="starOver($event,i)" :key="i" @click="clickStar($event,i)" :class="{hover:starHovered==i, activated:starActive>=i, full:starHovered>=i, active:i==starActive}" version="1.1" viewBox="0 0 13.229 13.229" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="light-to-transparent">
                            <stop offset="0%"  stop-color="var(--color-gray-5)"/>
                            <stop :offset="(dc*100)+'%'"  stop-color="var(--color-gray-5)"/>
                            <stop :offset="(dc*100)+'%'" stop-color="transparent"/>
                            <stop offset="100%" stop-color="transparent"/>
                        </linearGradient>
                        <linearGradient id="active-to-transparent">
                            <stop offset="0%" stop-color="var(--color-primary)"/>
                            <stop :offset="(adc*100)+'%'" stop-color="var(--color-primary)"/>
                            <stop :offset="(adc*100)+'%'" stop-color="transparent"/>
                            <stop offset="100%" stop-color="transparent"/>
                        </linearGradient>
                        <linearGradient id="dark-to-active">
                            <stop offset="0%"  stop-color="var(--color-primary-2)"/>
                            <stop :offset="(dc*100)+'%'"  stop-color="var(--color-primary-2)"/>
                            <stop :offset="(dc*100)+'%'" stop-color="var(--color-primary)"/>
                            <stop offset="100%" stop-color="var(--color-primary)"/>
                        </linearGradient>
                        <linearGradient id="dark-to-transparent">
                            <stop offset="0%"  stop-color="var(--color-primary-2)"/>
                            <stop :offset="(dc*100)+'%'"  stop-color="var(--color-primary-2)"/>
                            <stop :offset="(dc*100)+'%'" stop-color="transparent"/>
                            <stop offset="100%" stop-color="transparent"/>
                        </linearGradient>
                        <linearGradient id="dark-to-light">
                            <stop offset="0%"  stop-color="var(--color-primary-2)"/>
                            <stop :offset="(adc*100)+'%'"  stop-color="var(--color-primary-2)"/>
                            <stop :offset="(adc*100)+'%'" stop-color="var(--color-gray-5)"/>
                            <stop offset="100%" stop-color="var(--color-gray-5)"/>
                        </linearGradient>
                    </defs>
                    <path :style="starStyle(i)" d="m9.8862 11.646c-0.012473 0.009088-3.2554-2.1843-3.2709-2.1843-0.015427 4.5e-6 -3.2574 2.1947-3.2699 2.1857-0.012474-0.009088 1.0714-3.7711 1.0666-3.7857-0.0047713-0.014768-3.0939-2.4198-3.0892-2.4345 0.00477-0.014768 3.9176-0.14639 3.9301-0.15545 0.012474-0.00909 1.3453-3.6902 1.3607-3.6903 0.015427-3.4e-6 1.3498 3.6806 1.3623 3.6897 0.01247 0.00909 3.9253 0.13909 3.9301 0.15377 0.0048 0.014768-3.0833 2.4211-3.0881 2.4358-0.0048 0.014768 1.0807 3.7762 1.0682 3.7853z"/>
                </svg>
            </template>
        </div>
        <!-- Switch -->
        <div v-else-if="isSwitch" class="switch-wrapper" :class="{positif:switchPositif}" @click="toggleSwitch">
            <div v-if="!!switchFirstLabel||switchFirstLabel===0"><span>{{ switchFirstLabel }}</span></div>
            <div class="switch-bloc" :style="switchStyle">
                <button class="slider-dot" :disabled="disabled||isLoading" :class="{positive:switchPositif}" :style="switchDotStyle"></button>
                <div class="switch-line" :class="{positive:switchPositif}"></div>
            </div>
            <div v-if="!!switchSecondLabel||switchSecondLabel===0"><span>{{ switchSecondLabel }}</span></div>
        </div>
        <!-- Select legacy -->
        <select
                v-else-if="isSelect&&legacy"
                class="select-legacy"
                :class="{focus:hasFocus}"
                :disabled="disabled"
                @input="handleInput"
                @focus="handleFocus"
                @blur="handleBlur"
                :name="theId"
                :id="theId">
            <option :value="null" class="option-placeholder" v-if="placeholder||placeholder==''||nullOption" :selected="value===null||value===placeholder||value===''">{{ placeholder }}</option>
            <template v-if="Object.keys(selectedItems).length==1">
                <option
                        v-for="(item,i) in selectedItems[Object.keys(selectedItems)[0]]"
                        :key="i"
                        :selected="isOptionSelected(item,i)"
                        :value="computeOptionValue(item)">
                    {{ computeOptionLabel(item) }}
                </option>
            </template>
            <template v-else-if="Object.keys(selectedItems).length>0">
                <optgroup v-for="(g,groupName,i) in selectedItems" :key="i" :label="groupName">
                    <option
                            v-for="(item,j) in g"
                            :key="j"
                            :selected="isOptionSelected(item,j)"
                            :value="computeOptionValue(item)">
                        {{ computeOptionLabel(item) }}</option>
                </optgroup>
            </template>
        </select>
        <!-- >>> Level 1 wrapper <<< -->
        <div class="eg-input-wrapper" v-else>
            <div
                    class="eg-input-content input-style-wrapper"
                    :class="{
                    'has-icon':hasIcon,
                    'file-check-pad':hasFileCheck&&!isLoading,
                    'number-content':isNumber&&!noButtons,
                    focus:hasFocus,
                    dragging:isDragging,
                    autowidth:autoWidth,
                    small,
                    'has-left-icon':hasLeftIcon}"
                    v-if="!isRadio&&!isCheckbox"
                    :id="theId+'-content'"
                    :style="contentStyle"
                    @ondrop="handleDrop"
                    @click="handleContentClick">
                <!-- Left icon -->
                <div v-if="hasLeftIcon" class="input-icon left-icon" @click.stop="$emit('leftIconClick')">
                    <eg-icon :type="leftIcon"></eg-icon>
                </div>
                <!-- Left icons (inline) -->
                <template v-if="leftIcons.length>0">
                    <div v-for="i in leftIcons" class="input-icon inline-icon inline-left" :key="i">
                        <eg-icon :type="i"></eg-icon>
                    </div>
                </template>
                <!-- Prefix -->
                <span class="prefix" v-if="prefix&&(isText||isNumber)">{{ prefix }}</span>
                <!-- Textarea -->
                <textarea
                        v-if="isTextarea"
                        :class="{'has-icon':hasIcon, 'has-left-icon':hasLeftIcon, 'show-scrollbar':showScrollbar}"
                        :rows="rows"
                        :cols="cols"
                        :id="theId"
                        :name="theId"
                        :type="type"
                        :placeholder="placeholder"
                        :value="value"
                        :disabled="disabled||isLoading"
                        @change="$emit('change', $event.target.value)"
                        @keyup.enter="handleEnter"
                        @keyup.escape="handleEscape"
                        @focus="handleFocus"
                        @blur="handleBlur"
                        @input="handleInput"></textarea>
                <!-- >>> Text input (default) <<< -->
                <template v-else>
                    <!-- Autowidth shadow -->
                    <div v-if="autoWidth && multiple" class="autowidth-shadow" :id="theId+'-autowidth-shadow'">{{ query }}</div>
                    <div v-else-if="autoWidth" class="autowidth-shadow" :id="theId+'-autowidth-shadow'">{{ autoWidthLabel }}</div>
                    <!-- Pills -->
                    <template v-if="hasPills && valueIsArray">
                        <button class="eg-tag" v-for="(p,i) in value" :key="i" @click.stop @mousedown.prevent.stop="handlePillClick(p)" @keyup.enter="handlePillClick(p)">
                            <span>{{ computeOptionLabel(p) }}</span>
                            <div class="cross-pill" @mousedown.prevent.stop="popElement(i)">
                                <svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m22.411 20a2.4002 2.4007 0 0 0-1.6718 4.1227l25.865 25.871-25.89 25.896a2.4009 2.4014 0 1 0 3.3952 3.396l25.89-25.896 25.89 25.896a2.4009 2.4014 0 1 0 3.3952-3.396l-25.89-25.896 25.865-25.871a2.4002 2.4007 0 0 0-1.6718-4.1227 2.4002 2.4007 0 0 0-1.7234 0.72671l-25.865 25.871-25.865-25.871a2.4002 2.4007 0 0 0-1.7234-0.72671z" color="#000000" color-rendering="auto" dominant-baseline="auto" fill-rule="evenodd" image-rendering="auto" shape-rendering="auto" solid-color="#000000" stroke-width=".80008" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
                                </svg>
                            </div>
                        </button>
                    </template>
                    <!-- Date -->
                    <input
                            v-if="isDate"
                            :id="theId"
                            class="transparent"
                            @input="handleInput"
                            :value="inputValue"
                            @focus="handleFocus"
                            @blur="handleBlur"
                            type="text">
                    <!-- Date-range -->
                    <template v-else-if="isDateRange">
                        <!-- From -->
                        <input
                                :id="theId"
                                class="transparent"
                                @input="handleRangeInput('from', $event)"
                                :value="inputFirstValue"
                                @focus="handleFocus"
                                @blur="handleBlur"
                                type="text">
                        <span class="sep" v-if="sep">{{ sep }}</span>
                        <!-- To -->
                        <input
                                :id="theId+'-to'"
                                class="transparent"
                                @input="handleRangeInput('to', $event)"
                                :value="inputLastValue"
                                @focus="handleFocus"
                                @blur="handleBlur"
                                type="text">
                    </template>
                    <!-- Time -->
                    <input
                            v-else-if="isTime"
                            :id="theId"
                            class="transparent"
                            @input="handleInput"
                            :value="inputValue"
                            @focus="handleFocus"
                            @blur="handleBlur"
                            type="text">
                    <!-- Time-range -->
                    <template v-else-if="isTimeRange">
                        <!-- Start time -->
                        <input
                                :id="theId"
                                class="transparent"
                                @input="handleRangeInput('start', $event)"
                                :value="inputFirstValue"
                                @blur="handleBlur"
                                @focus="handleTimeRangeFocus('from', $event)"
                                type="text">
                        <span class="sep" v-if="sep">{{ sep }}</span>
                        <!-- End time -->
                        <input
                                :id="theId+'-end'"
                                class="transparent"
                                @input="handleRangeInput('end', $event)"
                                :value="inputLastValue"
                                @blur="handleBlur"
                                @focus="handleTimeRangeFocus('to', $event)"
                                type="text">
                    </template>
                    <!-- Datetime -->
                    <template v-else-if="isDateTime">
                        <!-- Date -->
                        <input
                                :id="theId"
                                class="transparent"
                                @input="handleRangeInput('date', $event)"
                                :value="inputFirstValue"
                                @focus="handleFocus"
                                @blur="handleBlur"
                                type="text">
                        <!-- Time -->
                        <input
                                :id="theId+'-time'"
                                class="transparent"
                                @input="handleRangeInput('time', $event)"
                                :value="inputLastValue"
                                @focus="handleFocus"
                                @blur="handleBlur"
                                type="text">
                    </template>
                    <!-- Datetime-range -->
                    <template v-else-if="isDateTimeRange">
                        <!-- From -->
                        <input
                                :id="theId"
                                class="transparent"
                                @input="handleRangeInput('from', $event)"
                                :value="inputFirstValue[0]"
                                @focus="handleFocus"
                                @blur="handleBlur"
                                type="text">
                        <!-- Start -->
                        <span class="sep" v-if="startSep">{{ startSep }}</span>
                        <input
                                :id="theId+'start'"
                                class="transparent"
                                @input="handleRangeInput('start', $event)"
                                :value="inputFirstValue[1]"
                                @blur="handleBlur"
                                @focus="handleTimeRangeFocus('from', $event)"
                                type="text">
                        <!-- To -->
                        <span class="sep" v-if="sep">{{ sep }}</span>
                        <input
                                :id="theId+'-to'"
                                class="transparent"
                                @input="handleRangeInput('to', $event)"
                                :value="inputLastValue[0]"
                                @focus="handleFocus"
                                @blur="handleBlur"
                                type="text">
                        <!-- End -->
                        <span class="sep" v-if="endSep">{{ endSep }}</span>
                        <input
                                :id="theId+'-end'"
                                class="transparent"
                                @input="handleRangeInput('end', $event)"
                                :value="inputLastValue[1]"
                                @blur="handleBlur"
                                @focus="handleTimeRangeFocus('to', $event)"
                                type="text">
                    </template>
                    <!-- File -->
                    <button
                            v-else-if="isFile"
                            :disabled="disabled||isLoading"
                            class="file-wrapper"
                            :id="theId+'-file-wrapper'"
                            @focus="handleFocus"
                            @blur="handleBlur"
                            @keyup.enter="clickField">
                        <!-- Placeholder -->
                        <label class="file-placeholder drop-placeholder" :for="theId" v-if="isDragging">{{ dropLabel }}</label>
                        <label class="file-placeholder" :for="theId" v-else-if="Array.isArray(files) && files.length==0">{{ placeholder || "&nbsp;" }}</label>
                        <template v-else-if="files && Array.isArray(files) && files.length==1">
                            <!-- Image -->
                            <span class="file-picture" :id="theId+'-file-0'" v-if="isType('image',files[0])"></span>
                            <span class="file-picture" :id="theId+'-file-0'" v-else-if="oType">
                                <eg-icon :type="getFileType(files[0][oType])"></eg-icon>
                            </span>
                            <!-- Single file -->
                            <label class="file-label" :for="theId">
                                <span class="file-name">{{ files[0] ? files[0][oLabel] : null }}</span>
                                <span class="file-size" v-if="oSize">{{ humanFileSize(files[0][oSize],false) }}</span>
                            </label>
                        </template>
                        <!-- Multiple files -->
                        <label :for="theId" v-else-if="multiple">
                            <span class="file-name">{{ files.length }} {{ filesMultipleLabel }}</span>
                            <span class="file-size" v-if="oSize">{{ humanFileSize(totalSize,false) }}</span>
                        </label>
                        <input type="file" :multiple="multiple" class="invisible" :id="theId" @change="handleChange">
                    </button>
                    <!-- Inner button (fake select) -->
                    <button
                            :id="theId"
                            v-else-if="(isSelect&&!editable&&query===null) || (isNumber&&noInput)"
                            class="inner-input-button"
                            @keyup.down="focusItem(0,-1)"
                            @keyup.right="focusItem(0,-1)"
                            v-html="facadeContent"
                            @focus="handleFocus"
                            @blur="handleBlur"
                            @keyup.enter="handleEnter"
                            @keyup.escape="handleEscape"
                            :style="inputStyle"
                            :disabled="disabled||isLoading">
                    </button>
                    <!-- >>> 'Main input tag' <<< -->
                    <input
                            v-else
                            class="transparent"
                            :class="{
                            'has-icon':hasIcon&&!disabled,
                            'has-left-icon':hasLeftIcon,
                            invisible:isFile}"
                            :id="theId"
                            :name="theId"
                            :type="type"
                            autocomplete="new-password"
                            :placeholder="isSelect&&multiple&&(valueIsArray&&value.length>0)?'':placeholder"
                            :value="inputValue"
                            :style="inputStyle"
                            :multiple="isFile&&multiple"
                            :disabled="disabled||isLoading"
                            @change="handleChange"
                            @keyup.enter="handleEnter"
                            @keyup.escape="handleEscape"
                            @keyup.down="focusItem(0,-1)"
                            @keyup.right="focusItem(0,-1)"
                            @keydown="handleTabAndBack"
                            @focus="handleFocus"
                            @blur="handleBlur"
                            @paste="handleBlur"
                            @input="handleInput">
                </template>
                <!-- Suffix -->
                <span v-if="suffix&&(isText||isNumber)" class="suffix">{{ suffix }}</span>
                <!-- Icons (inline) -->
                <template v-if="icons.length>0">
                    <div v-for="i in icons" class="input-icon inline-icon" :key="i">
                        <eg-icon :type="i"></eg-icon>
                    </div>
                </template>
                <!-- Icons -->
                <div v-if="isNumber&&!noButtons" class="input-icon minus-icon" @mousedown.stop="minusDown" @mouseup.stop="minusUp" @mouseleave.stop="killTimer">
                    <svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path d="m20 47.49v5.0195h60v-5.0195z" color="#000000" color-rendering="auto" dominant-baseline="auto" fill-rule="evenodd" image-rendering="auto" shape-rendering="auto" solid-color="#000000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
                    </svg>
                </div>
                <div v-if="isNumber&&!noButtons" class="input-icon plus-icon" @mousedown.stop="plusDown" @mouseup.stop="plusUp" @mouseleave.stop="killTimer">
                    <svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path d="m47.49 20v27.49h-27.49v5.0195h27.49v27.49h5.0195v-27.49h27.49v-5.0195h-27.49v-27.49h-5.0195z" color="#000000" color-rendering="auto" dominant-baseline="auto" fill-rule="evenodd" image-rendering="auto" shape-rendering="auto" solid-color="#000000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
                    </svg>
                </div>
                <div v-if="hasFileCheck&&!allFilesInvalid&&!isLoading" class="input-icon file-check-icon" @click="submitFiles">
                    <svg fill="none" version="1.1" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <path d="m39.457 9.3008a2.0002 2.0002 0 0 0-1.5176 0.73437s-9.0346 10.887-16.221 24.074c-2.8541-2.7542-5.3164-4.7958-7.0371-5.9434-2.116-1.4112-3.502-1.9102-3.502-1.9102a2.0002 2.0002 0 1 0-1.2832 3.7891s0.71769 0.21431 2.5664 1.4473c1.8487 1.233 4.6517 3.4259 8.2832 7.1953l1.9395 2.0117 1.2793-2.4844c7.0631-13.719 17.037-25.605 17.037-25.605a2.0002 2.0002 0 0 0-1.5449-3.3086z" color="#000000" color-rendering="auto" dominant-baseline="auto" fill="#000" image-rendering="auto" shape-rendering="auto" solid-color="#000000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
                    </svg>
                </div>
                <div v-if="isLoading" class="input-icon eg-loader-wrapper">
                    <div class="eg-loader-container"><div class="eg-loader" :class="{small:isTextarea}"><div class="eg-loader-inside"></div></div></div>
                </div>
                <div v-else-if="displaysSelectCaret" class="input-icon select-caret" :class="{reversed:hasFocus}">
                    <svg fill="none" version="1.1" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <path d="m12.225 16.85 12.5 16.667 12.5-16.667z" fill="#000"/>
                    </svg>
                </div>
                <div v-else-if="icon==='check'" class="input-icon" @click="handleEnter">
                    <eg-icon :type="checkIcon"></eg-icon>
                </div>
                <div v-else-if="icon" class="input-icon">
                    <eg-icon :type="icon"></eg-icon>
                </div>
                <div v-else-if="hasCross&&!disabled" @click.prevent.stop="handleCrossBtn" class="input-icon" :class="{invisible:empty&&!emptyShowCross}">
                    <eg-icon :type="crossIcon"></eg-icon>
                </div>
                <!-- Select panel -->
                <div v-if="selectLike" class="select-panel" :id="theId+'-select-panel'" :class="{visible:hasFocus, date:isDate||isDateRange, time:isTime||isTimeRange, datetime:isDateTime||isDateTimeRange, 'show-scrollbar':showScrollbar, 'dom-level':domLevel, 'top-align':topAlign}" :style="selectResultsStyle">
                    <div class="select-panel-content" v-if="sliderSlot">
                        <slot name="slider"></slot>
                    </div>
                    <div class="calendar-wrapper" v-else-if="isTimeRelated">
                        <calendar
                                v-if="isDate||isDateRange||isDateTime||isDateTimeRange"
                                :value="calendarInput"
                                :range="isDateRange||isDateTimeRange"
                                @input="handleDateTimeCalendar"
                                :format="format"
                                useSelectInput
                                :daysShortNames="daysShortNames"
                                :daysFullNames="daysFullNames"
                                :monthsShortNames="monthsShortNames"
                                :monthsFullNames="monthsFullNames"
                                materialized>
                        </calendar>
                        <div v-if="isTime||isTimeRange||isDateTime||isDateTimeRange" class="timer-wrapper">
                            <div class="timer-content">
                                <template v-if="!showTimePanelVerso">
                                    <div class="time-col">
                                        <span>{{ hoursLabel }}</span>
                                        <div class="time-grid">
                                            <button v-for="i in 24" :key="i" :class="{selected:i==hour}" @click="setTime('hour',i)" @dblclick="hoursTrick(i)">{{ i }}</button>
                                        </div>
                                    </div>
                                    <div class="time-col">
                                        <span>{{ minutesLabel }}</span>
                                        <div class="time-grid">
                                            <button v-for="i in eachFive" :key="i" :class="{selected:i==minute}" @click="setTime('min',i)" @dblclick="minutesTrick(i)">{{ i }}</button>
                                        </div>
                                    </div>
                                    <div class="time-col">
                                        <span>{{ secondsLabel }}</span>
                                        <div class="time-grid">
                                            <button v-for="i in eachFive" :key="i" :class="{selected:i==second}" @click="setTime('sec',i)">{{ i }}</button>
                                        </div>
                                    </div>
                                </template>
                                <template v-else>
                                    <div class="time-col">
                                        <span>{{ hoursLabel }}</span>
                                        <div class="time-grid">
                                            <button v-for="i in 24" :key="i" :class="{selected:i==hour2}" @click="setTime('hour',i,0,1)" @dblclick="hoursTrick(i,1)">{{ i }}</button>
                                        </div>
                                    </div>
                                    <div class="time-col">
                                        <span>{{ minutesLabel }}</span>
                                        <div class="time-grid">
                                            <button v-for="i in eachFive" :key="i" :class="{selected:i==minute2}" @click="setTime('min',i,0,1)" @dblclick="minutesTrick(i,1)">{{ i }}</button>
                                        </div>
                                    </div>
                                    <div class="time-col">
                                        <span>{{ secondsLabel }}</span>
                                        <div class="time-grid">
                                            <button v-for="i in eachFive" :key="i" :class="{selected:i==second2}" @click="setTime('sec',i,0,1)">{{ i }}</button>
                                        </div>
                                    </div>
                                </template>
                            </div>
                            <div v-if="isTimeRange||isDateTimeRange" class="timer-footer">
                                <button @click="showTimePanelVerso=false" :class="{selected:!showTimePanelVerso}">{{ startingTimeLabel }}</button>
                                <button @click="showTimePanelVerso=true" :class="{selected:showTimePanelVerso}">{{ endingTimeLabel }}</button>
                            </div>
                        </div>
                    </div>
                    <div class="select-panel-content timer-wrapper" v-else-if="isTime||isTimeRange">
                        <template v-if="!showTimePanelVerso">
                            <div class="time-col">
                                <span>{{ hoursLabel }}</span>
                                <div class="time-grid">
                                    <button v-for="i in 24" :key="i" :class="{selected:i==hour}" @click="setTime('hour',i)" @dblclick="hoursTrick(i)">{{ i }}</button>
                                </div>
                            </div>
                            <div class="time-col">
                                <span>{{ minutesLabel }}</span>
                                <div class="time-grid">
                                    <button v-for="i in eachFive" :key="i" :class="{selected:i==minute}" @click="setTime('min',i)" @dblclick="minutesTrick(i)">{{ i }}</button>
                                </div>
                            </div>
                            <div class="time-col">
                                <span>{{ secondsLabel }}</span>
                                <div class="time-grid">
                                    <button v-for="i in eachFive" :key="i" :class="{selected:i==second}" @click="setTime('sec',i)">{{ i }}</button>
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <div class="time-col">
                                <span>{{ hoursLabel }}</span>
                                <div class="time-grid">
                                    <button v-for="i in 24" :key="i" :class="{selected:i==hour2}" @click="setTime('hour',i,0,1)" @dblclick="hoursTrick(i,1)">{{ i }}</button>
                                </div>
                            </div>
                            <div class="time-col">
                                <span>{{ minutesLabel }}</span>
                                <div class="time-grid">
                                    <button v-for="i in eachFive" :key="i" :class="{selected:i==minute2}" @click="setTime('min',i,0,1)" @dblclick="minutesTrick(i,1)">{{ i }}</button>
                                </div>
                            </div>
                            <div class="time-col">
                                <span>{{ secondsLabel }}</span>
                                <div class="time-grid">
                                    <button v-for="i in eachFive" :key="i" :class="{selected:i==second2}" @click="setTime('sec',i,0,1)">{{ i }}</button>
                                </div>
                            </div>
                        </template>
                    </div>
                    <template v-if="Object.keys(selectedItems).length>0">
                        <ul class="item-group" v-if="nullOption">
                            <li
                                    :tabindex="tabindex?0:-1"
                                    @keyup.up="focusItem(i,j,true)"
                                    @keyup.left="focusItem(0,0,true)"
                                    @keyup.down="focusItem(0,0)"
                                    @keyup.right="focusItem(0,0)"
                                    @keydown.enter.prevent.stop="selectItem($event, null, null)"
                                    @mousedown.prevent="selectItem($event, null, null)"
                                    class="select-item"
                                    :class="{selected:isInList(null)}"
                                    :data-group="0"
                                    :disabled="disabled||isLoading"
                                    :data-item="0">
                                <div class="list-item" :class="{'opt-group':isOptGroup}">
                                    <span class="content">{{ placeholder }}</span>
                                </div>
                            </li>
                        </ul>
                        <template v-for="(g,groupName,i) in selectedItems">
                            <span class="item-group-label" v-if="groupName!=0" :key="i+guid(2)">{{ groupName }}</span>
                            <ul class="item-group" :key="i+guid(2)">
                                <li
                                        :tabindex="tabindex?0:-1"
                                        v-for="(item,j) in g"
                                        :key="j+guid(2)"
                                        @keyup.up="focusItem(nullOption?i+1:i,nullOption?j+1:j,true)"
                                        @keyup.left="focusItem(nullOption?i+1:i,nullOption?j+1:j,true)"
                                        @keyup.down="focusItem(nullOption?i+1:i,nullOption?j+1:j)"
                                        @keyup.right="focusItem(nullOption?i+1:i,nullOption?j+1:j)"
                                        @keydown.enter.prevent.stop="selectItem($event, item, j)"
                                        @mousedown.prevent="selectItem($event, item, j)"
                                        @blur="handleListItemBlur"
                                        class="select-item"
                                        :class="{selected:isInList(item)}"
                                        :data-group="nullOption?i+1:i"
                                        :disabled="disabled||isLoading"
                                        :data-item="nullOption?j+1:j">
                                    <template v-if="hasDefaultSlot">
                                        <slot class="list-item" :item="item"></slot>
                                    </template>
                                    <div v-else class="list-item" :class="{'opt-group':isOptGroup, empty:!item}">
                                        <span class="content">{{ computeOptionLabel(item) }}</span>
                                    </div>
                                </li>
                            </ul>
                        </template>
                    </template>
                    <div class="select-panel-content" v-else-if="noItemLabel">
                        <span>{{ noItemLabel }}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Messages -->
        <div class="messages-zone" v-if="showMessagesZone">
            <div class="message-counter" :class="{error:counterError}" v-if="hasCounter">{{valueCount}} / {{counter}}</div>
            <ul v-if="displayedErrorMessages.length>0" class="message message-list" :class="{shorter:multiple}">
                <li v-for="m in displayedErrorMessages" :key="m">{{ m }}</li>
            </ul>
            <ul v-else-if="messages.length>0" class="message message-list" :class="{shorter:multiple}">
                <li v-for="m in messages" :key="m">{{ m }}</li>
            </ul>
            <div v-else-if="hasMessage" class="message" v-html="displayedErrorMessage||message"></div>
        </div>
        <!-- Multiple files -->
        <div class="file-list" v-if="isFile && files.length>1">
            <div class="file-element-wrapper" v-for="(f,i) in files" :key="i">
                <div class="file-element" :class="{loaded:fileIsInValue(f), error:f.unvalid}" tabindex="0">
                    <div class="file-content" :class="{'has-icon':hasIcon, 'file-check-pad':hasFileCheck&&!f.unvalid}">
                        <span class="file-picture" :id="theId+'-file-'+i" v-if="isType('image',f)"></span>
                        <span class="file-picture" :id="theId+'-file-'+i" v-else>
                            <eg-icon :type="getFileType(f[oType])"></eg-icon>
                        </span>
                        <span class="file-name">{{ f[oLabel] }}</span>
                        <span class="file-size" v-if="oSize">{{ humanFileSize(f[oSize],false) }}</span>
                    </div>
                    <div v-if="!fileIsInValue(f)&&!f.unvalid" class="input-icon file-check-icon" @click="submitFile(f)">
                        <svg fill="none" version="1.1" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <path d="m39.457 9.3008a2.0002 2.0002 0 0 0-1.5176 0.73437s-9.0346 10.887-16.221 24.074c-2.8541-2.7542-5.3164-4.7958-7.0371-5.9434-2.116-1.4112-3.502-1.9102-3.502-1.9102a2.0002 2.0002 0 1 0-1.2832 3.7891s0.71769 0.21431 2.5664 1.4473c1.8487 1.233 4.6517 3.4259 8.2832 7.1953l1.9395 2.0117 1.2793-2.4844c7.0631-13.719 17.037-25.605 17.037-25.605a2.0002 2.0002 0 0 0-1.5449-3.3086z" color="#000000" color-rendering="auto" dominant-baseline="auto" fill="#000" image-rendering="auto" shape-rendering="auto" solid-color="#000000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
                        </svg>
                    </div>
                    <div v-if="hasCross" @click="removeFileFromList(f)" class="input-icon" :class="{invisible:empty&&!emptyShowCross}">
                        <svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path d="m22.411 20a2.4002 2.4007 0 0 0-1.6718 4.1227l25.865 25.871-25.89 25.896a2.4009 2.4014 0 1 0 3.3952 3.396l25.89-25.896 25.89 25.896a2.4009 2.4014 0 1 0 3.3952-3.396l-25.89-25.896 25.865-25.871a2.4002 2.4007 0 0 0-1.6718-4.1227 2.4002 2.4007 0 0 0-1.7234 0.72671l-25.865 25.871-25.865-25.871a2.4002 2.4007 0 0 0-1.7234-0.72671z" color="#000000" color-rendering="auto" dominant-baseline="auto" fill-rule="evenodd" image-rendering="auto" shape-rendering="auto" solid-color="#000000" stroke-width=".80008" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
                        </svg>
                    </div>
                </div>
                <ul v-if="f.unvalid" class="message message-list">
                    <li v-for="m in f.errors" :key="m">{{ m }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Hammer from 'hammerjs'
    import Calendar from '../calendar/Calendar'

    export default {
        components: {
            Calendar
        },
        props: {
            // global
            type: { type: String, default: "text", validator: (value) => [
                    'text',
                    'textarea',
                    'select',
                    'checkbox',
                    'radio',
                    'switch',
                    'number',
                    'file',
                    'date',
                    'time',
                    'time-range',
                    'datetime',
                    'date-range',
                    'datetime-range',
                    'slider',
                    'star',
                    // natives
                    'password',
                    'color',
                    'range',
                    'datetime-local',
                ].indexOf(value) !== -1
            },
            value: {},
            label: { type: String, default: null },
            id: { type: String, default: null },
            idSeed: { type: Boolean, default: false },
            autoFocus: { type: Boolean, default: false },
            useHammer: { type: Boolean, default: true },

            // states
            legacy: { type: Boolean, default: false },
            disabled: { type: Boolean, default: false },
            error: { type: Boolean, default: false },
            loading: { type: Boolean, default: false },

            // messages
            message: { type: String, default: null },
            messages: { type: Array, default(){ return [] } },
            errorMessage: { type: String, default: null },
            errorMessages: { type: Array, default(){ return [] } },

            // style
            minWidth: { type: Number, default: 10 },
            width: { type: String, default: null },
            autoWidth: { type: Boolean, default: false },
            widthBasis: { type: Number, default: 10 },
            small: { type: Boolean, default: false },
            transparent: { type: Boolean, default: false },

            // events
            eChange: { type: Boolean, default: false },
            eFocus: { type: Boolean, default: false },
            eBlur: { type: Boolean, default: false },
            eTagClick: { type: Boolean, default: false },
            eEscape: { type: Boolean, default: false },

            // text
            placeholder: { default: null },
            prefix: { type: String, default: null },
            suffix: { type: String, default: null },
            regex: { default: null },
            strongRegex: { type: Boolean, default: false },
            weakRegex: { type: Boolean, default: false },
            rules: { type: Array, default(){return []} },
            icon: { type: String, default: null },
            icons: { type: Array, default(){return []} },
            leftIcon: { type: String, default: null },
            leftIcons: { type: Array, default(){return []} },
            crossIcon: { type: String, default: 'cross' },
            checkIcon: { type: String, default: 'check' },
            deleteCross: { type: Boolean, default: true },
            emptyShowCross: { type: Boolean, default: false },
            counter: { default: null },
            counterLock: { type: Boolean, default: true },
            counterWords: { type: Boolean, default: false },
            counterSeparator: { type: String, default: ' ' },

            // textarea
            rows: { default: 2 },
            cols: { default: null },
            autoHeight: { type: Boolean, default: false },
            showScrollbar: { type: Boolean, default: true },

            // radio
            elements: { type: Object, default(){return {}}},

            // select
            list: { type: Array, default(){return[]} },
            optGroups: {type: Object, default(){return{}} },
            multiple: { type: Boolean, default: false },
            editable: { type: Boolean, default: false },
            maxHeight: { type: String, default: "300px" },
            menuMinWidth: { default: 200 },
            menuSpace: { default: 2 },
            restrictToOptions: { type: Boolean, default: true },
            tabindex: { type: Boolean, default: false },
            oLabel: { type: String, default: "name" },
            oValue: { type: String, default: null },
            oValueIndex: { type: Boolean, default: false },
            oId: { type: String, default: null },
            emitObject: { type: Boolean, default: false },
            nullOption: { type: Boolean, default: false },
            domLevel: { type: Boolean, default: false },
            domParentId: { type: String, default: "app" },
            rightAlign: { type: Boolean, default: false },
            topAlign: { type: Boolean, default: false },
            displayOver: { type: Boolean, default: false },

            // slider
            steps: { type: Number, default: null },
            dotSize: { type: Number, default: 25 },
            toFixed: {type: Number, default: 2},
            stepless: {type: Boolean, default: false},
            displayNumber: {type: Boolean, default: false},
            showDotLabel: {type: Boolean, default: true},
            showSteps: {type: Boolean, default: true},
            showStepLabels: {type: Boolean, default: true},
            showStepLabelsOnHover: {type: Boolean, default: false},
            restricted: {type: Boolean, default: false},
            showLabelEach: {type: Number, default: null},
            minLabelWidth: {type: Number, default: 20},
            showLabelOffset: {type: Number, default: 2},
            precision: {type: Number, default: 5},
            labelMaxWidth: {type: Number, default: 0},

            // file
            oSize: { type: String, default: null },
            oType: { type: String, default: "type" },
            oUrl: { type: String, default: "url" },
            maxSize: { type: Number, default: null }, // kb: x1024, mb: x1024x1024, gb: x1024x1024x1024
            extensions: { type: Array, default(){ return [] } },
            instant: {type: Boolean, default: false},

            // number
            min: { type: Number, default: null },
            max: { type: Number, default: null },
            increment: { type: Number, default: 1 },
            noInput: { type: Boolean, default: false },
            noButtons: { type: Boolean, default: false },
            startDelay: { type: Number, default: 300 },
            speed: { type: Number, default: 30 },

            // date
            format: { type: String, default: null,
                validator(value) {
                    return [
                        // date
                        'DD.MM.YYYY', 'DD:MM:YYYY', 'DD-MMM-YYYY', 'DD/MM/YYYY',
                        'MM.DD.YYYY', 'MM:DD:YYYY', 'MM-DD-YYYY', 'MM/DD/YYYY',
                        'YYYY.MM.DD', 'YYYY:MM:DD', 'YYYY-MMM-DD', 'YYYY/MM/DD',
                        // time
                        'hh:mm:ss', 'hh:mm', 'hh.mm.ss', 'hh.mm'
                    ].indexOf(value) !== -1
                }
            },

            // datetime & time-range
            sep: { type: String, default: '' },

            // datetime-range
            startSep: { type: String, default: '' },
            endSep: { type: String, default: '' },

            // star
            count: { type: Number, default: 1 },
            noBorder: { type: Boolean, default: false },
            noSteps: { type: Boolean, default: false },
            free: { type: Boolean, default: false },

            // strings
            counterMessage: { type: String, default: "Le compteur a été dépassé !" },
            hoursLabel: { type: String, default: "Heures" },
            minutesLabel: { type: String, default: "Minutes" },
            secondsLabel: { type: String, default: "Secondes" },
            noValidFileMessage: { type: String, default: "Aucun fichier n'est valide" },
            extensionError: { type: String, default: "L'extension du fichier n'est pas valide" },
            maxSizeError: { type: String, default: "La taille du fichier dépasse la taille maximale" },
            filesMultipleLabel: { type: String, default: "fichiers" },
            dropLabel: { type: String, default: "Déposer ici" },
            searchLabel: { type: String, default: "Recherche:" },
            noItemLabel: { type: String, default: "Aucun elements..." },
            startingTimeLabel: { type: String, default: "Début" },
            endingTimeLabel: { type: String, default: "Fin" },
            daysShortNames: { type: Array, default(){ return [ 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim' ] } },
            daysFullNames: { type: Array, default(){ return [ 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche' ] } },
            monthsShortNames: { type: Array, default(){ return [ 'jan', 'fev', 'mars', 'avr', 'mai', 'juin', 'juil', 'aout', 'sept', 'oct', 'nov', 'dec' ] } },
            monthsFullNames: { type: Array, default(){ return [ 'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre' ] } }
        },
        data() {
            return {
                hasFocus: false,
                internErrorMessage: null,
                internErrorMessages: [],
                inputValueWidth: 50, // (autowidth)

                // text
                regexUnvalid: false,

                // file
                flipflop: false,

                // number
                numStartTimer: null,
                numIncInterval: null,
                sliderStepInterval: null,

                // slider
                sliderInterval: null,
                step: 0,
                dragging: false,
                inputWidth: 0,
                inputLeft: 0,
                pixLeft: 0,
                dotStyle: null,
                stepWidth: 0,
                percentageFromLeft: 0.00,
                sliderHammer: null,
                dotHammer: null,

                // select
                hadFocus: false,
                query: null,
                selectResultsStyle: "",
                parentHeight: null,
                parentWidth: null,
                parentTop: null,
                parentLeft: null,
                scrollLength: 0,
                unfocusSelect: false,
                focusFlip: false,

                // file
                files: [],
                preventFileUpdate: false,
                fileTypes: {
                    data: ['csv', 'eml', 'html', 'iso'],
                    doc: ['txt', 'doc', 'docx', 'pdf', 'ppt', 'pptx', 'rtf', 'xls', 'xlsx'],
                    images: ['gif', 'ico', 'jpg', 'jpeg', 'png', 'svg'],
                    archive: ['gzip', 'jar', 'rar', 'zip'],
                    music: ['mp4', 'ogg', 'wav'],
                    font: ['otf'],
                    code: ['css','js','tex','xhtml']
                },
                isDragging: false,

                // date
                lockSelectPanel: false, //
                lastValidValue: null,
                dayIndex: 0,
                monthIndex: 1,
                yearIndex: 2,
                dateSeparator: '.',

                // time
                hour: 0,
                minute: 0,
                second: 0,
                hour2: 0,
                minute2: 0,
                second2: 0,

                // time-range
                showTimePanelVerso: false,

                // star
                starHovered: null,
                spw: 1,
                dc: 0,
                starActive: null,
                adc: 0,
            }
        },
        methods: {
            // @click event handler for .eg-input-content
            handleContentClick(e) {
                if(!this.disabled) {
                    if(this.selectLike && !this.hasFocus) {
                        // check for the caret click
                        let onCaret = false;
                        e.path.forEach(elem => {
                            if(elem.classList && elem.classList.contains('select-caret')) {
                                onCaret = true;
                            }
                        });
                        if(onCaret && !this.hadFocus) {
                            this.focusField();
                        }
                    }
                    else if(this.isTimeRelated) {
                        this.lockSelectPanel = true;
                    }
                    // we prevent the focusField() on the numbers for the plus/minus buttons click
                    else if(!this.isNumber) {
                        this.focusField();
                    }
                    // we set the previous focus marker
                    this.hadFocus = this.hasFocus;
                }
            },
            // @focus event handler for the 'Main input tag'
            handleFocus(e) {
                if(!this.disabled) {
                    this.hasFocus = true;
                    // we emit the focus event if needed
                    if(this.eFocus) this.$emit('focus', e);
                    if(this.selectLike && this.domLevel) {
                        this.$nextTick(() => {
                            this.fetchPositionData();
                        });
                    }
                }
            },
            // @blur event handler for the 'Main input tag'
            handleBlur(e) {
                if(!this.disabled) {
                    if(this.isSelect) {
                        if(this.noInput || !this.editable) {
                            this.looseFocus();
                        }
                        else if(this.multiple && this.query) {
                            this.query = "";
                        }
                        else if(this.isSelect && this.query) {
                            this.query = this.itemToString(this.value);
                        }
                        else if(this.editable && this.restrictToOptions && this.query) {
                            this.query = this.value;
                        }
                    }
                    // we the user quits an not week and regexUnvalid field, the value is set to the last valid one
                    else if(this.isTimeRelated) {
                        if(this.regexUnvalid) {
                            this.regexUnvalid = false;
                            this.eChange ? this.$emit('change', this.lastValidValue) : this.$emit('input', this.lastValidValue);
                        }
                    }
                    // we the user quits an not week and regexUnvalid field, the handleInput() for init is run.
                    else if(this.regexUnvalid && !this.weakRegex) {
                        this.handleInput(false);
                    }
                    // default behaviour is to loose focus
                    else {
                        this.looseFocus();
                    }
                    // we emit the blur event if needed
                    if(this.eBlur) this.$emit('blur', e);
                }
            },
            // handle the cross icon click: empty the field based on the type
            handleCrossBtn(e) {
                // usable only if not disabled
                if(!this.disabled && this.deleteCross) {
                    this.regexUnvalid = false;
                    this.internErrorMessage = null;
                    this.internErrorMessages = [];
                    // for a number, we set the value to min (if specified) or to 0
                    if(this.isNumber) {
                        if(!this.min || this.min == 0) {
                            this.eChange ? this.$emit('change', 0) : this.$emit('input', 0);
                        }
                        else {
                            this.eChange ? this.$emit('change', this.min) : this.$emit('input', this.min);
                        }
                    }
                    // for a select
                    else if(this.isSelect || (this.isText && this.multiple)) {
                        // default behaviour: we emit an empty string
                        if(!this.restrictToOptions && !this.multiple) {
                            this.eChange ? this.$emit('change', "") : this.$emit('input', "");
                            this.query = this.multiple ? "" : null;
                            this.$nextTick(() => {
                                this.focusField();
                            });
                        }
                        // when multiple, we first check the query
                        else if(this.multiple) {
                            // if the query is empty (or no focus), we empty the field by sending an empty array
                            if(this.query && !this.hasFocus) {
                                this.eChange ? this.$emit('change', []) : this.$emit('input', []);
                                this.$nextTick(() => {
                                    this.buildSelectResultsStyle();
                                });
                            }
                            this.query = "";
                        }
                        // if there is a search in progress, we empty the query and focus back on the field
                        else if(this.query !== null) {
                            this.eChange ? this.$emit('change', null) : this.$emit('input', null);
                            this.query = "";
                            this.$nextTick(() => {
                                this.focusField();
                            });
                        }
                        // secure default behaviours
                        else {
                            this.eChange ? this.$emit('change', "") : this.$emit('input', "");
                        }
                    }
                    // for a file, we remove the first file of the list
                    else if(this.isFile) {
                        this.removeFileFromList(this.files[0]);
                    }
                    else {
                        this.regexUnvalid = false;
                        this.eChange ? this.$emit('change', "") : this.$emit('input', "");
                        this.$nextTick(() => {
                            this.focusField();
                            if(this.isTextarea && this.autoHeight) {
                                this.handleAutoResize({target:document.getElementById(this.theId)});
                            }
                        });
                    }
                }
                // if deleteCross is not activated, we only emit enter (the simple icon is used)
                else if(!this.disabled) {
                    this.$emit('enter', e);
                }
            },
            // @keydown event handler on the 'Main input tag', to prevent or allow the 'Tab' or 'Back' key press
            handleTabAndBack(e) {
                if(this.isSelect || (this.isText && this.multiple)) {
                    // if the user hits backspace when the field is empty...
                    if(e.key == "Backspace" && !this.query && this.multiple) {
                        // if multiple, we pop the last element
                        if(this.value.length>0) {
                            let o = JSON.parse(JSON.stringify(this.value));
                            o.pop();
                            this.eChange ? this.$emit('change', o) : this.$emit('input', o);
                        }
                        // otherwise we emit an empty fresh array
                        else {
                            this.eChange ? this.$emit('change', []) : this.$emit('input', []);
                        }
                    }
                }
            },
            // @keyup.enter event handler for the 'Main text input'
            handleEnter(e) {
                // select editable, we select the first elements displayed on the results
                if(this.isSelect && this.restrictToOptions) {
                    let el = document.getElementById(this.theId+'-select-panel').querySelector('[data-group="0"][data-item="0"]');
                    if(el) {
                        let firstOnList = this.selectedItems[Object.keys(this.selectedItems)[0]][0];
                        this.selectItem(false, firstOnList, 0);
                    }
                    if(this.editable && this.query) this.query = "";
                }
                // when the user wants to add a new element (mainly type text)
                else if(this.multiple) {
                    // if there is an error
                    if(!this.weakRegex && this.hasError) {
                        this.query = "";
                    }
                    // we only add the query as option if there is an error. weakRegex can prevent this blocking
                    else {
                        let o = JSON.parse(JSON.stringify(this.value));
                        if(this.query) o.push(this.query);
                        if(!(this.counter && o.length>this.counter)) {
                            this.eChange ? this.$emit('change', o) : this.$emit('input', o);
                        }
                        this.query = "";
                        this.focusField();
                    }
                }
                this.$emit('enter', e);
                this.$emit('change', e);
            },
            // @input event handler. e is the native event or the value (for the checkbox)
            handleInput(e) {
                // usable only if not disabled
                if(!this.disabled) {
                    // for the numbers: the value must be between min and max if specified
                    if(this.isNumber) {
                        let val = Number(e.target.value);
                        if(this.max !== null && val > this.max) val = this.max;
                        if(this.min !== null && val < this.min) val = this.min;
                        this.eChange ? this.$emit('change', val) : this.$emit('input', val);
                        e.target.value = val;
                    }
                    // for the checkboxes
                    else if(this.isCheckbox) {
                        // if multiple is used, we remove the element already selected
                        if(this.multiple) {
                            let o = [];
                            if(this.valueIsArray) {
                                o = JSON.parse(JSON.stringify(this.value));
                            }
                            o.indexOf(e) >= 0 ? o = o.filter(a => a != e) : o.push(e);
                            this.eChange ? this.$emit('change', o) : this.$emit('input', o);
                        }
                        // otherwise we toggle the value
                        else {
                            let val = false;
                            if(this.value === 'false' || !this.value) {
                                val = true;
                            }
                            this.eChange ? this.$emit('change', val) : this.$emit('input', val);
                            this.$emit('click', val);
                        }
                    }
                    // if the counter triggers an error and is hard-locking
                    else if(!this.multiple && this.counterError && this.counterLock) {
                        // if we remove some text, we are allowed to update the value
                        if(e.target.value.length < this.value.length) {
                            this.eChange ? this.$emit('change', e.target.value) : this.$emit('input', e.target.value);
                        }
                        // we reset the value to the biggest correct value
                        else {
                            e.target.value = e.target._value;
                        }
                    }
                    // a regex is defined, we have to check the value
                    else if(!!this.regex || this.isTimeRelated) {
                        this.handleRegex(e);
                    }
                    // multiple regex are passed. We have to check them all
                    else if(this.rules.length > 0 && !this.isFile) {
                        this.handleRules(e);
                    }
                    // no regex, we emit the value normally
                    else {
                        // if the value is an array, we don't emit directly
                        if((this.isSelect && !this.legacy) || (this.isText && this.multiple)) {
                            if(this.isSelect && !this.restrictToOptions && !this.multiple) {
                                this.eChange ? this.$emit('change', e.target.value) : this.$emit('input', e.target.value);
                            }
                            else {
                                this.query = e.target.value;
                            }
                        }
                        else if(this.emitObject) {
                            let val = this.list[e.target.options.selectedIndex];
                            this.eChange ? this.$emit('change', val) : this.$emit('input', val);
                        }
                        else {
                            let val = e.target.value;
                            if(this.oValueIndex) {
                                val = !val ? null : e.target.selectedIndex-1;
                            }
                            this.eChange ? this.$emit('change', val) : this.$emit('input', val);
                        }
                    }
                }
            },
            // handle the regex validation, used by handleInput(). if e === false => validation for the current value
            handleRegex(e) {
                let value = e !== false ? e.target.value : this.value;
                // regex selection
                let regex = this.regex;
                let dateRegex = this.regex;
                let timeRegex = this.regex;
                // for the date and time, the regex is overwritten and weakRegex/strongRegex have no effect
                if(this.isDate || this.isDateRange || this.isDateTime || this.isDateTimeRange) {
                    this.dayIndex = 0;
                    this.monthIndex = 1;
                    this.yearIndex = 2;
                    this.dateSeparator = '.';
                    if(this.format == "DD:MM:YYYY") {
                        dateRegex = /^([0-2][0-9]|(3)[0-1])(:)(((0)[0-9])|((1)[0-2]))(:)\d{4}$/i;
                    }
                    else if(this.format == "DD-MM-YYYY") {
                        dateRegex = /^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)\d{4}$/i;
                    }
                    else if(this.format == "DD/MM/YYYY") {
                        dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
                    }
                    else if(this.format == "MM.DD.YYYY") {
                        this.monthIndex = 0;
                        this.dayIndex = 1;
                        dateRegex = /^(((0)[0-9])|((1)[0-2]))(\.)([0-2][0-9]|(3)[0-1])(\.)\d{4}$/i;
                    }
                    else if(this.format == "MM:DD:YYYY") {
                        this.monthIndex = 0;
                        this.dayIndex = 1;
                        dateRegex = /^(((0)[0-9])|((1)[0-2]))(:)([0-2][0-9]|(3)[0-1])(:)\d{4}$/i;
                    }
                    else if(this.format == "MM-DD-YYYY") {
                        this.monthIndex = 0;
                        this.dayIndex = 1;
                        dateRegex = /^(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])(-)\d{4}$/i;
                    }
                    else if(this.format == "MM/DD/YYYY") {
                        this.monthIndex = 0;
                        this.dayIndex = 1;
                        dateRegex = /^(((0)[0-9])|((1)[0-2]))(\/)([0-2][0-9]|(3)[0-1])(\/)\d{4}$/i;
                    }
                    else if(this.format == "YYYY.MM.DD") {
                        this.yearIndex = 0;
                        this.dayIndex = 2;
                        dateRegex = /^\d{4}(\.)(((0)[0-9])|((1)[0-2]))(\.)([0-2][0-9]|(3)[0-1])$/i;
                    }
                    else if(this.format == "YYYY:MM:DD") {
                        this.yearIndex = 0;
                        this.dayIndex = 2;
                        dateRegex = /^\d{4}(:)(((0)[0-9])|((1)[0-2]))(:)([0-2][0-9]|(3)[0-1])$/i;
                    }
                    else if(this.format == "YYYY-MM-DD") {
                        this.yearIndex = 0;
                        this.dayIndex = 2;
                        dateRegex = /^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/i;
                    }
                    else if(this.format == "YYYY/MM/DD") {
                        this.yearIndex = 0;
                        this.dayIndex = 2;
                        dateRegex = /^\d{4}(\/)(((0)[0-9])|((1)[0-2]))(\/)([0-2][0-9]|(3)[0-1])$/i;
                    }
                    else {
                        dateRegex = /^([0-2][0-9]|(3)[0-1])(\.)(((0)[0-9])|((1)[0-2]))(\.)\d{4}$/i;
                    }
                    regex = dateRegex;
                }
                if(this.isTime || this.isDateTime || this.isTimeRange || this.isDateTimeRange) {
                    if(this.format == "hh.mm") {
                        timeRegex = /^(0[0-9]|1[0-9]|2[0-3]|[0-9])\.[0-5][0-9]$/i;
                    }
                    else if(this.format == "hh.mm.ss") {
                        timeRegex = /^(?:[01]\d|2[0123])\.([012345]\d)\.([012345]\d)$/i;
                    }
                    else if(this.format == "hh:mm") {
                        timeRegex = /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/i;
                    }
                    else if(this.format == "hh:mm:ss") { //
                        timeRegex = /^(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)$/i;
                    }
                    else {
                        timeRegex = /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/i;
                    }
                    regex = timeRegex;
                }
                // forcing the regex selection based on special attributes
                if(e.isDate || e.isFrom || e.isTo) {
                    regex = dateRegex;
                }
                else if(e.isTime || e.isStart || e.isEnd) {
                    regex = timeRegex;
                }
                // time related init validation
                if((this.isDateRange || this.isDateTime || this.isTimeRange) && e === false) {
                    let regex1 = regex;
                    let regex2 = regex;
                    if(this.isDateRange) {
                        regex1 = dateRegex;
                        regex2 = dateRegex;
                    }
                    else if(this.isDateTime) {
                        regex1 = dateRegex;
                        regex2 = timeRegex;
                    }
                    else if(this.isTimeRange) {
                        regex1 = timeRegex;
                        regex2 = timeRegex;
                    }
                    if(this.rangeValueValid) {
                        let regPassTest1 = regex1 !== null && regex1.test(value[0]);
                        let regPassTest2 = regex2 !== null && regex2.test(value[1]);
                        this.lastValidValue = [null,null];
                        if(regPassTest1) {
                            this.regexUnvalid = false;
                            this.lastValidValue[0] = value[0];
                        }
                        if(regPassTest2) {
                            this.regexUnvalid = false;
                            this.lastValidValue[1] = value[1];
                        }
                        if(!regPassTest1 || !regPassTest2) {
                            this.regexUnvalid = true;
                        }
                        if((!this.regexUnvalid || !this.strongRegex)) {
                            if(!this.regexUnvalid || this.weakRegex) {
                                // we cut the time
                                if(this.isDateTime) { this.cutTime(value[1]); }
                                if(this.isTimeRange) { this.cutTime(value); }
                                if(this.isDateTimeRange) { this.cutTime(value); }
                                else this.eChange ? this.$emit('change', value) : this.$emit('input', value);
                            }
                            else {
                                if(!this.eChange) this.$emit('change', value);
                            }
                        }
                        else {
                            this.eChange ? this.$emit('change', value) : this.$emit('input', value);
                        }
                    }
                }
                // special case for the datetime-range
                else if(this.isDateTimeRange && e === false) {
                    if(this.rangeValueValid && this.dateTimeRangeValid) {
                        let d1 = dateRegex.test(value[0][0]);
                        let t1 = timeRegex.test(value[0][1]);
                        let d2 = dateRegex.test(value[1][0]);
                        let t2 = timeRegex.test(value[1][1]);
                        this.lastValidValue = [[null,null],[null,null]];
                        if(d1) { this.lastValidValue[0][0] = value[0][0]; }
                        if(t1) { this.lastValidValue[0][1] = value[0][1]; }
                        if(d2) { this.lastValidValue[1][0] = value[1][0]; }
                        if(t2) { this.lastValidValue[1][1] = value[1][1]; }
                        this.regexUnvalid = !(d1 && t1 && d2 && t2);
                        // same weak/strong regex rules than for the 'regular regex verification'
                        if((!this.regexUnvalid || !this.strongRegex)) {
                            if(!this.regexUnvalid || this.weakRegex) {
                                this.cutTime(value);
                                this.eChange ? this.$emit('change', value) : this.$emit('input', value);
                            }
                            else {
                                if(!this.eChange) this.$emit('change', value);
                            }
                        }
                        else {
                            this.eChange ? this.$emit('change', value) : this.$emit('input', value);
                        }
                    }
                }
                // regular regex verification
                else if(regex instanceof RegExp) {
                    let regPassTest = false;
                    // special case when the range calendar spits out 2 values, considered as one regex verification
                    if(this.valueIsArray && e.isDouble) {
                        regPassTest = regex.test(value[0]) && regex.test(value[1]);
                    }
                    // we only verify if we can
                    else if(value) {
                        regPassTest = regex.test(value);
                    }
                    // the test is passed, or considered as
                    if((regPassTest || !this.strongRegex)) {
                        // the test is really passed or the regex is weak
                        if(regPassTest || this.weakRegex) {
                            this.regexUnvalid = !regPassTest;
                            let l = this.lastValidValue;
                            // we store the last date
                            // datetime
                            if(this.isDateTime && e.isDate) {
                                this.lastValidValue[0] = value;
                                this.eChange ? this.$emit('change', [value,l[1]]) : this.$emit('input', [value,l[1]]);
                            }
                            else if(this.isDateTime && e.isTime) {
                                this.lastValidValue[1] = value;
                                this.eChange ? this.$emit('change', [l[0],value]) : this.$emit('input', [l[0],value]);
                            }
                            // time-range
                            else if(this.isTimeRange && e.isStart) {
                                this.lastValidValue[0] = value;
                                this.eChange ? this.$emit('change', [value,l[1]]) : this.$emit('input', [value,l[1]]);
                            }
                            else if(this.isTimeRange && e.isEnd) {
                                this.lastValidValue[1] = value;
                                this.eChange ? this.$emit('change', [l[0],value]) : this.$emit('input', [l[0],value]);
                            }
                            // date-range
                            else if(this.isDateRange && e.isFrom) {
                                this.lastValidValue[0] = value;
                                this.eChange ? this.$emit('change', [value,l[1]]) : this.$emit('input', [value,l[1]]);
                            }
                            else if(this.isDateRange && e.isTo) {
                                this.lastValidValue[1] = value;
                                this.eChange ? this.$emit('change', [l[0],value]) : this.$emit('input', [l[0],value]);
                            }
                            // datetime-range both dates
                            else if(this.isDateTimeRange && e.isDate) {
                                this.lastValidValue[0][0] = value[0];
                                this.lastValidValue[1][0] = value[1];
                                this.eChange ? this.$emit('change', [[value[0],l[0][1]],[value[1],l[1][1]]]) : this.$emit('input', [[value[0],l[0][1]],[value[1],l[1][1]]]);
                            }
                            // datetime-range
                            else if(this.isDateTimeRange && e.isFrom) {
                                this.lastValidValue[0][0] = value;
                                this.eChange ? this.$emit('change', [[value,l[0][1]],[l[1][0],l[1][1]]]) : this.$emit('input', [[value,l[0][1]],[l[1][0],l[1][1]]]);
                            }
                            else if(this.isDateTimeRange && e.isStart) {
                                this.lastValidValue[0][1] = value;
                                this.eChange ? this.$emit('change', [[l[0][0],value],[l[1][0],l[1][1]]]) : this.$emit('input', [[l[0][0],value],[l[1][0],l[1][1]]]);
                            }
                            else if(this.isDateTimeRange && e.isTo) {
                                this.lastValidValue[1][0] = value;
                                this.eChange ? this.$emit('change', [[l[0][0],l[0][1]],[value,l[1][1]]]) : this.$emit('input', [[l[0][0],l[0][1]],[value,l[1][1]]]);
                            }
                            else if(this.isDateTimeRange && e.isEnd) {
                                this.lastValidValue[1][1] = value;
                                this.eChange ? this.$emit('change', [[l[0][0],l[0][1]],[l[1][0],value]]) : this.$emit('input', [[l[0][0],l[0][1]],[l[1][0],value]]);
                            }
                            // default
                            else {
                                this.lastValidValue = value;
                                // we cut the time
                                if(this.isTime) { this.cutTime(value); }
                                this.eChange ? this.$emit('change', value) : this.$emit('input', value);
                            }
                        }
                        else {
                            this.regexUnvalid = true;
                            if(!this.eChange) {
                                this.$emit('change', value);
                            }
                        }
                    }
                    // the test is failed: we don't emit
                    else {
                        this.regexUnvalid = true;
                        e.target.value = this.value;
                    }
                }
                // no regex is usable
                else if(e instanceof Event) {
                    this.eChange ? this.$emit('change', value) : this.$emit('input', value);
                }
            },
            // handle the rules validation, used by handleInput()
            handleRules(e) {
                let value = e !== false ? e.target.value : this.value;
                if(e !== false && value) {
                    this.internErrorMessages = [];
                    // for each rule, we push the error message in internErrorMessages
                    this.rules.forEach(r => {
                        if(r[0] instanceof RegExp && !r[0].test(value)) {
                            this.internErrorMessages.push(r[1]);
                        }
                    });
                    // we bypass the input and write on query instead of emitting the value
                    if((this.isSelect && this.restrictToOptions) || (this.isText && this.multiple)) {
                        this.query = e.target.value;
                    }
                    // the test is passed, we emit
                    else if(this.internErrorMessages.length <= 0 || !this.strongRegex) {
                        this.eChange && !this.weakRegex ? this.$emit('change', e.target.value) : this.$emit('input', e.target.value);
                    }
                    // the test is failed: we don't emit
                    else {
                        e.target.value = this.value;
                    }
                }
            },
            // wrapper for the handleInput function, wrapping the value in an event-like object
            handleValue(value) {
                if(!this.disabled) {
                    if(this.isSwitch) {
                        this.toggleSwitch();
                    }
                    else {
                        if(this.query !== "" && this.editable) this.query = "";
                        this.handleInput({target:{value}});
                    }
                }
            },
            // set the field as active element
            focusField() {
                if(!this.disabled) {
                    let el = document.getElementById(this.theId);
                    // if lockSelectPanel is true, we do nothing and set is as false for the next call
                    if(el && !this.disabled && !this.lockSelectPanel) {
                        this.hadFocus = true;
                        this.hasFocus = true;
                        el.focus();
                    }
                    else {
                        this.lockSelectPanel = false;
                    }
                }
            },
            // force the click action on the field
            clickField() {
                let el = document.getElementById(this.theId);
                if(el && !this.disabled) el.click();
            },
            // apply the focus if the attribute autoFocus is used
            doFocus() {
                this.$nextTick(() => {
                    let el = document.getElementById(this.theId);
                    if(el) el.focus();
                });
            },

            // > Text
            // remove the element at index i from the array value (used when 'multiple' is true)
            // when using multiple, remove the element at position i from value
            popElement(i) {
                if(!this.disabled) {
                    let o = JSON.parse(JSON.stringify(this.value));
                    o.splice(i,1);
                    this.eChange ? this.$emit('change', o) : this.$emit('input', o);
                    this.$nextTick(() => {
                        this.buildSelectResultsStyle();
                    });
                }
            },
            // compute the needed field width from the autowidth-shadow
            getAutoWidth() {
                this.$nextTick(() => {
                    let el = document.getElementById(this.theId+'-autowidth-shadow');
                    if(el) {
                        this.inputValueWidth = this.isText && this.multiple ? el.clientWidth : el.clientWidth + 10;
                    }
                });
            },
            // @click event handler for the espace typing
            handleEscape(e) {
                if(this.eEscape) {
                    this.$emit('escape',e);
                }
                else {
                    if(this.isSelect) {
                        if(!this.query) {
                            this.query = "";
                        }
                        else {
                            this.looseFocus();
                        }
                    }
                    else {
                        this.handleCrossBtn();
                    }
                }
            },

            // > Textarea
            handleAutoResize(e) {
                let el = document.getElementById(this.theId);
                if(el) {
                    e.target.style.height = 'auto';
                    e.target.style.height = e.target.scrollHeight + (el.offsetHeight - el.clientHeight) + 'px';
                }
            },

            // > Radio
            // @keyup event handler for selecting the previous option on a radio
            selectValueBefore(i) {
                if(!this.isEmpty(this.elements)) {
                    let keys = Object.keys(this.elements);
                    let l = keys.length-1;
                    // take the element before, or the last one
                    i = i > 0 ? i-1 : l;
                    let v = this.elements[keys[i]];
                    this.handleValue(v);
                    // we select the new element
                    let el = document.getElementById(this.theId+'-radio-'+i);
                    if(el) { el.focus(); }
                }
            },
            // @keyup event handler for selecting the next option on a radio
            selectValueAfter(i) {
                if(!this.isEmpty(this.elements)) {
                    let keys = Object.keys(this.elements);
                    let l = keys.length-1;
                    // take the element after, or the first one
                    i = i < l ? i+1 : 0;
                    let v = this.elements[keys[i]];
                    this.handleValue(v);
                    // we select the new element
                    let el = document.getElementById(this.theId+'-radio-'+i);
                    if(el) { el.focus(); }
                }
            },

            // > File
            // get the file type from the extension, containing the MIME type string
            getFileType(extension) {
                if(extension) {
                    // forced types
                    if(extension.indexOf('text') >= 0) {
                        return "txt";
                    }
                    // we run through the fileTypes array
                    for(let p in this.fileTypes) {
                        for(let i=0; i<this.fileTypes[p].length; i++) {
                            let ext = this.fileTypes[p][i];
                            if(extension.indexOf(ext) >= 0) {
                                return ext;
                            }
                        }
                    }
                }
                return null;
            },
            // check if a file is from a specific type, using [oType]
            isType(type, file) {
                let t = this.getFileType(file[this.oType]);
                if(type == "code") return this.fileTypes.code.indexOf(t) >= 0;
                if(type == "data") return this.fileTypes.data.indexOf(t) >= 0;
                if(type == "doc") return this.fileTypes.doc.indexOf(t) >= 0;
                if(type == "image") return this.fileTypes.images.indexOf(t) >= 0;
                if(type == "archive") return this.fileTypes.archive.indexOf(t) >= 0;
                if(type == "music") return this.fileTypes.music.indexOf(t) >= 0;
                return false;
            },
            // @change event handler for the 'Main input tag'
            handleChange(e) {
                if(this.isFile) {
                    this.internErrorMessage = null;
                    let files = e.target.files;
                    let o = [];
                    // files validation
                    for(let i=0; i<files.length; i++) {
                        let f = files[i];
                        let file = {};
                        let errors = [];
                        // name validation
                        if(this.oLabel && f.name && file) file[this.oLabel] = f.name;
                        this.rules.forEach(r => {
                            if(r[0] instanceof RegExp && f.name && !r[0].test(f.name)) {
                                errors.push(r[1]);
                            }
                        });
                        // size validation
                        if(this.oSize) file[this.oSize] = f.size;
                        if(this.maxSize && f.size > this.maxSize) {
                            errors.push(this.maxSizeError +" ("+ this.humanFileSize(f.size,true) +" / "+ this.humanFileSize(this.maxSize,true) +")")
                        }
                        // type (extension) validation
                        if(this.oType) file[this.oType] = f.type;
                        if(this.oType && this.extensions.length > 0) {
                            let type = this.getFileType(f[this.oType]);
                            let found = false;
                            this.extensions.forEach(ext => {
                                if(ext == type) {
                                    found = true;
                                }
                            });
                            if(!found) {
                                errors.push(this.extensionError +" (."+ type +")");
                            }
                        }
                        // we append the errors to the file
                        if(errors.length > 0) {
                            file.unvalid = true;
                            file.errors = errors;
                        }
                        // if the file is an image, we create a preview
                        if(this.isType('image', file)) {
                            this.buildImagePreview(file, i);
                        }
                        file.file = f;
                        o.push(file);
                    }
                    this.files = o;
                    if(this.instant) {
                        if(!this.submitFiles()) {
                            this.internErrorMessage = this.noValidFileMessage;
                            this.files = [];
                        }
                    }
                }
                this.$emit('change', e);
            },
            // create an image preview from a file Object, and inject the preview in the i-th file
            buildImagePreview(file, i) {
                setTimeout(() => {
                    this.$nextTick(() => {
                        let el = document.getElementById(this.theId+'-file-'+i);
                        if(el) {
                            let reader = new FileReader();
                            // the reader will directly update the style using the id
                            reader.onload = (e) => {
                                el.style.backgroundImage = "url(" + e.target.result + ")";
                            };
                            reader.readAsDataURL(file.file);
                        }
                    });
                },10);
            },
            // trigger the @submit event with a file
            submitFile(file) {
                if(!this.fileIsInValue(file)) {
                    let o = this.value;
                    if(!this.valueIsArray) o = [];
                    o.push(file);
                    this.preventFileUpdate = true;
                    this.eChange ? this.$emit('change', o) : this.$emit('input', o);
                    this.$emit('submit', file);
                    setTimeout(() => { this.preventFileUpdate = false; }, 500);
                }
            },
            // trigger the @submit event with all the remaining valid files. return false if there are no files
            submitFiles() {
                if(this.files.length == 1) {
                    this.$emit('submit', this.files);
                    this.eChange ? this.$emit('change', this.files) : this.$emit('input', this.files);
                    return true;
                }
                else if(this.files.length > 1) {
                    let validFiles = this.files.filter(f => !f.unvalid);
                    if(validFiles.length > 0) {
                        let o = [];
                        for(let i=0; i<validFiles.length; i++) {
                            let f = this.files[i];
                            if(!this.fileIsInValue(f)) {
                                o.push(f);
                            }
                        }
                        this.$emit('submit', o);
                        this.eChange ? this.$emit('change', validFiles) : this.$emit('input', validFiles);
                        return true;
                    }
                }
                return false;
            },
            // remove a file from the local file list and trigger @delete
            removeFileFromList(file) {
                if(file) {
                    if(this.fileIsInValue(file)) {
                        this.$emit('delete', file);
                    }
                    this.files = this.files.filter(f => f && f[this.oLabel] != file[this.oLabel]);
                    for(let i=0; i<this.files.length; i++) {
                        this.buildImagePreview(this.files[i], i);
                    }
                }
            },
            // return true if the file passed is in the value array
            fileIsInValue(file) {
                if(!this.valueIsArray) {
                    return this.compareObjects(this.file, this.value);
                }
                else if(this.oLabel) {
                    let sel = [];
                    if(this.oLabel) {
                        sel = this.value.filter(f => f[this.oLabel] != file[this.oLabel]);
                    }
                    else {
                        sel = this.value.filter(f => this.compareObjects(f, file));
                    }
                    return sel.length != this.value.length;
                }
                return false;
            },
            // @ondrop event handler for .eg-input-content, for the drag and drop
            handleDrop(e) {
                e.preventDefault();
            },

            // > Slider
            // build and emit the value based on the slider cursor position, using buildStep(),
            // or if clientX is undefined, compute the value from the current step
            computeMousePosition(clientX) {
                if(clientX !== undefined) {
                    let pxVal = clientX - this.inputLeft;
                    // absolute px to left
                    if(pxVal < (this.dotSize/2)) pxVal = (this.dotSize/2);
                    this.pixLeft = pxVal;
                    // step
                    this.buildStep();
                }
                let range = this.theMax-this.theMin+1;
                let va = (this.step * (((range)/(this.internSteps)))) + this.theMin;
                if(this.list.length > 0) {
                    va = this.list[va-1];
                }
                else if(va > this.theMax) {
                    va = this.theMax;
                }
                this.eChange ? this.$emit('change', va) : this.$emit('input', va);
                if(this.stepless) {
                    this.buildDotStyle();
                }
            },
            // define the 'percentageFromLeft' and 'step' variables
            buildStep() {
                this.percentageFromLeft = ((this.pixLeft-this.dotSize) / (this.inputWidth-this.dotSize)).toFixed(this.precision);
                if(this.percentageFromLeft < 0) this.percentageFromLeft = 0;
                if(this.percentageFromLeft > 1) this.percentageFromLeft = 1;
                let step = Math.round((this.percentageFromLeft) * (this.internSteps));
                this.step = step >= this.internSteps ? this.internSteps - 1 : step;
            },
            // define the 'percentageFromLeft' and 'step' variables, from the value passed
            buildStepFromValue() {
                let position = this.value-this.theMin;
                if(position<0) position = 0;
                if(this.list.length>0) {
                    for(let i=0; i<this.list.length;i++) {
                        if(this.list[i] == this.value) {
                            position = i;
                        }
                    }
                }
                this.percentageFromLeft = ((position) / this.internSteps).toFixed(this.precision);
                if(this.percentageFromLeft < 0) this.percentageFromLeft = 0;
                if(this.percentageFromLeft > 1) this.percentageFromLeft = 1;
                this.step = Math.round(this.percentageFromLeft * (this.internSteps));
                if(this.step > this.internSteps-1) this.step = this.internSteps-1;
            },
            // @mousedown event handler for the .slider-wrapper (only used if !useHammer)
            mouseLine(e) {
                if(!this.useHammer && !this.disabled) {
                    this.computeMousePosition(e.clientX);
                    this.dragging = true;
                }
            },
            // @press event handler for the .slider-content
            mouseTapLine(e) {
                if(!this.disabled) {
                    this.computeMousePosition(e.center.x+(this.dotSize/2));
                    this.dragging = true;
                }
            },
            // @press event handler for the .slider-dot
            mouseTap(e) {
                if(!this.disabled) {
                    this.computeMousePosition(e.center.x+(this.dotSize/2));
                    this.dragging = true;
                    this.getSliderSize();
                    this.buildStepFromValue();
                    this.buildDotStyle();
                }
            },
            // @pan event handler for the .slider-content
            mousePan(e) {
                if(this.dragging && !this.disabled) {
                    this.computeMousePosition(e.center.x+(this.dotSize/2));
                }
            },
            // @mousemove event handler for the .slider-wrapper (only used if !useHammer)
            mouseMove(e) {
                if(this.dragging && !this.useHammer) {
                    this.computeMousePosition(e.clientX);
                }
            },
            // @mouseup event handler for the .slider-content
            mouseStop() {
                this.dragging = false;
                this.killTimer();
                let el = document.getElementById(this.theId);
                if(el) {
                    el.blur();
                }
            },
            // build the slider and switch dot style
            buildDotStyle() {
                let o = "";
                if(this.dotSize) {
                    o += "width:" + this.dotSize + "px;";
                    o += "height:" + this.dotSize + "px;";
                }
                if(this.stepless) {
                    let cor = 0;
                    let left = ((parseFloat(this.percentageFromLeft)+cor)*(this.inputWidth-this.dotSize));
                    if(left < 0) left = 0;
                    o += "left: " + left + "px;";
                }
                else {
                    o += "left: " + (this.stepWidth*(this.step)) + "px;";
                }
                this.dotStyle = o;
            },
            // compute the slider dimensions: inputWidth, inputLeft and stepWidth. Can also build 'step'
            getSliderSize() {
                let el = document.getElementById(this.theId+'-slider');
                if(el) {
                    this.inputWidth = el.offsetWidth;
                    this.inputLeft = el.offsetLeft;
                    this.stepWidth = ((this.inputWidth-(this.dotSize))/(this.internSteps-1));
                }
                if(!this.value) {
                    this.step = 0;
                }
                else if(this.value <= this.theMax && this.value >= this.theMin) {
                    this.buildStep();
                }
            },
            // compute the step (.slider-step) inline style to position it
            buildStepStyle(i) { return "left:" + (this.stepWidth*(i)) + "px;"; },
            // compute the step label (.slider-step-label) inline style to display it
            buildSliderStepLabelStyle(i) {
                if(this.stepWidth < this.minLabelWidth) {
                    let factor = 2;
                    if(this.showLabelEach === null) {
                        let goOn = true;
                        while(goOn) {
                            (this.internSteps/factor)*this.minLabelWidth < this.inputWidth ? goOn = false : factor++;
                            if(factor > 100) {
                                goOn = false;
                            }
                        }
                    }
                    else {
                        factor = this.showLabelEach;
                    }
                    if((((i+this.showLabelOffset)%factor==0) && (i+this.theMin+this.showLabelOffset) > factor && !(i >= this.theMax-factor && factor > 2.5))
                        || (i == this.internSteps-1 // max condition
                            || i == 0) // min condition
                    ) {
                        return "width:" + (factor*this.stepWidth) + "px;";
                    }
                    return "display:none";
                }
                return "width:" + (this.stepWidth*0.75) + "px;";
            },

            // > Select
            // select an item from the select options list
            selectItem(e, item, i) {
                // select with groups
                if(this.multiple) {
                    let unselect = this.valueIsArray && this.value.indexOf(item) >= 0;
                    if(!(this.counter && this.value.length+1>this.counter) || unselect) {
                        let value = this.valueIsArray ? JSON.parse(JSON.stringify(this.value)) : [];
                        // the item is an object. We have to compare using properties
                        if(this.itemIsObject) {
                            // if a label attribute is defined, we try to remove it from the value (array).
                            // if we cannot, we add the item to the value
                            if(this.oValueIndex) {
                                value = i;
                            }
                            else if(this.oValue) {
                                let sel = value.filter(a => a[this.oValue] != item[this.oValue]);
                                sel.length >= value.length ? value.push(item) : value = sel;
                            }
                            else if(this.oLabel) {
                                let sel = value.filter(a => a[this.oLabel] != item[this.oLabel]);
                                sel.length >= value.length ? value.push(item) : value = sel;
                            }
                        }
                        else {
                            // if the item is not in 'value', we add it. We remove it otherwise
                            if(unselect) {
                                value = value.filter(a => a != item)
                            }
                            else {
                                value.push(item)
                            }
                        }
                        // we emit the new value
                        this.eChange ? this.$emit('change', value) : this.$emit('input', value);
                        // if the pills are changing the size of the input, we have to update the results position
                        this.$nextTick(() => {
                            this.buildSelectResultsStyle();
                        });
                    }
                }
                else {
                    // the value in the input field is the visible one (query)
                    if(this.editable && this.query) {
                        this.query = null;
                    }
                    if(this.itemIsObject && !this.emitObject) {
                        if(this.oValue && item[this.oValue]) {
                            this.eChange ? this.$emit('change', item[this.oValue]) : this.$emit('input', item[this.oValue]);
                        }
                        else if(this.oLabel && item[this.oLabel]) {
                            this.eChange ? this.$emit('change', item[this.oLabel]) : this.$emit('input', item[this.oLabel]);
                        }
                    }
                    else {
                        this.eChange ? this.$emit('change', item) : this.$emit('input', item);
                    }
                }
                if(e === false || (!e.ctrlKey && !e.shiftKey)) {
                    this.lockSelectPanel = false;
                    this.looseFocus();
                }
                this.handleChange(item);
            },
            // remove the hasFocus forced focus and blur the active element
            looseFocus() {
                this.$nextTick(() => {
                    let el = document.getElementById(this.theId);
                    if(el) {
                        el.blur();
                        if(!this.lockSelectPanel) {
                            this.hasFocus = false;
                        }
                    }
                });
            },
            // focus the next or previous options (based on backward) from the select options list
            focusItem(i,j,backward) {
                this.lockSelectPanel = true;
                if(this.isSelect) {
                    let keys = Object.keys(this.selectedItems);
                    if(this.isOptGroup) {
                        if(backward) {
                            if(j>0) {
                                j--;
                            }
                            else if(i>0) {
                                i--;
                                j = keys.length;
                            }
                        }
                        else {
                            if(this.selectedItems[keys[i]].length-1 > j) {
                                j++;
                            }
                            else if(keys.length-1 > i) {
                                j = 0;
                                i++;
                            }
                        }
                    }
                    else {
                        if(!!backward && j>0) {
                            j--;
                        }
                        else if(!backward && this.selectedItems[keys[i]].length-1 > j) {
                            j++;
                        }
                    }

                    let el = document.getElementById(this.theId+'-select-panel').querySelector('[data-group="'+i+'"][data-item="'+j+'"]');
                    if(el) {
                        el.focus();
                        this.hasFocus = true;
                    }
                }
            },
            // check if item is in the 'list' prop
            isInList(item) {
                // for the select
                if(this.isSelect) {
                    // options grouped select
                    if(this.isOptGroup) {
                        if(this.multiple && !!this.value) {
                            if(this.oValue) {
                                for(let i=0; i<this.value.length; i++) {
                                    if(this.value[i] && this.value[i][this.oValue] == item[this.oValue]) {
                                        return true;
                                    }
                                }
                            }
                            else if(this.oLabel) {
                                for(let i=0; i<this.value.length; i++) {
                                    if(this.value[i] && this.value[i][this.oLabel] == item[this.oLabel]) {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                    // select with value as objects array
                    if(typeof item === "object" && !!this.value) {
                        for(let i=0; i<this.value.length; i++) {
                            let v = this.value[i];
                            if(v && this.oValue && v[this.oValue] == item[this.oValue]) {
                                return true;
                            }
                            else if(item && v && this.oLabel && v[this.oLabel] == item[this.oLabel]) {
                                return true;
                            }
                        }
                    }
                    // select with value as strings array
                    else if(this.valueIsArray) {
                        return this.value.indexOf(item) >= 0;
                    }
                    // select with value as string/object
                    return typeof item === "object" && !!this.value ? this.compareObjects(item,this.value) : item == this.value;

                }
                // for the checkboxes with multiple option
                else if(this.multiple && this.valueIsArray) {
                    return this.value.indexOf(item) >= 0;
                }
                else {
                    return !!this.value;
                }

            },
            // build the selection options panel (.select-panel) inline style stored in 'selectResultsStyle'
            buildSelectResultsStyle() {
                if(this.hasFocus) {
                    let el = this.$el;
                    if(this.displayOver) el = null;
                    let o = "";
                    if(this.domLevel) {
                        let top = this.parentTop + this.parentHeight - this.scrollLength + this.menuSpace;
                        o += "top:"+top+"px;";
                        let left = this.parentLeft;
                        if(this.rightAlign) {
                            left -= (this.menuMinWidth - this.parentWidth);
                            o += "left:"+left+"px;";
                        }
                        else {
                            o += "left:"+left+"px;";
                        }
                    }
                    else {
                        // top
                        let h = 0;
                        if(el !== null) {
                            h = el.offsetHeight ? el.offsetHeight + this.menuSpace : 45;
                        }
                        if(h > 0) {
                            o += (this.topAlign ? "bottom:" : "top:") + h + "px;";
                        }
                        o += this.rightAlign ? "right:0;" : "left:0;";
                    }
                    // max-height
                    if(this.maxHeight) {
                        o += "max-height: " + this.maxHeight + ";";
                    }
                    // min-width
                    if(this.isTime && this.hasSeconds) {
                        o += "min-width: 250px;";
                    }
                    else if(this.menuMinWidth) {
                        if(this.domLevel) {
                            o += "width:" + this.menuMinWidth + "px;";
                        }
                        // min width fix for the date floating panel
                        else if(this.isDateRange || this.isDate) {
                            o += "min-width:250px;";
                        }
                        else {
                            o += "min-width:" + this.menuMinWidth + "px;";
                        }
                    }
                    if(o != this.selectResultsStyle) {
                        this.selectResultsStyle = o;
                    }
                }
                else {
                    this.selectResultsStyle = "";
                }
            },
            // @mousedown event listener on the select options to prevent the closing
            selectMouseDown(e) {
                if(this.hasFocus) {
                    let in$El = false;
                    let inPanel = false;
                    e.path.forEach(elem => {
                        if(elem.classList) {
                            if(elem.classList.contains('eg-input-wrapper')) {
                                in$El = true;
                            }
                            else if(elem.classList.contains('calendar-header-content')) {
                                in$El = true;
                            }
                            else if(elem.classList.contains('select-panel')) {
                                inPanel = true;
                            }
                        }
                    });
                    this.lockSelectPanel = inPanel;
                    if(!in$El) {
                        this.looseFocus();
                    }
                }
            },
            // return true the value is selected (for legacy)
            isOptionSelected(o,i) {
                if(this.oValueIndex) {
                    return i == this.value;
                }
                else if(this.emitObject && this.valueIsObject) {
                    if(this.oValue && this.value[this.oValue]) {
                        return this.value[this.oValue] === o[this.oValue]
                    }
                    else if(this.oLabel && this.value[this.oLabel]) {
                        return this.value[this.oLabel] === o[this.oLabel]
                    }
                }
                else {
                    return this.value == this.computeOptionLabel(o);
                }
            },
            // return the label to display in a select option
            computeOptionLabel(o) {
                if(!o && this.placeholder)
                    return this.placeholder;
                return this.itemIsObject ? (o[this.oLabel]?o[this.oLabel]:o) : o;
            },
            // return the value to emit when an option is selected
            computeOptionValue(o) {
                if(this.itemIsObject && !this.emitObject) {
                    if(this.oValue && o[this.oValue]) {
                        return o[this.oValue];
                    }
                    else if(this.oLabel && o[this.oLabel]) {
                        return o[this.oLabel];
                    }
                }
                return o;
            },
            // @click event handler for the pills when multiple is true
            handlePillClick(p) {
                if(this.eTagClick) {
                    this.$emit('tagClick', p);
                }
            },
            // format the select item based on oValue or oLabel or emitObject.
            // Item is a select list element or an key attribute (oLabel, oValue).
            itemToString(item) {
                let o = item;
                if(item instanceof String || typeof(item) === "number") {
                    if(this.isOptGroup) {
                        for(let groupName in this.optGroups) {
                            this.optGroups[groupName].forEach(e => {
                                if(this.oLabel && this.oId && item == this.oId) {
                                    o = e[this.oLabel];
                                }
                                if(this.oLabel && this.oValue && item == e[this.oValue]) {
                                    o = e[this.oLabel];
                                }
                                else if(this.oLabel && item == e[this.oLabel]) {
                                    o = e[this.oLabel];
                                }
                            });
                        }
                    }
                    else if(this.list.length>0) {
                        this.list.forEach(e => {
                            if(this.oLabel && this.oValue && item == e[this.oValue]) {
                                o = e[this.oLabel];
                            }
                            else if(this.oLabel && item == e[this.oLabel]) {
                                o = e[this.oLabel];
                            }
                        });
                    }
                }
                else if(item instanceof Object) {
                    if(this.oLabel) {
                        o = item[this.oLabel];
                    }
                    else if(this.oValue) {
                        o = item[this.oValue];
                    }
                }
                if(item instanceof Event) {
                    debugger;
                }
                return o;
            },
            // get the element position on the DOM and set the positionning variables for the floating menu (domLevel)
            fetchPositionData() {
                let el = this.$el;
                if(el) {
                    this.parentHeight = el.clientHeight;
                    this.parentWidth = el.clientWidth;
                    // top and left
                    let go = true;
                    let p = el.offsetParent;
                    let top = el.offsetTop;
                    let left = el.offsetLeft;
                    while(go) {
                        go = !!p;
                        if(go) {
                            top += p.offsetTop;
                            left += p.offsetLeft;
                            p = p.offsetParent;
                        }
                    }
                    this.parentTop = top;
                    this.parentLeft = left;
                    this.buildSelectResultsStyle();
                }
            },
            // @scroll event listener to update the select menu position
            fetchPositionDataDelayed(e) {
                this.scrollLength = e.target.scrollTop;
                this.buildSelectResultsStyle();
            },
            //
            handleListItemBlur(e) {
                if(e.relatedTarget === null || !e.relatedTarget.classList.contains('select-item')) {
                    this.looseFocus();
                    this.hasFocus = false;
                }
            },

            // > Switch & Checkbox
            // toggle and update the witch value and position
            // reverse the boolean value
            toggleSwitch() {
                if(!this.disabled) {
                    let val = this.value;
                    if(this.switchPositif) {
                        val = this.switchValues[Object.keys(this.switchValues)[0]];
                    }
                    else {
                        val = this.switchValues[Object.keys(this.switchValues)[1]];
                    }
                    this.eChange ? this.$emit('change', val) : this.$emit('input', val);
                }
            },
            // action switcher for the checkbox click based on legacy
            handleCheckboxLegacy(c) {
                if(this.legacy) {
                    this.handleInput(c);
                }
                else {
                    this.toggleSwitch(c);
                }
            },
            // @click event handler for the wrapper
            handleWrapperClick() {

            },
            // @mousedown event handler for the wrapper
            handleWrapperMousedown() {
                if(this.hasFocus) {
                    this.focusFlip = true;
                }
            },
            // @mouseup event handler for the wrapper
            handleWrapperMouseup() {
                if(this.focusFlip) {
                    this.focusFlip = false;
                    this.looseFocus();
                }
            },

            // @click event handler for the wrapper
            handleCaretClick() {
                if(!this.disabled) {
                    if(this.hasFocus) {
                        this.hasFocus = false;
                    }
                    else {
                        this.focusField();
                    }
                }
            },

            // > Radio
            // return true if v is equal (weakly) to the value
            // true if the 'v' argument passed is the current value
            checkIfCheck(v) {
                return v == this.value;
            },

            // > Number
            // @keydown.down event handler for the 'Main input tag'
            // @mousedown event handler for the number minus button
            minusDown(e) {
                e.preventDefault();
                if(!this.isSlider) {
                    this.handleLoop(this.increment*-1);
                }
            },
            // @mouseup event handler for the number minus button
            minusUp(e) {
                e.preventDefault();
                this.killTimer();
                if(this.isSlider) {
                    if(this.step>0) this.step--;
                    this.computeMousePosition();
                }
                else {
                    this.handleValue(this.value+this.increment*-1);
                }
            },
            // @mousedown event handler for the number plus button
            plusDown(e) {
                e.preventDefault();
                if(!this.isSlider) {
                    this.handleLoop(this.increment);
                }
            },
            // @mouseup event handler for the number plus button
            plusUp(e) {
                e.preventDefault();
                this.killTimer();
                if(this.isSlider) {
                    if(this.step<this.internSteps) this.step++;
                    this.computeMousePosition();
                }
                else {
                    this.handleValue(this.value+this.increment);
                }
            },
            // clear the time related intervals and timeouts still active and set them to null
            killTimer() {
                if(this.numIncInterval !== null) {
                    clearInterval(this.numIncInterval);
                    this.numIncInterval = null;
                }
                if(this.sliderStepInterval !== null) {
                    clearInterval(this.sliderStepInterval);
                    this.sliderStepInterval = null;
                }
                if(this.numStartTimer !== null) {
                    clearTimeout(this.numStartTimer);
                    this.numStartTimer = null;
                }
            },
            // trigger the value changing after 'startDelay' ms based on 'inc' (the increment, positive or negative)
            handleLoop(inc) {
                this.numStartTimer = setTimeout(() => {
                    if(this.isSlider) {
                        this.sliderStepInterval = setInterval(() => {
                            // todo: still bugged, unused (the slider doesn't stop and glitches on the edges)
                            if(inc>0 && this.step<this.internSteps) this.step++;
                            else if(inc<0 && this.step>0) this.step--;
                            this.buildDotStyle();
                        }, this.speed);
                    }
                    else if(this.isNumber) {
                        this.numIncInterval = setInterval(() => {
                            //let val = this.incrementToFixed > 0 ? parseFloat(this.value) : parseInt(this.value);
                            //if(isNaN(val)) val = this.max;
                            let val = this.value + inc;
                            this.handleInput({target:{value:val}});
                        }, this.speed);
                    }
                }, this.startDelay);
            },

            // > File
            // handle for the @dragover Hammer event on the file input
            fileDragover(e) {
                e.preventDefault()
            },
            // handle for the @dragenter Hammer event on the file input
            fileDragenter(e) {
                e.preventDefault();
                if(!this.disabled)
                    this.isDragging = true;
            },
            // handle for the @dragleave Hammer event on the file input
            fileDragleave(e) {
                e.preventDefault();
                this.isDragging = false;
            },
            // handle for the @drop Hammer event on the file input
            fileDrop(e) {
                e.preventDefault();
                this.isDragging = false;
                if(!this.disabled)
                    this.handleChange({target: {files: e.dataTransfer.files}});
            },

            // > Date-range && Datetime
            // @input event handler for the date-range and datetime input. Wrapper for handleInput.
            handleRangeInput(target, e) {
                if(this.rangeValueValid) {
                    // date
                    if(target == "date") {
                        e.isDate = true;
                        this.handleInput(e);
                    }
                    else if(target == "from") {
                        e.isFrom = true;
                        this.handleInput(e);
                    }
                    else if(target == "to") {
                        e.isTo = true;
                        this.handleInput(e);
                    }
                    // time
                    else if(target == "time") {
                        e.isTime = true;
                        this.handleInput(e);
                    }
                    else if(target == "start") {
                        e.isStart = true;
                        this.handleInput(e);
                    }
                    else if(target == "end") {
                        e.isEnd = true;
                        this.handleInput(e);
                    }
                }
            },
            // @input event handler for the date-range and datetime calendar. Wrapper for handleInput.
            handleDateTimeCalendar(e) {
                this.handleInput({
                    target:{value:e},
                    isDouble: true,
                    isDate: true
                });
            },

            // > Time
            // compute and split the time value or time-range array and store it in the component
            cutTime(t) {
                let usesDoubleTime = this.isTimeRange || this.isDateTimeRange;
                // we test the ':' separator
                let tab = [];
                let tab2 = [];
                // we test the '.' separator
                if(this.isTimeRange && this.rangeValueValid) {
                    if(t[0].indexOf('.') > 0) { tab = t[0].split('.'); }
                    if(t[0].indexOf(':') > 0) { tab = t[0].split(':'); }
                    if(t[1].indexOf('.') > 0) { tab2 = t[1].split('.'); }
                    if(t[1].indexOf(':') > 0) { tab2 = t[1].split(':'); }
                }
                else if(this.isDateTimeRange && this.dateTimeRangeValid) {
                    if(t[0][1].indexOf('.') > 0) { tab = t[0][1].split('.'); }
                    if(t[0][1].indexOf(':') > 0) { tab = t[0][1].split(':'); }
                    if(t[1][1].indexOf('.') > 0) { tab2 = t[1][1].split('.'); }
                    if(t[1][1].indexOf(':') > 0) { tab2 = t[1][1].split(':'); }
                }
                else {
                    if(t.indexOf('.') > 0) { tab = t.split('.'); }
                    if(t.indexOf(':') > 0) { tab = t.split(':'); }
                }
                // hh
                if(tab.length == 1) {
                    this.hour = parseInt(tab[0]);
                    if(usesDoubleTime) {
                        this.hour2 = parseInt(tab2[0]);
                    }
                }
                // hh:mm
                else if(tab.length == 2) {
                    this.hour = parseInt(tab[0]);
                    this.minute = parseInt(tab[1]);
                    if(usesDoubleTime) {
                        this.hour2 = parseInt(tab2[0]);
                        this.minute2 = parseInt(tab2[1]);
                    }
                }
                // hh:mm:ss
                else if(tab.length == 3) {
                    this.hour = parseInt(tab[0]);
                    this.minute = parseInt(tab[1]);
                    this.second = parseInt(tab[2]);
                    if(usesDoubleTime) {
                        this.hour2 = parseInt(tab2[0]);
                        this.minute2 = parseInt(tab2[1]);
                        this.second2 = parseInt(tab2[2]);
                    }
                }
            },
            // emit the time value or time-range array based on the data stored it in the component
            buildTime() {
                let f = this.format;
                let v = this.value;
                // building the time string of the first time data
                if(f == "hh.mm")
                    v = this.pad(this.hour,2) + "." + this.pad(this.minute,2);
                else if(f == "hh.mm.ss")
                    v = this.pad(this.hour,2) + "." + this.pad(this.minute,2) + "." + this.pad(this.second,2);
                else if(f == "hh:mm")
                    v = this.pad(this.hour,2) + ":" + this.pad(this.minute,2);
                else
                    v = this.pad(this.hour,2) + ":" + this.pad(this.minute,2) + ":" + this.pad(this.second,2);
                // building the time string of the second time data
                let v2 = null;
                if(this.isTimeRange || this.isDateTimeRange) {
                    if(f == "hh.mm")
                        v2 = this.pad(this.hour2,2) + "." + this.pad(this.minute2,2);
                    else if(f == "hh.mm.ss")
                        v2 = this.pad(this.hour2,2) + "." + this.pad(this.minute2,2) + "." + this.pad(this.second2,2);
                    else if(f == "hh:mm")
                        v2 = this.pad(this.hour2,2) + ":" + this.pad(this.minute2,2);
                    else
                        v2 = this.pad(this.hour2,2) + ":" + this.pad(this.minute2,2) + ":" + this.pad(this.second2,2);
                }
                // emitting the value built
                if(this.isDateTime) {
                    this.lastValidValue[1] = v;
                    this.eChange ? this.$emit('change', this.lastValidValue) : this.$emit('input', this.lastValidValue);
                }
                else if(this.isTimeRange) {
                    this.lastValidValue = [v,v2];
                    this.eChange ? this.$emit('change', this.lastValidValue) : this.$emit('input', this.lastValidValue);
                }
                else if(this.isDateTimeRange) {
                    let l = this.lastValidValue;
                    this.lastValidValue = [[l[0][0],v],[l[1][0],v2]];
                    this.eChange ? this.$emit('change', this.lastValidValue) : this.$emit('input', this.lastValidValue);
                }
                else {
                    this.eChange ? this.$emit('change', v) : this.$emit('input', v);
                }
            },
            // set one of the time information split and store in the component
            setTime(target, value, noBuild, fromVerso) {
                if(target == "sec") {
                    fromVerso ? this.second2 = value : this.second = value;
                }
                else if(target == "min") {
                    fromVerso ? this.minute2 = value : this.minute = value;
                }
                else if(target == "hour") {
                    fromVerso ? this.hour2 = value : this.hour = value;
                }
                if(!noBuild) {
                    this.buildTime();
                }
            },
            // @dblclick envent handler for the time selector hours
            hoursTrick(value, fromVerso) {
                if(!fromVerso) {
                    this.setTime('hour', value, true);
                    this.setTime('min', 0, true);
                    this.setTime('sec', 0);
                }
                else {
                    this.setTime('hour', value, true, 1);
                    this.setTime('min', 0, true, 1);
                    this.setTime('sec', 0, false, 1);
                }
                if(this.isDateTimeRange || this.isTimeRange) {
                    this.showTimePanelVerso = !this.showTimePanelVerso;
                }
                else {
                    this.lockSelectPanel = false;
                    this.looseFocus();
                }
            },
            // @dblclick envent handler for the time selector minutes
            minutesTrick(value, fromVerso) {
                if(!fromVerso) {
                    this.setTime('min', value, true);
                    this.setTime('sec', 0);
                }
                else {
                    this.setTime('min', value, true, 1);
                    this.setTime('sec', 0, false, 1);
                }
                if(this.isDateTimeRange || this.isTimeRange) {
                    this.showTimePanelVerso = !this.showTimePanelVerso;
                }
                else {
                    this.lockSelectPanel = false;
                    this.looseFocus();
                }
            },

            // > Time range
            handleTimeRangeFocus(target, e) {
                if(target == 'from') {
                    this.showTimePanelVerso = false;
                }
                else if(target == 'to') {
                    this.showTimePanelVerso = true;
                }
                this.handleFocus(e);
            },

            // > Star
            // @click event handler for the star input. Emit the new value based on the position of the cursor.
            clickStar(e,i) {
                this.starOver(e,i);
                let val = 0;
                if(this.steps === null || this.steps == 1) {
                    val = i;
                }
                else if(this.steps > 1 && this.free) {
                    let p = 1 / this.steps;
                    let selJ = 0;
                    for(let j=0; j<=this.steps; j++) {
                        // the first turn will certainly fail
                        if(this.dc < (p*(j))) {
                            selJ = j;
                            break;
                        }
                    }
                    if(selJ) {
                        val = (i-1) + parseFloat(((p * selJ).toFixed(2)));
                    }
                }
                else if(!isNaN(this.dc)) {
                    val = (i-1) + parseFloat(this.dc);
                }
                this.eChange ? this.$emit('change', val) : this.$emit('input', val);
            },
            // @mousemove event handler for the star input individual star. Compute the new hovering position.
            starOver(e,i) {
                // hovered star index refresh
                this.starHovered = (i);
                // position of the cursor from the wiewport left side
                let x = e.clientX;
                // position of the cursor from the component left side
                let d = x - this.inputLeft;
                // percentage from the left (of the component)
                let pl = (d/this.inputWidth).toFixed(6);
                if(pl < 0) pl = 0;
                if(pl > 1) pl = 1;
                this.pixLeft = pl;
                // computed star (svg) pixel width
                this.spw = (this.inputWidth+1) / this.count;
                // distance in pixels from the left of the currently hovered svg
                let localDist = d - ((i-1)*this.spw);
                if(localDist > this.spw-1) localDist = this.spw;
                // distance in percentages from the left of the currently hovered svg
                let dc = (localDist / this.spw).toFixed(2);
                if(dc > 1) dc = 1;
                if(dc < 0) dc = 0;
                // if there are steps
                if(this.steps !== null && this.steps > 0 && !this.free) {
                    let p = 1 / this.steps;
                    let selJ = 0;
                    for(let j=0; j<=this.steps; j++) {
                        // the first turn will certainly fail
                        if(dc < (p*(j))) {
                            selJ = j;
                            break;
                        }
                    }
                    if(selJ) {
                        this.dc = parseFloat((p * selJ).toFixed(2));
                    }
                }
                else {
                    this.dc = dc;
                }
            },
            // @mouseleave event handler for the star input, remove the 'hovered' state.
            starOff() {
                this.pixLeft = 0;
                this.starHovered = null;
            },
            // fetch the displayed size of a star
            getStarSize() {
                let el = document.getElementById(this.theId+'-star-wrapper');
                if(el) {
                    this.inputWidth = el.offsetWidth;
                    this.inputLeft = el.offsetLeft;
                }
            },
            // compute the svg star style to inject
            starStyle(i) {
                let o = "";
                // filling
                if((this.starHovered !== null && i<this.starHovered) && i <this.starActive) {
                    o += "fill:var(--color-gray-2);";
                }
                else if(this.starHovered !== null && i<this.starHovered && i != this.starActive) {
                    o += "fill:var(--color-gray-5);";
                }
                else if(i == this.starHovered || (i == this.starActive && this.value%1!=0)) {
                    // default gradient for the hover and active
                }
                else if(i <= this.starActive) {
                    o += "fill:var(--color-primary);";
                }
                else {
                    o += "fill:transparent;";
                }

                // stroke
                if(this.noBorder) {
                    o += "stroke:transparent;";
                }
                else if(i <= this.starActive) {
                    o += "stroke:var(--color-primary);";
                }
                else {
                    o += "stroke:var(--color-gray-5);";
                }

                // stroke width
                o += "stroke-width: 0.03em";
                return o
            },

            // > Tools
            // create an random id
            guid(size) {
                let S4 = () => (((1+Math.random())*0x10000)|0).toString(16).substring(1);
                let o = "";
                for(let i=0; i<size; i++) {
                    o += S4();
                    if(i<size-1) o += "-";
                }
                return o;
            },
            // return true if obj1 and obj2 are similar
            compareObjects(obj1, obj2) {
                return JSON.stringify(obj1) === JSON.stringify(obj2);
            },
            // return if obj is empty
            isEmpty(obj) {
                for(let key in obj) {
                    if(obj.hasOwnProperty(key))
                        return false;
                }
                return true;
            },
            // translate and amount of bytes to readable file size
            humanFileSize(bytes, si) {
                let thresh = si ? 1000 : 1024;
                if(Math.abs(bytes) < thresh) {
                    return bytes + ' B';
                }
                let units = si
                    ? ['kB','MB','GB','TB','PB','EB','ZB','YB']
                    : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
                let u = -1;
                do {
                    bytes /= thresh;
                    ++u;
                } while(Math.abs(bytes) >= thresh && u < units.length - 1);
                return bytes.toFixed(1)+' '+units[u];
            },
            // remove the accents from a string
            removeDiacritics(s) {
                let defaultDiacriticsRemovalMap = [{ 'base': 'A', 'letters': 'A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F' }, { 'base': 'AA', 'letters': '\uA732' }, { 'base': 'AE', 'letters': '\xC6\u01FC\u01E2' }, { 'base': 'AO', 'letters': '\uA734' }, { 'base': 'AU', 'letters': '\uA736' }, { 'base': 'AV', 'letters': '\uA738\uA73A' }, { 'base': 'AY', 'letters': '\uA73C' }, { 'base': 'B', 'letters': 'B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181' }, { 'base': 'C', 'letters': 'C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E' }, { 'base': 'D', 'letters': 'D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\xD0' }, { 'base': 'DZ', 'letters': '\u01F1\u01C4' }, { 'base': 'Dz', 'letters': '\u01F2\u01C5' }, { 'base': 'E', 'letters': 'E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E' }, { 'base': 'F', 'letters': 'F\u24BB\uFF26\u1E1E\u0191\uA77B' }, { 'base': 'G', 'letters': 'G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E' }, { 'base': 'H', 'letters': 'H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D' }, { 'base': 'I', 'letters': 'I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197' }, { 'base': 'J', 'letters': 'J\u24BF\uFF2A\u0134\u0248' }, { 'base': 'K', 'letters': 'K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2' }, { 'base': 'L', 'letters': 'L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780' }, { 'base': 'LJ', 'letters': '\u01C7' }, { 'base': 'Lj', 'letters': '\u01C8' }, { 'base': 'M', 'letters': 'M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C' }, { 'base': 'N', 'letters': 'N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4' }, { 'base': 'NJ', 'letters': '\u01CA' }, { 'base': 'Nj', 'letters': '\u01CB' }, { 'base': 'O', 'letters': 'O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C' }, { 'base': 'OI', 'letters': '\u01A2' }, { 'base': 'OO', 'letters': '\uA74E' }, { 'base': 'OU', 'letters': '\u0222' }, { 'base': 'OE', 'letters': '\x8C\u0152' }, { 'base': 'oe', 'letters': '\x9C\u0153' }, { 'base': 'P', 'letters': 'P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754' }, { 'base': 'Q', 'letters': 'Q\u24C6\uFF31\uA756\uA758\u024A' }, { 'base': 'R', 'letters': 'R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782' }, { 'base': 'S', 'letters': 'S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784' }, { 'base': 'T', 'letters': 'T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786' }, { 'base': 'TZ', 'letters': '\uA728' }, { 'base': 'U', 'letters': 'U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244' }, { 'base': 'V', 'letters': 'V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245' }, { 'base': 'VY', 'letters': '\uA760' }, { 'base': 'W', 'letters': 'W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72' }, { 'base': 'X', 'letters': 'X\u24CD\uFF38\u1E8A\u1E8C' }, { 'base': 'Y', 'letters': 'Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE' }, { 'base': 'Z', 'letters': 'Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762' }, { 'base': 'a', 'letters': 'a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250' }, { 'base': 'aa', 'letters': '\uA733' }, { 'base': 'ae', 'letters': '\xE6\u01FD\u01E3' }, { 'base': 'ao', 'letters': '\uA735' }, { 'base': 'au', 'letters': '\uA737' }, { 'base': 'av', 'letters': '\uA739\uA73B' }, { 'base': 'ay', 'letters': '\uA73D' }, { 'base': 'b', 'letters': 'b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253' }, { 'base': 'c', 'letters': 'c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184' }, { 'base': 'd', 'letters': 'd\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A' }, { 'base': 'dz', 'letters': '\u01F3\u01C6' }, { 'base': 'e', 'letters': 'e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD' }, { 'base': 'f', 'letters': 'f\u24D5\uFF46\u1E1F\u0192\uA77C' }, { 'base': 'g', 'letters': 'g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F' }, { 'base': 'h', 'letters': 'h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265' }, { 'base': 'hv', 'letters': '\u0195' }, { 'base': 'i', 'letters': 'i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131' }, { 'base': 'j', 'letters': 'j\u24D9\uFF4A\u0135\u01F0\u0249' }, { 'base': 'k', 'letters': 'k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3' }, { 'base': 'l', 'letters': 'l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747' }, { 'base': 'lj', 'letters': '\u01C9' }, { 'base': 'm', 'letters': 'm\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F' }, { 'base': 'n', 'letters': 'n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5' }, { 'base': 'nj', 'letters': '\u01CC' }, { 'base': 'o', 'letters': 'o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275' }, { 'base': 'oi', 'letters': '\u01A3' }, { 'base': 'ou', 'letters': '\u0223' }, { 'base': 'oo', 'letters': '\uA74F' }, { 'base': 'p', 'letters': 'p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755' }, { 'base': 'q', 'letters': 'q\u24E0\uFF51\u024B\uA757\uA759' }, { 'base': 'r', 'letters': 'r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783' }, { 'base': 's', 'letters': 's\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B' }, { 'base': 't', 'letters': 't\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787' }, { 'base': 'tz', 'letters': '\uA729' }, { 'base': 'u', 'letters': 'u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289' }, { 'base': 'v', 'letters': 'v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C' }, { 'base': 'vy', 'letters': '\uA761' }, { 'base': 'w', 'letters': 'w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73' }, { 'base': 'x', 'letters': 'x\u24E7\uFF58\u1E8B\u1E8D' }, { 'base': 'y', 'letters': 'y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF' }, { 'base': 'z', 'letters': 'z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763' }];
                let diacriticsMap = {};
                for (let i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
                    let letters = defaultDiacriticsRemovalMap[i].letters;
                    for (let j = 0; j < letters.length; j++) {
                        diacriticsMap[letters[j]] = defaultDiacriticsRemovalMap[i].base;
                    }
                }
                return s.replace(/[^\u0000-\u007E]/g, function (a) {
                    return diacriticsMap[a] || a;
                });
            },
            // append zeros to 'string' until it reaches the length specified
            pad(string,length) {
                if(string !== null && string !== undefined) {
                    string = string.toString();
                    if(string.length < length) {
                        let o = string;
                        for(let i=0; i<(length-string.length); i++) {
                            o = "0" + o;
                        }
                        return o;
                    }
                }
                return string;
            },
        },
        watch: {
            hasFocus() {
                if(this.selectLike && this.domLevel) {
                    this.fetchPositionData();
                }
                else {
                    this.buildSelectResultsStyle();
                }
            },
            value: {
                immediate: true,
                handler() {
                    if(this.autoWidth) {
                        this.getAutoWidth();
                    }
                    if(this.isSlider) {
                        if(this.editable) {
                            this.query = this.value;
                        }
                        if(!this.dragging) {
                            this.$nextTick(() => {
                                this.getSliderSize();
                                this.buildStepFromValue();
                                this.buildDotStyle();
                            });
                        }
                        else {
                            this.getSliderSize();
                            this.buildStep();
                            this.buildDotStyle();
                        }
                    }
                    else if(this.isStar) {
                        this.starActive = Math.ceil(this.value);
                        this.adc = this.value ? this.value%1 : 0;
                        this.$nextTick(() => {
                            this.getStarSize();
                        });
                    }
                    if(this.editable && this.valueIsString) {
                        this.query = this.value;
                    }
                    if(this.isFile && this.valueIsArray && !this.preventFileUpdate) {
                        this.files = this.value;
                    }
                    else if(this.isFile && !this.valueIsArray && !this.preventFileUpdate) {
                        this.files = [this.value];
                    }
                    if(this.domLevel && this.selectLike) {
                        this.$nextTick(() =>{
                            this.fetchPositionData();
                        });
                    }
                }
            },
            query() {
                if(this.autoWidth) {
                    this.getAutoWidth();
                }
            }
        },
        computed: {
            // compute the id based on the id prop, the label or randomness
            theId() {
                if(this.id) {
                    return this.id;
                }
                else if(this.label) {
                    let o = this.label.replace(/\s+/g, '-').toLowerCase();
                    if(this.idSeed) o += '-' + this.guid(1);
                    return o;
                }
                return this.guid(4);
            },
            // inline style for the main wrapper .eg-input
            style() {
                let style = "";
                if(this.width) {
                    style += "width:" + this.width + ";";
                }
                return style;
            },
            // inline style for the .eg-input-content
            contentStyle() { return this.minWidth?'min-width:'+this.minWidth+'px':null; },
            // inline style for the 'Main input tag'
            inputStyle() {
                if(this.autoWidth) {
                    if((this.isSelect&&!this.editable) || (this.isNumber&&this.noInput)) {
                        return  "width:" + (!isNaN(this.inputValueWidth) ? this.inputValueWidth : this.widthBasis) + "px;";
                    }
                    else {
                        let width = this.inputValueWidth;
                        width += this.widthBasis;
                        if(width < this.minWidth) return null;
                        return "width:" + width + "px;";
                    }
                }
                return null;
            },
            // compute the main container classes
            inputClass() {
                let o = [];
                o.push(this.type);
                if(this.disabled) o.push('disabled');
                if(this.hasError) o.push('error');
                if(this.legacy) o.push('legacy');
                if(this.counter) o.push('has-counter');
                if(this.autoWidth) o.push('auto-width');
                if(this.small) o.push('small');
                if(this.transparent) o.push('transparent');
                if(this.isDate||this.isDateRange||this.isDateTime||this.isDateTimeRange) o.push('date');
                if(this.isTime||this.isDateTime||this.isTimeRange||this.isDateTimeRange) o.push('time');
                return o;
            },
            // type booleans shorthands:
            isCheckbox() { return this.type=='checkbox'; },
            isRadio() { return this.type=='radio'; },
            isTextarea() { return this.type=='textarea'; },
            isText() { return this.type=='text'; },
            isSelect() { return this.type=='select'; },
            isNumber() { return this.type=='number' },
            isFile() { return this.type=='file' },
            isSlider() { return this.type=='slider' },
            isSwitch() { return this.type=='switch' },
            isDate() { return this.type=='date'&&!this.legacy },
            isDateRange() { return this.type=='date-range' },
            isDateTime() { return this.type=='datetime' },
            isTimeRange() { return this.type=='time-range' },
            isDateTimeRange() { return this.type=='datetime-range' },
            isTime() { return this.type=='time'&&!this.legacy },
            isStar() { return this.type=='star' },
            isColor() { return this.type=='color' },
            isTimeRelated() { return this.isDate || this.isDateRange || this.isDateTime || this.isTimeRange || this.isTime || this.isDateTimeRange },
            // compute the value that will be passed to the 'Main input tag'
            // return the type to use
            inputValue() {
                if(this.isSelect || (this.isText && this.multiple)) {
                    if(this.query || this.query === "") {
                        return this.query;
                    }
                    else {
                        return this.itemToString(this.value);
                    }
                }
                else if(this.isFile) {
                    return "";
                }
                return this.value;
            },
            // true if the field is in loading mode
            isLoading() { return this.loading },
            // true if the field is in error mode
            hasError() {
                let o = this.error || !!this.displayedErrorMessage || this.displayedErrorMessages.length>0 || this.regexUnvalid || this.counterError;
                o = o || (this.isFile && this.files.length==1 && this.files[0] && this.files[0].unvalid);
                return o;
            },
            // compute the single error message to display
            displayedErrorMessage() {
                return this.internErrorMessage || this.errorMessage;
            },
            // compute the multiple error messages to display
            displayedErrorMessages() {
                if(this.isFile && this.files.length==1 && this.files[0] && this.files[0].unvalid) {
                    return this.files[0].errors;
                }
                else if(this.internErrorMessages.length > 0) {
                    return this.internErrorMessages;
                }
                return this.errorMessages;
            },
            // true if the counter must be displayed
            hasCounter() { return this.counter && this.valueCount !== null },
            // true if the single message zone must be displayed
            hasMessage() { return !!this.message || !!this.errorMessage || !!this.counter>0 },
            // true if the messages zones (messages and counter) must be displayed
            showMessagesZone() { return this.hasCounter || this.hasMessage || this.displayedErrorMessages.length>0 || this.messages.length>0 },
            // compute the value to be used with the invisible .autowidth-shadow to compute the text size
            autoWidthLabel() {
                if(this.isFile && !this.multiple && this.files && this.files.length > 0 && this.files[0]) {
                    return this.files[0][this.oLabel];
                }
                return this.itemToString(this.value) || this.placeholder;
            },
            // true if the query is the same as the value, or the value label if oValue is used
            queryEqualsValue() {
                return this.query != this.itemToString(this.value);
            },
            // true if a query search is in progress
            isSearching() {
                return this.isSelect && this.query !== null &&
                    this.queryEqualsValue
                    && this.restrictToOptions && !this.hasPills;
            },
            // computed the main label text
            labelText() {
                return this.isSearching ? this.searchLabel : this.label;
            },
            // true if the default slot is used
            hasDefaultSlot() {
                return !!this.$scopedSlots.default;
            },

            // > Text
            // true if a left icon has been passed with the slot named 'icon'
            hasLeftIcon() { return !!this.leftIcon; },
            // true if the input must contains the multiple values as displayed tags (called pills).
            hasPills() { return (this.isSelect || this.isText) && this.multiple },
            // true if 'value' is of the object type
            valueIsArray() { return Array.isArray(this.value) },
            // true if 'value' is of the string type
            valueIsObject() { return typeof(this.value) === "object" && this.value instanceof Object},
            // true if 'value' is of the string type
            valueIsString() { return typeof this.value === 'string' || this.value instanceof String },
            // true if 'query' is of the string type
            queryIsString() { return typeof this.query === 'string' || this.query instanceof String },
            // value to display in the counter
            valueCount() {
                if(this.multiple && this.valueIsArray) {
                    return this.value.length;
                }
                else if(this.counterWords && typeof this.value === "string") {
                    let words = this.sanitizedValue.split(this.counterSeparator);
                    return words.length;
                }
                else {
                    if(typeof this.query === "string" && this.query !== null) {
                        return this.query.length;
                    }
                    else if(typeof this.value === "string" && !!this.value) {
                        return this.value.length;
                    }
                }
                return null;
            },
            // used by value count
            sanitizedValue() {
                if(this.counterSeparator && typeof this.value === "string") {
                    let sep = this.counterSeparator;
                    let regex = new RegExp(sep+'+', 'g');
                    return this.value.trim().replace(regex, sep);
                }
                return this.value;
            },
            // true if the counter is exceeded
            counterError() {
                if(this.valueCount && !!this.counter && !isNaN(this.counter)) {
                    if(this.valueCount > parseInt(this.counter)) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                return false;
            },
            // true if an icon should be displayed on the right of the input
            hasIcon() {
                return this.icon || this.hasCross || this.isLoading;
            },
            // true if the field should display a cross icon
            hasCross() {
                return this.icon==='cross'
                    || (this.deleteCross&&!this.isFile)
                    || (this.deleteCross&&this.isFile&&Array.isArray(this.files)&&this.files.length>0);
            },
            // true if a prefix of suffix is used
            hasPrefix() { return !!this.prefix || !!this.suffix },

            // > Select
            // true if the elements of the array in 'value' are the object type
            // true if the items of 'list' are of the object type
            selectedItems() {
                let items = {};
                if(this.isOptGroup) {
                    for(let label in this.optGroups) {
                        let g = this.optGroups[label];
                        if(this.query && this.queryIsString) {
                            let q = this.removeDiacritics(this.query.toLowerCase());
                            let res = g.filter(e => {
                                if(e && this.itemIsObject) {
                                    if(this.oLabel && typeof e[this.oLabel] === "string") {
                                        if(this.removeDiacritics(e[this.oLabel].toLowerCase()).indexOf(q) >= 0) {
                                            return true;
                                        }
                                    }
                                    if(this.oValue && typeof e[this.oValue] === "string") {
                                        if(this.removeDiacritics(e[this.oValue].toLowerCase()).indexOf(q) >= 0) {
                                            return true;
                                        }
                                    }
                                }
                                else if(e && typeof e === "string")
                                    return this.removeDiacritics(e.toLowerCase()).indexOf(q) >= 0;
                                return false;
                            });
                            if(res.length>0) {
                                items[label] = res;
                            }
                        }
                        else {
                            items[label] = g;
                        }
                    }
                }
                else {
                    if(this.query && this.queryIsString) {
                        let q = this.removeDiacritics(this.query.toLowerCase());
                        let res = this.list.filter(e => {
                            if(e && this.itemIsObject) {
                                if(this.oLabel && typeof e[this.oLabel] === "string") {
                                    if(this.removeDiacritics(e[this.oLabel].toLowerCase()).indexOf(q) >= 0) {
                                        return true;
                                    }
                                }
                                if(this.oValue && typeof e[this.oValue] === "string") {
                                    if(this.removeDiacritics(e[this.oValue].toLowerCase()).indexOf(q) >= 0) {
                                        return true;
                                    }
                                }
                            }
                            else if(e && typeof e === "string")
                                return this.removeDiacritics(e.toLowerCase()).indexOf(q) >= 0;
                            return false;
                        });
                        items[0] = res;
                    }
                    else {
                        items[0] = this.list;
                    }
                }
                return items;
            },
            itemIsObject() {
                if(!this.isOptGroup) {
                    return this.list.length>0 && typeof this.list[0] === "object";
                }
                else {
                    let e = this.optGroups[Object.keys(this.optGroups)[0]];
                    return e.length>0 && typeof e[0] === "object";
                }
            },
            // compute an array of options to display, based on the user's query
            // true if the options groups (optGroups prop) is not empty.
            isOptGroup() { return !this.isEmpty(this.optGroups) },
            // true if the value is empty or if there is no query
            empty() { return !this.value && this.query === null; },
            // true if the select caret must be displayed
            displaysSelectCaret() { return this.selectLike && !this.query && !this.noSelectOptions; },
            // compute the label (mostly the value) to display in the select field
            selectLabel() {
                if(this.value || (this.valueIsArray&&this.value.length==0)) {
                    if(this.multiple) {
                        return "&nbsp;";
                    }
                    else if(this.itemIsObject) {
                        if(this.oLabel && this.value) {
                            return this.value[this.oLabel];
                        }
                        else {
                            return this.value;
                        }
                    }
                    else if(this.value) {
                        return this.value;
                    }
                }
                if(this.placeholder) {
                    return this.placeholder;
                }
                return "&nbsp;";
            },
            // compute the text to display in the non-editable input
            facadeContent() {
                if((!this.value || this.valueIsArray && this.value.length==0) && this.placeholder) {
                    return this.placeholder;
                }
                if(this.isNumber && !isNaN(this.value) && this.value !== true) {
                    return this.value;
                }
                else if(this.isSelect) {
                    return this.selectLabel || this.itemToString(this.value);
                }
                return "&nbsp;";
            },
            // true if the slider slot is used
            sliderSlot() { return !!this.$slots.slider; },
            // true if the slider panel should be displayed
            selectLike() { return this.isSelect || this.isTimeRelated || this.sliderSlot; },
            // true if there is no options provided
            noSelectOptions() {
                if(this.isOptGroup) {
                    return this.isEmpty(this.optGroups);
                }
                else {
                    return this.list.length === 0;
                }
            },

            // > Checkbox
            // compute the list of checkbox elements to display: label prop or list prop is multiple is used
            checkboxes() { return this.multiple ? this.list : [this.label]; },

            // > Slider
            // inline style for the slider line .slider-line
            sliderLineStyle() { return "left:" + (this.dotSize/2) + "px; right:-" + (this.dotSize/2) + "px;"; },
            // inline style for the slider wrapper .slider-wrapper
            sliderWrapperStyle() { return "padding-right: " + (this.dotSize) + "px;"; },
            // inline style for the slider content .slider-content
            sliderContentStyle() { return "height:" + this.dotSize + "px;"; },
            // inline style for the slider content .slider-content
            sliderDotLabelStyle() {
                let o = "bottom: " + (this.dotSize + 10) + "px;";
                if(this.labelMaxWidth)
                    o += "max-width: " + this.labelMaxWidth + "px;";
                return o;
            },
            // compute the steps to use in the slider computations
            internSteps() { return this.steps ? this.steps : (this.theMax-this.theMin+1) },
            // compute the min value to use in computations
            theMin() { return this.list.length > 0 ? 1 : this.min === null ? 0 : this.min },
            // compute the max value to use in computations
            theMax() { return this.list.length > 0 ? this.list.length : this.max === null ? 100 : this.max },
            // compute the array representing all the values the user can select using the slider
            sliderRange() {
                if(this.list.length>0) {
                    return this.list;
                }
                else {
                    let o = [];
                    let unit = (this.theMax-this.theMin+1)/this.internSteps;
                    for(let i=this.theMin; i<=this.theMax; i+=unit) {
                        o.push(i);
                    }
                    return o;
                }
            },

            // > Switch
            // inline style for the switch .switch-bloc
            switchStyle() { return "height: " + (this.dotSize) + "px; width:" + (2*this.dotSize) + "px;"; },
            // inline style for the switch dot .slider-dot (child of .switch-bloc)
            switchDotStyle() { return this.switchPositif ? "left:"+this.dotSize+"px;" : ""; },
            // compute the two-elements object to be used in the switch
            switchValues() {
                let o = {'':false,' ':true};
                if(Object.keys(this.elements).length == 2) {
                    o = this.elements;
                }
                return o;
            },
            // shorthand for the switch first label
            switchFirstLabel() { return Object.keys(this.elements)[0] },
            // shorthand for the switch second label
            switchSecondLabel() { return Object.keys(this.elements)[1] },
            // true if the switch is turned on
            switchPositif() {
                if(this.value == this.switchValues[Object.keys(this.switchValues)[0]]) {
                    return 0;
                }
                else if(this.value == this.switchValues[Object.keys(this.switchValues)[1]]) {
                    return 1;
                }
                return null;
            },

            // > Number
            // compute the toFixed decimal numbers based on the 'increment' prop value
            incrementToFixed() {
                let o = 0;
                let test = this.increment%1;
                while(test < 1) {
                    test = test * 10;
                    o++;
                }
                return o;
            },

            // > File
            // true if at least of the file is valid to upload
            hasFileCheck() {
                if(!this.valueIsArray) {
                    return this.isFile && this.files.length>0 && !this.compareObjects(this.files[0], this.value);
                }
                else if(this.oLabel) {
                    let isInValue = true;
                    for(let i=0; i<this.files.length; i++) {
                        let sel = this.value.filter(f => f[this.oLabel] != this.files[i][this.oLabel]);
                        if(sel.length == this.value.length) {
                            isInValue = false;
                        }
                    }
                    return !isInValue;
                }
                return false;
            },
            // compute the sum of all the file sizes
            totalSize() {
                if(this.oSize && this.files.length > 0) {
                    let o = 0;
                    this.files.forEach(f => o += f[this.oSize]);
                    return o;
                }
                return 0;
            },
            // true if all the files are unvalid
            allFilesInvalid() {
                let o = true;
                this.files.forEach(f => {
                    if(f &&!f.unvalid) {
                        o = false;
                    }
                });
                return o;
            },
            // compute the number of valid files
            unvalidFilesCount() {
                let o = 0;
                this.files.forEach(f => {
                    if(f && f.unvalid) { o++; }
                });
                return o;
            },

            // > Date-range
            // true if value is valid for a range ([.,.])
            rangeValueValid() { return this.valueIsArray && this.value.length == 2 },
            // the value to pass to the calendar
            calendarInput() {
                if(this.isDate || this.isDateTime || this.isDateRange) {
                    return this.value;
                }
                else if(this.rangeValueValid && this.isDateTime) {
                    return this.value[0];
                }
                else if(this.isDateTimeRange && this.dateTimeRangeValid) {
                    return [this.value[0][0],this.value[1][0]];
                }
                // the calendar will not be initialized (no day selected)
                return null;
            },
            // date-range or time-range value of the first element
            inputFirstValue() {
                return this.rangeValueValid ? this.value[0] : null;
            },
            // date-range or time-range value of the last element
            inputLastValue() {
                return this.rangeValueValid ? this.value[1] : null;
            },

            // > Time
            // array containing the multiples of 5 from 0 to 59)
            eachFive() {
                let o = [];
                let a = 0;
                while(a < 60) {
                    o.push(a);
                    a += 5;
                }
                return o;
            },
            // true if the seconds are used in the format
            hasSeconds() {
                return this.format == "hh.mm.ss" || this.format == "hh:mm:ss" || this.format === null;
            },

            // > Datetime-range
            // true if value is valid for a datetime range ([[.,.],[.,.]])
            dateTimeRangeValid() {
                if(this.rangeValueValid) {
                    return this.value[0] instanceof Array && this.value[0].length == 2 && this.value[1] instanceof Array && this.value[1].length == 2;
                }
                return false;
            },
        },
        mounted() {
            if(this.value) {
                if(!!this.regex || this.isTimeRelated) {
                    this.handleRegex(false);
                    this.lastValidValue = this.value;
                }
                // multiple regex are passed. We have to check them all
                else if(this.rules.length > 0 && !this.isFile) {
                    this.handleRules(false);
                }
            }
            if(this.autoFocus) {
                this.doFocus();
            }
            if(this.selectLike) {
                let input = this.$el.getElementsByTagName('input')[0];
                // multiple select
                if(input) {
                    //input.addEventListener('focus', this.focusField());
                    document.addEventListener('mousedown', this.selectMouseDown);
                }
            }
            if(this.isSlider && this.useHammer) {
                if(this.useHammer) {
                    this.sliderHammer = new Hammer(document.getElementById(this.theId + '-slider'));
                    this.sliderHammer.on('pan', this.mousePan);
                    this.sliderHammer.on('press', this.mouseTapLine);
                    this.dotHammer = new Hammer(document.getElementById(this.theId));
                    this.dotHammer.on('press', this.mouseTap);
                }
            }
            if(this.isTextarea && this.autoHeight) {
                this.$nextTick(() => {
                    let el = document.getElementById(this.theId);
                    if(el) {
                        el.style.boxSizing = 'border-box';
                        el.addEventListener('input', this.handleAutoResize);
                        this.handleAutoResize({target:el});
                    }
                });
            }
            if(this.isFile) {
                let el = document.getElementById(this.theId+'-file-wrapper');
                if(el) {
                    el.ondragover = this.fileDragover;
                    el.ondragenter = this.fileDragenter;
                    el.ondragleave = this.fileDragleave;
                    el.ondrop = this.fileDrop;
                }
            }
            if(this.domLevel && this.selectLike) {
                let el = document.getElementById(this.theId+'-select-panel');
                if(el) {
                    let parent = document.getElementById(this.domParentId);
                    if(parent) {
                        this.fetchPositionData();
                        parent.style.position = "relative";
                        parent.prepend(el);
                        // scroll listening
                        let go = true;
                        let maxLevel = 99;
                        let level = 0;
                        let p = this.$el.parentElement;
                        while(go && level < maxLevel) {
                            go = !(!p || p.localName === "body");
                            if(go) {
                                p.addEventListener('scroll', this.fetchPositionDataDelayed);
                                p = p.parentElement;
                                level++;
                            }
                        }
                    }
                }
            }
        },
        destroyed() {
            if(this.selectLike) {
                let input = this.$el.getElementsByTagName('input')[0];
                // multiple select

                if(input) {
                    //input.addEventListener('focus', this.focusField());
                    document.removeEventListener('mousedown', this.selectMouseDown);
                }
            }
            if(this.isSlider && this.useHammer) {
                if(this.useHammer) {
                    this.sliderHammer.off('pan');
                    this.sliderHammer.off('press');
                    this.dotHammer.off('press', this.mouseTap);
                }
            }
            if(this.isTextarea && this.autoHeight) {
                let el = document.getElementById(this.theId);
                if(el) {
                    el.removeEventListener('input', this.handleAutoResize);
                }
            }
            if(this.domLevel && this.selectLike) {
                let el = document.getElementById(this.theId+'-select-panel');
                if(el) {
                    let parent = document.getElementById(this.domParentId);
                    if(parent) {
                        let go = true;
                        let p = this.$el.parentElement;
                        while(go) {
                            go = !(!p || p.localName === "body");
                            if(go) {
                                p.removeEventListener('scroll', this.fetchPositionDataDelayed);
                                p = p.parentElement;
                            }
                        }
                    }
                    el.remove();
                }
            }
        }
    }
</script>