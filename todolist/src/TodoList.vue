<template>
  <div id="TodoList">
    <img src="./assets/logo.png">
    <div>
      <input v-model="inputValue"/>
      <button @click="handleSubmit">pr</button>
    </div>
    <ul>
      <todoitem v-for="(item,index) of list" :key="index"
                :content="item" :index="index"
                @delete="handleDelete"
      ></todoitem>
    </ul>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem'

export default {
  components: {
    todoitem: TodoItem
  },
  data: function () {
    return {
      inputValue: '',
      list: []
    }
  },
  methods: {
    handleSubmit: function () {
      this.list.push(this.inputValue)
      this.inputValue = ''
    },
    handleDelete: function (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>

<style>
  #TodoList {
    text-align: center;
    margin-top: 60px;
  }
</style>
