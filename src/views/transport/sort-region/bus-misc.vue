<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 flex flex-col justify-between">
    <NavbarMenu />
    <main class="max-w-4xl mx-auto p-6 space-y-6">
      <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4">Other region bus list
      </h1>
      <p><strong>NOTE:</strong> I am updating this page infrequently because I have to upload more images to my website.
      </p>
      <p class="text-gray-300 leading-relaxed">The bus list contained a variety of buses taken by myself within the
        United States and China. It was sorted by the region and when these photos are taken.</p>

      <p class="text-gray-300 leading-relaxed">The list only contained unusual sightings I encountered by year, rather
        than the photos I took at that time.</p>

      <h2 class="text-3xl font-bold text-white pt-2" id="western-us">Western US</h2>
      <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
        <li>
          <RouterLink to="/transport/sort-region/misc/nevadaPage">Nevada</RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/misc/washingtonState">Washington</RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/misc/hawaiiIsland">Hawaii</RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/misc/arizonaPage">Arizona</RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/misc/oregonState">Oregon</RouterLink>
        </li>
      </ul>

      <h2 class="text-3xl font-bold text-white pt-2" id="east-asia">East Asia</h2>
      <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
        <li>
          <RouterLink to="/transport/sort-region/misc/CN-GDbus">Guangdong</RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/misc/CN-SHBus">Shanghai</RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/misc/CN-HKMOBus">Hong Kong and Macao</RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/misc/CN-ZJBus">Zhejiang</RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/misc/CN-JSBus">Jiangsu</RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/misc/JP-KYBus">Kyushu</RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/misc/JP-KYBus">Shikoku</RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/misc/JP-KYBus">Wes Japan</RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/misc/JP-KYBus">Central Japan</RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/misc/JP-KYBus">East Japan</RouterLink>
        </li>
        <li>
          <RouterLink to="/transport/sort-region/misc/JP-KYBus">Hokkaido</RouterLink>
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
