<style lang="stylus" scoped>
#projects
  .project
    padding-bottom 20px
  img
    width 100%
    display inline-block
  .images
    padding 10px 0
  .image-wrap
    padding 10px 0
    height 19vw
    display flex
    justify-content space-between
    img
      width auto
      height 100%
  .tunet
    height 22vw
  .maze1
    height 15.3vw
  .maze2
    height 18vw
</style>


<template lang="pug">
#projects
  .project
    .title
      a(href="http://taichi.graphics", target="_blank") Taichi
    ul
      li An Open source computer graphics library in C++ and python.
      li I participated in the development of Taichi with MPM, time-variant level sets, and a WebGL-based visualization system (which allows checking results remotely).
      li I'm collaborating with the project creator (Yuanming Hu) and published a poster about effective MPM on SIGGRAPH 2017.
    .images
      img(src="../assets/projects/taichi.jpg")

  .project
    .title
      a(href="https://github.com/squarefk/naivept", target="_blank") NaivePt
    ul
      li Individual project, based on C++
      li Final project for the course, Fundamentals of Computer Graphics, which get the only full marks
      li Offline renderer based on path tracing and probabilistic progressive photon mapping, which implements caustics, volumetric scattering, etc.
    .images
      .image-wrap
        img(src="../assets/projects/np1.jpg")
        img(src="../assets/projects/np2.jpg")
        img(src="../assets/projects/np3.jpg")

  .project
    .title Phantouch VR
    ul
      li Team project, based on OpenGL
      li Built for A round financing for a start-up company.
      li A graphics system for real-time virtual reality applications, built from scratch
      li I am responsible for shadow maps and the whole real-time post-processing pipeline, including lens distortion, bloom FX, light-shafts, etc.

  .project
    .title TUNet-Desktop
    ul
      li Team project, based on Qt and QML
      li A client that helps connection to Tsinghua.net with some other functions, such as a TODO reminder
      li I am responsible for the software architecture and UI design
    .images
      .image-wrap.tunet
        img(src="../assets/projects/tn1.png")
        img(src="../assets/projects/tn2.png")
        img(src="../assets/projects/tn3.png")
        img(src="../assets/projects/tn4.png")

  .project
    .title Maze
    ul
      li Individual project, based on Unity3D (C# in the logical part)
      li Final project for the course, Discrete Mathematics(2)
      li I played with modern physical engines and did a survey on how to build a challenging 2D maze.
    .images
      .image-wrap.maze1
        img(src="../assets/projects/maze1.jpg")
        img(src="../assets/projects/maze2.jpg")
        img(src="../assets/projects/maze3.jpg")
      .image-wrap.maze2
        img(src="../assets/projects/maze4.jpg")
        img(src="../assets/projects/maze5.jpg")
        img(src="../assets/projects/maze6.jpg")
</template>


<script>

</script>
