<template>
  <div>
    <v-date-picker v-model='date' mode="single" is-inline :attributes="attributes"></v-date-picker>
  </div>
</template>

<script>
export default {
  name: 'calendar',
  props: {
    meals: {}
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
  methods: {

  }
}
</script>

<style scoped>

</style>