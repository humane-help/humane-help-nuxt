<template>
  <div>
    <!--<div class="loader">
      <div class="d-table">
        <div class="d-tablecell">
          <div class="spnr"></div>
        </div>
      </div>
    </div>-->

    <header>
      <div class="header-top-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <ul class="head-top-list">
                <!--                <li>-->
                <!--                  <i class="fa fa-clock-o"></i>-->
                <!--                  Du-Yak 9.00-17.00-->
                <!--                </li>-->
                <li>
                  <a href="tel:+998998117371">
                    <i class="fa fa-envelope"></i>
                    +998 99 811 73 71
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-phone"></i>
                    <span class="__cf_email__">support@humane.uz</span>
                  </a>
                </li>
                <li>
                  <div class="phone">
                    <img
                      :src="require('../../assets/img/telegram.svg')"
                      alt="tg"
                    />
                    <a
                      class="phone--text"
                      target="_blank"
                      href="https://t.me/davron112"
                      >{{ $t('top-bar.write_telegram') }}</a
                    >
                  </div>
                </li>
                <li>
                  <div class="page-links">
                    <a href="/contacts">{{ $t('menu.contacts') }}</a>
                    &nbsp;&nbsp;
                    <a href="javascript:void(0)" @click="changeLang('ru')">RU</a
                    >&nbsp;|&nbsp;
                    <a href="javascript:void(0)" @click="changeLang('uz')"
                      >UZ</a
                    >
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-lg-4">
              <div class="social-link">
                <ul>
                  <li>
                    <a
                      href="#modalCart"
                      class="log-btn cart modalCart"
                      data-toggle="modal"
                      data-target="#modalCart"
                      >log in</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="navbar-area">
        <div class="mobile-nav menu-shrink">
          <nuxt-link :to="{ name: 'home' }" class="logo">
            <img src="assets/img/logo/logo.png" alt="Image" />
          </nuxt-link>
        </div>

        <div class="main-nav">
          <div class="container">
            <nav class="navbar navbar-expand-md navbar-light">
              <div class="logo">
                <nuxt-link :to="{ name: 'home' }" class="navbar-brand">
                  <img src="assets/img/logo/logo.png" alt="Logo" />
                </nuxt-link>
              </div>
              <div
                id="navbarSupportedContent"
                class="collapse navbar-collapse mean-menu"
              >
                <ul class="navbar-nav m-auto">
                  <li class="nav-item">
                    <a href="about.html" class="nav-link"> О фонде </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <a href="about.html" class="nav-link"> Миссия </a>
                      </li>
                      <li class="nav-item">
                        <a href="about.html" class="nav-link"> История </a>
                      </li>
                      <li class="nav-item">
                        <a href="about.html" class="nav-link">
                          Наши портнеры
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">Помощь</a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <a href="about.html" class="nav-link">
                          Для чистой воды
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="about.html" class="nav-link">
                          Для чистой воды
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="about.html" class="nav-link">
                          Для медицинской помощи
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="about.html" class="nav-link">
                          Для образования
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <!--                    dropdown-toggle-->
                    <a href="pricing.html" class="nav-link">Волонтеры</a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <a href="about.html" class="nav-link">
                          Список волонтеров
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <nuxt-link to="/children" class="nav-link">
                      Дети нуждающиеся в помощи
                    </nuxt-link>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <nuxt-link to="/children" class="nav-link">
                          Список нуждающихся детей
                        </nuxt-link>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a href="team.html" class="nav-link"> Отчеты </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href=".html"
                      ><i class="fa fa-search"></i
                    ></a>
                  </li>

                  <li class="custom-button">
                    <a href="#" class="custom-btn"> Получить помощь </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
}
</script>

<style scoped></style>
