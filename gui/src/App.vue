<template>
  <div id="app" class="container text-center">
    <calendar :meals="meals" />
  </div>
</template>

<script>
import calendar from './components/Calendar.vue'

export default {
  name: 'app',
  components: {
    calendar
  },
  data: () => ({
    meals: [{
        date: new Date(2020, 8, 1),
        mealtype: 'dinner',
        comment: '肉野菜炒め',
      }, {
        date: new Date(2020, 8, 10),
        mealtype: 'dinner',
        comment: '肉野菜炒め',
      }, {
        date: new Date(2020, 8, 1),
        mealtype: 'breakfast',
        comment: 'シリアル',
      }, {
        date: new Date(2020, 8, 10),
        mealtype: 'lunch',
        comment: '焼きそば',
      }]
  }),
  methods: {

  },
  mounted: function() {
    // this.meals = JSON.parse(localStorage.getItem('meals')) || [];
  },
  watch: {
    meals: {
      handler: function() {
        localStorage.setItem('meals', JSON.stringify(this.meals));
      },
      deep: true
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>