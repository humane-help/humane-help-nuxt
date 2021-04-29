<template>
  <b-container>
    <b-row>
      <b-col v-if="title" class="section-title" md="12">
        <h3>{{ title }}</h3>
        <a :href="action.link">{{ action.title }}</a>
      </b-col>
      <slot></slot>
    </b-row>
  </b-container>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    action: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
