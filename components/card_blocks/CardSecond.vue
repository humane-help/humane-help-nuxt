<template>
  <b-card tag="article" class="card--item">
    <div class="card--item__image">
      <img :src="item.image" img-alt="Image" />
    </div>
    <h4>
      {{ item.title }}
    </h4>
    <b-card-text>
      {{ item.description }}
    </b-card-text>
    <div>
      {{ item.date }}
    </div>
    <a
      v-for="element in item.links"
      :key="element.url"
      :href="element.url"
      class="card--item__links"
    >
      {{ element.title }}
    </a>
  </b-card>
</template>
<script>
export default {
  name: 'CardSecond',
  props: {
    item: {
      required: true,
      type: [Object, Array],
    },
  },
}
</script>
<style lang="scss" scoped>
.card--item {
  transition: box-shadow 0.3s ease;
  margin-bottom: 20px;
  &:hover {
    box-shadow: 0 10px 20px rgba(211, 215, 221, 0.4);
  }
  &__image {
    text-align: center;
    img {
      height: 144px;
      width: 144px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  &__links {
    font-size: 0.8667em;
    display: block;
    margin-bottom: 10px;
  }
}
</style>
