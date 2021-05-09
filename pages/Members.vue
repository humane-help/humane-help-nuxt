<template>
  <div>
    <h2 class="mb-3 page-sub-title">Humane Fondiga homiylik qilgan homiylar</h2>
    <p>--</p>
    <b-row>
      <b-col v-for="item in members" :key="item.id" md="4" sm="6">
        <card-second :item="item" />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import PagesMixin from '@/plugins/PagesMixin'
import members from '@/assets/data/members'
export default {
  mixins: [PagesMixin],
  data() {
    return {
      title: 'Homiylar',
      members,
    }
  },
}
</script>
