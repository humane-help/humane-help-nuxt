<template>
  <div class="footer-bottom">
    <div class="container">
      <p>
        &copy; 2021
        <a href="#" target="_new" title="#">site.com</a>
      </p>
    </div>
  </div>
</template>
<script>
import menu from '@/assets/data/menu'
export default {
  name: 'FooterBottom',
  data() {
    return {
      menu,
    }
  },
}
</script>
<style lang="scss" scoped>
.footer-bottom {
  padding-top: 30px;
  background: var(--dark);
  color: #7a7c7f;
  &--title {
    font-size: 1em;
    color: var(--white);
    min-width: 120px;
    min-height: 50px;
    display: flex;
    align-content: center;
    align-items: center;
    @include sm-down() {
      font-size: 14px;
      min-height: 30px;
    }
  }

  &--link {
    font-size: 0.933em;
    line-height: 24px;
    color: #7a7c7f;
    &:hover {
      color: var(--white);
    }
  }
  &--contact {
    @include md-down() {
      margin-bottom: 20px;
    }
    a {
      color: var(--white);
    }
  }
  @include sm-down() {
    a {
      font-size: 12px;
    }
  }
}
</style>
