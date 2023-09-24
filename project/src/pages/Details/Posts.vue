<template>
  <v-app>
    <div class="posts-container">
      <v-list lines="three">
        <v-list-item class="v-list-posts" v-for="(post, index) in posts" :key="post.id">
          <template v-if="index !== 0">
            <v-divider></v-divider>
          </template>
          <v-list-item-content>
            <v-list-item-title class="title-post">{{ post.title }}</v-list-item-title>
            <v-list-item-title class="sub-post">{{ post.body }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn variant="text" @click="showMore(post)" class="seeMore align-right">
              See More
              <v-avatar right>
                <v-img src="/PIC/seemore.png" max-width="24" max-height="24"></v-img>
              </v-avatar>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </div>

    <v-dialog v-model="isModalOpen" max-width="600">
      <template #activator="{ on }">
        <v-btn variant="text" @click="showMore(post)" class="seeMore align-right" v-bind="on">
          See More
          <v-avatar right>
            <v-img src="/PIC/seemore.png" max-width="24" max-height="24"></v-img>
          </v-avatar>
        </v-btn>
      </template>

      <v-card>
        <v-list lines="two">
          <v-list-subheader class="comment-header">Comments</v-list-subheader>
          <v-list-item
            v-for="(comment, cIndex) in comments"
            :key="cIndex"
            :prepend-avatar="comment.avatar"
            :title="comment.title"
          >
            <template v-slot:subtitle>
              <span >{{ comment.body }}</span>
            </template>
          </v-list-item>
          <v-divider inset></v-divider>
        </v-list>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import axios from 'axios';

const route = useRoute();
const posts = ref([]);
const comments = ref([]);
const isModalOpen = ref(false);

function fetchPosts() {
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}/posts`)
    .then(response => {
      posts.value = response.data.slice(0, 10);
    })
    .catch(error => {
      console.error('Verileri alma hatası:', error);
    });
}

function showMore(post) {
  isModalOpen.value = true;
  fetchComments(post.id);
}

function fetchComments(postId) {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => {
      comments.value = response.data.map(comment => ({
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: comment.name,
        body: comment.body,
      }));
    })
    .catch(error => {
      console.error('Yorumları alma hatası:', error);
    });
}

onMounted(() => fetchPosts());
</script>

<style>


.comment-header{

  color: var(--Black, #26303E);
font-family: Poppins, sans-serif ;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 32px;
}
</style>
