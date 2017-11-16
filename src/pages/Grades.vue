<style lang="stylus" scoped>
#grades
  .backGray
    background-color rgba(244, 244, 244, 0.8)
  table
    padding 5px 0 10px 0
    width 100%
    text-align left
    thead
      color #888
    tbody
      font-size 16px
      margin-top 5px
    td, th
      padding 15px 10px
    th
      border-bottom 5px #aaa solid
</style>


<template lang="pug">
#grades
  .title Language Ability
  ul
    li TOEFL:90 (R25 L20 S20 W25)
    li GRE: 313+3 (V144 Q169)
    li GPA: 88/100 (Rank: 56/151)

  .l-item I made a decision to study for Ph.D. after I attended SIGGRAPH 2017 and met so many amazing scholars and works they did. Thus, I prepare English with clock ticking.
  .l-item I plan to take TOEFL and GRE tests again before Dec 3rd. I will update the scores asap.

  .title Selected Courses:
  .grades
    table(border='0', cellspacing="0", cellpadding="0")
      thead
        tr
          th(v-for="title in tbTitle") {{ title }}
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
        ['Discrete Mathematics(2)', '97'],
        ['Students Research Training', '95'],
        ['Introduction to Artificial Intelligence', '95'],
      ],
    };
  },
};
</script>
