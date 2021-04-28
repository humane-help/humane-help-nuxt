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
            <b-col md="3">
              <h5 class="footer-bottom--title">Компания</h5>
              <a
                v-for="item in links"
                :key="item.title"
                class="d-block footer-bottom--link"
                :href="item.url"
                >{{ item.title }}</a
              >
            </b-col>
            <b-col md="3">
              <h5 class="footer-bottom--title">Сертификация</h5>
              <a
                v-for="item in links"
                :key="item.title"
                class="d-block footer-bottom--link"
                :href="item.url"
                >{{ item.title }}</a
              >
            </b-col>
            <b-col md="3">
              <h5 class="footer-bottom--title">Другие услуги</h5>
              <a
                v-for="item in links"
                :key="item.title"
                :href="item.url"
                class="d-block footer-bottom--link"
                >{{ item.title }}</a
              >
            </b-col>
            <b-col md="3">
              <h5 class="footer-bottom--title">Полезная информация</h5>
              <a
                v-for="item in links"
                :key="item.title"
                class="d-block footer-bottom--link"
                :href="item.url"
                >{{ item.title }}</a
              >
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  name: 'FooterBottom',
  data() {
    return {
      links: [
        {
          title: 'О компании',
          url: '#',
        },
        {
          title: 'Наши представители',
          url: '#',
        },
        {
          title: 'Вакансии',
          url: '#',
        },
        {
          title: 'О компании',
          url: '#',
        },
        {
          title: 'Наши представители',
          url: '#',
        },
        {
          title: 'Вакансии',
          url: '#',
        },
      ],
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
    margin-bottom: 30px;
    color: var(--white);
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
