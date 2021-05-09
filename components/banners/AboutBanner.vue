<template>
  <div>
    <b-carousel id="carousel-1" class="about-banner" :interval="4000">
      <b-carousel-slide>
        <template #img>
          <div
            class="about-banner--item"
            :style="{
              'background-image': `url(${require('@/static/img/help/23.jpg')})`,
            }"
          >
            <h4>Мы способствуем образованному и здоровому воспитанию детей.</h4>
          </div>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <div
            class="about-banner--item"
            :style="{
              'background-image': `url(${require('@/static/img/help/34.jpg')})`,
            }"
          >
            <h4>Наш фонд помогает нуждающимся детям.</h4>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.about-banner {
  &--item {
    min-height: 400px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    h4 {
      position: absolute;
      left: 0;
      bottom: 0;
      background: white;
      font-weight: normal;
      font-size: 13px;
      line-height: 20px;
      color: #828282;
      max-width: 50%;
      padding: 20px 20px 20px 23px;
      border-radius: 0 0 0 9px;
      margin: 0;
    }
  }
}
</style>
