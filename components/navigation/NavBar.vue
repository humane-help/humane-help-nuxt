<template>
  <div>
    <header class="header">
      <top-bar />
      <b-container>
        <b-row class="align-center justify-center">
          <b-col md="2" cols="6" class="">
            <nuxt-link :to="{ name: 'home' }">
              <logo />
            </nuxt-link>
          </b-col>
          <b-col md="9" cols="0" class="links">
            <nav-links />
          </b-col>
          <b-col md="1" cols="6" class="icons">
            <b-icon-search />
            <mobile-menu />
          </b-col>
        </b-row>
      </b-container>
    </header>
    <div class="spacer" />
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  mounted() {
    let scrollpos = window.scrollY
    const header = document.querySelector('header')
    const addClassOnScroll = () => header.classList.add('darkHeader')
    const removeClassOnScroll = () => header.classList.remove('darkHeader')
    window.addEventListener('scroll', function () {
      scrollpos = window.scrollY
      if (scrollpos >= 10) {
        addClassOnScroll()
      } else {
        removeClassOnScroll()
      }
    })
  },
}
</script>
<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  z-index: 100000;
  width: 100%;
  transition: background-color 0.3s ease-in-out;
  @include sm-down() {
    .container {
      padding-top: 10px;
    }
  }
}
.darkHeader {
  position: fixed;
  background-color: var(--primary);
  box-shadow: 0px 4px 6px 0px #0000005c;
  @include sm-down() {
    height: 60px;
  }
  .topbar {
    display: none;
  }
  color: white;
  .logo {
    filter: brightness(220%);
  }
}
.links {
  @include sm-down() {
    display: none;
  }
}
.spacer {
  height: 120px;
  @include sm-down() {
    height: 50px;
  }
}
.icons {
  text-align: right;
}
</style>
