<template>
      <v-main>
        <NavigationDrawer></NavigationDrawer>

    <div class="main-container">
        <div class="section-header">All Users</div>
        <v-row>
          <v-col v-for="(person, index) in persons" :key="index" cols="12" sm="6" md="3">
            <user :user="person"></user>
          </v-col>
        </v-row>
      </div>
      </v-main>
</template>

<script>
import axios from 'axios';
import User from '../components/User.vue'
import NavigationDrawer from '../components/NavigationDrawer.vue';

export default {
  data() {
    return {
      persons: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          this.persons = response.data.slice(0, 10);
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    },
  },
  components: {
    User,
    NavigationDrawer
  }
};
</script>