<template>
  <ul class="top-level-menu">
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li>
      <a href="#">Offices</a>
      <ul class="second-level-menu">
        <li><a href="#">Chicago</a></li>
        <li><a href="#">Los Angeles</a></li>
        <li>
          <a href="#">New York</a>
          <ul class="third-level-menu">
            <li><a href="#">Information</a></li>
            <li><a href="#">Book a Meeting</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Jobs</a></li>
          </ul>
        </li>
        <li><a href="#">Seattle</a></li>
      </ul>
    </li>
    <li><a href="#">Contact</a></li>
  </ul>
</template>

<script>
export default {
  name: 'NavLinks',
  methods: {},
}
</script>
<style lang="scss" scoped>
$height: 77px;
$primary: red;

@import '~/node_modules/bootstrap/scss/bootstrap.scss';
.top-level-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  ul {
    padding: 0;
    margin: 0;
    position: absolute;
    list-style: none;
    display: none;
    z-index: 1000;
    background: var(--white);
  }
  li {
    position: relative;
    float: left;
    height: $height;
    width: 150px;
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
    color: #333;
    text-decoration: none;
    padding: 0 0 0 10px;
    display: block;
    line-height: $height;
  }
}

.second-level-menu {
  top: $height;
  left: 0;
  width: 150px;
  & > li {
    height: $height;
    border-top: 1px solid #f0f0f0;
    &:hover > a {
      color: var(--primary);
    }
  }
}

.third-level-menu {
  top: 0;
  right: -150px;
  width: 150px;
  & > li {
    height: $height;
    border-top: 1px solid #f0f0f0;
    &:hover > a {
      color: var(--primary);
    }
  }
}
</style>
