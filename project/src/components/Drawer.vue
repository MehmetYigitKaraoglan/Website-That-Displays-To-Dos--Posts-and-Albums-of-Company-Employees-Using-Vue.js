<template>
  <v-navigation-drawer app class="custom-drawer">
    <div class="drawer-content">
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          link
          class="custom-list-item"
          :class="{ selected: item.selected }"
          @click="changeView(item.title)"
        >
          <v-list-item-icon>
            <div class="menu-item-icon">
              <div class="rectangle" v-if="item.selected"></div>
              <v-img :src="item.image" class="menu-item-image" width="24" height="24" />
              <div class="menu-item-title">{{ item.title }}</div>
            </div>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </div>
    <div class="navigation-drawer-divider-top"></div>
    <div class="divider-text-top">
      <img src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light" alt="" class="divider-image2" />
    </div>
    <div class="additional-text">
      {{ userData.name }}
    </div>
    <div class="additional-text2">
      {{ userData.email }}
    </div>
    <div class="navigation-drawer-divider-bottom"></div>
    <div class="divider-text">
      <img src="/PIC/n2mobil.png" alt="" class="divider-image" />
      N2Mobil
    </div>
  </v-navigation-drawer>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      menuItems: [
        { title: 'Todos', image: '/PIC/todos.png', selected: true },
        { title: 'Posts', image: '/PIC/posts.png', selected: false },
        { title: 'Albums', image: '/PIC/albums.png', selected: false },
      ],
      userData: {
        name: '',
        email: '',
      },
    };
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    changeView(title) {
      this.menuItems.forEach(item => {
        item.selected = item.title === title;
        if (title === 'Todos') {
          this.goTodos();
        }
        if (title === 'Posts') {
          this.goPosts();
        }
        if (title === 'Albums') {
          this.goAlbums();
        }
      });
    },
    goTodos() {
      this.$router.push({ name: "todos" }); 
    },
    goPosts() {
      this.$router.push({ name: "posts" });
    },
    goAlbums() {
      this.$router.push({ name: "albums" });
    },
    fetchUserData() {
      const userId = this.$route.params.id;
      const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;

      axios.get(apiUrl)
        .then((response) => {
          this.userData.name = response.data.name;
          this.userData.email = response.data.email;
        })
        .catch((error) => {
          console.error('Veri çekme hatası:', error);
        });
    },
  },
};
</script>

<style>
.custom-drawer {
  border-right: 1px solid var(--gray-light, #D8D9DD);
}

.drawer-content {
  background: #F5F5F5;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
}

.menu-item-icon {
  display: flex;
  align-items: center;
}

.menu-item-image {
  width: 24px;
  height: 24px;
  margin-left: 30px;
}

.menu-item-title {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--purple, #4F359B);
  margin-right: 150px;
  margin-left: 15px;
}

.rectangle {
  width: 10px;
  height: 40px;
  background-color: #4F359B;
  border-radius: 35%;
  margin-left: -1%;
}

.v-list-item {
  height: 36px;
  width: fit-content;
}

.custom-list-item {
  margin: 24px 0; 
  transform: translateY(33px);
}

.v-navigation-drawer .rectangle {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.navigation-drawer-divider-bottom {
  width: 228px;
  height: 1px;
  background-color: #D8D9DD;
  position: absolute;
  bottom: 80px;
  left: 0;
  margin-left: 12px;
}

.navigation-drawer-divider-top {
  width: 228px;
  height: 1px;
  background-color: #D8D9DD;
  position: absolute;
  top: 80px;
  left: 0;
  margin-left: 12px;
}

.divider-image2 {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  margin-bottom: -12px;
  border-radius: 50%;
  position: absolute;
  margin-left: 10px;
  top: 20px;
  left: 15px;
}

.additional-text {
  position: absolute;
  margin-left: 10px;
  top: 25px;
  left: 70px;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 550;
  line-height: 14px;
  color: var(--Gray, #5C6672);
}

.additional-text2 {
  position: absolute;
  margin-left: 10px;
  top: 45px;
  left: 70px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 14px;
  color: var(--Gray, #5C6672);
}

.checkbox-container {
  position: absolute;
  top: 100px;
  left: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.goback-btn {
  left: 20px;
  top: 20px;
  z-index: 1000;
}

.gobacktext {
  color: var(--Black, #26303E);
  font-family: Poppins,sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  margin-left: 24px;
  text-transform: capitalize;
}

.posts-container {
  margin-top: 50px;
  margin-left: 50px;
}

.align-right {
  margin-left: 1200px;
}

.sub-post {
  align-self: stretch;
  color: rgba(0, 0, 0, 0.70);
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.28px;
}

.title-post {
  width: 498px;
  color: var(--Black, #26303E);
  font-family: Poppins,sans-serif;
  font-size: 18px;
  font-style: bold;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.36px;
  margin-bottom: 10px;
  margin-top: 17px;
}

.v-list-posts:not(:last-child) {
  margin-bottom: 60px;
}
.custom-list-item.selected {
  background-color: #FFF;
}
</style>
