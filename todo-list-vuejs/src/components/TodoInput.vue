<template>
  <div class="inputBox shadow">
    <input 
      type="text"
      v-model="todoItem"
      @keyup.enter="addTodo"
    />
    <span class="addContainer"
      @click="addTodo"
    ><font-awesome-icon icon="fa-solid fa-plus" />
    </span>
  </div>
</template>

<script>
export default {
  data: () => ({
    todoItem: '',
  }),
  methods: {
    addTodo() {
      if (this.todoItem !== '') {
        this.$emit("addTodoItems", this.todoItem)
        this.clearInput();
      }
    },
    clearInput() {
      this.todoItem = '';
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: #fff;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: #fff;
  vertical-align: middle;
}
</style>