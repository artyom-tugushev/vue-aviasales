<template>
  <div class="tickets-search-screen">
    <header-component></header-component>
    <div class="container">
      <div class="titles">
        <h1 class="main-title poppins-font">Поиск дешёвых авиабилетов</h1>
        <h2 class="secondary-title poppins-font">16 лет помогаем вам экономить</h2>
      </div>
      <div class="tickets-search">
        <components></components>
        <div class="search">
          <div class="search-inputs">
            <city-selector
              @departureCity="handleDepartureCity"
              class="rounded-from"
              placeholder="Откуда"
            ></city-selector>
            <city-selector
              class="rounded-where"
              @arrivalCity="handleArrivalCity"
              placeholder="Куда"
            ></city-selector>
            <date-selector
              @departureDate="handleDepartureDate"
              rounded="rounded"
              placeholder="Когда"
            ></date-selector>
            <date-selector @arrivalDate="handleArrivalDate" placeholder="Обратно"></date-selector>
            <clients @passengersInfo="handlePassengers"></clients>
            <button @click="startSearch" class="search-button hide-hide poppins-font">
              Найти билеты
            </button>
          </div>
          <button @click="startSearch" class="search-button hide poppins-font">Найти билеты</button>
        </div>
      </div>
    </div>
  </div>
  <div class="offer-screen">
    <div class="offers">
      <hot-tickets></hot-tickets>
      <photo-card></photo-card>
    </div>
  </div>
  <div class="sign">
    <a class="poppins-font sign-text" href="https://t.me/artyomtugushev">Артём Тугушев</a>
  </div>
</template>

<script>
import CitySelector from './components/CitySelector.vue'
import DateSelector from './components/DateSelector.vue'
import Clients from './components/ClientSelector.vue'
import Components from './components/Components.vue'
import HotTickets from './components/HotTickets.vue'
import PhotoCard from './components/PhotoCard.vue'
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  components: {
    CitySelector,
    DateSelector,
    Clients,
    Components,
    HotTickets,
    PhotoCard,
    HeaderComponent
  },
  data() {
    return {
      searchRequest: {
        departureCity: null,
        arrivalCity: null,
        departureDate: null,
        arrivalDate: null,
        passengers: null
      }
    }
  },
  methods: {
    startSearch() {
      console.log(this.searchRequest)
    },
    handleDepartureCity(data) {
      this.searchRequest.departureCity = data
    },
    handleArrivalCity(data) {
      this.searchRequest.arrivalCity = data
    },
    handleDepartureDate(data) {
      this.searchRequest.departureDate = data
    },
    handleArrivalDate(data) {
      this.searchRequest.arrivalDate = data
    },
    handlePassengers(data) {
      this.searchRequest.passengers = data
    }
  }
}
</script>

<style scoped lang="scss">
@import './src/assets/main.scss';

.tickets-search-screen {
  position: relative;
  background-color: $blue;
  &::before {
    z-index: -100;
    background: $blue;
    content: ' ';
    display: block;
    height: 212px;
    left: 0;
    position: absolute;
    right: 0;
    bottom: -212px;
  }
}
.offer-screen {
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
  .offers {
    margin-top: 40px;
    gap: 24px;
    display: flex;
  }
}

.tickets-search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.rounded-from {
  border-radius: 16px 0 0 16px;
  border-left: 2px solid #0c73fe;
}

.titles {
  margin-top: 120px;
  .main-title {
    font-weight: 900;
    color: white;
    text-align: center;
    line-height: 44px;
    font-size: 44px;
    margin: 32px 0 16px 0;
  }
  .secondary-title {
    color: white;
    text-align: center;
    font-weight: 600;
    line-height: 16px;
    font-size: 16px;
    margin: 0 0 32px;
  }
}

.search {
  width: 100%;
  margin-top: 24px;
  max-width: 1240px;
  align-items: center;
  display: flex;
  flex-wrap: nowrap;

  .search-inputs {
    z-index: 100;
    display: flex;
    width: 100%;
    filter: drop-shadow(0 8px 4px #00000010);
  }
  .search-button {
    cursor: pointer;
    width: 20%;
    height: 62px;
    font-size: 20px;
    font-weight: 600;
    background-color: #fa742d;
    border: none;
    border-radius: 16px;
    margin-left: 8px;
    color: white;
    &:hover {
      background-color: #f25122;
    }
  }
}
@media screen and (min-width: 1024px) {
  .hide {
    display: none;
  }
}

@media screen and (max-width: 1024px) {
  .offers {
    flex-wrap: wrap;
    justify-content: center;
  }
  .rounded-from {
    border-left: 0;
    border-radius: 16px 0 0 0;
  }
  .rounded-where {
    border-radius: 0 16px 0 0;
  }
  .search {
    margin-left: 2px;
    .search-button {
      margin-left: 0;
      width: 25%;
    }
  }
  .search-inputs {
    flex-wrap: wrap;
  }
  .hide {
    display: none;
  }
  .hide-hide {
    display: block;
  }
  .offer-screen {
    .offers {
      padding: 0 8px;
    }
  }
}
.sign {
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
  .sign-text {
    color: $grey;
  }
}

@media screen and (max-width: 768px) {
  .rounded-from {
    border-left: 0;
  }
  .titles {
    margin-top: 80px;
    .main-title {
      margin: 0;
      font-size: 34px;
      line-height: 100%;
    }
    .secondary-title {
      display: none;
    }
  }
  .tickets-search-screen {
    &::before {
      display: none;
    }
  }
  .hide {
    display: block;
  }
  .hide-hide {
    display: none;
  }
  .search {
    flex-direction: column;
    .search-button {
      margin-top: 8px;
      margin-bottom: 28px;
      width: 100%;
    }
  }
  .offer-screen {
    .offers {
      padding: 8px 0;
    }
  }
}

@media screen and (max-width: 568px) {
  .rounded-from {
    border-radius: 16px 16px 0 0;
  }
  .rounded-where {
    border-radius: 0;
  }
}
</style>
