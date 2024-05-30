<template>
  <div class="wrapper">
    <div class="components poppins-font">
      <div
        @click="setActive(item)"
        :class="{ selected: item.code === selected }"
        class="component-button"
        v-for="(item, index) in categories"
        :key="index"
      >
        <img :class="{ 'icon-selected': item.code === selected }" class="icon" :src="item.icon" />
        <div class="text">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'tickets',
      categories: [
        { code: 'tickets', name: 'Авиабилеты', icon: './images/airplane.svg' },
        { code: 'hotels', name: 'Отели', icon: './images/bed.svg' },
        { code: 'shorten', name: 'Короче', icon: './images/photo-pin.svg' },
        { code: 'subs', name: 'Подписки', icon: './images/bell.svg' },
        { code: 'profile', name: 'Профиль', icon: './images/profile.svg' }
      ]
    }
  },
  methods: {
    setActive(item) {
      this.selected = item.code
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-bottom: 4px;
}
.components {
  display: flex;
  gap: 4px;
  padding: 4px;
  background-color: #1169e6;
  border-radius: 12px;

  .component-button {
    color: #c1d5f9;
    background-color: #1169e6;
    fill: #c1d5f9;
    height: 60px;
    border-radius: 8px;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .icon {
      filter: invert(90%) sepia(11%) saturate(5702%) hue-rotate(184deg) brightness(110%)
        contrast(95%);
      margin: 4px 0;
      width: 24px;
      height: 24px;
    }
    .icon-selected {
      filter: none;
    }
    .text {
      font-size: 13px;
      font-weight: 600;
    }
  }
  .selected {
    background-color: #fff;
    color: #000;
  }
}

@media screen and (max-width: 768px) {
  .wrapper {
    display: none;
  }
}
</style>
