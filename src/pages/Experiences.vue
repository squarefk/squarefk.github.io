<style lang="stylus" scoped>
#experiences
  .wrap, .avatar
    display inline-block
    vertical-align middle
  .wrap
    width 92%
  .avatar
    width 8%
    img
      width 100%
  a
    color #317d5a
</style>


<template lang="pug">
#experiences
  .section
    .wrap
      .title Tsinghua Graphics and Geometric Computing Group
      .gray-title Student(2016.07 - Present)
      .desc.
        I worked with <a href="http://cg.cs.tsinghua.edu.cn/shimin.htm">Prof. Shimin Hu</a> and his postdoc <a href="http://miaowang.me/">Dr. Miao Wang</a>, with a focus on deep-learning-based video post-processing. I implemented a novel deep neural network model which outperforms the state of the art. A paper about our work is being written.
    .avatar
      img(src="../assets/exp/tsinghua.jpg")

  .section
    .wrap
      .title  Computer Graphics Group at Penn
      .gray-title Visiting undergraduate student (2017.06 - Present)
      .desc I work with <a href="http://www.seas.upenn.edu/~cffjiang/" target="_blank">Prof. Chenfanfu Jiang</a> on the Material Point Method(MPM), to effectively and accurately simulate water, rigid bodies. We proposed approaches to solve common issues about MPM (e.g., how to make incompressible liquid simulation divergence free and how to simulate thin-shell objects with coupling). Results will be submitted to SIGGRAPH 2018.
    .avatar
      img(src="../assets/exp/upenn.jpg")

  .section
    .wrap
      .title Phantouch
      .gray-title Graphics Engineer internship (2015.08 - 2015.11)
      .desc I interned at Phantouch, a start-up company with a focus on VR research. We built a low-latency VR system from scratch, both software and hardware. Our system was presented as a successful demo for A-round financing. Its user experience (especially latency in graphics) was as excellent as the best product at that time, Oculus and Gear VR.
    .avatar

  .section
    .wrap
      .title Provincial Team Training
      .gray-title Coach (2014.08 - 2014.09, 2015.08 - 2015.09)
      .desc I gave lectures to high school Olympiad in Informatics competition participants.
    .avatar

  .section
    .wrap
      .title Tsinghua Lab μ Student Geek Association
      .gray-title Leader of the desktop development team (2014.10 - Present)
      .desc I joined the association where I met a lot of interesting people and we work together to develop several applications to optimize campus life. I learned a lot about how to work effectively with a team.
    .avatar
      img(src="../assets/exp/labmu.jpg")

</template>


<script>

</script>
