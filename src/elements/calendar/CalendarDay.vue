<style lang="scss">
    $activeColor: #9f2f35;
    $boxShadow: 0 0 0 .2rem rgba(0,0,0,0.05);
    @function getContrastedColor($color) {
        @if (lightness($color) > 50) {
            @return #000000; // Lighter background, return dark color
        } @else {
            @return #f5f5f5; // Darker background, return light color
        }
    }

    .pad-day,
    .calendar-day {
        border: 1px solid rgba(#ccc, 0.3);
        position: relative;
        min-height: 75px;
        padding: 0 10px;
        background-color: transparent;
        font-family: inherit;
        &.materialized {
            min-height: 30px;
            align-items: center;
            border: none;
            position: relative;
            .day-number {
                text-align: center;
                top: 50%;
                transform: translateY(-50%);
                padding: 0;
            }
        }
    }
    .calendar-day {
        cursor: pointer;
        &:focus {
            background-color: #f5f5f5;
            outline: none;
        }
        &.selected {
            border: 1px solid rgba(#ccc, 1);
            color: #000;
            background-color: #f5f5f5;
        }
        &:hover {
            background-color: #f5f5f5;
        }
        .day-number {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: right;
            font-size: 12px;
            color: #696969;
            padding: 5px 10px;
            user-select: none;
            font-family: inherit;
        }
        &.materialized {
            &::after {
                position: absolute;
                content: '';
                height: 35px;
                width: 35px;
                border-radius: 50%;
                border: 1px solid transparent;
                transform: translateX(-50%) translateY(-50%) scale(0.8);
                opacity: 0;
                transition: transform .2s, opacity .2s;
                left: 50%;
                top: 50%;
                z-index: -1;
            }
            &::before {
                position: absolute;
                content: '';
                height: 35px;
                background-color: transparent;
                transform: translateY(-50%);
                left: 0;
                top: 50%;
                right: 0;
                z-index: -1;
            }
            &:focus,
            &:hover {
                background-color: transparent;
            }
            &:hover:not(.range) {
                &::after {
                    opacity: 1;
                    transform: translateX(-50%) translateY(-50%) scale(1);
                }
            }
            &.selected {
                border: none;
                background-color: transparent;
                &:not(.range) {
                    &::after {
                        background-color: $activeColor;
                        opacity: 1;
                        transform: translateX(-50%) translateY(-50%) scale(1);
                    }
                    .day-number {
                        color: getContrastedColor($activeColor);
                    }
                }
                &.range {
                    &::after {
                        opacity: 1;
                        box-shadow: $boxShadow;
                        transform: translateX(-50%) translateY(-50%) scale(1);
                    }
                }
            }
            &.mbound {
                &::before {
                    background-color: rgba($activeColor, 0.1);
                }
            }
            &.lbound {
                .day-number {
                    color: getContrastedColor($activeColor);
                }
                .right-day-zone,
                .left-day-zone {
                    &::after {
                        opacity: 1;
                        background: $activeColor;
                    }
                }
                &.mbound {
                    &::before {
                        background: linear-gradient(to left, rgba($activeColor, 0.1) 0% 51%, rgba(0,0,0,0) 50% 100%);
                    }
                }
            }
            &.rbound {
                .day-number {
                    color: getContrastedColor($activeColor);
                }
                .right-day-zone,
                .left-day-zone {
                    &::after {
                        opacity: 1;
                        background: $activeColor;
                    }
                }
                &.mbound {
                    &::before {
                        background: linear-gradient(to right, rgba($activeColor, 0.1) 0% 51%, rgba(0,0,0,0) 50% 100%);
                    }
                }
            }
            &.rbound.lbound.mbound {
                &::before {
                    background: transparent;
                }
            }
        }
        .left-day-zone {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 50%;
            &::after {
                position: absolute;
                content: '';
                height: 35px;
                width: 35px;
                border-radius: 50%;
                background: linear-gradient(to right, #f5f5f5 0% 50%, rgba(0,0,0,0) 50% 100%);
                transform: translateX(-50%) translateY(-50%);
                transition: opacity .2s;
                left: 100%;
                top: 50%;
                z-index: -1;
                opacity: 0;
            }
            &:hover {
                &::after {
                    opacity: 1;
                }
            }
        }
        .right-day-zone {
            position: absolute;
            top: 0;
            left: 50%;
            bottom: 0;
            right: 0;
            &::after {
                position: absolute;
                content: '';
                height: 35px;
                width: 35px;
                border-radius: 50%;
                background: linear-gradient(to left, #f5f5f5 0% 50%, rgba(0,0,0,0) 50% 100%);
                transform: translateX(50%) translateY(-50%);
                transition: opacity .2s;
                right: 100%;
                top: 50%;
                z-index: -1;
                opacity: 0;
            }
            &:hover {
                &::after {
                    opacity: 1;
                }
            }
        }
    }
</style>

<template>
    <button class="calendar-day" tabindex="1" :class="{selected, materialized, range, lbound, rbound, mbound}" @click="$emit('select', day)" @keyup="$emit('keyup',$event)">
        <slot></slot>
        <span class="day-number">{{ day.day }}</span>
        <span v-if="range" @click="$emit('selectLeft', day)" class="left-day-zone"></span>
        <span v-if="range" @click="$emit('selectRight', day)" class="right-day-zone"></span>
    </button>
</template>

<script>
    export default {
        props: {
            selected: { type: Boolean, default: false },
            materialized: { type: Boolean, default: false },
            range: { type: Boolean, default: false },
            lbound: { type: Boolean, default: false },
            rbound: { type: Boolean, default: false },
            mbound: { type: Boolean, default: false },
            day: { default: null },
        }
    }
</script>