<template>
  <div class="mobile-menu">
    <b-icon
      v-b-toggle.sidebar-1
      :icon="visible ? 'x' : 'list'"
      class="mobile-menu--icon"
    />
    <b-sidebar id="sidebar-1" v-model="visible" no-header shadow>
      <ul class="top-level-menu">
        <li v-for="item in menu" :key="item.title">
          <nuxt-link class="main-link" :to="{ path: item.url }">{{
            $t(item.i18n)
          }}</nuxt-link>
          <ul v-if="item.children" class="second-level-menu">
            <li v-for="child in item.children" :key="child.title">
              <nuxt-link :to="{ name: child.url }">{{
                $t(child.i18n)
              }}</nuxt-link>
              <ul v-if="child.children" class="third-level-menu">
                <li v-for="sub in child.children" :key="sub.title">
                  <nuxt-link :to="{ name: sub.url }">{{
                    $t(sub.i18n)
                  }}</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </b-sidebar>
  </div>
</template>
<script>
import menu from '@/assets/data/menu'
export default {
  name: 'MobileMenu',
  data() {
    return {
      menu,
      visible: false,
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.mobile-menu {
  display: none;
  @include md-down() {
    display: inline-block;
    &--icon {
      font-size: 20px;
      font-weight: bold;
      margin-left: 10px;
    }
  }
  ul {
    list-style: none;
    text-align: left;
  }
  .top-level-menu {
    margin: 15px;
    padding: 0;
    & > li > a {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
