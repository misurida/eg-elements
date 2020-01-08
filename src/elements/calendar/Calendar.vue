<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Encode+Sans+Expanded&display=swap');

    .calendar-input {
        display: flex;
        flex-direction: column;
        label {
            font-size: 0.8em;
            color: #E3E3E3;
            cursor: pointer;
            user-select: none;
            display: block;
            font-family: inherit;
        }
        .calendar-preview-wrapper {
            display: flex;
            flex: 1;
            align-items: baseline;
        }
        .calendar-preview {
            display: grid;
            width: 100%;
            grid-template-columns: repeat(7, 1fr);
            border: 1px solid #ccc;
            font-family: inherit;
        }
        .table-header {
            background-color: #efefef;
            color: darken(#f5f5f5, 50%);
            text-align: center;
            font-size: 12px;
            padding: 5px;
            text-transform: capitalize;
            user-select: none;
        }
        .calendar-header {
            &.full-calendar {
                display: flex;
                text-align: center;
                align-items: center;
            }
            .calendar-header-content {
                flex: 1;
                select {
                    cursor: pointer;
                    border: none;
                    background: transparent;
                    &::-ms-expand {	display: none; }
                    -webkit-appearance: none;
                    appearance: none;
                    text-transform: capitalize;
                    margin: 0 2px;
                    font-family: inherit;
                    font-size: 1rem;
                    &:focus,
                    &:hover {
                        text-decoration: underline;
                        outline: none;
                    }
                }
            }
            .caret {
                padding: 10px;
                display: flex;
                cursor: pointer;
                svg {
                    height: 20px;
                    width: 20px;
                    stroke: #ccc;
                }
                &:hover {
                    opacity: .5;
                }
            }
            .grid-selector-header {
                button {
                    border: none;
                    background-color: transparent;
                    cursor: pointer;
                    text-transform: capitalize;
                    font-family: inherit;
                    &:hover {
                        text-decoration: underline;
                    }
                    &:focus {
                        opacity: 0.5;
                        outline: none;
                    }
                }
            }
            .range-header {
                span {
                    margin: 0 5px;
                    text-transform: capitalize;
                }
            }
        }
        .grid-bloc {
            font-family: inherit;
            flex: 1;
            display: flex;
            flex-direction: column;
        }
        .grid-element {
            border: 1px solid rgba(#ccc, 0.3);
            position: relative;
            height: 60px;
            padding: 0 10px;
            cursor: pointer;
            background-color: transparent;
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
            span {
                font-size: 12px;
                color: #696969;
                padding: 0 5px;
                position: absolute;
                left: 0;
                right: 0;
                text-align: center;
                bottom: 50%;
                transform: translateY(50%);
                text-transform: capitalize;
                user-select: none;
            }
        }
        .grid-header {
            background-color: #efefef;
            color: #696969;
            text-align: center;
            font-size: 12px;
            padding: 5px;
            user-select: none;
        }
        .grid-selector {
            border: 1px solid #ccc;
            display: grid;
            grid-gap: 2px;
            padding: 2px;
            flex: 1;
        }
        .day-grid {
            grid-template-columns: repeat(6, 1fr);
            .grid-header {
                grid-column-end: span 6;
            }
        }
        .month-grid {
            grid-template-columns: repeat(4, 1fr);
            .grid-header {
                grid-column-end: span 4;
            }
        }
        .year-grid {
            grid-template-columns: repeat(6, 1fr);
            .grid-header {
                grid-column-end: span 6;
            }
        }
        .calendar-footer {
            text-align: right;
            padding: 5px;
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
                    outline: none;
                    border: 1px solid #ccc;
                }
            }
            span:first-child {
                float: left;
                padding: 4px 4px;
                font-size: 0.75rem;
                background-color: transparent;
                border: 1px solid transparent;
                border-radius: 3px;
                color: darken(#f5f5f5, 50%);
                font-family: inherit;
            }
        }
    }
</style>

<template>
    <div class="calendar-input">
        <div class="calendar-header" :class="{'full-calendar':fullCalendar}" v-if="daysList.length>0">
            <div v-if="fullCalendar" class="caret left-caret" @click="handleLeftCaret">
                <svg version="1.1" viewBox="0 0 7.9375 7.9375" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(0 -289.06)">
                        <path d="m5.9531 289.33-3.7009 3.7009 3.7009 3.7009" fill="none" stroke-width=".75762"/>
                    </g>
                </svg>
            </div>
            <div class="calendar-header-content">
                <div class="range-header" v-if="range">
                    <span>{{ getMonthName() }}</span>
                    <span>{{ year }}</span>
                </div>
                <input
                        v-else-if="!useSelectInput"
                        :label="label"
                        :placeholder="placeholder"
                        :value="value"
                        :errorMsg="theErrorMsg"
                        :type="type"
                        @input="handleInput">
                <template v-else-if="fullCalendar && useGridSelector">
                    <label :for="theId" v-if="label">{{ label }}</label>
                    <div class="grid-selector-header">
                        <button @click="handleShowGrid('day')">{{ dayNumber }}</button>
                        <button @click="handleShowGrid('month')">{{ getMonthName() }}</button>
                        <button @click="handleShowGrid('year')">{{ year }}</button>
                    </div>
                </template>
                <template v-else>
                    <label :for="theId" v-if="label">{{ label }}</label>
                    <select :id="theId" v-if="dayNumber" v-model="dayNumber" @change="refreshAndEmit"><option v-for="d in daysInMonth" :value="d" :selected="d==dayNumber" :key="d">{{ d }}</option></select>
                    <select v-if="month" v-model="month" @change="refreshAndEmit()"><option v-for="(m,i) in monthNames" :value="(i+1)" :selected="m==month" :key="m">{{ m }}</option></select>
                    <select v-if="year" v-model="year" @change="refreshAndEmit()"><option v-for="y in years" :value="y" :selected="y==year" :key="y">{{ y }}</option></select>
                </template>
            </div>
            <div v-if="fullCalendar" class="caret right-caret" @click="handleRightCaret">
                <svg version="1.1" viewBox="0 0 7.9375 7.9375" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(0 -289.06)">
                        <path d="m1.9844 289.33 3.7009 3.7009-3.7009 3.7009" fill="none" stroke-width=".75762"/>
                    </g>
                </svg>
            </div>
        </div>
        <div class="grid-bloc">
            <div class="day-grid grid-selector" v-if="showGrid.day">
                <div class="grid-header">Sélectionnez un jour</div>
                <button v-for="d in daysInMonth" class="grid-element" :data-grid-day="d" @click="handleDaySelect(d)" :class="{selected:d==dayNumber}" :key="d">
                    <span>{{ d }}</span>
                </button>
            </div>
            <div class="month-grid grid-selector" v-else-if="showGrid.month">
                <div class="grid-header ">Sélectionnez un mois</div>
                <button v-for="(m,i) in monthNames" class="grid-element" :data-grid-month="(i+1)" @click="handleClickMonth(i+1)" :class="{selected:(i+1)==month}" :key="m">
                    <span>{{ m }}</span>
                </button>
            </div>
            <div class="year-grid grid-selector" v-else-if="showGrid.year">
                <div class="grid-header">Sélectionnez une année</div>
                <button v-for="y in years" class="grid-element" :data-grid-year="y" @click="handleClickYear(y)" :class="{selected:y==year}" :key="y">
                    <span>{{ y }}</span>
                </button>
            </div>
            <div class="calendar-preview-wrapper" v-else-if="fullCalendar && daysList.length>0">
                <div class="calendar-preview">
                    <template v-if="showTableHead">
                        <div class="table-header" v-for="d in dayNames" :key="d">{{ d }}</div>
                    </template>
                    <template v-if="firstDay.number !== 1"><div class="pad-day" :class="{materialized}" v-for="i in startPadDays" :key="i"></div></template>
                    <calendar-day
                            v-for="(d,i) in daysList"
                            :day="d"
                            :data-day="d.day"
                            @select="handleDayClick"
                            @selectLeft="handleSelectLeft"
                            @selectRight="handleSelectRight"
                            @keyup="handleDayKeyup($event,i)"
                            :selected="isSelected(d)"
                            :materialized="materialized"
                            :range="range"
                            :lbound="isLBound(d)"
                            :rbound="isRBound(d)"
                            :mbound="isMBound(d)"
                            :key="i">
                    </calendar-day>
                    <template v-if="endPadDays"><div class="pad-day" :class="{materialized}" v-for="i in endPadDays" :key="i"></div></template>
                </div>
            </div>
            <div class="calendar-footer">
                <span v-if="rangeInDays">{{ rangeInDays }} jour(s)</span>
                <button @click="setToday">Aujourd'hui</button>
                <button v-if="!showGrid.month" @click="showGrid.month=true">Mois</button>
                <button v-if="!showGrid.year" @click="showGrid.year=true">Années</button>
            </div>
        </div>
    </div>
</template>

<script>
    import CalendarDay from './CalendarDay';

    export default {
        components: {
            CalendarDay
        },
        props: {
            format: { type: String, default: null,
                validator(value) {
                    return [
                        'DD.MM.YYYY', 'DD:MM:YYYY', 'DD-MMM-YYYY', 'DD/MM/YYYY',
                        'MM.DD.YYYY', 'MM:DD:YYYY', 'MM-DD-YYYY', 'MM/DD/YYYY',
                        'YYYY.MM.DD', 'YYYY:MM:DD', 'YYYY-MMM-DD', 'YYYY/MM/DD',
                    ].indexOf(value) !== -1
                }
            },
            type: { type: String, default: "text",
                validator(value) { return ['text', 'date', 'datetime-local'].indexOf(value) !== -1 }
            },
            // legacy
            value: { default: null },
            placeholder: { default: null },
            id: { type: String, default: "default-date-id" },
            label: { type: String, default: null },
            materialized: { type: Boolean, default: false },
            unselectable: { type: Boolean, default: true },
            range: { type: Boolean, default: false },

            fullCalendar: { type: Boolean, default: true }, // displays only the calendar in full width, the input otherwise
            useSelectInput: { type: Boolean, default: false }, // displays the input as a select element
            useGridSelector: { type: Boolean, default: false }, // if fullCalendar=true, change the day/month/year with the grid selector instead of the select or input
            useFullDays: { type: Boolean, default: false },
            useFullMonths: { type: Boolean, default: true },
            showTableHead: { type: Boolean, default: true },
            startOnMonday: { type: Boolean, default: true },
            forceFormatting: { type: Boolean, default: true }, // if true, 1.1.10 will be emitted as 01.01.2010
            useExtendedError: { type: Boolean, default: false }, // if true, the selected full date name and format warning will be displayed as input error message

            yearsRange: { type: Number, default: 150 }, // the size of the years selectable list
            yearsOldest: { type: Number, default: new Date().getFullYear() - 100 }, // the last selectable year
            daysShortNames: { type: Array, default(){ return [ 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim' ] } },
            daysFullNames: { type: Array, default(){ return [ 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche' ] } },
            monthsShortNames: { type: Array, default(){ return [ 'jan', 'fev', 'mars', 'avr', 'mai', 'juin', 'juil', 'aout', 'sept', 'oct', 'nov', 'dec' ] } },
            monthsFullNames: { type: Array, default(){ return [ 'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre' ] } }
        },
        data() {
            return {
                selectedDay: {},
                daysInMonth: [],
                regex: null,
                errorMsg: null,
                showGrid: {
                    day: false,
                    month: false,
                    year: false,
                },

                // selected elements
                dayNumber: null,
                month: new Date().getMonth()+1, // 1 - 12
                year: new Date().getFullYear(), // YYYY
                firstDate: {
                    dayNumber: null,
                    month: null,
                    year: null
                },
                lastDate: {
                    dayNumber: null,
                    month: null,
                    year: null
                },
                lastValidDate: null
            }
        },
        methods: {
            getMonthName() {
                return (this.month - 1 >= 0 && this.month < 13) ? this.monthNames[this.month-1] : "?";
            },
            setToday() {
                let d = new Date();
                this.dayNumber = parseInt(d.getDate());
                this.month = parseInt(d.getMonth()+1);
                this.year = parseInt(d.getFullYear());
                this.refreshSelectedDay();
                if(!this.range) {
                    this.$emit('input', this.computedValue);
                }
            },
            handleInput(e) {
                this.$emit('input', e);
            },
            handleShowGrid(e) {
                this.showGrid[e] = true;
                this.$nextTick(() => {
                    if(e == "day") {
                        let el = this.$el.querySelector('[data-grid-day="'+this.dayNumber+'"]');
                        if(el) el.focus();
                    }
                    else if(e == "month") {
                        let el = this.$el.querySelector('[data-grid-month="'+this.month+'"]');
                        if(el) el.focus();
                    }
                    else if(e == "year") {
                        let el = this.$el.querySelector('[data-grid-year="'+this.year+'"]');
                        if(el) el.focus();
                    }
                });
            },
            handleClickYear(i) {
                this.showGrid.year = false;
                this.year = i;
                this.refreshAndEmit({forceFocus: true});
            },
            handleClickMonth(i) {
                this.showGrid.month = false;
                this.month = i;
                this.refreshAndEmit({forceFocus: true});
            },
            handleDaySelect(d) {
                this.showGrid.day = false;
                this.dayNumber = d;
                this.refreshAndEmit({forceFocus: true});
            },
            handleDayKeyup(e) {
                if(e.keyCode == 9 && e.shiftKey) { // if is tab and shift (back tab)
                    this.decrementDate();
                }
                else if(e.keyCode == 9) { // if is tab
                    this.incrementDate();
                }
                else if(e.keyCode == 37) { // if is left arrow
                    this.decrementDate();
                }
                else if(e.keyCode == 38) { // if is up arrow
                    this.decrementDate(7);
                }
                else if(e.keyCode == 39) { // if is right arrow
                    this.incrementDate();
                }
                else if( e.keyCode == 40) { // if is down arrow
                    this.incrementDate(7);
                }
            },
            incrementDate(incr = 1) {
                // case when it's the last day of the month
                let l = this.daysInMonth.length;
                if((this.dayNumber + incr) > this.daysList.length) {
                    this.month++;
                    // when it's the last month
                    if(this.month > 12) {
                        this.year++;
                        this.month = 1;
                    }
                    this.dayNumber = (this.dayNumber + incr) % (l);
                }
                else {
                    this.dayNumber += incr;
                }
                this.refreshAndEmit({forceFocus:true});
            },
            decrementDate(decr = 1) {
                // case when it's the last day of the month
                if((this.dayNumber - decr) <= 0) {
                    this.month--;
                    // when it's the last month
                    if(this.month <= 1) {
                        this.year--;
                        this.month = 12;
                    }
                    // since we don't know the number of days in the previous month,
                    // we have to generate the days list
                    let days = this.getDaysArray(this.year, this.month);
                    this.dayNumber = ((days.length + (this.dayNumber - decr)) % (days.length+1));
                }
                else {
                    this.dayNumber -= decr;
                }
                this.refreshAndEmit({forceFocus:true});
            },
            handleLeftCaret() {
                this.month--;
                if(this.month<=1) {
                    this.month = 12;
                    this.year--;
                }
                this.refreshAndEmit();
            },
            handleRightCaret() {
                this.month++;
                if(this.month>12) {
                    this.month = 1;
                    this.year++;
                }
                this.refreshAndEmit();
            },
            unselectDay() {
                if(this.unselectable) {
                    this.selectedDay = {};
                    this.dayNumber = false;
                }
            },
            refreshSelectedDay(e) {
                let days = this.getDaysArray(this.year, this.month);
                let index = e && e.target && e.target.value ? e.target.value : this.dayNumber;
                this.selectedDay = index > 0 && index < days.length ? days[index-1] : {};
                if(e && e.forceFocus) {
                    this.$nextTick(() => {
                        let el = this.$el.querySelector('[data-day="'+index+'"]');
                        if(el) el.focus();
                    });
                }
                if(this.validDate) {
                    this.lastValidDate = this.computedValue;
                    this.$emit('change', this.lastValidDate);
                }
            },
            refreshAndEmit(e) {
                this.refreshSelectedDay(e);
                if(!this.range) {
                    this.$emit('input', this.computedValue);
                }
            },
            handleDayClick(day) {
                if(this.selectedDay.day == day.day) {
                    this.unselectDay();
                }
                else {
                    this.selectedDay = JSON.parse(JSON.stringify(day));
                    this.dayNumber = day.day;
                }
                if(!this.range) {
                    this.$emit('input', this.computedValue);
                }
            },
            handleSelectLeft(day) {
                let d = JSON.parse(JSON.stringify(day));
                d.dayNumber = d.day;
                debugger;
                // is after the last boundary: we select the day as last
                if(this.dayAfterFirst(d) && !(this.dayBeforeLast(d) || this.isRBound(d))) {
                    this.lastDate = d;
                }
                else {
                    this.firstDate = d;
                }
                this.emitRange();
            },
            handleSelectRight(day) {
                let d = JSON.parse(JSON.stringify(day));
                d.dayNumber = d.day;
                // is before the first boundary: we select the day as first
                if(this.dayBeforeLast(d) && !(this.dayAfterFirst(d) || this.isLBound(d))) {
                    this.firstDate = d;
                }
                else {
                    this.lastDate = d;
                }
                this.emitRange();
            },
            emitRange() {
                let l = this.firstDate;
                let r = this.lastDate;
                let left = this.buildFromFormat(l.dayNumber, l.month, l.year);
                let right = this.buildFromFormat(r.dayNumber, r.month, r.year);
                this.$emit('input', [left, right]);
            },
            isSelected(day) {

                return day.day == this.dayNumber &&
                    day.month == this.month &&
                    day.year == this.year;
            },
            getDaysArray(year, month) {
                let date = new Date(year, month - 1, 1);
                let result = [];
                let daysInMonthCounter = 1;
                let daysInMonth = [];
                while (date.getMonth() == month - 1) {
                    result.push({
                        day: date.getDate(),
                        number: date.getDay(),
                        year: year,
                        month: month,
                        name: this.dayNames[date.getDay()]
                    });
                    date.setDate(date.getDate() + 1);
                    daysInMonth.push(daysInMonthCounter);
                    daysInMonthCounter++;
                }
                this.daysInMonth = daysInMonth;
                return result;
            },
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
            updateStateFromValue(val) {
                let o = {
                    dayNumber: null,
                    month: new Date().getMonth()+1,
                    year: new Date().getFullYear()
                };
                if(val || this.rangeValueValid) {
                    if(this.format == "DD:MM:YYYY") {
                        let tab = val.split(":");
                        o.dayNumber = parseInt(tab[0]);
                        o.month = parseInt(tab[1]);
                        o.year = parseInt(tab[2]);
                        this.regex = /^([0-2][0-9]|(3)[0-1])(:)(((0)[0-9])|((1)[0-2]))(:)\d{4}$/i;
                    }
                    else if(this.format == "DD-MM-YYYY") {
                        let tab = val.split("-");
                        o.dayNumber = parseInt(tab[0]);
                        o.month = parseInt(tab[1]);
                        o.year = parseInt(tab[2]);
                        this.regex = /^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)\d{4}$/i;
                    }
                    else if(this.format == "DD/MM/YYYY") {
                        let tab = val.split("/");
                        o.dayNumber = parseInt(tab[0]);
                        o.month = parseInt(tab[1]);
                        o.year = parseInt(tab[2]);
                        this.regex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
                    }
                    else if(this.format == "MM.DD.YYYY") {
                        let tab = val.split(".");
                        o.dayNumber = parseInt(tab[1]);
                        o.month = parseInt(tab[0]);
                        o.year = parseInt(tab[2]);
                        this.regex = /^(((0)[0-9])|((1)[0-2]))(\.)([0-2][0-9]|(3)[0-1])(\.)\d{4}$/i;
                    }
                    else if(this.format == "MM:DD:YYYY") {
                        let tab = val.split(":");
                        o.dayNumber = parseInt(tab[1]);
                        o.month = parseInt(tab[0]);
                        o.year = parseInt(tab[2]);
                        this.regex = /^(((0)[0-9])|((1)[0-2]))(:)([0-2][0-9]|(3)[0-1])(:)\d{4}$/i;
                    }
                    else if(this.format == "MM-DD-YYYY") {
                        let tab = val.split("-");
                        o.dayNumber = parseInt(tab[1]);
                        o.month = parseInt(tab[0]);
                        o.year = parseInt(tab[2]);
                        this.regex = /^(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])(-)\d{4}$/i;
                    }
                    else if(this.format == "MM/DD/YYYY") {
                        let tab = val.split("/");
                        o.dayNumber = parseInt(tab[1]);
                        o.month = parseInt(tab[0]);
                        o.year = parseInt(tab[2]);
                        this.regex = /^(((0)[0-9])|((1)[0-2]))(\/)([0-2][0-9]|(3)[0-1])(\/)\d{4}$/i;
                    }
                    else if(this.format == "YYYY.MM.DD") {
                        let tab = val.split(".");
                        o.dayNumber = parseInt(tab[2]);
                        o.month = parseInt(tab[1]);
                        o.year = parseInt(tab[0]);
                        this.regex = /^\d{4}(\.)(((0)[0-9])|((1)[0-2]))(\.)([0-2][0-9]|(3)[0-1])$/i;
                    }
                    else if(this.format == "YYYY:MM:DD") {
                        let tab = val.split(":");
                        o.dayNumber = parseInt(tab[2]);
                        o.month = parseInt(tab[1]);
                        o.year = parseInt(tab[0]);
                        this.regex = /^\d{4}(:)(((0)[0-9])|((1)[0-2]))(:)([0-2][0-9]|(3)[0-1])$/i;
                    }
                    else if(this.format == "YYYY-MM-DD") {
                        let tab = val.split("-");
                        o.dayNumber = parseInt(tab[2]);
                        o.month = parseInt(tab[1]);
                        o.year = parseInt(tab[0]);
                        this.regex = /^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/i;
                    }
                    else if(this.format == "YYYY/MM/DD") {
                        let tab = val.split("/");
                        o.dayNumber = parseInt(tab[2]);
                        o.month = parseInt(tab[1]);
                        o.year = parseInt(tab[0]);
                        this.regex = /^\d{4}(\/)(((0)[0-9])|((1)[0-2]))(\/)([0-2][0-9]|(3)[0-1])$/i;
                    }
                    else {
                        if(typeof val === "string") {
                            let tab = val.split(".");
                            o.dayNumber = parseInt(tab[0]);
                            o.month = parseInt(tab[1]);
                            o.year = parseInt(tab[2]);
                            this.regex = /^([0-2][0-9]|(3)[0-1])(\.)(((0)[0-9])|((1)[0-2]))(\.)\d{4}$/i;
                        }
                    }
                    this.refreshSelectedDay();
                }
                return o;
            },
            buildFromFormat(d, m, y) {
                if(this.format == "DD:MM:YYYY") {
                    return this.pad(d,2) + ':' + this.pad(m,2) + ':' + y;
                }
                else if(this.format == "DD-MMM-YYYY") {
                    return this.pad(d,2) + '-' + this.pad(m,2) + '-' + y;
                }
                else if(this.format == "DD/MM/YYYY") {
                    return this.pad(d,2) + '/' + this.pad(m,2) + '/' + y;
                }
                else if(this.format == "MM.DD.YYYY") {
                    return this.pad(m,2) + '.' + this.pad(d,2) + '.' + y;
                }
                else if(this.format == "MM:DD:YYYY") {
                    return this.pad(m,2) + ':' + this.pad(d,2) + ':' + y;
                }
                else if(this.format == "MM-DD-YYYY") {
                    return this.pad(m,2) + '-' + this.pad(d,2) + '-' + y;
                }
                else if(this.format == "MM/DD/YYYY") {
                    return this.pad(m,2) + '/' + this.pad(d,2) + '/' + y;
                }
                else if(this.format == "YYYY.MM.DD") {
                    return y + '.' + this.pad(m,2) + '.' + this.pad(d,2);
                }
                else if(this.format == "YYYY:MM:DD") {
                    return y + ':' + this.pad(m,2) + ':' + this.pad(d,2);
                }
                else if(this.format == "YYYY-MM-DD") {
                    return y + '-' + this.pad(m,2) + '-' + this.pad(d,2);
                }
                else if(this.format == "YYYY/MM/DD") {
                    return y + '/' + this.pad(m,2) + '/' + this.pad(d,2);
                }
                else { // this.format == "DD.MM.YYYY"
                    return this.pad(d,2) + '.' + this.pad(m,2) + '.' + y;
                }
            },
            isLBound(d) {
                return d.day == this.firstDate.dayNumber && d.month == this.firstDate.month && d.year == this.firstDate.year;
            },
            isRBound(d) {
                return d.day == this.lastDate.dayNumber && d.month == this.lastDate.month && d.year == this.lastDate.year;
            },
            dayBeforeLast(d) {
                if(this.lastDate.year == d.year) {
                    if(this.lastDate.month == d.month) {
                        if(this.lastDate.dayNumber == d.day) {
                            return false;
                        }
                        else return this.lastDate.dayNumber > d.day;
                    }
                    else return this.lastDate.month > d.month;
                }
                else return this.lastDate.year > d.year;
            },
            dayAfterFirst(d) {
                if(this.firstDate.year == d.year) {
                    if(this.firstDate.month == d.month) {
                        if(this.firstDate.dayNumber == d.day) {
                            return false;
                        }
                        else return this.firstDate.dayNumber < d.day;
                    }
                    else return this.firstDate.month < d.month;
                }
                else return this.firstDate.year < d.year;
            },
            isMBound(d) {
                return (this.dayAfterFirst(d) || this.isLBound(d)) && (this.dayBeforeLast(d) || this.isRBound(d));
            }
        },
        watch: {
            value: {
                immediate: true,
                handler(val) {
                    if(this.rangeValueValid) {
                        this.firstDate = this.updateStateFromValue(val[0]);
                        this.lastDate = this.updateStateFromValue(val[1]);
                        val = val[0];
                    }
                    let tab = this.updateStateFromValue(val);
                    this.dayNumber = tab.dayNumber;
                    this.month = tab.month;
                    this.year = tab.year;
                }
            },
            year(y) {
                if(y < 1000)
                    this.year = "2" + this.pad(y,3);
            }
        },
        computed: {
            daysList() { return this.getDaysArray(this.year, this.month); },
            firstDay() { return this.daysList.length > 0 ? this.daysList[0] : {}; },
            lastDay() { return this.daysList.length > 0 ? this.daysList[this.daysList.length-1] : {}; },
            years() { return Array.from(Array(this.yearsRange), (_,x) => x+this.yearsOldest); },
            dayNames() { return this.useFullDays ? this.daysFullNames : this.daysShortNames },
            monthNames() { return this.useFullMonths ? this.monthsFullNames : this.monthsShortNames },
            rangeValueValid() { return this.range && this.valueIsArray && this.value.length == 2 },
            theId() {
                if(this.id)
                    return this.id;
                else if(this.label) {
                    return this.label.replace(/\s+/g, '-').toLowerCase() + '-input';
                }
                return null;
            },
            startPadDays() {
                let o = 6;
                if(this.firstDay.number > 0) {
                    o = this.firstDay.number - 1;
                }
                return this.startOnMonday ? o : o+1;
            },
            endPadDays() {
                let o = 7 - this.lastDay.number;
                return this.startOnMonday ? (o % 7) : (o-1 % 7);
            },
            validDate() {
                return this.computedValue ? this.computedValue.match(this.regex) : false;
            },
            fullName() {
                return this.dayNumber + " " + this.monthNames[this.month-1] + " " + this.year;
            },
            valueIsArray() { return Array.isArray(this.value) },
            theErrorMsg() {
                if(this.errorMsg) {
                    return this.errorMsg;
                }
                else if(!this.validDate && this.useExtendedError) {
                    return 'Le format n\'est pas respecté ('+this.format+')';
                }
                else if(!this.fullCalendar && this.useExtendedError) {
                    return this.fullName
                }
                return null;
            },
            computedValue() {
                let d = this.dayNumber;
                let m = this.month;
                let y = this.year;
                return this.buildFromFormat(d, m, y);
            },
            rangeInDays() {
                let o = 0;
                if(this.rangeValueValid) {
                    let t1 = new Date(this.firstDate.year, this.firstDate.month, this.firstDate.dayNumber).getTime();
                    let t2 = new Date(this.lastDate.year, this.lastDate.month, this.lastDate.dayNumber).getTime();
                    let t = t2 - t1;
                    o = t/60/60/24/1000;
                    o += 1;
                }
                return parseInt(o);
            },
        }
    }
</script>