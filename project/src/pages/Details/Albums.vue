<template>
  <v-app>
    <div class="album-container">
      <div v-for="album in albums" :key="album.id" class="album-frame" @click="go(album.id)">
        
        <h3>{{ album.title }}</h3>
        <div class="photo-gallery">
          <div v-for="(photo, index) in photos[album.id].slice(0, 4)" :key="photo.id" class="photo-wrapper">
            <img
              :src="photo.url"
              alt="Album Photo"
              class="album-photo"
            >
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const selectedTodos = ref({});
const albums = ref([]);
const photos = ref({});

function fetchAlbums() {
  axios
    .get('https://jsonplaceholder.typicode.com/users/' + String(route.params.id) + '/albums')
    .then(response => {
      albums.value = response.data.slice(0, 16);
      albums.value.forEach(album => {
        fetchPhotos(album.id);
      });
    });
}

function fetchPhotos(albumId) {
  axios
    .get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
    .then(response => {
      photos.value[albumId] = response.data;
    });
}

function go(albumId) {
  router.push(`photos/${albumId}`); 
}

onMounted(() => {
  fetchAlbums();
});
</script>

<style>
.album-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
}

.album-frame {
  width: 30%;
  border: 1px solid #ccc;
  margin-top: 45px;
  margin-bottom: 20px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}
.album-frame:hover{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.photo-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.photo-wrapper {
  width: 48%;
  margin-bottom: 10px;
}

.album-photo {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: 0 auto;
}
</style>
