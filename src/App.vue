<script setup lang="ts">
// Import the index.vue component using the '@' alias shortcut (which points to /src)
import IndexPage from '@/views/index.vue'
</script>

<template>
  <div id="app">
    <IndexPage />
  </div>
</template>

<style>
/* Universal site styles */
body {
  margin: 0;
  padding: 0;
}
</style>