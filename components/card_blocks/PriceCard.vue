<template>
  <a :href="item.url" class="price-card">
    <img :src="item.image" alt="Image" class="price-card--image" />
    <h3 class="price-card--title">
      {{ item.title }}
    </h3>
  </a>
</template>
<script>
export default {
  name: 'CardHorizontal',
  props: {
    item: {
      type: Object,
    },
  },
}
</script>
<style lang="scss" scoped>
.price-card {
  display: block;
  border-radius: 10px;
  margin-bottom: 30px;
  transition: box-shadow 0.3s ease;
  padding: 10px;
  &--image {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
  &--title {
    margin-top: 10px;
    font-size: 16px;
    text-align: center;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:hover {
    box-shadow: 0px 8px 17px 2px rgb(51 51 51 / 23%);
    img {
      height: 100px;
      width: 100%;
      object-fit: contain;
      margin: 25px 0;
    }
    h3 {
      overflow: initial;
      white-space: normal;
    }
  }
}
</style>
