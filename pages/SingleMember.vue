<template>
  <b-container>
    <b-row>
      <b-col md="12">
        <h1 class="mb-5 page-title">
          {{ title }}
        </h1>
      </b-col>
      <b-col md="3">
        <img width="100%" :src="members[0].image" />
        <div class="image-bottom">
          {{ members[0].title }}
        </div>
      </b-col>
      <b-col md="9">
        <h2>{{ members[0].title }}</h2>
        <div class="content">
          <div class="text">
            <p></p>
            <p style="text-align: justify">
              <b>Тренер-практик</b>, обладающий более чем&nbsp;22 летним опытом
              управления проектами&nbsp;и тренерской работы. Основные
              направления работы: Внедрение информационных систем управления
              проектами, включая разработку методологии, развёртывание,
              настройка и поддержка. Проведение тренингов по разработке и
              актуализации план-графиков и использованию конкретных ИСУП.
              <b>Платформы:</b> Oracle Primavera EPPM, Microsoft Project/Project
              Server, Oracle Primavera Risk Analysis, Palisade @Risk, Advanta.
            </p>
            <p>
              <b>Сертификаты Oracle:</b>
            </p>
            <p>General Product Support Specialist</p>
            <p>
              Oracle Business Intelligence Foundation Suite 11g PreSales
              Specialist
            </p>
            <p>
              Oracle Business Intelligence Foundation Suite 11g Sales Specialist
            </p>
            <p>
              Primavera P6 Enterprise Project Portfolio Management 8
              Implementation Specialist
            </p>
            <p>
              Primavera P6 Enterprise Project Portfolio Management 8 PreSales
              Specialist
            </p>
            <p>
              Primavera P6 Enterprise Project Portfolio Management 8 Sales
              Specialist
            </p>
            <p>
              <b>Сертификаты Microsoft:</b>
            </p>
            <p>
              Microsoft Certified Technology Specialist: Enterprise Project
              Management with Microsoft Office Project Server 2007;
            </p>
            <p>
              Microsoft Certified Technology Specialist: Microsoft Office
              Project;
            </p>
            <p>
              Microsoft Certified Technology Specialist (MCTS): Managing
              Projects with Microsoft Project 2010;
            </p>
            <p>
              Microsoft Specialist: Managing Project and Portfolios with Project
              Server 2013
            </p>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import members from '@/assets/data/members'
export default {
  layout: 'page',
  data() {
    return {
      title: 'Тренеры компании PM Expert',
      members,
    }
  },
}
</script>
<style lang="scss" scoped>
.image-bottom {
  width: 100%;
  padding: 20px 10px;
  background-color: #f6f7fa;
  font-weight: bold;
}
</style>
