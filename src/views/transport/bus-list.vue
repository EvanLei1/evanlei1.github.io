<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 flex flex-col justify-between">
    <NavbarMenu />
    <main class="max-w-4xl mx-auto p-6 space-y-6">
      <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4" id="bus-list">Bus List
      </h1>
      <p class="text-gray-300 leading-relaxed"><strong>NOTE:</strong> I am updating this page infrequently because I
        have to upload more images to my website.</p>
      <p class="text-gray-300 leading-relaxed">The bus list contained a variety of buses taken by myself within the
        United States and China. It was sorted by the region and when these photos are taken. For zero-emission
        vehicles, it will be found <router-link to="/transport/electricBus">here</router-link>.
      </p>

      <h2 class="text-3xl font-bold text-white pt-2" id="sort-date">Sorted by date</h2>
      <p class="text-gray-300 leading-relaxed">The list only contained unusual sightings I encountered by year, rather
        than the photos I took at that time.</p>
      <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
        <li><router-link to="/transport/sort-date/bus-2020">pre-2020</router-link></li>
        <li><router-link to="/transport/sort-date/bus-2021">2021</router-link></li>
        <li><router-link to="/transport/sort-date/bus-2022">2022</router-link></li>
        <li><router-link to="/transport/sort-date/bus-2023">2023</router-link></li>
        <li><router-link to="/transport/sort-date/bus-2024">2024</router-link></li>
      </ul>

      <h2 class="text-3xl font-bold text-white pt-2" id="sort-mftr">Sorted by Manufacturer</h2>
      <p class="text-gray-300 leading-relaxed">See <RouterLink to="/transport/sort-mftr/busMftr">here</RouterLink> for
        more info</p>

      <h2 class="text-3xl font-bold text-white pt-2" id="sort-region">Sorted by Region</h2>
      <img src="@/assets/images/CA-division-map.png"
        alt="Color-coded region of California specifically for sorting buses" width="300" />
      <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
        <li><router-link to="/transport/sort-region/bus-NCA" style="color:#3A0CCD;"><span class="Splatoon2">Northern
              California</span></router-link></li>
        <li><router-link to="/transport/sort-region/bus-SCA" style="color:#D0BE08;"><span class="Splatoon2">Southern
              California</span></router-link></li>
        <li><router-link to="/transport/sort-region/bus-misc"><strong>Miscellaneous sightings</strong></router-link>
        </li>
        <li><router-link to="/transport/sort-region/train-CA">Train sightings in CA</router-link></li>
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
