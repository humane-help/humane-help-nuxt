<template>
  <section class="footer-bottom">
    <b-container>
      <b-row>
        <b-col md="3" cols="12">
          <logo />
          <h5 class="footer-bottom--title">Наши контакты</h5>
          <div class="footer-bottom--contact">
            <b-icon-phone />
            <a class="phone--text" href="tel:+998712000833"
              >+998 71 200-08-33</a
            >
          </div>
          <div class="footer-bottom--contact my-3">
            <b-icon-geo />
            <a href="#">
              <span class="address--city"> Ташкент </span>
              <span class="address--street">
                100060, г.Ташкент, 1-проезд ул.Нукус, д.4</span
              >
            </a>
          </div>
          <div class="footer-bottom--contact">
            <b-icon-envelope />
            <a class="mail--text" href="mailto:info@pmexpert.uz"
              >info@pmexpert.uz</a
            >
          </div>
          <div class="footer-bottom--contact">
            <socials class="my-3" />
          </div>
        </b-col>
        <b-col md="9" cols="12">
          <b-row>
            <b-col v-for="item in menu" :key="item.title" md="4" cols="6">
              <h5 class="footer-bottom--title">{{ item.title }}</h5>
              <a
                v-for="child in item.children"
                :key="child.title"
                class="d-block footer-bottom--link"
                :href="child.url"
                >{{ child.title }}</a
              >
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
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
