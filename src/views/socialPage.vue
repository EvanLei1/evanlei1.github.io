<!-- <template>
  <div class="app-wrapper">
    <div class='navbar no-items section' id='navbar'></div>
    <img alt='User Photo' id='userPhoto' :src='profilePic' width="100" />
    <span id='userName'>Evan Lei</span>
    <div id='links'>
    <a class='link' href='https://github.com/MichaelBarney/LinkFree/tree/master/Templates/3D%20Theme'><i aria-hidden='true' class='ri-tree-fill'></i>&#160;&#160;This is a free, open-source
    version of my Linktree page.</a>
    <a class='link' href='https://twitch.tv/evanlei1' target='_blank'><i aria-hidden='true'
    class='ri-twitch-fill'></i>&#160;&#160;Twitch</a>
    <a class='link' href='https://youtube.com/@EvanLei1' target='_blank'><i aria-hidden='true'
    class='ri-youtube-fill'></i>&#160;&#160;Check out my YouTube!</a>
    <a class='link' href='https://twitter.com/EvanLei1' target='_blank'><i aria-hidden='true'
    class='ri-twitter-x-fill'></i>&#160;&#160;My X account (semi-active)</a>
    <a class='link' href='https://discord.gg/N55vRS7MEe' target='_blank'><i aria-hidden='true'
    class='ri-discord-fill'></i>&#160;&#160;Join my Discord server</a>
    <a class='link' href='https://linkedin.com/in/evanlei1' target='_blank'><i aria-hidden='true'
    class='ri-linkedin-fill'></i>&#160;&#160;LinkedIn profile</a>
    </div>
    <div class='footer'>
    <a href='https://evanlei1.github.io'>
    <i aria-hidden='true' class='fa fa-globe media' style='line-height: 38px; font-size: 10px;'></i>
    </a>
    <a href='mailto:evanlei0512@gmail.com' target='_blank'>
    <i aria-hidden='true' class='fa fa-envelope-o media' style='line-height: 38px; font-size: 10px;'></i>
    </a>
    <a href='https://instagram.com/evanlei1' target='_blank'>
    <i aria-hidden='true' class='fa fa-instagram media' style='line-height: 38px; font-size: 10px;'></i>
    </a>
    <a href='https://www.reddit.com/user/Evan05122005/' target='_blank'>
    <i aria-hidden='true' class='fa fa-reddit media' style='line-height: 38px; font-size: 10px;'></i>
    </a>
    </div>
  </div>
</template>

<style>
@import '@/assets/css/linktree-page.css';
</style>
<script setup>
// Add your Composition API logic here
// import { ref } from 'vue'
// const count = ref(0)
import profilePic from "@/assets/images/profile-pic.jpg"

</script> -->

<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 flex flex-col justify-between">
    <NavbarMenu />
    <main class="max-w-4xl mx-auto p-6 space-y-6">
      <!-- Main Page Title -->
      <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4">Social media</h1>
          <p class="text-gray-300 leading-relaxed">Note: The free and open source variant of Linktree does not work in Vue, so a standard page was displayed
            instead. I'm still working to fix the interface. You could see the repository of Linkfree <a
              href='https://github.com/MichaelBarney/LinkFree/tree/master/Templates/3D%20Theme'> here</a>.</p>
          <p class="text-gray-300 leading-relaxed">You could contact me on social media below:</p>
          <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
            <li><a href='https://twitch.tv/evanlei1' target='_blank'>Twitch</a></li>
            <li><a href='https://youtube.com/@EvanLei1' target='_blank'>YouTube channel</a></li>
            <li><a href='https://twitter.com/EvanLei1' target='_blank'>X</a></li>
            <li><a href='https://discord.gg/N55vRS7MEe' target='_blank'>My Discord server</a></li>
            <li><a href='https://linkedin.com/in/evanlei1' target='_blank'>LinkedIn</a></li>
            <li><a href='https://evanlei1.github.io' target='_blank'>GitHub profile</a></li>
            <li><a href='https://instagram.com/evanlei1' target='_blank'>Instagram</a></li>
            <li><a href='https://www.reddit.com/user/Evan05122005/' target='_blank'>Reddit</a></li>
          </ul>

          <h2 class="text-3xl font-bold text-white pt-4">Support Evan Lei on Ko-Fi</h2>
          <div class="kofi-container">
            <a href="https://ko-fi.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
              <img src="https://storage.ko-fi.com/cdn/kofi2.png?v=3" alt="Buy Me a Coffee at ko-fi.com"
                class="kofi-img" />
            </a>
          </div>
    </main>
    <FooterMenu />
  </div>
</template>

<style scoped>
.tiny-text {
  font-size: 0.75rem;
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
</script>
