<template>
  <div class="left_block">
    <aside class="sidebar left_menu_1">
      <ul class="nav nav-list side-menu">
        <li class=" ">
          <a class="" target="" href="/trainings/new-programs/">Новинки</a>
        </li>
        <li class="active">
          <a class="active" target="" href="/trainings/distants/">{{
            $t('help.clean_water')
          }}</a>
        </li>
        <li class=" ">
          <a class="" target="" href="/trainings/online/">{{
            $t('help.healthy_food')
          }}</a>
        </li>
        <li class=" ">
          <a class="" target="" href="/trainings/distant-learning-courses/">{{
            $t('help.education')
          }}</a>
        </li>
        <li class=" ">
          <a class="" target="" href="/trainings/basic-pm-corses/">{{
            $t('help.medical')
          }}</a>
        </li>
      </ul>
    </aside>
    <div class="sidearea">
      <div class="include"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.side-menu li {
  line-height: 16px;
  padding: 0px;
  margin-bottom: 0px;
}
.left_menu_1 .side-menu > li {
  border-top: 1px solid #ebebef;
  border-bottom: 1px solid #ebebef;
  margin-top: -1px;
}

.left_menu_1 .side-menu > li > a {
  font-size: 0.9335em;
  line-height: 18px;
  padding: 26px 20px 25px 20px;
}
.side-menu > li > a {
  font-size: 0.933em;
  line-height: 20px;
  position: relative;
  text-decoration: none;
  padding: 14px 47px 14px 19px;
  font-weight: normal;
}
.nav > li,
.nav > li > a {
  display: block;
  position: relative;
  width: 100%;
}
</style>
