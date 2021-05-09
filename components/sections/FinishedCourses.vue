<template>
  <section class="programs page-background">
    <card-template :title="$t('finished_courses.title')">
      <b-col v-for="item in list" :key="item.url" md="12">
        <card-horizontal :item="item" />
      </b-col>
    </card-template>
  </section>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          url: '#',
          image: require('@/static/img/help/list/hospital.jpg'),
          title: 'Лариса Жалилова',
          description: "Tomoq yallig'lanishi",
          dates: ['12 мая 2021, Среда', '24 мая 2021, Понедельник'],
          type: 'Помощ',
        },
        {
          url: '#',
          image: require('@/static/img/help/list/qiz.jpeg'),
          title: 'Асал',
          description: "Tomoq yallig'lanishi",
          dates: ['12 мая 2021, Среда', '24 мая 2021, Понедельник'],
          type: 'Помощ',
        },
      ],
    }
  },
}
</script>
