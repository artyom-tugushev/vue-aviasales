<template>
  <div class="header">
    <div class="logo">
      <img class="avia-sales-logo" src="../assets/images/aviasales-logo.svg" />
      <img class="lettering" src="../assets/images/aviasales-lettering.svg" />
    </div>

    <div class="right">
      <div class="button">
        <img src="../assets/images/question.svg" />
      </div>
      <div class="button">
        <img src="../assets/images/globe.svg" />
        <span class="poppins-font lang">RUB</span>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import './src/assets/main.scss';

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  padding: 8px 20px;
  width: 100%;
  background-color: $blue;
}
.logo {
  display: flex;
  align-items: center;
  .avia-sales-logo {
    height: 26px;
    width: 26px;
  }
  display: flex;
  align-items: center;
  .lettering {
    margin-left: 0.5rem;
    height: 30px;
    width: 107px;
    margin-bottom: 4px;
  }
}
.right {
  display: flex;
  margin-left: auto;
  gap: 8px;
  .button {
    gap: 4px;
    cursor: pointer;
    padding: 4px 6px;
    display: flex;
    align-items: center;
    height: 36px;
    border-radius: 4px;
    &:hover {
      background-color: $blue-alt;
    }
    .lang {
      color: #fff;
      font-size: 13px;
      font-weight: 600;
    }
  }
}
@media screen and (max-width: 1024px) {
  .header {
    position: relative;
  }
  .logo {
    .lettering {
      display: none;
    }
  }
}
</style>
