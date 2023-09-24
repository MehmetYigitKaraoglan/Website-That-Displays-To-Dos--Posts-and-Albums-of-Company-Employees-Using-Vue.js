<template>
    <div>
      <h1>{{ album.title }}</h1>
      <div class="photo-gallery">
        <div v-for="photo in photos" :key="photo.id" class="photo-wrapperr">
          <img :src="photo.url" alt="Album Photo">
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const album = ref({});
  const photos = ref([]);
  
  function fetchAlbum() {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/${route.params.id}`)
      .then(response => {
        album.value = response.data;
      });
  }
  
  function fetchPhotos() {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/${route.params.id}/photos`)
      .then(response => {
        photos.value = response.data;
      });
  }
  
  onMounted(() => {
    fetchAlbum();
    fetchPhotos();
  });
  </script>
  
  <style>
  .photo-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

  }
  
  </style>
  