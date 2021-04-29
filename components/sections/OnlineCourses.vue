<template>
  <section class="online-courses page-background">
    <b-container>
      <h3 class="online-courses-section-title">Дистанционные курсы</h3>
    </b-container>
    <VueSlickCarousel v-bind="settings">
      <div v-for="item in items" :key="item.title" class="online-courses--item">
        <div
          class="online-courses--image"
          :style="{ 'background-image': 'url(' + item.image + ')' }"
        >
          <div class="online-courses--overlay" />
          <a class="online-courses--link" :href="item.url">{{ item.title }}</a>
        </div>
      </div>
    </VueSlickCarousel>
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
        slidesToShow: 4,
        speed: 500,
      },
      items: [
        {
          image:
            'https://pm.expert/upload/resize_cache/iblock/ee8/700_700_0/ee81c0faeedfb877730f53e1fb585b37.jpg',
          title: 'Управление проектами в компании (20 PDU)',
          url: '#',
        },
        {
          image:
            'https://pm.expert/upload/resize_cache/iblock/837/700_700_0/8379ce7cc6042983889577884e60480f.jpg',
          title: 'Управление проектами в компании (20 PDU)',
          url: '#',
        },
        {
          image:
            'https://pm.expert/upload/resize_cache/iblock/ee8/700_700_0/ee81c0faeedfb877730f53e1fb585b37.jpg',
          title: 'Управление проектами в компании (20 PDU)',
          url: '#',
        },
        {
          image:
            'https://pm.expert/upload/resize_cache/iblock/837/700_700_0/8379ce7cc6042983889577884e60480f.jpg',
          title: 'Управление проектами в компании (20 PDU)',
          url: '#',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.online-courses {
  &-section-title {
    margin-bottom: 30px;
  }
  &--item {
    padding: 0 20px;
    border-radius: 10px;
  }
  &--image {
    border-radius: 10px;
    position: relative;
    height: 275px;
    transition: box-shadow 0.3s ease;
    &:hover {
      box-shadow: -1px 8px 13px 1px rgb(0 0 0 / 17%);
    }
    background-size: cover !important;
    margin-bottom: 10px;
  }
  &--overlay {
    border-radius: 10px;
    opacity: 0.3;
    -webkit-transition: opacity 0.2s ease;
    -o-transition: opacity 0.2s ease;
    -moz-transition: opacity 0.2s ease;
    transition: opacity 0.2s ease;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
    display: block;
    top: 0;
    &:hover {
      opacity: 0.7;
    }
  }
  &--link {
    padding: 17px 40px 0px;
    max-width: 365px;
    position: absolute;
    bottom: 55px;
    color: var(--white);
    font-size: 1.2em;
    line-height: 1.25em;
    font-weight: bold;
    z-index: 3;
  }
}
</style>
<style scoped>
.online-courses >>> .slick-list:after {
  background-image: linear-gradient(
    90deg,
    hsla(180, 5%, 96%, 0.001),
    hsla(180, 5%, 96%, 0.2) 5%,
    hsla(180, 5%, 96%, 0.6) 30%,
    hsla(180, 5%, 96%, 0.8)
  );
  left: 70%;
  position: absolute;
  height: 100%;
  width: 50%;
  top: 0px;
  content: '';
  z-index: 2;
  pointer-events: none;
}

.online-courses >>> .slick-list:before {
  position: absolute;
  height: 100%;
  width: 50%;
  content: '';
  z-index: 2;
  top: 0px;
  pointer-events: none;
  right: 70%;
  background-image: linear-gradient(
    -90deg,
    hsla(180, 5%, 96%, 0.001),
    hsla(180, 5%, 96%, 0.2) 5%,
    hsla(180, 5%, 96%, 0.6) 30%,
    hsla(180, 5%, 96%, 0.8)
  );
}
</style>
