<template>
  <modal name="hello-world" :draggable="true" :resizable="true">
    <div class="modal-header">
      <h2>今日のご飯を投稿する</h2>
    </div>
    <div class="modal-body">
      <p>ほげ</p>
      <button v-on:click="hide">閉じる</button>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'MealPostModal',
  data: () => ({

  }),
  methods: {
    show : function() {
      this.$modal.show('hello-world');
    },
    hide : function () {
      this.$modal.hide('hello-world');
    },
  },
}
</script>

<style scoped>
  .modal-header, .modal-body {
    padding: 5px 25px;
  }
  .modal-header {
    border-bottom: 1px solid #ddd;
  }
</style>