<template>
  <nav :class="['menu', { 'menu-collapsed': isCollapsed }]">
    <button class="toggle-button" @click="toggleMenu">☰</button>

    <router-link to="/" class="menu-item">
      <img :src="homeIcon" alt="Home" class="menu-icon" />
      <span v-if="!isCollapsed">Home</span>
    </router-link>

    <router-link to="/tip-calculator" class="menu-item">
      <img :src="moneyIcon" alt="Divisor de Cuenta" class="menu-icon" />
      <span v-if="!isCollapsed">Divisor de Cuenta</span>
    </router-link>
  </nav>
</template>

<script>
import { ref } from 'vue';
import homeIcon from '../assets/home.png';
import moneyIcon from '../assets/money.png';

export default {
  setup() {
    const isCollapsed = ref(false);

    const toggleMenu = () => {
      isCollapsed.value = !isCollapsed.value;
    };

    return { isCollapsed, toggleMenu, homeIcon, moneyIcon };
  }
};
</script>

<style scoped>
/* Estilos generales del menú */
.menu {
  width: 250px;
  min-height: 100vh;
  background: #E8C6C6; /* Rosa pastel */
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
}

/* Menú contraído */
.menu-collapsed {
  width: 60px;
  padding: 10px;
  align-items: center;
}

/* Botón ☰ */
.toggle-button {
  background: none;
  border: none;
  color: #6D597A;
  font-size: 28px;
  cursor: pointer;
  margin-bottom: 20px;
  text-align: left;
}

/* Estilos de los enlaces */
.menu-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  text-decoration: none;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: #D8A7B1;
  font-size: 18px;
  transition: 0.3s;
}

.menu-item:hover {
  background: #BF8B9F;
}

/* Iconos */
.menu-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

/* Cuando el menú está contraído */
.menu-collapsed .menu-item {
  justify-content: center;
  font-size: 0;
  padding: 10px;
}

.menu-collapsed .menu-item img {
  margin-right: 0;
}
</style>
