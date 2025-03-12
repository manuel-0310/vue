<script setup>
import Menu from './components/Menu.vue';
</script>

<template>
  <div class="app-container">
    <Menu />
    <div class="content">
      <router-view></router-view> <!-- Aquí se mostrarán las vistas según la ruta -->
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #1E2A38;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
  font-size: 24px;
  overflow: hidden;
}
</style>
