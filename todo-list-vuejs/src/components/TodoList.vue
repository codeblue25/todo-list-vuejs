<template>
  <div>
    <ul>
      <li 
        v-for="(todoItem, index) in propsData" :key="todoItem.item"
        class="shadow"
      >
        <span class="checkBtn" :class="{textCompleted: todoItem.completed}" @click="toggleComplete(todoItem)" >
          <font-awesome-icon icon="fa-solid fa-check" />
        </span>
        <span :class="{textCompleted: todoItem.completed}">
          {{ todoItem.item }}
        </span>
        <span class="removeBtn" @click="removeTodo(todoItem, index)">
          <font-awesome-icon icon="fa-solid fa-trash-can" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['propsData'],
  methods: {
    toggleComplete(todoItem) {
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    }
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background-color: #fff;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62ACDE;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #B3ADAD;
}
.textCompleted {
  text-decoration: line-through;
  color: #B3ADAD;
}
.removeBtn {
  margin-left: auto;
  color: #DE4343;
  cursor: pointer;
}
</style>