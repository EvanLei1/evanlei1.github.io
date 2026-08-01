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
  <div class="app-wrapper">
    <!-- The next line is a skip-to-content link for keyboard users. Do not remove it! -->
    <a href="#content" id="skip-to-content-link">Skip to content</a>
    <div class="layout">

      <header>

        <div class="header-content">
          <div class="header-title">Evan Lei</div>
          <nav>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/transport/bus-list">Transport</router-link></li>
              <li><router-link to="/gamingView">Gaming</router-link></li>
              <li><router-link to="/projectView">Education</router-link></li>
              <li><router-link to="/updatesPage">Posts</router-link></li>
              <li><router-link to="/socialPage">Socials</router-link></li>
              <li><router-link to="/aboutPage">About</router-link></li>
              <li><a href="https://evanlei1.neocities.org/">Classic Website</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <aside class="left-sidebar">
        <div class="sidebar-section">
          <div class="sidebar-title">Page content</div>
          <ul>
            <li><a href="#description">Description</a></li>
            <li><a href="#sort-date">Sorted by date</a></li>
            <li><a href="#sort-region">Sorted by Region</a></li>
          </ul>
        </div>
      </aside>

      <main>
        <section>
          <h1>Social media</h1>
          <p>Note: The free and open source variant of Linktree does not work in Vue, so a standard page was displayed
            instead. I'm still working to fix the interface. You could see the repository of Linkfree <a
              href='https://github.com/MichaelBarney/LinkFree/tree/master/Templates/3D%20Theme'> here</a>.</p>
          <p>You could contact me on social media below:</p>
          <ul>
            <li><a href='https://twitch.tv/evanlei1' target='_blank'>Twitch</a></li>
            <li><a href='https://youtube.com/@EvanLei1' target='_blank'>YouTube channel</a></li>
            <li><a href='https://twitter.com/EvanLei1' target='_blank'>X</a></li>
            <li><a href='https://discord.gg/N55vRS7MEe' target='_blank'>My Discord server</a></li>
            <li><a href='https://linkedin.com/in/evanlei1' target='_blank'>LinkedIn</a></li>
            <li><a href='https://evanlei1.github.io' target='_blank'>GitHub profile</a></li>
            <li><a href='https://instagram.com/evanlei1' target='_blank'>Instagram</a></li>
            <li><a href='https://www.reddit.com/user/Evan05122005/' target='_blank'>Reddit</a></li>
          </ul>

          <h2>Support Evan Lei on Ko-Fi</h2>
          <div class="kofi-container">
            <a href="https://ko-fi.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
              <img src="https://storage.ko-fi.com/cdn/kofi2.png?v=3" alt="Buy Me a Coffee at ko-fi.com"
                class="kofi-img" />
            </a>
          </div>

        </section>
      </main>
      <footer>
        <div>
          <p id="copyright" align="center">Copyright &copy; 2026 Evan Lei.</p>

          <div id="footer" align="center">
            | <router-link to="/">Home</router-link>
            | <router-link to="/termsPage">Terms</router-link>
            | <router-link to="/aboutPage">About</router-link>
            | <router-link to="/socialPage">Contact</router-link>
          </div>

          <samp><i>
              <tiny>
                Last updated: Friday, July 31, 2026
              </tiny>
            </i></samp>
          <br>
          Template generated with <a href="https://petrapixel.neocities.org/coding/layout-generator.html">petrapixel's
            layout generator</a>.
        </div>
      </footer>
    </div>
    <!-- Add any additional Javascript code () here. -->
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

<script setup lang="ts">
// import router from '@/router';
import { RouterLink } from 'vue-router';

</script>
