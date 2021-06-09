<template>
  <div class="faq">
    <h3 class="mb-3">{{ $t('faq.title') }}:</h3>
    <div class="accordion">
      <div
        v-for="(item, key) in list"
        :key="item.title"
        class="accordion--item"
      >
        <h4
          class="accordion--header"
          :class="{ 'accordion--header__active': expand === key }"
          @click="expand === key ? (expand = null) : (expand = key)"
        >
          {{ item.title }}

          <b-icon-plus class="accordion--icon" />
        </h4>
        <div class="accordion--content" :class="{ active: expand === key }">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      expand: null,
      list: [
        {
          title: 'klvnkldfnvkld',
          content: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor`,
        },
        {
          title: 'hgkjj',
          content:
            'brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.faq {
  margin: 30px 0;
  @include sm-down() {
    h3 {
      font-size: 20px;
    }
  }
}
.accordion {
  &--item {
    border-top: 1px solid #ebebef;
    border-bottom: 1px solid #ebebef;
  }
  &--icon {
    transition: transform 0.2s ease-in-out;
  }
  &--header {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: 30px;
    margin: 0;
    @include sm-down() {
      font-size: 20px;
      padding: 15px;
    }
    &__active {
      background: #f6f7fa;
      .accordion--icon {
        transform: rotateZ(-45deg);
      }
    }
    &:hover {
      background: #f6f7fa;
    }
  }

  &--content {
    opacity: 0;
    height: 0;
    overflow: hidden;
    transition: opacity 0.9s ease;
  }
}
.active {
  opacity: 1;
  height: auto;
  padding: 30px;
  @include sm-down() {
    padding: 15px;
  }
}
</style>
