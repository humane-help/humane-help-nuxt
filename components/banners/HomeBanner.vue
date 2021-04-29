<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      class="home-banner"
      :interval="4000"
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="/img/slides/slider-1.jpg">
        <h1>Дистанционный курс - Управление проектами в компании</h1>
      </b-carousel-slide>

      <!-- Text slides with image -->
      <b-carousel-slide
        class="home-banner--item"
        caption="First slide"
        text="Онлайн формат - курс Управление проектами на основе стандарта PMI"
        img-src="/img/slides/slider-2.jpg"
      ></b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        class="home-banner--item"
        img-src="/img/slides/slider-3.jpg"
      ></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>
<style lang="scss" scoped>
.home-banner {
  &--item {
    max-height: 660px;
  }
  h1 {
    color: #1e242c;
    opacity: 0.7;
  }
}
</style>
