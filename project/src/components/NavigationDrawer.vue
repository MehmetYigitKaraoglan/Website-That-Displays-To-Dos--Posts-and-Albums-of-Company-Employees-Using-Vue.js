  <template>
      <v-navigation-drawer app class="custom-drawer">
        <div class="drawer-content">
          <v-list>
            <v-list-item v-for="item in menuItems" :key="item.title" link class="custom-list-item2" @click="go(item.path)">
              <v-list-item-icon>
                <div class="menu-item-icon">
                  <div class="rectangle"></div>
                  <v-img :src="item.image" class="menu-item-image" width="24" height="24" />
                  <div class="menu-item-title">{{ item.title }}</div>
                </div>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </div>
        <div class="navigation-drawer-divider"></div>
        <div class="divider-text">
          <img src="/PIC/n2mobil.png" alt="" class="divider-image" />
          N2Mobil
        </div>
      </v-navigation-drawer>
  </template>

  <script setup>
  import { reactive } from 'vue';
  import {useRoute, useRouter} from 'vue-router'
  import {computed, watch} from 'vue'
  let menuItems =  reactive([
          { title: 'Users', image: '/PIC/kisiler.png' },
        ])

        const route=useRoute();
        const router=useRouter();
        const path = computed(() =>route.path)

        function go(path) {
          if (path) {
              router.push({name: path})
          }
        }




  </script>

  <style>


.custom-list-item2{
  margin: 24px 0; 
  transform: translateY(33px);
  background-color: #FFF;
}
</style>