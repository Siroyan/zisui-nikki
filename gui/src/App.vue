<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-3">
        <button @click="openModal" type="button" class="btn btn-block btn-primary mb-4" style="background-color: #a6658d; border-style: none;">投稿</button>
        <MealPostModal v-show="showModal" @close="closeModal" />
        <Calendar :meals="meals" @change-day="changeDay"/>
      </div>
      <div class="col-9">
        <MealList :meals="meals" :selectedDay="selectedDay" style="width: 600px" class="mx-auto"/>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from './components/Calendar.vue'
import MealList from './components/MealList.vue'
import MealPostModal from './components/MealPostModal.vue'

export default {
  name: 'app',
  components: {
    Calendar,
    MealList,
    MealPostModal,
  },
  data: () => ({
    showModal: false,
    selectedDay: new Date(),
    meals: [{
        id: new Date().getTime().toString(16),
        date: new Date(2020, 8, 10),
        title: '肉野菜炒め',
        mealtype: 'Dinner',
        cost: 250,
      }]
  }),
  methods: {
    changeDay: function(selectedDay) {
      this.selectedDay = selectedDay;
    },
    openModal: function() {
      this.showModal = true
    },
    closeModal: function() {
      this.showModal = false
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

