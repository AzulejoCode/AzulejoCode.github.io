<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://github.com/AzulejoCode" target="_blank">
      <img src="./assets/azulejo_profile.webp" class="logo vue" alt="AzulejoCode logo"/>
    </a>
  </div>
  <HelloWorld msg="Azulejo Code"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  border-radius: 50%;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
