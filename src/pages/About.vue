<style lang="stylus" scoped>
</style>


<template lang="pug">
#home
  .title Yu Fang 方燠
  .desc
    div I am a fourth-year undergraduate student majoring computer science at Tsinghua University.
    div I am applying for Ph.D. program in 2017 fall.
    div My primary research interest is physical based simulation. Recently, I have been working on Material Point Method(MPM) simulation. I am also attracted by machine learning and use it to solve some problems on video post-processing.

  .item Email: squarefk@gmail.com
  .item CV: <a href="#" target="_blank">download</a>
  .item Languages: Chinese(native), English
  .sub-title Skills:
  .items
    .li-item(v-for="(item, index) of items") {{ item.text }}
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
        { text: 'C++(OpenGL, Qt)' },
        { text: 'Python(Tensorflow, Django, Flask)' },
        { text: 'Git, Vim, Tmux, Latex' },
        { text: 'Java(Android, SSH)' },
        { text: 'GLSL' },
        { text: 'Matlab' },
        { text: 'HTML, CSS, JS' },
        { text: 'Unity3D' },
      ],
    };
  },
};
</script>
