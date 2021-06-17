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
    path: '/children',
    component: load('ChildrenList'),
    name: 'children',
    meta: {
      breadcrumb: [{ text: 'Главная', name: 'home' }],
    },
  },
  {
    path: '/children-detail/:id',
    component: load('ChildrenListDetails'),
    name: 'children-detail',
    meta: {
      breadcrumb: [{ text: 'Главная', name: 'home' }],
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
  {
    path: '*',
    component: load('NotFound'),
    name: 'not_found',
    notChangePath: true,
    meta: {
      title: 'Not found',
    },
  },
]
