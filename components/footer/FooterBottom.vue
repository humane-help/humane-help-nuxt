<template>
  <section class="footer-bottom">
    <b-container>
      <b-row>
        <b-col md="3">
          <h5 class="footer-bottom--title">Наши контакты</h5>
          <div class="footer-bottom--contact">
            <b-icon-phone />
            <a class="phone--text" href="tel:+74999389307"
              >+7 (499) 938-93-07</a
            >
          </div>
          <div class="footer-bottom--contact my-3">
            <b-icon-geo />
            <a href="#">
              <span class="address--city"> Москва </span>
              <span class="address--street"> ул. Каланчёвская, д. 15 </span>
            </a>
          </div>
          <div class="footer-bottom--contact">
            <b-icon-envelope />
            <a class="mail--text" href="mailto:info@pm.expert"
              >info@pm.expert</a
            >
          </div>
        </b-col>
        <b-col md="9">
          <b-row>
            <b-col cols="4" v-for="item in menu" :key="item.title">
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
  }

  &--link {
    font-size: 0.933em;
    line-height: 24px;
    color: #7a7c7f;
    &:hover {
      color: var(--white);
    }
  }
  &--contact a {
    color: var(--white);
  }
}
</style>
