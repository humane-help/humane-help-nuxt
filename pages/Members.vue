<template>
  <div>
    <h2 class="mb-3 page-sub-title">
      Тренеры учебных программ по управлению проектами PM EXPERT
    </h2>
    <p>
      Тренеры PM Expert это сертифицированные специалисты и опытные
      консультанты, обладающие степенями PMP (PMI), PMP (IPMA), MBA и
      использующие в обучении слушателей собственный уникальный опыт, что делает
      проводимые PM Expert тренинги по управлению проектами особенно практичными
      и эффективными.
    </p>
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
      title: 'Тренеры компании PM Expert',
      members,
    }
  },
}
</script>
