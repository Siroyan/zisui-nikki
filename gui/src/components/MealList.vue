<template>
  <div class="mx-auto pb-4">
    <div class="card">
      <img src="../assets/dummy-meal.png" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{mealOfSelectedDay.date}}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MealList',
  props: {
    meals: Array,
    selectedDay: Date
  },
  data: () => ({

  }),
  computed: {
    mealOfSelectedDay: function() {
      return this.meals.filter(function(meal) {
        return meal.date === this.selectedDay;
      })
    }
  },
  methods: {

  },
}
</script>

<style scoped>

</style>