<template>
  <div>
    <header class="header">
      <top-bar />
      <b-container>
        <b-row class="align-center justify-center">
          <b-col lg="2" sm="3" cols="6" class="">
            <nuxt-link :to="{ name: 'home' }">
              <logo />
            </nuxt-link>
          </b-col>
          <b-col lg="7" sm="0" cols="0" class="links">
            <nav-links />
          </b-col>

          <b-col lg="3" sm="9" cols="6" class="icons" style="display: flex">
            <b-button color="primary" class="help-button">{{
              $t('menu.need_help')
            }}</b-button>
            <b-button color="primary" class="search-input">{{
              $t('menu.donate')
            }}</b-button>
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
  @include md-down() {
    .container {
      padding-top: 10px;
    }
  }
}
.darkHeader {
  position: fixed;
  background: linear-gradient(-45deg, #3f51b5 0%, #3f51b5 33%, #03a9f4 100%);
  box-shadow: 0px 4px 6px 0px #0000005c;
  @include md-down() {
    height: 60px;
  }
  .topbar {
    display: none;
  }
  color: white;
  .logo {
    filter: brightness(100);
  }
}
.links {
  @include md-down() {
    display: none;
  }
}
.spacer {
  height: 120px;
  @include md-down() {
    height: 90px;
  }
  @include sm-down() {
    height: 50px;
  }
}
.icons {
  text-align: right;
}
.search-input {
  border-radius: 18px;
  margin-right: 2px;
  border: solid #b2b9e8 0.5px;
  background: linear-gradient(-45deg, #3f51b5 0%, #3f51b5 33%, #03a9f4 100%);
}
.help-button {
  border-radius: 18px;
  margin-right: 2px;
  border: solid #b2b9e8 0.5px;
  background: linear-gradient(-45deg, #b5743f 0%, #daa945 33%, #eed78b 100%);
}
</style>
