<script setup lang="ts">

defineProps<{ msg: string }>()

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <a class="button" target="_blank" href="https://github.com/AzulejoCode">Github Repository</a>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
