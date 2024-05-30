<template>
  <div v-click-outside="onClickOutside" class="wrapper poppins-font">
    <div class="passenger-summary" @click="openModal">
      <div class="info">
        <div>
          {{ passengers.reduce((sum, passenger) => sum + passenger.count, 0) }}
          {{
            plural(
              passengers.reduce((sum, passenger) => sum + passenger.count, 0),
              'пассажир',
              'пассажира',
              'пассажиров'
            )
          }}
        </div>
        <div class="class">{{ selectedClass }}</div>
      </div>
    </div>

    <div class="selector" v-show="isShowModal">
      <div class="passengers">
        <div class="title">Количество пассажиров</div>
        <div class="">
          <div v-for="item in passengers">
            <div class="passenger-group">
              <div>
                <div class="name">{{ item.name }}</div>
                <div class="disc">{{ item.disc }}</div>
              </div>
              <div class="buttons">
                <button class="button" @click="subtractPassenger(item)">–</button>
                <div class="count">{{ item.count }}</div>
                <button class="button" @click="addPassenger(item)">+</button>
              </div>
            </div>
            <div v-if="item.id < 3" class="line"></div>
          </div>
        </div>
      </div>
      <div class="title">Класс обслуживания</div>
      <div v-for="item in ticketClass">
        <div class="class-selector">
          <div class="item">{{ item.name }}</div>
          <input
            @input="selectClass(item.name)"
            :checked="selectedClass === item.name"
            type="radio"
            :value="item.name"
            name="class"
          />
        </div>
        <div v-if="item.id < 4" class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import plural from 'plural-ru'

export default {
  data() {
    return {
      plural,
      selectedClass: 'Эконом',
      isShowModal: false,
      passengers: [
        { id: 1, count: 1, name: 'Взрослые', disc: '12 лет и старше', minValue: 1 },
        { id: 2, count: 0, name: 'Дети', disc: 'от 2 до 11 лет', minValue: 0 },
        { id: 3, count: 0, name: 'Младенцы', disc: 'Младше 2 лет, без места', minValue: 0 }
      ],
      ticketClass: [
        { id: 1, name: 'Эконом' },
        { id: 2, name: 'Комфорт' },
        { id: 3, name: 'Бизнес' },
        { id: 4, name: 'Первый класс' }
      ]
    }
  },
  emits: ['passengersInfo'],
  watch: {
    passengers: {
      handler(newValue) {
        this.$emit('passengersInfo', newValue)
      },
      deep: true
    }
  },
  methods: {
    onClickOutside() {
      this.isShowModal = false
    },
    addPassenger(item) {
      item.count = item.count + 1
    },
    subtractPassenger(item) {
      item.count = Math.max(item.count - 1, item.minValue)
    },
    openModal() {
      this.isShowModal = true
    },
    selectClass(name) {
      this.selectedClass = name
    }
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/main.scss';

.wrapper {
  width: 20%;
}
.passenger-summary {
  position: relative;
  background-color: white;
  padding-left: 16px;
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #0c73fe;
  border-radius: 0 16px 16px 0;
  border-left: none;
  .info {
    max-width: 120px;
    font-size: 14px;
    .class {
      margin-top: 4px;
      color: $grey;
    }
  }
}
.selector {
  width: 320px;
  padding: 16px;
  position: absolute;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  .passengers {
    margin-bottom: 24px;
    .passenger-group {
      display: flex;
      align-items: center;
      margin: 8px 0;
      .buttons {
        width: 100px;
        margin-left: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        .button {
          border-radius: 20px;
          border: none;
          width: 32px;
          height: 32px;
        }
        .count {
          margin: 0 8px;
        }
      }
      .disc {
        margin: 4px 0;
        font-size: 14px;
        color: $grey;
      }
    }
  }
  .line {
    height: 1px;
    margin: 8px 0;
    background-color: light$grey;
  }
  .title {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 12px;
  }
  .class-selector {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    .item {
      font-size: 15px;
    }
  }
}

@media screen and (max-width: 1024px) {
  .wrapper {
    width: 25%;
  }
  .passenger-summary {
    border-top: 0;
    border-radius: 0 0 16px 0;
  }
}
@media screen and (max-width: 768px) {
  .wrapper {
    width: 50%;
  }
  .selector {
    right: 0;
  }
}
@media screen and (max-width: 568px) {
  .wrapper {
    width: 100%;
  }
  .passenger-summary {
    border-top: 0;
    border-radius: 0 0 16px 16px;
  }
  .selector {
    left: calc(50% - 160px);
  }
}
</style>
