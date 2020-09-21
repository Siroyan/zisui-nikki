<template>
  <div class="mx-auto pb-4">
    <!-- 投稿が存在する場合 -->
    <div v-if="mealsOfSelectedDay.length">
      <div v-for="meal in mealsOfSelectedDay" :key="meal.id" class="card mb-4">
        <img src="../assets/dummy-meal.png" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{meal.date}}</h5>
          <p class="card-text">{{meal.comment}}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{meal.mealtype}}</li>
        </ul>
      </div>
    </div>
    <!-- 投稿が存在する場合 -->
    <div v-else>
      投稿がありません
    </div>

  </div>
</template>

<script>
export default {
  name: 'MealList',
  props: {
    meals: {
      type: Array,
      required: true
    },
    selectedDay: {
      type: Date,
      required: true
    }
  },
  computed: {
    mealsOfSelectedDay: function() {
      const selectedDay = this.selectedDay;
      return this.meals.filter(meal => {
        return meal.date.getTime() === selectedDay.getTime();
      });
    },
  },
}
</script>

<style scoped>

</style>