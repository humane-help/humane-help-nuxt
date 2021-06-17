<template>
  <div class="topbar">
    <b-container>
      <div class="topbar--content">
        <company-address />
        <div class="phone">
          <svg
            enable-background="new 0 0 24 24"
            height="512"
            viewBox="0 0 24 24"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z"
              fill="#039be5"
            />
          </svg>
          <a
            class="phone--text"
            target="_blank"
            href="https://t.me/davron112"
            >{{ $t('top-bar.write_telegram') }}</a
          >
        </div>
        <div class="page-links">
          <a href="/contacts">{{ $t('menu.contacts') }}</a>
          &nbsp;&nbsp;
          <a href="javascript:void(0)" @click="changeLang('ru')">RU</a
          >&nbsp;|&nbsp;
          <a href="javascript:void(0)" @click="changeLang('uz')">UZ</a>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'TopBar',
  methods: {
    async changeLang(lang) {
      if (this.$i18n.locale === lang) return
      await this.$router.push(this.switchLocalePath(lang))
    },
  },
}
</script>
<style lang="scss" scoped>
.topbar {
  background: linear-gradient(-45deg, #3f51b5 0%, #3f51b5 33%, #03a9f4 100%);
  color: var(--white);
  font-size: 13px;
  line-height: 14px;
  @include sm-down() {
    display: none;
  }
  &--content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 28px;
  }
  a {
    color: var(--white);
  }
}
</style>
