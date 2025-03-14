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
  align-items: stretch; /* Asegura que el menú y el contenido ocupen toda la altura */
  min-height: 100vh; /* Permite que crezca con el contenido */
  width: 100vw;
  background-color: #F8EDE3;
  overflow: hidden; /* Evita scroll innecesario en el body */
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  color: #6D597A;
  font-size: 24px;
  overflow-y: auto; /* Permite desplazamiento si el contenido es largo */
  min-height: 100vh; /* Evita cortes de contenido */
}
</style>
