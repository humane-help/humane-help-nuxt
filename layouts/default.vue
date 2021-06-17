<template>
  <div>
    <main-header />
    <Nuxt />
    <pages-footer />
  </div>
</template>
<script>
import PagesFooter from '~/components/footer/PagesFooter'
export default {
  components: { PagesFooter },
}
</script>
