<template>
  <div class="tap-top top-cls" @click="scrollToTop()">
    <div>
      <a href="javascript:void(0)" style="color: white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-up"
        >
          <polyline points="18 15 12 9 6 15"></polyline></svg
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBacToTop: false,
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style type="scss">
.tap-top.top-cls {
  bottom: 130px;
}
.tap-top {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  position: fixed;
  bottom: 50px;
  right: 30px;
  z-index: 8;
  color: #fff;
  text-align: center;
  background: #007bff;
  border: none;
  font-size: 22px;
  padding: 7px;
  cursor: pointer;
}
</style>
