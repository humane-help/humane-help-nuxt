<template>
  <b-card no-body class="card-horizontal">
    <div class="card-horizontal--image">
      <img :src="item.image" alt="Image" class="rounded-0" />
    </div>
    <div>
      <b-card-body :title="item.title">
        <b-card-text>
          {{ item.description }}
        </b-card-text>
        <div>
          <span v-for="element in item.dates" :key="element" class="pr-4">
            <b-icon-calendar-date />
            {{ element }}
          </span>
        </div>
        <h6>Нужен: 2.260.000 sum</h6>
        <b-progress :value="25" variant="success" height="7px"></b-progress>
      </b-card-body>

      <div class="card-horizontal--sub">{{ item.type }}</div>
    </div>
  </b-card>
</template>
<script>
export default {
  name: 'CardHorizontal',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
<style lang="scss" scoped>
.card-horizontal {
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  transition: box-shadow 0.3s ease;
  @include sm-down() {
    display: block;
    padding: 0;
    padding-bottom: 40px;
  }
  &:hover {
    box-shadow: 0 10px 20px rgba(211, 215, 221, 0.4);
  }
  &--image {
    height: 130px;
    width: 130px;
    @include sm-down() {
      width: 100%;
      height: 100%;
    }
    img {
      object-fit: cover;
      width: 100%;
    }
  }
  &--sub {
    background: var(--primary);
    float: right;
    color: var(--white);
    padding: 2px 8px 1px 9px;
    font-size: 0.6667em;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.5px;
    border-radius: 2px;
  }
}
</style>
