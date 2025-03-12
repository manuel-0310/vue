<script setup>
import { ref } from 'vue';

const isExpanded = ref(false);

const toggleMenu = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <div :class="['sidebar', { expanded: isExpanded }]">
    <button class="menu-toggle" @click="toggleMenu">☰</button>
    <nav class="nav">
      <a href="#">Home</a>
      <a href="#">Divisor de cuenta</a>
      <a href="#">About us</a>
    </nav>
  </div>
</template>

<style scoped>
.sidebar {
  margin-top: 0px;
  width: 50px;
  height: 100vh;
  background: #111;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  transition: width 0.3s ease-in-out;
}

.expanded {
  width: 200px;
}

.menu-toggle {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 10px;
}


.nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: 0;
  transition: opacity 0.3s;
}

.expanded .nav {
  opacity: 1;
}

.nav a {
  color: white;
  text-decoration: none;
  padding: 10px;
  text-align: center;
}

.nav a:hover {
  background: #444;
}
</style>
