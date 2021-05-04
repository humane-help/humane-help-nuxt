<template>
  <div class="address">
    <span class="address--city"> Ташкент </span>
    <span class="address--street">
      100060, г.Ташкент, 1-проезд ул.Нукус, д.4</span
    >
  </div>
</template>
<script>
export default {
  name: 'CompanyAddress',
}
</script>
<style lang="scss" scoped>
.address {
  @include md-down() {
    display: none;
  }
}
</style>
