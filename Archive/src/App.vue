<template>
  <div class="tickets-search-screen">
    <!-- {{ searchRequest }} -->
    <div class="container">
      <div class="header">
        <div class="logo">
          <img class="avia-sales-logo" src="./images/aviasales-logo.svg" alt="" />
          <!-- <img class="lettering" src="./images/aviasales-lettering.svg" alt="" /> -->
        </div>
      </div>
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
              class="rounded"
              placeholder="Откуда"
            ></city-selector>
            <city-selector placeholder="Куда"></city-selector>
            <date-selector @departureDate="handleDepartureDate" placeholder="Когда">
            </date-selector>
            <date-selector @arrivalDate="handleArrivalDate" placeholder="Обратно"> </date-selector>
            <clients @passengersInfo="handlePassengers"></clients>
            <button @click="startSearch" class="search-button poppins-font">Найти билеты</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="offer-screen">
    <div class="offers">
      <hot-tickets></hot-tickets>
      <!-- <hot-tickets></hot-tickets> -->
    </div>
  </div>
</template>

<script>
import CitySelector from './components/CitySelector.vue'
import DateSelector from './components/DateSelector.vue'
import Clients from './components/ClientSelector.vue'
import Components from './components/Components.vue'
import HotTickets from './components/HotTickets.vue'

export default {
  components: {
    CitySelector,
    DateSelector,
    Clients,
    Components,
    HotTickets
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
.tickets-search-screen {
  background-color: #0c73fe;
  height: calc(100% + 320px);
}
.offer-screen {
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
  .offers {
    margin-top: 48px;
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
.rounded {
  border-radius: 12px 0 0 12px;
}
.logo {
  display: flex;
  align-items: center;
  .avia-sales-logo {
    height: 26px;
    width: 26px;
  }
  .lettering {
    margin-left: 0.5rem;
    height: 26px;
    width: 100px;
  }
}
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

.search {
  margin-top: 24px;
  .search-inputs {
    display: flex;
    flex-wrap: wrap;
  }
  .search-button {
    cursor: pointer;
    width: 16.5%;
    height: 60px;
    font-size: 18px;
    font-weight: 600;
    background-color: #fa742d;
    border: none;
    border-radius: 12px;
    margin-left: 1%;
    color: white;
    &:hover {
      background-color: #f25122;
    }
  }
}
</style>
