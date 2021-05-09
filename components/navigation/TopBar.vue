<template>
  <div class="topbar">
    <b-container>
      <div class="topbar--content">
        <company-address />
        <div class="phone">
          <b-icon-phone class="phone--icon" />
          <a class="phone--text" href="tel:+998937077371">+998 93 707 73 71</a>
          &nbsp;|&nbsp;
          <b-icon-chat-left-text class="chat-left-text--icon" />
          <a
            class="phone--text"
            target="_blank"
            href="https://t.me/davron112"
            >{{ $t('top-bar.write_telegram') }}</a
          >
        </div>
        <div class="page-links">
          <a href="/about">{{ $t('menu.about_company') }}</a
          >&nbsp;|&nbsp;
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
  background: var(--dark);
  color: var(--white);
  font-size: 13px;
  line-height: 18px;
  @include sm-down() {
    display: none;
  }
  &--content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 41px;
  }
  a {
    color: var(--white);
  }
}
</style>
