export default [
  {
    title: 'О фонде',
    i18n: 'menu.about_company',
    url: 'about',
    children: [
      {
        title: 'Миссия',
        url: 'about',
        i18n: 'menu.mission',
      },
      {
        title: 'История',
        url: 'about',
        i18n: 'menu.history',
      },
      {
        title: 'Тренеры',
        url: 'members',
        i18n: 'menu.trainers',
      },
    ],
  },
  {
    title: 'Categories',
    url: 'courses',
    i18n: 'menu.categories',
    children: [
      {
        title: 'Основы управления проектами',
        url: 'courses',
        i18n: 'help.clean_water',
      },
      {
        title: 'Дистанционные курсы по управлению проектами',
        url: 'courses',
        i18n: 'help.healthy_food',
      },
      {
        title: 'Симуляционные деловые игры',
        url: 'courses',
        i18n: 'help.education',
      },
      {
        title: 'Medical',
        url: 'courses',
        i18n: 'help.medical',
      },
    ],
  },
  {
    title: 'Обучение',
    url: 'courses',
    i18n: 'menu.education',
    children: [
      {
        title: 'Основы управления проектами',
        url: 'courses',
        i18n: 'menu.basis_project_management',
      },
    ],
  },
  {
    title: 'Сертификация и Тестирование',
    url: 'about',
    i18n: 'menu.certification',
    children: [
      {
        title: 'Список',
        url: 'about',
        i18n: 'menu.certification_pme',
      },
      {
        title: 'Test',
        url: 'about',
        i18n: 'menu.pm_test',
      },
    ],
  },
  {
    title: '-',
    url: 'trainings',
    i18n: 'menu.pmc',
  },
]
