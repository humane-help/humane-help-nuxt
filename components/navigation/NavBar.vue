<template>
  <header>
    <top-bar />
    <b-container>
      <b-row class="align-center justify-center">
        <b-col md="2" class="align-center justify-center">
          <nuxt-link :to="{ name: 'home' }">
            <logo />
          </nuxt-link>
        </b-col>
        <b-col md="9" class="align-center justify-center">
          <nav-links />
        </b-col>
        <b-col md="1">
          <b-icon-person />
          <b-icon-search />
        </b-col>
      </b-row>
    </b-container>
  </header>
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
      if (scrollpos >= 500) {
        addClassOnScroll()
      } else {
        removeClassOnScroll()
      }
    })
  },
}
</script>
<style lang="scss" scoped>
.darkHeader {
  position: fixed;
  top: 0;
  z-index: 100000;
  background-color: var(--primary);
  box-shadow: 0px 4px 6px 0px #0000005c;
  width: 100%;
  .topbar {
    display: none;
  }
  color: white;
  .logo {
    filter: brightness(220%);
  }
}
</style>
