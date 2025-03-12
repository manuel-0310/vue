<script setup>
import Menu from './components/Menu.vue';
import LandingPage from './components/landingpage.vue';
</script>

<template>
  <div class="app-container">
    <Menu />
    <div class="content">
      <LandingPage />
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
  flex: 1; /* Esto asegurará que el contenido ocupe el espacio restante */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
  font-size: 24px;
  overflow: hidden;
}
</style>

