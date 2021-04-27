<template>
  <header>
    <top-bar />
    <b-container>
      <b-row class="align-center justify-center">
        <b-col md="2" class="align-center justify-center">
          <logo />
        </b-col>
        <b-col md="7">
          <nav-links />
        </b-col>
        <b-col md="3">
          <b-icon-person />
          <b-icon-search />
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>
<script>
export default {
  name: 'NavBar',
}
</script>
