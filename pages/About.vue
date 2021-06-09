<template>
  <div>
    <p style="text-align: center">
      <img
        alt="company"
        src="https://pm.expert/images/services/proekti/company.jpg"
        class="img-responsive"
        width="100%"
      />
    </p>
    <p>Biz haqimizda</p>
  </div>
</template>
<script>
import PagesMixin from '@/plugins/PagesMixin'
export default {
  mixins: [PagesMixin],
  data() {
    return {
      title: 'О фонд Humane',
    }
  },
}
</script>
