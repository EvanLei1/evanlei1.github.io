<script setup>
// You no longer need to import IndexPage here!
// The RouterView will handle displaying components based on the URL.
</script>

<template>
  <div id="app">
    <!-- This tag is the "portal" where your pages will appear -->
    <RouterView />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
