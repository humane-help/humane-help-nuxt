<template>
  <section class="footer-top">
    <b-container>
      <b-row>
        <b-col md="3">
          <h5 class="footer-top--title">Узнавайте первым</h5>
          <p class="footer-top--description">
            Подпишитесь, чтобы получать информацию о самых интересных событиях,
            новых курсах, акциях и скидках.
          </p>
          <hr />
          <socials class="my-3" />
          <a href="/company/" class="btn btn-primary mt-6 footer-top--btn">
            Подписка на рассылку
          </a>
        </b-col>
        <b-col md="9">
          <b-row>
            <b-col md="6">
              <h5 class="footer-top--title">Ближайшие события</h5>
              <simple-card
                v-for="item in events"
                :key="item.title"
                :item="item"
              ></simple-card>
            </b-col>
            <b-col md="6">
              <h5 class="footer-top--title">Новости</h5>
              <simple-card
                v-for="item in events"
                :key="item.title"
                :item="item"
              ></simple-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  name: 'FooterTop',
  data() {
    return {
      events: [
        {
          image:
            'https://pm.expert/upload/iblock/9c5/9c53d0b4d33f60dc419737176b8da543.jpg',
          title:
            'Онлайн курс практические инструменты сокращения стоимости проекта',
          url: '#',
        },
        {
          image:
            'https://pm.expert/upload/iblock/9c5/9c53d0b4d33f60dc419737176b8da543.jpg',
          title:
            'Онлайн курс практические инструменты сокращения стоимости проекта',
          url: '#',
        },
        {
          image:
            'https://pm.expert/upload/iblock/9c5/9c53d0b4d33f60dc419737176b8da543.jpg',
          title:
            'Онлайн курс практические инструменты сокращения стоимости проекта',
          url: '#',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.footer-top {
  padding-top: 30px;
  background: $background;
  &--title {
    font-size: 1em;
    margin-bottom: 30px;
  }
  &--description {
    font-size: 13px;
  }
  &--btn {
    width: 100%;
    &:hover {
      background-color: var(--green);
      border-color: var(--green);
    }
  }
}
</style>
