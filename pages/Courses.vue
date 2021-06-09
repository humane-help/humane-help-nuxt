<template>
  <card-template>
    <b-col v-for="item in list" :key="item.url" md="12">
      <card-horizontal :item="item" />
    </b-col>
  </card-template>
</template>
<script>
export default {
  layout: 'leftsided',
  data() {
    return {
      title: 'Дети, которые нуждаются в помощи',
      list: [
        {
          url: '#',
          image: require('@/static/img/help/list/hospital.jpg'),
          title: 'Malika',
          description: "Tomoq yallig'lanishi",
          dates: ['12 мая 2021, Среда', '24 мая 2021, Понедельник'],
          type: 'Davolash uchun',
        },
        {
          url: '#',
          image: require('@/static/img/help/list/hospital.jpg'),
          title: 'Nigina',
          description: "Tomoq yallig'lanishi",
          dates: ['12 мая 2021, Среда', '24 мая 2021, Понедельник'],
          type: "O'qishi uchun",
        },
        {
          url: '#',
          image: require('@/static/img/help/list/hospital.jpg'),
          title: 'Jamila',
          description: "Tomoq yallig'lanishi",
          dates: ['12 мая 2021, Среда', '24 мая 2021, Понедельник'],
          type: 'Oziq-ovqat',
        },
        {
          url: '#',
          image: require('@/static/img/help/list/hospital.jpg'),
          title: 'Anora',
          description: 'Онлайн',
          dates: ['12 мая 2021, Среда', '24 мая 2021, Понедельник'],
          type: 'Oqish uchun',
        },
        {
          url: '#',
          image: require('@/static/img/help/list/hospital.jpg'),
          title: 'Alisha',
          description: "Tomoq yallig'lanishi",
          dates: ['12 мая 2021, Среда', '24 мая 2021, Понедельник'],
          type: 'Davolanish uchun',
        },
        {
          url: '#',
          image: require('@/static/img/help/list/hospital.jpg'),
          title: 'Malika',
          description: "Tomoq yallig'lanishi",
          dates: ['12 мая 2021, Среда', '24 мая 2021, Понедельник'],
          type: 'Davolanish uchun',
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
.programs {
  background: $background;
}
</style>
