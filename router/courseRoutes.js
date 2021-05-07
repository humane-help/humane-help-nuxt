import { load } from './util'

export const courseRoutes = [
  {
    path: '/',
    component: load('index'),
    name: 'home',
  },
  {
    path: '/about',
    component: load('About'),
    name: 'about',
    meta: {
      breadcrumb: [{ text: 'Главная', name: 'home' }, { text: 'О компании' }],
    },
  },
  {
    path: '/contacts',
    component: load('Contacts'),
    name: 'contacts',
    meta: {
      breadcrumb: [{ text: 'Главная', name: 'home' }, { text: 'Контакты' }],
    },
  },
  {
    path: '/trainings',
    component: load('Trainings'),
    name: 'trainings',
    meta: {
      breadcrumb: [{ text: 'Главная', name: 'home' }, { text: 'Обучение' }],
    },
  },
  {
    path: '/courses',
    component: load('Courses'),
    name: 'courses',
    meta: {
      breadcrumb: [
        { text: 'Главная', name: 'home' },
        { text: 'Обучение', name: 'trainings' },
        { text: 'Новинки' },
      ],
    },
  },
  {
    path: '/members',
    component: load('Members'),
    name: 'members',
    meta: {
      breadcrumb: [{ text: 'Главная', name: 'home' }, { text: 'Тренеры' }],
    },
  },
  {
    path: '/members/:id',
    component: load('SingleMember'),
    name: 'singleMember',
    meta: {
      breadcrumb: [{ text: 'Главная', name: 'home' }, { text: 'Тренеры' }],
    },
  },
]
