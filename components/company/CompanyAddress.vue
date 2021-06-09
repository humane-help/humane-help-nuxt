<template>
  <div class="address">
    <span class="address--city">
      <b-icon-geo-alt-fill class="geo-alt-fill--icon" /> Ташкент
    </span>
    <span class="address--street"> {{ $t('address.address') }}</span>
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
