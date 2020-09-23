<template>
  <div id="app" class="container">
    <div class="row">
      <Calendar :meals="meals" @change-day="changeDay" class="col-4" />
      <MealList :meals="meals" :selectedDay="selectedDay" class="col-8" />
    </div>
  </div>
</template>

<script>
import Calendar from './components/Calendar.vue'
import MealList from './components/MealList.vue'

export default {
  name: 'app',
  components: {
    Calendar,
    MealList
  },
  data: () => ({
    selectedDay: new Date(),
    meals: [{
        id: new Date().getTime().toString(16),
        date: new Date(2020, 8, 1),
        mealtype: 'dinner',
        comment: '肉野菜炒め',
      }, {
        id: new Date().getTime().toString(16),
        date: new Date(2020, 8, 10),
        mealtype: 'dinner',
        comment: '肉野菜炒め',
      }, {
        id: new Date().getTime().toString(16),
        date: new Date(2020, 8, 10),
        mealtype: 'breakfast',
        comment: 'シリアル',
      }, {
        id: new Date().getTime().toString(16),
        date: new Date(2020, 8, 10),
        mealtype: 'lunch',
        comment: '焼きそば',
      }]
  }),
  methods: {
    changeDay: function(selectedDay) {
      this.$set(this, 'selectedDay', selectedDay);
      // this.selectedDay = selectedDay;
    }
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