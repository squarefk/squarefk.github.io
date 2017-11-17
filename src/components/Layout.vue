<style lang="stylus" scoped>
.layout
  height 100vh
  overflow hidden
  display flex
  .container
    text-align left
    padding 5% 8%
    flex 4
    background #eee
    overflow scroll
</style>


<template lang="pug">
.layout
  sidebar(
    :items="sidebar",
  )
  .container
    router-view
</template>


<script>
import Sidebar from './Sidebar';

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      sidebar: [
        { text: 'About', url: '/', index: 0 },
        { text: 'Grades', url: '/grades', index: 1 },
        { text: 'Projects', url: '/projects', index: 3 },
        { text: 'Experiences', url: '/experiences', index: 4 },
        { text: 'Awards', url: '/awards', index: 2 },
        { text: 'Hobbies', url: '/hobbies', index: 5 },
      ],
    };
  },

};
</script>
