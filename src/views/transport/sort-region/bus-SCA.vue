<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 flex flex-col justify-between">
    <NavbarMenu />
    <main class="max-w-4xl mx-auto p-6 space-y-6">
      <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4">Southern
        California bus list</h1>
      <p class="text-gray-300 leading-relaxed"><strong>NOTE:</strong> I am updating this page infrequently because I
        have to upload more images to my website.</p>
      <p class="text-gray-300 leading-relaxed">The bus list contained a variety of buses taken by myself within the
        United States and China. It was sorted by the region and when these photos are taken.</p>
      <p class="text-gray-300 leading-relaxed">The list only contained unusual sightings I encountered by year, rather
        than the photos I took at that time.</p>

      <h2 class="text-3xl font-bold text-white pt-2" id="centralValley">Central Valley</h2>
      <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
        <li>
          <RouterLink to="/transport/sort-region/SCA/centralCoast">Santa Cruz and Central Coast</RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/SCA/fresnoArea">Fresno Area</RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/SCA/kernArea">Bakersfield Area</RouterLink>
        </li>
      </ul>

      <h2 class="text-3xl font-bold text-white pt-2" id="LAArea">Los Angeles Area</h2>
      <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
        <li>
          <RouterLink to="/transport/sort-region/SCA/LAInner">Los Angeles County</RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/SCA/LAOuter">Surrounding LA areas including Ventura and San Diego
            Counties</RouterLink>
        </li>
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
