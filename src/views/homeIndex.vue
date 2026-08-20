<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 flex flex-col justify-between">
    <div>
      <NavbarMenu />
      <main class="max-w-4xl mx-auto p-6 space-y-6">
        <section class="space-y-4">
          <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4">Hello there!</h1>
          <img :src="profilePic" align="right" width="100" alt="Profile picture">
          <p class="text-gray-300 leading-relaxed">My name is Evan Lei, and I am currently a fourth-year Computer
            Science and Engineering major at UC Merced. I like running, biking, and taking public transit across the San
            Francisco Bay Area. Other than doing exercise, I like to play video games and sometimes stream them on
            Twitch, like Pokemon Scarlet/Violet, Splatoon 3, and other Nintendo Switch games.</p>
          <RouterLink to="/legendsPage">Website legend leading to formatting of locations and speedometer</RouterLink>
          <img :src="vueLogoURL" alt="Vue.js Logo" class="svg" align="left" />
          <p class="text-gray-300 leading-relaxed">This website was fully migrated from HTML/CSS to Vue on July 17, 2026
          </p>
        </section>
        <hr />
        <section id="update-links">
          <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4" align="center">
            Website under construction</h1>
          <!-- <div class="gallery">
            <div class="box">
              <div class="image">
                <a target="_blank" :href="apr20">
                  <img :src="apr20" width="300" height="50%">
                </a>
              </div>

              <div class="text">
                <b>
                  <RouterLink to="/transport/sort-date/bus-2024">2024 update for BART legacy fleet</RouterLink>
                </b>
              </div>
            </div>

            <div class="box">
              <div class="image">
                <a target="_blank" :href="CaiHongRd">
                  <img :src="CaiHongRd" width="300" height="50%">
                </a>
              </div>

              <div class="text">
                2026 updates coming soon
              </div>
            </div>

            <div class="box">
              <div class="image">
                <a target="_blank" :href="cableCar">
                  <img :src="cableCar" width="300" height="240">
                </a>
              </div>

              <div class="text">
                2025 photography of San Francisco cable cars
              </div>
            </div>

            <div class="box">
              <div class="image">
                <a target="_blank" :href="BaoShanRd">
                  <img :src="BaoShanRd" width="300" height="240">
                </a>
              </div>

              <div class="text">
                Is Shanghai Metro 03A01 trainsets refurbished yet?
              </div>
            </div>
          </div>
        </section>
        <hr>
        <section id="old-buses">
          <h1 align="center">Old buses</h1>
          <div class="gallery">

            <div class="box">
              <div class="image">
                <a target="_blank" :href="VTA2001">
                  <img :src="VTA2001" width="300" height="50%">
                </a>
              </div>

              <div class="text">
                VTA 2001-02 Gillig Low Floor buses: 9/141
              </div>
            </div>

            <div class="box">
              <div class="image">
                <a target="_blank" :href="SCM1998">
                  <img :src="SCM1998" width="300" height="240">
                </a>
              </div>

              <div class="text">
                Santa Cruz Metro 1998 New Flyer D35/40 buses: 3/30
              </div>
            </div>

            <div class="box">
              <div class="image">
                <a target="_blank" :href="ACT2013">
                  <img :src="ACT2013" width="300" height="240">
                </a>
              </div>

              <div class="text">
                AC Transit 2013 Gillig Low Floor buses: 7/65
              </div>
            </div>
          </div>
        </section>
        <hr>
        <section id="updates">
          <h2>Latest Updates</h2>
          <p>For archived updates, click on this <RouterLink to="/updatesPage">link</RouterLink>.</p>
          <p><b>7/31/2026:</b></p>
          <p>This website was fully migrated into Vue, with the exception of the socials page, which will be replaced
            with the contacts page soon. Also, the Torrance Transit GE40LFR buses were fully retired by the 2026 XN40s
            and the Santa Monica 60BRT CNG buses were decommissioned.</p>
          <p><b>3/15/2026:</b></p>
          <p>The Fresno Area Express 0600 series were retired on March 6, 2025 after the arrival of
            refurbished
            ex-Valley Metro 5000 series buses renumbered into 1300 series entered service.</p>
          <p><b>11/8/2025:</b></p>
          <p><b><mark class="highlighted-cr">CR</mark> &rarr; <mark class="highlighted-ex">EX</mark></b> The
            last
            of 30 San Francisco Muni 8500 series (Orion VII 07.503 buses) were retired from service on
            October
            21, with 8528 the last unit
            and were replaced by ENC E-Z Rider II BRT buses in the 8530 series</p>
          <p><b>10/13/2025:</b></p>
          <p><b><mark class="highlighted-cr">CR</mark> &rarr; <mark class="highlighted-ex">EX</mark></b> The
            last
            of 26 San Diego MTS 600 series (2011 New Flyer C40LFR) were retired from service on October 3,
            with
            611 and 617 the last units
            and were replaced by 2025 XN40s in the 300 series</p> -->
          <h2 class="text-3xl font-bold text-white pt-2">Support Evan Lei on Ko-fi</h2>
          <div class="kofi-container">
            <a href="https://ko-fi.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
              <img src="https://storage.ko-fi.com/cdn/kofi2.png?v=3" alt="Buy Me a Coffee at ko-fi.com"
                class="kofi-img" />
            </a>
          </div>
        </section>
      </main>
    </div>
    <FooterMenu />
  </div>
</template>

<style scoped>
.tiny-text {
  font-size: 0.75rem;
}

.svg {
  /* Dimensions */
  width: 50px;
  height: 50px;
  object-fit: contain;

  /* Border styling */
  border: 2px solid #42b883;
  /* Vue green border */
  border-radius: 12px;
  /* Optional rounded corners */

  /* 1. Space INSIDE the border (between SVG graphic and border) */
  padding: 4px;

  /* 2. Space OUTSIDE the border (pushing other elements away) */
  margin: 8px;
}

.kofi-container {
  display: inline-block;
}

.kofi-img {
  height: 36px;
  border: 0;
}
</style>

<script setup>
import { useFancybox } from '@/composables/useFancybox';
import { RouterLink } from 'vue-router';
import NavbarMenu from '@/components/navbarMenu.vue';
import FooterMenu from '@/components/footerMenu.vue';

useFancybox();

import profilePic from "@/assets/images/profile-pic.jpg"
import apr20 from "@/assets/images/2024/PXL_20240420_223556597.jpg";
import CaiHongRd from "@/assets/images/2026/01/IMG_6160.jpeg";
import cableCar from "@/assets/images/2025/08/IMG_3788.jpg";
import BaoShanRd from "@/assets/images/2024/07/PXL_20240717_025717279.jpg";
import VTA2001 from "@/assets/images/2023/PXL_20231022_024853279.jpg";
import SCM1998 from "@/assets/images/2022/02/PXL_20220206_223140747.jpg"
import ACT2013 from "@/assets/images/2023/PXL_20231024_201618649.jpg";
const vueLogoURL = 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg';
</script>
