<template>
  <div class="background poppins-font">
    <div class="top">
      <div>
        <div class="title">Горячие билеты</div>
        <div class="desc">Скоро разберут!</div>
      </div>
      <img class="icon" src="../assets/images/flying-money.svg" alt="" />
    </div>
    <div ref="bottom" class="bottom">
      <div
        :class="{ opacity: index !== currentCardIndex }"
        v-for="(card, index) in cards"
        :key="index"
        class="card"
      >
        <div class="prices">
          <span class="price">{{ card.price }}</span>
          <span class="disc-price">{{ card.discPrice }}</span>
          <img class="company-logo" :src="card.companyLogo" />
        </div>
        <div class="details">
          <div class="direction">{{ card.direction }}</div>
          <div class="dates">
            <div class="mini-calendar">
              <div class="cal-top">{{ card.month }}</div>
              <div class="cal-bottom">{{ card.day }}</div>
            </div>
            <div class="time small-text">
              <div class="time-details">
                <div>{{ card.depTime }}</div>
                <div class="details-grey">{{ card.depAirport }}</div>
              </div>
              <span class="details-grey">—</span>
              <div class="time-details">
                <div>{{ card.arrTime }}</div>
                <div class="details-grey">{{ card.arrAirport }}</div>
              </div>
              <div class="time-description">
                <div class="truncation">
                  <span>{{ card.flightTime }} в пути</span> /
                  <span v-if="card.layover?.city">1 пересадка</span>
                  <span v-else>Без пересадок</span>
                </div>
                <div class="details-grey" v-if="card.layover?.city">
                  {{ card.layover?.time }}
                  <span> {{ card.layover?.city }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav">
      <button :class="{ invisible: currentCardIndex === 0 }" class="button" @click="prevCard">
        <
      </button>
      <button :class="{ invisible: currentCardIndex === 6 }" class="button" @click="nextCard">
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentCardIndex: 3,
      cooldown: false,
      cards: [
        {
          price: '6 058 ₽',
          discPrice: '13 712 ₽',
          companyLogo: './images/jpg/JU-avif.avif',
          direction: 'Стамбул — Белград',
          month: 'ИЮН',
          day: '1',
          depTime: '04:30',
          depAirport: 'IST',
          arrTime: '05:10',
          arrAirport: 'BEG',
          flightTime: '1.5ч',
          layover: null
        },
        {
          price: '8 319 ₽',
          discPrice: '10 238 ₽',
          companyLogo: './images/jpg/W6-avif.avif',
          direction: 'Стамбул — Милан',
          month: 'ИЮН',
          day: '15',
          depTime: '09:55',
          depAirport: 'MXP',
          arrTime: '13:55',
          arrAirport: 'BEG',
          flightTime: '5ч',
          layover: { time: '1ч', city: 'Будапешт' }
        },
        {
          price: '9 254 ₽',
          discPrice: '15 357 ₽',
          companyLogo: './images/jpg/PC-avif.avif',
          direction: 'Стамбул — Париж',
          month: 'ИЮН',
          day: '29',
          depTime: '10:25',
          depAirport: 'SAW',
          arrTime: '13:15',
          arrAirport: 'ORY',
          flightTime: '5ч',
          layover: { time: '1ч', city: 'Будапешт' }
        },
        {
          price: '5 742 ₽',
          discPrice: '8 372 ₽',
          companyLogo: './images/jpg/PC-avif.avif',
          direction: 'Стамбул — Рим',
          month: 'МАЙ',
          day: '29',
          depTime: '12:05',
          depAirport: 'SAW',
          arrTime: '13:45',
          arrAirport: 'FCO',
          flightTime: '2.5ч',
          layover: null
        },
        {
          price: '13 491 ₽',
          discPrice: '20 474 ₽',
          companyLogo: './images/jpg/JU-avif.avif',
          direction: 'Стамбул — Барселона',
          month: 'ИЮН',
          day: '5',
          depTime: '15:35',
          depAirport: 'IST',
          arrTime: '19:50',
          arrAirport: 'BCN',
          flightTime: '5ч',
          layover: { time: '1ч', city: 'Белград' }
        },
        {
          price: '12 667 ₽',
          discPrice: '28 299 ₽',
          companyLogo: './images/jpg/PC-avif.avif',
          direction: 'Стамбул — Лиссабон',
          month: 'МАЙ',
          day: '24',
          depTime: '14:25',
          depAirport: 'SAW',
          arrTime: '20:50',
          arrAirport: 'LIS',
          flightTime: '9ч',
          layover: { time: '2ч', city: 'Измир' }
        },
        {
          price: '3 833 ₽',
          discPrice: '6 552 ₽',
          companyLogo: './images/jpg/W9-avif.avif',
          direction: 'Стамбул — Лондон',
          month: 'МАЙ',
          day: '23',
          depTime: '14:50',
          depAirport: 'IST',
          arrTime: '16:55',
          arrAirport: 'LGW',
          flightTime: '4ч',
          layover: null
        }
      ]
    }
  },
  methods: {
    prevCard() {
      if (this.cooldown) {
        return
      }
      this.currentCardIndex = Math.max(this.currentCardIndex - 1, 0)
      const currentX = Math.min(
        Number.parseInt(window.getComputedStyle(this.$refs.bottom).transform.split(',')[4]),
        -290
      )
      this.$refs.bottom.style.transform = `matrix(1, 0, 0, 1, ${currentX + 324}, 0)`
      this.cooldown = true
      setTimeout(() => (this.cooldown = false), 500)
    },
    nextCard() {
      if (this.cooldown) {
        return
      }
      this.currentCardIndex = Math.min(this.currentCardIndex + 1, 6)
      const currentX = Math.max(
        Number.parseInt(window.getComputedStyle(this.$refs.bottom).transform.split(',')[4]),
        -1586
      )
      this.$refs.bottom.style.transform = `matrix(1, 0, 0, 1, ${currentX - 324}, 0)`
      this.cooldown = true
      setTimeout(() => (this.cooldown = false), 500)
    }
  }
}
</script>
<style lang="scss" scoped>
@import './src/assets/main.scss';

