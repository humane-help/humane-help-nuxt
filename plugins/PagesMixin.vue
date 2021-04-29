<script>
export default {
  layout: 'leftsided',
  mounted() {
    this.$store.commit('pageTitle', this.title)
  },
}
</script>
