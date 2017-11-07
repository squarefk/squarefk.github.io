<style lang="stylus" scoped>
.sidebar
  flex 1
  height 100%
  background #48b884
  overflow scroll
  color white
  .menu
    margin-top 30%
    text-align center
    .menu-item
      text-align center
      padding 10px
      font-size 20px
      transition 0.2s
      cursor pointer
      &:hover
        background #eee
        color #48b884
  .active
    background #eee
    color #48b884
</style>


<template lang="pug">
.sidebar
  .menu
    router-link.menu-item(
      v-for="(item, index) of items",
      :class="{'active': activeIndex === index}",
      :to="item.url",
      tag="div",
      :key="index"
    ) {{ item.text }}
</template>


<script>
export default {
  props: {
    items: {
      type: Array,
    },
  },
  computed: {
    activeIndex() {
      const path = this.$route.path;
      for (let i = 0; i < this.items.length; i += 1) {
        if (this.items[i].url === path) return i;
      }
      return 0;
    },
  },
};
</script>
