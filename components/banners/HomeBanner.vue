<template>
  <div>
    <b-carousel
      id="carousel-1"
      class="home-banner"
      :interval="4000"
      indicators
      controls
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="item in list"
        :key="item.image"
        class="home-banner--item"
      >
        <template #img>
          <img width="100%" height="100%" :src="item.image" />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          image: '/img/slides/1.jpg',
          text: '',
        },
        {
          image: '/img/slides/2.jpg',
          text: '',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.home-banner {
  &--item {
    img {
      object-fit: cover;
    }
    height: 660px;
    @include md-down() {
      max-height: 350px;
      height: 350px;
    }
  }
  h1 {
    color: #1e242c;
    opacity: 0.7;
  }
}
</style>
