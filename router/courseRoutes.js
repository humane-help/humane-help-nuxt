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
]
