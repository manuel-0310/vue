<template>
  <nav :class="['menu', { 'menu-collapsed': isCollapsed }]">
    <button class="toggle-button" @click="toggleMenu">☰</button>

    <router-link to="/" class="menu-item" data-icon="🏠">Home</router-link>
    <router-link to="/tip-calculator" class="menu-item" data-icon="💰">Divisor de Cuenta</router-link>
  </nav>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isCollapsed = ref(false);

    const toggleMenu = () => {
      isCollapsed.value = !isCollapsed.value;
    };

    return { isCollapsed, toggleMenu };
  }
};
</script>

<style scoped>
.menu {
  width: 250px;
  background: #E8C6C6; /* Rosa pastel */
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.2);
}

.menu-collapsed {
  width: 60px;
}

/* Botón de menú */
.toggle-button {
  background: none;
  border: none;
  color: #6D597A; /* Morado vintage */
  font-size: 28px;
  cursor: pointer;
  margin-bottom: 20px;
  text-align: left;
}

/* Estilos de los enlaces */
.menu-item {
  display: block;
  color: white;
  text-decoration: none;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: #D8A7B1; /* Rosa más oscuro */
  text-align: center;
  font-size: 18px;
  transition: 0.3s;
}

.menu-item:hover {
  background: #BF8B9F;
}
</style>
