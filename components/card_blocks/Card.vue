<template>
  <b-card
    :title="item.title"
    :img-src="item.image"
    img-alt="Image"
    tag="article"
    class="card--item"
  >
    <b-card-text style="font-size: small">
      {{ item.description }}
    </b-card-text>
    <div>
      <span style="font-size: small"
        ><b-icon-check></b-icon-check>{{ item.date }}</span
      >
    </div>
  </b-card>
</template>
<script>
export default {
  name: 'Card',
  props: {
    item: {
      required: true,
      type: [Object, Array],
    },
  },
}
</script>
<style lang="scss" scoped>
.card.card--item {
  transition: box-shadow 0.3s ease;
  margin-bottom: 20px;
  &:hover {
    box-shadow: 0 10px 20px rgba(211, 215, 221, 0.4);
  }
}
</style>
