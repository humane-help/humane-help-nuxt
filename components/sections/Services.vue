<template>
  <section class="media-block">
    <card-template
      :title="$t('menu.certification')"
      :action="{ title: $t('services.all_services'), link: '/cabinet/news/' }"
    >
      <b-col v-for="item in list" :key="item.title" md="6">
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
          url: '/obyavlyaem-itogi-rozygrysha-prizov/',
          image: require('@/static/img/help/list/hospital.jpg'),
          title: '-',
          description: 'Базовые курсы по управлению проектами по стандарту...',
          links: [
            {
              url: '#',
              title: '',
            },
            {
              url: '#',
              title: '',
            },
          ],
        },
        {
          url: '/obyavlyaem-itogi-rozygrysha-prizov/',
          image: require('@/static/img/help/list/hospital.jpg'),
          title: '-',
          description: 'Базовые курсы по управлению проектами по стандарту...',
          links: [
            {
              url: '#',
              title:
                'Комбинированный курс «Управление проектами на основе стандарта PMI PMBOK®. Базовый курс» & Деловая игра «Тайна пирамиды Хеопса». Отработка навыков проектного менеджмента',
            },
            {
              url: '#',
              title:
                'Основы управления проектами на базе стандарта PMI PMBOK® 40 PDU',
            },
          ],
        },
        {
          url: '/obyavlyaem-itogi-rozygrysha-prizov/',
          image: require('@/static/img/help/list/hospital.jpg'),
          title: '-',
          description: 'Базовые курсы по управлению проектами по стандарту...',
          links: [
            {
              url: '#',
              title:
                'Комбинированный курс «Управление проектами на основе стандарта PMI PMBOK®. Базовый курс» & Деловая игра «Тайна пирамиды Хеопса». Отработка навыков проектного менеджмента',
            },
            {
              url: '#',
              title:
                'Основы управления проектами на базе стандарта PMI PMBOK® 40 PDU',
            },
          ],
        },
        {
          url: '/obyavlyaem-itogi-rozygrysha-prizov/',
          image: require('@/static/img/help/list/hospital.jpg'),
          title: '-',
          description: 'Базовые курсы по управлению проектами по стандарту...',
          links: [
            {
              url: '#',
              title:
                'Комбинированный курс «Управление проектами на основе стандарта PMI PMBOK®. Базовый курс» & Деловая игра «Тайна пирамиды Хеопса». Отработка навыков проектного менеджмента',
            },
            {
              url: '#',
              title:
                'Основы управления проектами на базе стандарта PMI PMBOK® 40 PDU',
            },
          ],
        },
        {
          url: '/obyavlyaem-itogi-rozygrysha-prizov/',
          image: require('@/static/img/help/list/hospital.jpg'),
          title: '-',
          description: 'Базовые курсы по управлению проектами по стандарту...',
          links: [
            {
              url: '#',
              title:
                'Комбинированный курс «Управление проектами на основе стандарта PMI PMBOK®. Базовый курс» & Деловая игра «Тайна пирамиды Хеопса». Отработка навыков проектного менеджмента',
            },
            {
              url: '#',
              title: '',
            },
          ],
        },
        {
          url:
            'https://pm.expert/media/news/obyavlyaem-itogi-rozygrysha-prizov/',
          image: require('@/static/img/help/list/hospital.jpg'),
          title: '---',
          description: 'Базовые курсы по управлению проектами по стандарту...',
          links: [
            {
              url: '#',
              title:
                'Эффективное управление расписанием проекта при ограниченных ресурсах',
            },
            {
              url: '#',
              title:
                'Практические методы эффективного управления рисками в проектах',
            },
            {
              url: '#',
              title:
                'Комбинированный курс «Управление проектами на основе стандарта PMI PMBOK®. Базовый курс» & Деловая игра «Тайна пирамиды Хеопса». Отработка навыков проектного менеджмента',
            },
            {
              url: '#',
              title:
                'Основы управления проектами на базе стандарта PMI PMBOK® 40 PDU',
            },
          ],
        },
      ],
    }
  },
}
</script>
