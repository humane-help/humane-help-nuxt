<template>
  <div>
    <nav-bar />
    <page-banner />
    <b-breadcrumb>
      <b-breadcrumb-item
        v-for="item in $route.meta.breadcrumb"
        :key="item.text"
        :to="{ name: item.name }"
        :active="!item.name"
      >
        {{ item.text }}
      </b-breadcrumb-item>
    </b-breadcrumb>
    <Nuxt />
    <pages-footer />
  </div>
</template>
