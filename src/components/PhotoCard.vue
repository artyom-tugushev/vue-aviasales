<template>
  <div class="poppins-font background">
    <div class="white-sticker">
      <img class="icon" src="/images/airplane.svg" alt="" />
      <span>Сочи от 8 699 ₽</span>
    </div>
    <div class="details">
      <h3 class="title">Океанариум</h3>
      <p class="description truncation">
        Говорят, наблюдение за рыбами — отличный способ снять стресс. В сочинском океанариуме их
        более 4 000, так что расслабиться можно на год вперёд. Заодно вы буквально окунётесь в
        подводный мир: тут обучают дайверов и даже выдают им сертификаты.
      </p>
    </div>
    <div class="filter"></div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.background {
  position: relative;
  z-index: 1;
  background: url('/images/jpg/oceanarium.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  border-radius: 14px;
  width: 388px;
  height: 388px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  transition: background-size 1s ease-in-out;
  &:hover {
    background-size: 115%;
  }

  .details {
    margin-top: auto;
    color: #fff;
    .title {
      line-height: 34px;
      margin: 8px 0;
      font-weight: 800;
      font-size: 34px;
    }
    .description {
      font-size: 15px;
      line-height: 150%;
      margin: 0;
      padding-left: 4px;
    }
    .truncation {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; /* Number of lines to show */
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .white-sticker {
    position: absolute;
    top: 12px;
    left: 12px;
    font-size: 16px;
    border-radius: 8px;
    padding: 4px 8px 4px 4px;
    font-weight: 600;
    display: flex;
    align-items: center;
    background-color: #fff;
    .icon {
      width: 16px;
      height: 16px;
      margin-right: 4px;
    }
  }
  .filter {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    background: linear-gradient(180deg, transparent, #000);
    width: 388px;
    height: 388px;
    border-radius: 14px;
  }
}
</style>
