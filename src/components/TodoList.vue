<template>
  <div>
    <TransitionGroup name="list" tag="ul">
      <li 
        v-for="(todoItem, index) in this.$store.state.todoItems" :key="todoItem.item"
        class="shadow"
      >
        <span class="checkBtn" :class="{checkBtnCompleted: todoItem.completed}" @click="toggleComplete(todoItem, index)" >
          <font-awesome-icon icon="fa-solid fa-check" />
        </span>
        <span :class="{textCompleted: todoItem.completed}">
          {{ todoItem.item }}
        </span>
        <span class="removeBtn" @click="removeTodo(todoItem, index)">
          <font-awesome-icon icon="fa-solid fa-trash-can" />
        </span>
      </li>
    </TransitionGroup>
  </div>
</template>

<script>
export default {
  methods: {
    toggleComplete(todoItem, index) {
      this.$emit("toggleTodoItems", todoItem, index);
    },
    removeTodo(todoItem, index) {
      // const obj = {
      //   todoItem: todoItem,
      //   index: index
      // }
      this.$store.commit('removeTodoItems', {todoItem, index}) // ES6 문법 적용
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

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>