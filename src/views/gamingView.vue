<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 flex flex-col justify-between">
    <NavbarMenu />
    <main class="max-w-4xl mx-auto p-6 space-y-6">
      <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4">Gaming Page</h1>
      <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
        <li>
          <RouterLink to="/splatoonPage">Splatoon 3</RouterLink>
        </li>
        <li>Pokemon Go</li>
        <li>Pokemon Scarlet</li>
      </ul>
    </main>
    <FooterMenu />
  </div>
</template>

<script setup>
import { useFancybox } from '@/composables/useFancybox';
import { RouterLink } from 'vue-router';
import NavbarMenu from '@/components/navbarMenu.vue';
import FooterMenu from '@/components/footerMenu.vue';

useFancybox();
</script>
