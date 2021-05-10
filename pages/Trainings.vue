<template>
  <div>
    <div>
      <img
        width="100%"
        alt="дистанционные курсы"
        src="https://pm.expert/upload/medialibrary/285/2856f59d1fc0f07576d4fe4791a00076.png"
        height="auto"
        title="дистанционные курсы"
      />
      <h2 class="my-4 page-sub-title">{{ title }}</h2>

      <b-row>
        <b-col v-for="item in list" :key="item.title" md="4">
          <price-card :item="item" />
        </b-col>
      </b-row>
      <hr />
      <faq class="mt-5" />
    </div>
  </div>
</template>
<script>
export default {
  layout: 'leftsided',
  data() {
    return {
      title: 'Транзакции',
      list: [
        {
          image:
            'https://pm.expert/upload/iblock/55b/55b5502a9818b5195174b3b905d23d4f.jpg',
          title: 'Продление статуса «Эксперт в управлении проектами»',
          url: '#',
        },
        {
          image:
            'https://pm.expert/upload/iblock/f16/f166c86f1ad83ac1aba71d6ee49a8ae5.jpg',
          title: 'Продление статуса «Эксперт в управлении проектами»',
          url: '#',
        },
        {
          image:
            'https://pm.expert/upload/iblock/55b/55b5502a9818b5195174b3b905d23d4f.jpg',
          title: 'Продление статуса «Эксперт в управлении проектами»',
          url: '#',
        },
      ],
    }
  },
  mounted() {
    this.$store.commit('pageTitle', this.title)
  },
}
</script>
<style lang="scss" scoped>
.page-sub-title {
  font-size: 20px;
}
</style>
