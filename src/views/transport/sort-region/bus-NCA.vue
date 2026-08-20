<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 flex flex-col justify-between">
    <NavbarMenu />
    <main class="max-w-4xl mx-auto p-6 space-y-6">
      <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4" id="bus-list">Northern
        California bus list</h1>
      <p class="text-gray-300 leading-relaxed"><strong>NOTE:</strong> I am updating this page infrequently because I
        have to upload more images to my website.</p>
      <p class="text-gray-300 leading-relaxed">The bus list contained a variety of buses taken by myself within the
        United States and China. It was sorted by the region and when these photos are taken.</p>
      <p class="text-gray-300 leading-relaxed">The list only contained unusual sightings I encountered by year, rather
        than the photos I took at that time.</p>

      <h2 class="text-3xl font-bold text-white pt-2" id="bayArea">Bay Area</h2>
      <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
        <li>
          <RouterLink to="/transport/sort-region/NCA/alamedaBus">Alameda and Contra Costa Counties</RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/NCA/napaArea">Napa Valley</RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/NCA/SFPeninsula">San Francisco Peninsula and Santa Clara Valley
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/NCA/sonomaMarin">Sonoma and Marin Counties</RouterLink>
        </li>
      </ul>

      <h2 class="text-3xl font-bold text-white pt-2" id="centralValley">Central Valley</h2>
      <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
        <li>
          <RouterLink to="/transport/sort-region/NCA/farNorth">North of Bay Area and Sacramento regions</RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/NCA/modestoArea">Modesto, Merced, and Madera Counties, and south of
            Lake Tahoe</RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/NCA/sacramentoArea">Sacramento, San Joaquin, and Yolo Counties
          </RouterLink>
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
