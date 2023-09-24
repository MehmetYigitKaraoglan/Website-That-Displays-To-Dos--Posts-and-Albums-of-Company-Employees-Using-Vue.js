<template>
  <v-app>
    <div class="checkbox-container">
      <v-checkbox
        v-for="todo in todos"
        :key="todo.id"
        v-model="selectedTodos[todo.id]"
        :label="todo.title"
        color="indigo"
        hide-details
      ></v-checkbox>
    </div>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const selectedTodos = ref({});
const todos = ref([]);

function fetchTodos() {
  axios
    .get('https://jsonplaceholder.typicode.com/users/' + String(route.params.id) + '/todos')
    .then(response => {
      todos.value = response.data.slice(0, 16);

      // API'den gelen 'completed' alanına göre checkbox başlangıç durumunu belirliyoruz
      response.data.forEach(todo => {
        selectedTodos.value[todo.id] = todo.completed;
      });
    })
    .catch(error => {
      console.error('Verileri alma hatası:', error);
    });
}

onMounted(() => {
  fetchTodos();
});
</script>

<style>
</style>
