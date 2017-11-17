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
      .desc I work under the guidance of <a href="http://cg.cs.tsinghua.edu.cn/shimin.htm">Prof Hu</a> and his post-doctoral student <a href="http://miaowang.me/">Miao Wang</a>. I focus on video post-processing by the method of deep learning. I implement and improve the state-of-the-art neural network model. A paper about our work is being written.
    .avatar
      img(src="../assets/exp/tsinghua.jpg")

  .section
    .wrap
      .title  Computer Graphics Group at Penn
      .gray-title Visiting undergraduate student (2017.06 - Present)
      .desc I work under the guidance of <a href="http://www.seas.upenn.edu/~cffjiang/" target="_blank">Prof Jiang</a>. I work on Material Point Method(MPM) to simulate water, rigid bodies effectively and accurately. We try to solve some common issues about MPM(e.g., how to make water divergence free, how to simulate thin objects). A paper about our work is being written.
    .avatar
      img(src="../assets/exp/upenn.jpg")

  .section
    .wrap
      .title Phantouch
      .gray-title Graphics Engineer internship (2015.08 - 2015.11)
      .desc I interned for this start-up company, Phantouch, which was a technology-based company researching into VR. A team about 10 people built low-latency VR system from scratch, both software and hardware. Our system was presented as demo for A round financing which user experience was as excellent as the best product of that time, Oculus and Gear VR, with a much lower product cost.
    .avatar

  .section
    .wrap
      .title Provincial Team Training
      .gray-title Coach (2014.08 - 2014.09, 2015.08 - 2015.09)
      .desc I gave lectures to high school informatics algorithm competition participants.
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
