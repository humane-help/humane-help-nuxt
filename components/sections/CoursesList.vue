<template>
  <section class="media-block">
    <card-template
      :title="$t('help.title')"
      :action="{ title: $t('help.categories'), link: '/cabinet/news/' }"
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
          image: require('@/static/img/help/water.jpg'),
          title: this.$t('help.clean_water'),
          description: this.$t('help.clean_water_detail'),
          date: this.$t('help.transactions'),
        },
        {
          url:
            'https://pm.expert/media/news/obyavlyaem-itogi-rozygrysha-prizov/',
          image: require('@/static/img/help/food.jpg'),
          title: this.$t('help.healthy_food'),
          description: this.$t('help.healthy_food_detail'),
          date: this.$t('help.transactions'),
        },
        {
          url:
            'https://pm.expert/media/news/obyavlyaem-itogi-rozygrysha-prizov/',
          image: require('@/static/img/help/edu.jpg'),
          title: this.$t('help.education'),
          description: this.$t('help.education_detail'),
          date: this.$t('help.transactions'),
        },
        {
          url:
            'https://pm.expert/media/news/obyavlyaem-itogi-rozygrysha-prizov/',
          image: require('@/static/img/help/med.jpg'),
          title: this.$t('help.medical'),
          description: this.$t('help.medical_detail'),
          date: this.$t('help.transactions'),
        },
      ],
    }
  },
}
</script>
