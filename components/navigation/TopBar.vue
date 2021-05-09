<template>
  <div class="topbar">
    <b-container>
      <div class="topbar--content">
        <company-address />
        <div class="phone">
          <b-icon-phone class="phone--icon" />
          <a class="phone--text" href="tel:+998712000833">+998 71 200-08-33</a>
          &nbsp;|&nbsp;
          <b-icon-chat-left-text class="chat-left-text--icon" />
          <a
            class="phone--text"
            target="_blank"
            href="https://t.me/mirjamolmamatov"
            >Напишите нам в Телеграм</a
          >
        </div>
        <div class="page-links">
          <a href="/about">О Компании</a>&nbsp;|&nbsp;
          <a href="/contacts">Контакты</a>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'TopBar',
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
