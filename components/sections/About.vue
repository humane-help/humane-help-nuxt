<template>
  <section class="about page-background">
    <b-container>
      <b-row>
        <b-col class="section-title about--title" md="12">
          <h3 class="option-bold-700">О нас</h3>
          <div class="right_soc_icons">
            <socials />
          </div>
        </b-col>
        <b-col class="about--content" md="6">
          <h4 class="option-bold"></h4>
          <h1>
            <span class="about--span"
              >Обучение управлению проектами и сертификация специалистов в
              управлении проектами в компании PM Expert</span
            >
          </h1>
          <p>
            За уникальными знаниями — будущее: инновационные идеи, новые
            подходы, методики и стратегии управления проектами<br />
          </p>

          <div class="company">
            <p style="text-align: justify">
              <span class="about--span">Компания </span
              ><span class="about--span">PM Expert</span
              ><span class="about--span">
                лидер в области обучения управлению проектами и сертификации
                управленцев в России, также оказывает профессиональные услуги
                управления проектами, программами и портфелями проектов по
                направлениям: аутсорсинг (внешнее управление проектами
                заказчика), консалтинг (внедрение проектного управления в
                компании заказчика), обучение (очные и дистанционные тренинги по
                управлению проектами) и сертификация (оценка специалистов и
                аудит систем управления проектами в&nbsp;компаниях).</span
              >
            </p>
            <br />
          </div>

          <div class="company_buttons">
            <a href="/company/" class="btn btn-primary mr-3"> Подробнее </a>
            <a href="/education/trainers/" class="btn btn-light">
              Наши тренеры
            </a>
          </div>
        </b-col>
        <b-col md="6" class="d-sm-none">
          <about-banner />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<style lang="scss" scoped>
.about {
  &--title {
    @include sm-down() {
      margin-bottom: 0px;
    }
    h3 {
      line-height: 39px;
      font-size: 30px;
    }
  }
  &--span {
    font-size: 12pt;
  }
  &--content {
    @include sm-down() {
      margin-bottom: 30px;
    }
  }
}
</style>
