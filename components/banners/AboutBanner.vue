<template>
  <div>
    <b-carousel id="carousel-1" class="about-banner" :interval="4000">
      <b-carousel-slide>
        <template #img>
          <div
            class="about-banner--item"
            :style="{
              'background-image':
                'url(https://pm.expert/upload/iblock/67c/67c471188bf14981650ea4b628b22adb.jpg)',
            }"
          >
            <h4>
              Ежегодно тренеры PM Expert проходят курсы по программам Т-Т-Т в
              лучших учебных заведениях.
            </h4>
          </div>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <div
            class="about-banner--item"
            :style="{
              'background-image':
                'url(https://pm.expert/upload/iblock/d43/d43cce7e568a6e2bc0800849afb6df4a.jpg)',
            }"
          >
            <h4>
              Тренеры PM Expert имеют практический опыт работы на самых
              масштабных проектах страны.
            </h4>
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
