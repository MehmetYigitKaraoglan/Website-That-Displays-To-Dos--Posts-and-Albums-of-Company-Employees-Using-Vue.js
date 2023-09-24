<template>
        <Drawer></Drawer>

        <v-main>
              <v-btn variant="text" @click = "goBack" class="goback-btn">
                <v-img src="/PIC/goback.png" width="30" height="30"/>
                <span class="gobacktext" style="font-size: 20px;">Go Home</span>
                </v-btn>
            <router-view></router-view>
        </v-main>


    
</template>
<script setup>
import {useRoute, useRouter} from 'vue-router'
import { onMounted } from 'vue';
import Drawer from '../components/Drawer.vue'

const route=useRoute();
const router = useRouter()

function goBack() {
    router.push({name: "users"})
}
onMounted(() => {
    console.log(route.params)
})
</script>

<style>

</style>