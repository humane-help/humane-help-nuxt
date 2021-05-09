<template>
  <section class="programs page-background">
    <card-template title="Проведенный курсы">
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
          image:
            'https://pm.expert/upload/resize_cache/iblock/154/350_350_0/1549e7f6b5150c56d5b3cb67feaf8016.jpg',
          title:
            'Онлайн формат - курс Управление проектами на основе стандарта PMI P...',
          description: 'Онлайн',
          dates: ['12 мая 2021, Среда', '24 мая 2021, Понедельник'],
          type: 'Основы управления проектами',
        },
        {
          url: '#',
          image:
            'https://pm.expert/upload/resize_cache/iblock/484/350_350_0/48422d8174bd00e89987e787e187d3ad.jpg',
          title:
            'Онлайн формат - курс Управление проектами на основе стандарта PMI P...',
          description: 'Онлайн',
          dates: ['12 мая 2021, Среда', '24 мая 2021, Понедельник'],
          type: 'Основы управления проектами',
        },
      ],
    }
  },
}
</script>
