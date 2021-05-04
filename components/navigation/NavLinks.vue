<template>
  <ul class="top-level-menu">
    <li v-for="item in menu" :key="item.title">
      <nuxt-link class="main-link" :to="{ path: item.url }">{{
        item.title
      }}</nuxt-link>
      <ul v-if="item.children" class="second-level-menu">
        <li v-for="child in item.children" :key="child.title">
          <nuxt-link :to="{ name: child.url }">{{ child.title }}</nuxt-link>
          <ul v-if="child.children" class="third-level-menu">
            <li v-for="sub in child.children" :key="sub.title">
              <nuxt-link :to="{ name: sub.url }">{{ sub.title }}</nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import menu from '@/assets/data/menu'
export default {
  name: 'NavLinks',
  data() {
    return {
      menu,
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
$height: 70px;
@import '~/node_modules/bootstrap/scss/bootstrap.scss';
.top-level-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  @include sm-down() {
    display: none;
  }
  ul {
    padding: 0;
    margin: 0;
    position: absolute;
    list-style: none;
    display: none;
    z-index: 1000;
    background: var(--white);
    min-width: 220px;
  }
  li {
    position: relative;
    float: left;
    min-height: $height;
    display: grid;
    align-items: center;
    padding-right: 20px;
    &:hover {
      & > a {
        color: var(--primary);
      }
      & > ul {
        display: inline;
      }
    }
  }
  a {
    font: bold 14px Arial, Helvetica, sans-serif;
    text-decoration: none;
    display: block;
    color: initial;
  }
  a.nuxt-link-active {
    color: var(--primary);
  }
}

.second-level-menu {
  top: $height;
  left: 0;
  & > li {
    display: grid;
    width: 100%;
    align-items: center;
    min-height: $height;
    border-top: 1px solid #f0f0f0;
    padding-left: 15px;
    a {
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
    }
    &:hover > a {
      color: var(--primary);
    }
  }
}

.darkHeader {
  .top-level-menu > li {
    &:hover > a.main-link {
      color: white;
    }
    a.main-link {
      color: white;
    }
  }
}

// .third-level-menu {
//   top: 0;
//   right: -150px;
//   & > li {
//     height: $height;
//     border-top: 1px solid #f0f0f0;
//     &:hover > a {
//       color: var(--primary);
//     }
//   }
// }
</style>
