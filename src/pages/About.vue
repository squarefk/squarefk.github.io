<style lang="stylus" scoped>
#home
  .abstract
    .avatar
      display inline-block
      width 320px
      vertical-align middle
      img
        width 100%
  .section
    display inline-block
    // width 80%
    vertical-align middle
    .desc > div
      padding-bottom 3px
  .items
    padding-top 5px
    .item
      padding-bottom 5px
</style>


<template lang="pug">
#home
  .abstract
    .avatar
      img(src="../assets/fk.jpg")
  .section
    .title Yu Fang &nbsp;方&nbsp;&nbsp;燠
    .desc
      div I am a fourth-year undergraduate student majoring in computer science at Tsinghua University.
      div I am applying for Ph.D. program in 2017 fall.
      br
      div My primary research interest is physical based simulation. Recently, I have been working on Material Point Method(MPM) simulation. I am also attracted by machine learning and use it to solve some problems on video post-processing.
    br
    .item <b>Email:</b> squarefk@gmail.com
    //- .item CV: <a href="#" target="_blank">download</a>
    .item <b>Languages:</b> Chinese(native), English
  //- .section
    .title Personal Information:
  .title Skills
  .items
    .item(v-for="(item, index) of items") {{ item.text }}
</template>


<script>
import Layout from '@/components/Layout';
import HelloWorld from '@/components/HelloWorld';

export default {
  components: {
    Layout,
    HelloWorld,
  },
  data() {
    return {
      items: [
        { text: 'C++(OpenGL, Qt), Python(Tensorflow, Django, Flask)' },
        { text: 'Java(Android, SSH), GLSL, Matlab, Unity3D, HTML, CSS, JS' },
        { text: 'Git, Vim, Tmux, Latex' },
      ],
    };
  },
};
</script>
