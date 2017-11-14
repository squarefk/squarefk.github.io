<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  a, a:link, a:visited, a:hover, a:active
    text-decoration none
    color #2c3e50
    transition 0.3s
  a:hover
    color #4eb785
  ul
    padding 5px 0
    padding-left 3%
    li
      padding 1.5px 0
  .title, .sub-title
    font-size 20px
    font-weight bold
    padding-top 20px
    padding-bottom 5px
  .gray-title
    color #aaa
    font-weight bold
    font-size 15px
    padding-bottom 10px
  .sub-title
    font-size 18px
    padding-top 0
    padding-bottom 5px
  .section
    padding-bottom 20px
</style>


<template lang="pug">
#app
  layout
</template>


<script>
import Layout from '@/components/Layout';

export default {
  components: {
    Layout,
  },
  name: 'app',
};
</script>
