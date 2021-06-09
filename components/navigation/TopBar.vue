<template>
  <div class="topbar">
    <b-container>
      <div class="topbar--content">
        <company-address />
        <div class="phone">
          <b-icon-chat-left-text class="chat-left-text--icon" />
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
