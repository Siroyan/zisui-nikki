<template>
  <div class="pb-4">
    <!-- 投稿が存在する場合 -->
    <div v-for="meal in mealsOfSelectedDay" :key="meal.id" class="card mb-4">
      <img src="../assets/dummy-meal.jpg" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{meal.date.getFullYear()}}年{{meal.date.getMonth()+1}}月{{meal.date.getDate()}}日</h5>
        <p class="card-text">{{meal.title}}</p>
        <p class="card-text">{{meal.cost}}円</p>
      </div>
    </div>
    <!-- 投稿が存在しない場合 -->
    <div v-show="!mealsOfSelectedDay.length" class="text-center">
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
      required: false
    },
    selectedDay: {
      type: Date,
      required: false
    }
  },
  computed: {
    mealsOfSelectedDay: function() {
      const selectedDay = this.selectedDay;
      return (this.meals || []).filter(meal => {
        return meal.date.getTime() === selectedDay.getTime();
      });
    },
  },
}
</script>