<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 flex flex-col justify-between">
    <NavbarMenu />
    <main class="max-w-4xl mx-auto p-6 space-y-6">
      <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4">Updates</h1>
          <p class="text-gray-300 leading-relaxed"><strong>NOTE:</strong> I am updating this page infrequently because I have to upload more images
            to my
            website.</p>
          <p class="text-gray-300 leading-relaxed">The bus list contained a variety of buses taken by myself within the United States and China. It
            was
            sorted by the region and when these photos are taken.
            For zero-emission vehicles, it will be found <RouterLink to="/transport/electricBus">here</RouterLink>.</p>
          <hr>
          <h2 class="text-3xl font-bold text-white pt-4" id="updates">Latest Updates</h2>
            <p class="text-gray-300 leading-relaxed"><b>1/28/2026:</b></p>
            <p class="text-gray-300 leading-relaxed"><b><mark class="highlighted-cr">CR</mark> &rarr; <mark class="highlighted-ex">EX</mark></b>
              The last of
              26 2006 Gold Coast Transit New Flyer C40LFRs were retired on December 16, 2025.</p>
          <hr>
          <h2 class="text-3xl font-bold text-white pt-4" id="archive">Archive</h2>
            <p class="text-gray-300 leading-relaxed"><b>3/15/2026:</b></p>
            <p class="text-gray-300 leading-relaxed">The Fresno Area Express 0600 series were retired on March 6, 2025 after the arrival of
              refurbished
              ex-Valley Metro 5000 series buses renumbered into 1300 series entered service.</p>
            <p class="text-gray-300 leading-relaxed"><b>11/8/2025:</b></p>
            <p class="text-gray-300 leading-relaxed"><b><mark class="highlighted-cr">CR</mark> &rarr; <mark class="highlighted-ex">EX</mark></b>
              The last of
              30 San Francisco Muni 8500 series (Orion VII 07.503 buses) were retired from service on
              October 21, with
              8528 the last unit
              and were replaced by ENC E-Z Rider II BRT buses in the 8530 series</p>
            <p class="text-gray-300 leading-relaxed"><b>10/16/2025:</b></p>
            <p class="text-gray-300 leading-relaxed"><b><mark class="highlighted-cr">CR</mark> &rarr; <mark class="highlighted-ex">EX</mark></b>
              The last of
              26 San Diego MTS 600 series (2011 New Flyer C40LFR) were retired from service on October 14,
              with 604 the
              last unit
              and were replaced by 2025 XN40s in the 300 series</p>
            <p class="text-gray-300 leading-relaxed"><b>02/13/2025:</b> All of the 2013 New Flyer XN60 buses that San Diego had retired. The AC
              Transit 1700
              series buses recently entered service, displacing most 1300 series. <br>
              <b>12/04/2024:</b> The Santa Clara VTA 35-foot buses made in 2002 (2101-2121) were retired.
              The 1000 series (2001 Gillig Low Floor) were retired on April 1, 2026.<br>
              <b>07/2024:</b> Marin Transit buses 3301-3307 (2010 New Flyer DE35LF) were retired and
              replaced by 4
              Gillig BRT HEV 35'
              and 3 BRT HEV 40' buses (2401-2407). The only remaining operator (as of November 2024) using
              the DE35LFs
              were in Puerto Rico.<br>
            </p>
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
