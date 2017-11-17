<style lang="stylus" scoped>
#grades
  .backGray
    background-color rgba(244, 244, 244, 0.8)
  .items
    padding-top 10px
    .item
      padding-bottom 5px
  table
    margin-top -15px
    width 100%
    text-align left
    thead
      color #888
    tbody
      font-size 14px
    td, th
      padding 12px 20px
    th
      border-bottom 5px #ddd solid
</style>


<template lang="pug">
#grades
  .title Language Ability
  .items
    .item <b>TOEFL:</b> 90 (R25 L20 S20 W25)
    .item <b>GRE:</b> 313+3 (V144 Q169)
    .item <b>GPA:</b> 88/100 (Rank: 56/151)

  .l-item I attended SIGGRAPH 2017 with my poster submission, and got the chance to meet many scholars. Inspired by the work they did, I made up my mind to do a Ph.D. I'm working hard on both research and language skills to make it possible.
  .l-item I plan to take TOEFL and GRE tests again before Dec 3rd. I will update the scores asap.

  .title Selected Courses
  .grades
    table(border='0', cellspacing="0", cellpadding="0")
      thead
        tr
          th(v-for="title in tbTitle")
      tbody
        tr(v-for="(course, index) in courses", :class="{'backGray': index % 2 === 0}")
          td(v-for="item in course") {{ item }}
</template>


<script>
export default {
  data() {
    return {
      tbTitle: ['Course name', 'Score'],
      courses: [
        ['Fundamentals of Computer Graphics', '100'],
        ['Fundamentals of Programming', '100'],
        ['Linear Algebra(2)', '100'],
        ['Probability and Statistics', '98'],
        ['Programing and Training', '97'],
        ['Discrete Mathematics(1)', '94'],
        ['Discrete Mathematics(2)', '97'],
        ['Students Research Training', '95'],
        ['Introduction to Artificial Intelligence', '95'],
        ['Introduction to Complex Analysis', '95'],
      ],
    };
  },
};
</script>
