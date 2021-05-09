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
            <p style="text-align: justify">Batafsil ma'lumot</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              asperiores blanditiis commodi consequatur cum doloremque dolores
              ipsam iste itaque laudantium libero nihil non perspiciatis
              possimus provident, recusandae sint suscipit veniam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              asperiores blanditiis commodi consequatur cum doloremque dolores
              ipsam iste itaque laudantium libero nihil non perspiciatis
              possimus provident, recusandae sint suscipit veniam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              asperiores blanditiis commodi consequatur cum doloremque dolores
              ipsam iste itaque laudantium libero nihil non perspiciatis
              possimus provident, recusandae sint suscipit veniam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              asperiores blanditiis commodi consequatur cum doloremque dolores
              ipsam iste itaque laudantium libero nihil non perspiciatis
              possimus provident, recusandae sint suscipit veniam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              asperiores blanditiis commodi consequatur cum doloremque dolores
              ipsam iste itaque laudantium libero nihil non perspiciatis
              possimus provident, recusandae sint suscipit veniam.
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
      title: 'Homiylar',
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