.background {
  width: 388px;
  height: 388px;
  background: linear-gradient(270deg, #62b87a, #8ebc56);
  border-radius: 14px;
  position: relative;
  overflow: hidden;

  .nav {
    width: 358px;
    position: absolute;
    top: 65%;
    left: 12px;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    .button {
      width: 34px;
      height: 34px;
      cursor: pointer;
      border: 1px solid rgb(240, 240, 240);
      border-radius: 100px;
      background-color: #fff;
      &:hover {
        background-color: #eee;
      }
    }
    .invisible {
      opacity: 0;
      cursor: default;
    }
  }

  .bottom {
    position: absolute;
    bottom: 50px;
    margin-top: 32px;
    display: flex;
    gap: 4px;
    transform: translateX(-938px);
    transition-duration: 0.5s;
    .opacity {
      opacity: 70%;
      transition-duration: 0.5s;
    }
  }
  .card {
    position: relative;
    border-radius: 12px;
    background: white;
    width: 320px;
    height: 142px;
    padding: 12px 12px 12px 16px;
    .prices {
      padding-top: 9px;
      display: flex;
      align-items: center;
      .price {
        font-size: 23px;
        font-weight: 600;
      }
      .disc-price {
        margin-left: 8px;
        font-size: 17px;
        text-decoration: line-through;
        color: #9ea9b7;
      }
      .company-logo {
        margin-left: auto;
        width: 28px;
        height: 28px;
        border-radius: 100px;
      }
    }
    .details {
      margin-top: 16px;
      .direction {
        font-size: 13px;
        font-weight: 600;
        margin-bottom: 8px;
      }
      .dates {
        display: flex;
        align-items: center;
        margin-top: 12px;
        .time {
          margin-left: 12px;
          display: flex;
          width: 100%;
          .time-details {
            margin: 0 2px;
          }
          .details-grey {
            color: #aaa;
          }
          .time-description {
            margin-left: 20px;
          }
          .truncation {
            overflow: hidden;
            display: block;
            max-width: 140px;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .small-text {
          font-size: 13px;
        }
        .mini-calendar {
          .cal-top {
            font-weight: 600;
            display: flex;
            justify-content: center;
            font-size: 9px;
            width: 32px;
            height: 14px;
            border-radius: 6px 6px 0px 0px;
            color: #fff;
            background-color: #f95667;
            border: solid 2px #e6404e;
            border-bottom: none;
          }
          .cal-bottom {
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            width: 32px;
            height: 18px;
            border-radius: 0px 0px 6px 6px;
            color: #000;
            background-color: #fff;
            border: solid 2px rgb(230, 230, 230);
            border-top: none;
          }
        }
      }
    }
  }
}

.top {
  padding: 32px 25px 32px 32px;
  display: flex;
  align-items: center;
  .title {
    max-width: 200px;
    font-size: 34px;
    color: white;
    font-weight: 600;
  }
  .desc {
    margin-top: 8px;
    color: white;
    font-size: 15px;
  }
  .icon {
    width: 130px;
    height: 130px;
  }
}
</style>
