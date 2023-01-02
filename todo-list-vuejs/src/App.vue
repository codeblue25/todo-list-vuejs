<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput
      @addTodoItems="addTodoItems"
    ></TodoInput>
    <TodoList
      :propsData="todoItems"
      @toggleTodoItems="toggleTodoItems"
      @removeTodoItems="removeTodoItems"
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
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
  },
  methods: {
    addTodoItems(value) {
      const obj = {
        completed: false,
        item: value
      };
      localStorage.setItem(value, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    toggleTodoItems(value, index) {
      // value.completed = !value.completed;
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(value.item);
      localStorage.setItem(value.item, JSON.stringify(value));
    },
    removeTodoItems(value, index) {
      localStorage.removeItem(value.item);
      this.todoItems.splice(index, 1);
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
