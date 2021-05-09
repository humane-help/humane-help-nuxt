<template>
  <section class="media-block">
    <card-template
      :title="$t('menu.education')"
      :action="{ title: $t('course.all_courses'), link: '/cabinet/news/' }"
    >
      <b-col
        v-for="(item, key) in list"
        :key="item.title"
        lg="3"
        sm="6"
        cols="12"
      >
        <card
          :item="item"
          class="js-scroll"
          :class="key % 2 === 0 ? 'fade-in-bottom' : 'fade-in-top'"
        />
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
          url:
            'https://pm.expert/media/news/obyavlyaem-itogi-rozygrysha-prizov/',
          image:
            'https://pm.expert/upload/resize_cache/iblock/bd7/500_500_0/bd7e4a4f0c982593f94c495a6473bf54.jpg',
          title: 'Объявляем итоги розыгрыша призов',
          description: 'Поздравляем победительницу!',
          date: '19 апреля 2021',
        },
        {
          url:
            'https://pm.expert/media/news/obyavlyaem-itogi-rozygrysha-prizov/',
          image:
            'https://pm.expert/upload/resize_cache/iblock/4ec/500_500_0/4ecdaf37d617008d6617d8a734b3125c.jpg',
          title: 'Объявляем итоги розыгрыша призов',
          description: 'Поздравляем победительницу!',
          date: '19 апреля 2021',
        },
        {
          url:
            'https://pm.expert/media/news/obyavlyaem-itogi-rozygrysha-prizov/',
          image:
            'https://pm.expert/upload/resize_cache/iblock/bd7/500_500_0/bd7e4a4f0c982593f94c495a6473bf54.jpg',
          title: 'Объявляем итоги розыгрыша призов',
          description: 'Поздравляем победительницу!',
          date: '19 апреля 2021',
        },
        {
          url:
            'https://pm.expert/media/news/obyavlyaem-itogi-rozygrysha-prizov/',
          image:
            'https://pm.expert/upload/resize_cache/iblock/4ec/500_500_0/4ecdaf37d617008d6617d8a734b3125c.jpg',
          title: 'Объявляем итоги розыгрыша призов',
          description: 'Поздравляем победительницу!',
          date: '19 апреля 2021',
        },
      ],
    }
  },
}
</script>
