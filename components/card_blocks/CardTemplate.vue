<template>
  <b-container>
    <b-row>
      <b-col class="section-title" md="12">
        <h3 class="option-bold-700">{{ title }}</h3>
        <a :href="action.link" class="right_link_block">{{ action.title }}</a>
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
