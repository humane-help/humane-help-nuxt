<template>
  <section class="partners">
    <b-container>
      <h3 class="partners-section-title">Наши клиенты</h3>
      <VueSlickCarousel v-bind="settings">
        <a
          v-for="item in items"
          :key="item.title"
          :href="item.url"
          class="partners--item my-3"
        >
          <img :src="item.image" />
        </a>
        <template #prevArrow>
          <div class="partners--control">
            <b-icon-chevron-left />
          </div>
        </template>
        <template #nextArrow>
          <div class="partners--control">
            <b-icon-chevron-right />
          </div>
        </template>
      </VueSlickCarousel>
    </b-container>
  </section>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'OnlineCourses',
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 6,
        speed: 500,
        dots: true,
        centerMode: true,
        centerPadding: '20px',
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      },
      items: [
        {
          image:
            'https://pm.expert/upload/resize_cache/iblock/3e9/186_90_0/3e92aea604393d979a1af9eabb750d52.jpg',
          url: '#',
        },
        {
          image:
            'https://pm.expert/upload/resize_cache/iblock/61e/186_90_0/61e988d307b00e8e8507be9fea4f6885.png',
          url: '#',
        },
        {
          image:
            'https://pm.expert/upload/resize_cache/iblock/3e9/186_90_0/3e92aea604393d979a1af9eabb750d52.jpg',
          url: '#',
        },
        {
          image:
            'https://pm.expert/upload/resize_cache/iblock/61e/186_90_0/61e988d307b00e8e8507be9fea4f6885.png',
          url: '#',
        },
        {
          image:
            'https://pm.expert/upload/resize_cache/iblock/3e9/186_90_0/3e92aea604393d979a1af9eabb750d52.jpg',
          url: '#',
        },
        {
          image:
            'https://pm.expert/upload/resize_cache/iblock/61e/186_90_0/61e988d307b00e8e8507be9fea4f6885.png',
          url: '#',
        },
        {
          image:
            'https://pm.expert/upload/resize_cache/iblock/3e9/186_90_0/3e92aea604393d979a1af9eabb750d52.jpg',
          url: '#',
        },
        {
          image:
            'https://pm.expert/upload/resize_cache/iblock/61e/186_90_0/61e988d307b00e8e8507be9fea4f6885.png',
          url: '#',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.partners {
  @include sm-down() {
    padding: 0 15px;
    &-section-title {
      margin-top: 20px;
    }
  }
  img {
    border-radius: 10px;
  }
  &--control {
    background-color: $background;
    width: 30px;
    height: 30px;
    padding: 7px;
    svg {
      font-size: 15px;
      font-weight: bold;
      color: #6b6b6b;
    }
  }
}
</style>
<style scoped>
.partners >>> .slick-prev:before,
.partners >>> .slick-next:before {
  content: '';
  font-size: 0;
}
</style>
