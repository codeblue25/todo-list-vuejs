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

    <Modal v-if="showModal" @close="showModal = false">
      <!-- <template #header>
        <h3>custom header</h3>
      </template> -->
      <h3 slot="header">
        경고 !
        <font-awesome-icon icon="closeModalBtn fas fa-times" @click="showModal = false" />
      </h3>
      <div slot="body">
        내용을 입력해주세요
      </div>
    </Modal>

  </div>
</template>

<script>
import Modal from './CommonModal.vue'

export default {
  components: {
    'Modal': Modal,
  },
  data: () => ({
    todoItem: '',
    showModal: false,
  }),
  methods: {
    addTodo() {
      if (this.todoItem !== '') {
        this.$emit("addTodoItems", this.todoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
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
.closeModalBtn {
  color: #42b983;
}
</style>