<template>
    <v-card class="mx-auto custom-card" @click="go">
      <template v-slot:prepend>
        <v-icon size="x-large"></v-icon>

        
      </template>
  
      <v-card-actions>
        <v-list-item class="w-100">
          <template v-slot:prepend>
            <v-avatar class="avatar-large"
              color="grey-darken-3"
              image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-avatar>
          </template>
          <div class="personal-information">
            <v-list-item-title>{{user.name}}</v-list-item-title>
            <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
            <v-list-item-subtitle>{{user.phone}}</v-list-item-subtitle>
          </div>
        </v-list-item>
      </v-card-actions>
  
      <div class="custom-content">
        <div class="image-container">
          <img src="/PIC/konum.png"/>
        </div>
        <v-list-item-title class="text-container"> Location</v-list-item-title>
        <v-list-item-subtitle>{{user.address.street + " "+ user.address.suite+" "+ user.address.city+" "+user.address.zipcode}}</v-list-item-subtitle>
        
        <div class="image-container2">
          <img src="/PIC/company.png"/>
        </div>
        <v-list-item-title class="text-container2"> Company</v-list-item-title>
        <v-list-item-subtitle>{{user.company.name}}</v-list-item-subtitle>

        <div class="image-container3">
          <img src="/PIC/website.png"/>
        </div>
        <v-list-item-title class="text-container3"> Website</v-list-item-title>
        <v-list-item-subtitle>{{user.website}}</v-list-item-subtitle>

      </div>
    </v-card>
  </template>
  
  <script setup>
import {useRouter} from 'vue-router'

const router = useRouter()

function go() {
  router.push({name: "todos", params: {id: props.user.id}})
}

const props = defineProps(["user"])

  </script>
  
  <style scoped> 


.custom-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

  .mx-auto {
    width: 358.66666px;
    height: 370px;
    margin-top: 20px;
    margin-left: 25px;
    border-radius: 12px;
    border: 1px solid var(--gray-light, #D8D9DD);
  }
  
  .w-100 {
    margin-top: -100px;
  }
  
  .avatar-large {
    width: 100px !important;
    height: 100px !important;
  }
  
  .personal-information {
    margin-left: 20px;
    color: var(--Black, #26303E);
    font-family: 'Poppins', sans-serif;
  }
  
  .custom-content {
    position: relative;
  }
  
  .image-container {
    float: left;
    margin-right: 10px;
    margin-left: 24px;
  }
  
  .text-container {
    font-size: 16px;
    margin-top: 32px;
  }
  .image-container2 {
    float: left;
    margin-right: 10px;
    margin-left: 24px;
    margin-top: 20px;
  }
  
  .text-container2 {
    font-size: 16px;
    margin-top: 20px;
  }

  .image-container3 {
    float: left;
    margin-right: 10px;
    margin-left: 24px;
    margin-top: 20px;
  }
  
  .text-container3 {
    font-size: 16px;
    margin-top: 20px;
  }

  </style>
  