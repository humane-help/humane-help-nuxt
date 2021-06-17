<template>
  <div class="footer-top">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <div class="foot-about">
            <h3>{{ $t('footer.our_contacts') }}</h3>
            <div class="inf-foot">
              <ul>
                <li>
                  <span style="color: white">
                    <b-icon-phone />
                  </span>
                  <a class="phone--text" href="#">+998 93 707 73 71</a>
                </li>
                <li>
                  <span style="color: white">
                    <b-icon-geo />
                  </span>
                  <a href="#">
                    <span class="address--city"> Ташкент </span>
                    <span class="address--street">
                      {{ $t('address.address') }}
                    </span>
                  </a>
                </li>
                <li>
                  <span style="color: white">
                    <b-icon-envelope />
                  </span>
                  <a class="mail--text" href="mailto:info@humane.uz">
                    info@humane.uz
                  </a>
                </li>
              </ul>
            </div>
            <div class="social-icon">
              <ul>
                <li>
                  <a href="#">
                    <i class="flaticon-facebook-logo"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="flaticon-twitter-black-shape"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="flaticon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="flaticon-google-plus-symbol"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="flaticon-linkedin-letters"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="classes-foot">
            <h3>Помощь</h3>
            <ul>
              <li><a href="#">Для чистой воды</a></li>
              <li><a href="#">Для здорового питания</a></li>
              <li><a href="#">Для образования</a></li>
              <li><a href="#">Для медицинской помощи</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 col-lg-2">
          <div class="quick-link">
            <h3>О фонде</h3>
            <ul>
              <li><a href="#">Миссия</a></li>
              <li><a href="#">История</a></li>
              <li><a href="#">Наши партнеры</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="latest-news">
            <h3>Дети нуждающиеся в помощи</h3>
            <ul>
              <li>
                <a href="#">Image Side Show Post</a>
                <p>August 10,2019</p>
              </li>
              <li>
                <a href="#">Image Side Show Post</a>
                <p>August 10,2019</p>
              </li>
              <li>
                <a href="#">Image Side Show Post</a>
                <p>August 10,2019</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterTop',
  data() {
    return {
      events: [
        {
          image:
            'https://pm.expert/upload/iblock/9c5/9c53d0b4d33f60dc419737176b8da543.jpg',
          title:
            'Онлайн курс практические инструменты сокращения стоимости проекта2',
          url: '#',
        },
        {
          image:
            'https://pm.expert/upload/iblock/9c5/9c53d0b4d33f60dc419737176b8da543.jpg',
          title:
            'Онлайн курс практические инструменты сокращения стоимости проекта3',
          url: '#',
        },
        {
          image:
            'https://pm.expert/upload/iblock/9c5/9c53d0b4d33f60dc419737176b8da543.jpg',
          title:
            'Онлайн курс практические инструменты сокращения стоимости проекта4',
          url: '#',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped></style>
