<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList
      :propsData="todoItems"
      @toggleTodoItems="toggleTodoItems"
    ></TodoList>
    <TodoFooter
      @clearTodoItems="clearTodoItems"
    ></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App',
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter,
  },
  data: () => ({
    todoItems: [],
  }),
  methods: {
    toggleTodoItems(value, index) {
      // value.completed = !value.completed;
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(value.item);
      localStorage.setItem(value.item, JSON.stringify(value));
    },
    clearTodoItems() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
