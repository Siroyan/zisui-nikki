<template>
  <div>
    <v-date-picker is-expanded v-model='date' mode="single" is-inline :attributes="attributes"></v-date-picker>
  </div>
</template>

<script>
export default {  
  name: 'Calendar',
  props: {
    meals: {
      date: Date,
      mealtype: String,
      title: String
    }
  },
  data: () => ({
    date: new Date(),
  }),
  computed: {
    attributes: function() {
      // TODO: もっとJSっぽいスマートな書き方が有るはず...
      let hoge = this.meals.map(function(meal){
        return meal.date;
      });

      let attr = [{
        bar: { color: 'red' },
        dates: hoge,
      }];
      return attr;
    }
  },
  watch: {
    date: {
      handler: function() {
        this.$emit(`change-day`, this.date);
      }
    }
  }
}
</script>