<template>
  <v-app>
    
    <router-view></router-view>
  </v-app>
</template>

<script setup>

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
  margin-left: 25px;
}

.menu-item-title {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--purple, #4F359B);
  margin-right: 150px;
  margin-left: 10px;
}

.rectangle {
  width: 10px;
  height: 40px;
  background-color: #4F359B;
  border-radius: 35%;
  margin-left: -1.5%;
}

.v-list-item {
  height: 36px;
  width: fit-content;
}

.custom-list-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.v-navigation-drawer .rectangle {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.navigation-drawer-divider {
  width: 228px;
  height: 1px;
  background-color: #D8D9DD;
  position: absolute;
  bottom: 80px;
  left: 0;
  margin-left: 12px;
}

.divider-text {
  position: absolute;
  bottom: 30px;
  left: 40px;
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: var(--gray-2, #485B69);
}

.divider-image {
  width: 40px;
  height: 40px;
  margin-right: 8px;
  margin-bottom: -12px;
}

.main-container {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
}

.section-header {
  width: 100%;
  margin-left: 25px;
  margin-bottom: 20px;
  margin-top: 35px;
  font-size: 24px;

}

.person-card {
  width: 358.66666px;
  height: 370px;
  margin-top: 20px;
  margin-left: 25px;
  border-radius: 12px;
  border: 1px solid var(--gray-light, #D8D9DD);
}

</style>
