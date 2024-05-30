<template>
  <div v-click-outside="onClickOutside" class="wrapper">
    <input
      class="input poppins-font"
      type="text"
      :placeholder="placeholder"
      readonly
      @focus="openCalendar"
      :value="selectedDate?.format('MMMM, DD')"
    />

    <div class="calendar-module poppins-font" v-show="isShowCalendar">
      <div class="month-selector">
        <button class="button" @click="previousMonth"><</button>
        <select class="select" @input="selectMonth" :value="calendarDate">
          <option v-for="month of months" :value="month">{{ month.format('MMMM YYYY') }}</option>
        </select>

        <button class="button" @click="nextMonth">></button>
      </div>

      <div class="calendar">
        <div class="date-box" v-for="date of chosenMonthDays">
          <div class="date">
            <div
              :class="{ disabled: date.date.isBefore(dayjs().subtract(1, 'day')) }"
              @click="selectDay(date)"
              v-if="date"
            >
              {{ date.number }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
import minMax from 'dayjs/plugin/minMax'
dayjs.extend(minMax)
import 'dayjs/locale/ru'
dayjs.locale('ru')

export default {
  props: { placeholder: String },
  data() {
    return {
      dayjs,
      calendarDate: dayjs(),
      selectedDate: null,
      isShowCalendar: false,
      months: Array.from({ length: 10 }, (_, i) => i).map((i) => {
        return dayjs().add(i, 'month')
      })
    }
  },
  emits: ['departureDate', 'arrivalDate'],
  computed: {
    chosenMonthDays() {
      const chosenMonthDays = []
      const firstDayOfMonth = dayjs(this.calendarDate).utc().startOf('month')
      const lastDayOfMonth = dayjs(this.calendarDate).utc().endOf('month')
      const length = lastDayOfMonth.format('D')
      const emptyDays = firstDayOfMonth.diff(firstDayOfMonth.startOf('week'), 'day') - 1
      for (let i = 0; i < emptyDays; i++) {
        chosenMonthDays.push(null)
      }
      for (let i = 0; i < length; i++) {
        const day = firstDayOfMonth.add(i, 'day')
        chosenMonthDays.push({ date: day, number: day.format('D') })
      }
      return chosenMonthDays
    }
  },
  watch: {
    selectedDate() {
      this.$emit('departureDate', this.selectedDate)
      this.$emit('arrivalDate', this.selectedDate)
    }
  },
  methods: {
    onClickOutside() {
      this.isShowCalendar = false
    },
    selectMonth(event) {
      this.calendarDate = event.target.value
      this.calendarDate = dayjs(this.calendarDate)
    },
    previousMonth() {
      this.calendarDate = this.calendarDate.subtract(1, 'month')
    },
    nextMonth() {
      this.calendarDate = this.calendarDate.add(1, 'month')
    },
    selectDay(date) {
      this.selectedDate = dayjs.max(dayjs(), dayjs(date.date))

      this.isShowCalendar = false
    },
    openCalendar() {
      this.isShowCalendar = true
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 16.5%;
}
.month-selector {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .select {
    cursor: pointer;
    padding: 4px 8px;
    border: none;
    border-radius: 6px;
    background-color: rgb(240, 240, 240);
  }
  .button {
    width: 30px;
    height: 30px;
    cursor: pointer;
    border: none;
    border-radius: 6px;
    &:hover {
      background-color: rgb(230, 230, 230);
    }
  }
}
.input {
  width: 100%;
  height: 60px;
  position: relative;
  padding: 8px 16px;
  border: 2px solid #0c73fe;
  border-left: none;
}
.calendar-module {
  position: absolute;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  .calendar {
    margin-top: 8px;
    width: 300px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    .date-box {
      cursor: pointer;
      &:hover {
        background-color: rgb(240, 240, 240);
      }
    }
    .date {
      border-radius: 4px;
      padding: 12px 8px;
      font-size: 14px;
      text-align: center;
      .disabled {
        color: lightgray;
      }
    }
  }
}
</style>
