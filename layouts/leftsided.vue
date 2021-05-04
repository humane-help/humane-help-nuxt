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
    <b-container>
      <b-row>
        <b-col md="12">
          <h1 class="mb-5 page-title">
            {{ $store.getters.pageTitle }}
          </h1>
        </b-col>
        <b-col md="3">
          <side-bar />
        </b-col>
        <b-col md="9">
          <Nuxt />
        </b-col>
      </b-row>
    </b-container>
    <pages-footer />
  </div>
</template>
<style lang="scss" scoped>
.page-title {
  font-size: 20px;
}
</style>
