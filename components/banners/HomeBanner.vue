<template>
  <div>
    <b-carousel
      class="home-banner"
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        class="home-banner--item"
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://pm.expert/upload/iblock/74b/74bd74919f76b2a2ff08dd06a00d0257.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide> -->

      <!-- Slides with image only -->
      <b-carousel-slide
        class="home-banner--item"
        img-src="https://pm.expert/upload/iblock/400/400647e3953d5d1a542dbe05609b2f43.jpg"
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
}
</style>
