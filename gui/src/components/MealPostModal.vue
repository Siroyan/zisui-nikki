<template>
  <div id="overlay">
    <div id="content" class="p-4">
      <div class="pb-4">
        <button class="close" aria-label="Close" @click="$emit('close')">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <form @submit.prevent="addTodo">
        <!-- 食事のタイトル -->
        <div class="form-group">
          <label for="meal-title" class="text-left">料理のタイトル</label>
          <input type="text" class="form-control" id="meal-title" placeholder="例:ハンバーグ" required v-model="newMeal.title">
        </div>
        <div class="form-row">
          <!-- コスト -->
          <div class="form-group col-md-2">
            <label for="meal-cost" class="text-left">費用</label>
            <input type="text" class="form-control" id="meal-cost" placeholder="例:300円" required v-model="newMeal.cost">
          </div>
          <!-- 食事のタイトル -->
          <div class="form-group col-md-2">
            <label class="text-left">いつの食事？</label>
            <v-date-picker is-required v-modal="date"/>
          </div>
          <!-- meal-type -->
          <div class="form-group col-md-4">
            <label for="meal-type" class="text-left">何時に食べた？</label>
            <select class="custom-select" id="meal-type">
              <option selected disabled value="">選択して下さい</option>
              <option>朝ご飯</option>
              <option>昼ご飯</option>
              <option>夜ご飯</option>
            </select>
          </div>
        </div>

        <!-- 投稿ボタン -->
        <div class="form-group">
          <button type="submit" class="btn mt-2" style="background-color: #a6658d; color: #ffffff">登録</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MeatPostModal',
    data: () => ({
      newMeal: {
        id: '',
        date: '',
        title: '',
        mealType: '',
        cost: '',
      },
      date: new Date(),
    }),
    methods: {
      addMeal: function() {
        if (this.newMeal.title === '') return;
        this.newMeal.id = new Date().getTime().toString(16);
        this.newMeal.date = this.date;
        console.log(this.newMeal);  //DEBUG
        this.$emit('add-meal', this.newMeal);
        // 空に戻しておく
        this.newMeal = {
          id: '',
          date: '',
          title: '',
          mealType: '',
          cost: '',
        };
      }
    }
  }
</script>

<style>
  #overlay{
  z-index:2;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

#content{
  z-index:3;
  width:50%;
  background-color: white;
}

#content > img {
  width: 95%;
}
</style>