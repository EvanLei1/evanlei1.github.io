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
              <li><RouterLink to="/">Home</RouterLink></li>
              <li><RouterLink to="/transport/bus-list">Transport</RouterLink></li>
              <li><RouterLink to="/gamingView">Gaming</RouterLink></li>
              <li><RouterLink to="/projectView">Education</RouterLink></li>
              <li><RouterLink to="/updatesPage">Posts</RouterLink></li>
              <li><RouterLink to="/socialPage">Socials</RouterLink></li>
              <li><RouterLink to="/aboutPage">About</RouterLink></li>
              <li><a href="https:/evanlei1.neocities.org/">Classic Website</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <aside class="left-sidebar">
        <div class="sidebar-section">
          <div class="sidebar-title">Page content</div>
          <ul>
            <li><a href="#Description">Description</a></li>
            <li><a href="#Page-specific">Page-specific Links</a></li>
            <li><a href="#western-us">Western US</a></li>
            <li><a href="#east-asia">East Asia</a></li>
          </ul>
        </div>
      </aside>

      <main>
        <section>
          <h2 id="Description">Description</h2>
          <div class=inner>
            <p><strong>NOTE:</strong> I am updating this page infrequently because I have to upload more
              images to my
              website.</p>
            <p>The bus list contained a variety of buses taken by myself within the United States and China.
              It was
              sorted by the region and when these photos are taken.</p>

            <h2 id="Page-specific">Page-specific Links</h2>

            <p>The list only contained unusual sightings I encountered by year, rather than the photos I
              took at that
              time.</p>

            <h2 id="western-us">Western US</h2>
            <ul>
              <li><RouterLink to="/transport/sort-region/misc/nevadaPage">Nevada</RouterLink></li>
              <li><RouterLink to="/transport/sort-region/misc/washingtonState">Washington</RouterLink></li>
              <li><RouterLink to="/transport/sort-region/misc/hawaiiIsland">Hawaii</RouterLink></li>
              <li><RouterLink to="/transport/sort-region/misc/arizonaPage">Arizona</RouterLink></li>
              <li><RouterLink to="/transport/sort-region/misc/oregonState">Oregon</RouterLink></li>
            </ul>

            <h2 id="east-asia">East Asia</h2>
            <ul>
              <li><RouterLink to="/transport/sort-region/misc/CN-GDbus">Guangdong</RouterLink></li>
              <li><RouterLink to="/transport/sort-region/misc/CN-SHBus">Shanghai</RouterLink></li>
              <li><RouterLink to="/transport/sort-region/misc/CN-HKMOBus">Hong Kong and Macao</RouterLink></li>
              <li><RouterLink to="/transport/sort-region/misc/CN-ZJBus">Zhejiang</RouterLink></li>
              <li><RouterLink to="/transport/sort-region/misc/CN-JSBus">Jiangsu</RouterLink></li>
              <li><RouterLink to="/transport/sort-region/misc/JP-KYBus">Kyushu</RouterLink></li>
              <li><RouterLink to="/transport/sort-region/misc/JP-KYBus">Shikoku</RouterLink></li>
              <li><RouterLink to="/transport/sort-region/misc/JP-KYBus">Wes Japan</RouterLink></li>
              <li><RouterLink to="/transport/sort-region/misc/JP-KYBus">Central Japan</RouterLink></li>
              <li><RouterLink to="/transport/sort-region/misc/JP-KYBus">East Japan</RouterLink></li>
              <li><RouterLink to="/transport/sort-region/misc/JP-KYBus">Hokkaido</RouterLink></li>
            </ul>
          </div>
        </section>
      </main>
      <footer>
        <div>
          <!-- <div align='center'><a href='https://www.free-website-hit-counter.com'><img src='https://www.free-website-hit-counter.com/c.php?d=6&id=172148&s=39' border='0' alt='Free Website Hit Counter'></a><br / ><small><a href='https://www.free-website-hit-counter.com' title="Free Website Hit Counter">Free website hit counter</a></small></div> -->
          <p id="copyright" align="center">Copyright &copy; 2026 Evan Lei.</p>

          <div id="footer" align="center">
            | <router-link to="/">Home</router-link>
            | <router-link to="/termsPage">Terms</router-link>
            | <router-link to="/aboutPage">About</router-link>
            | <router-link to="/socialPage">Contact</router-link>
          </div>

          <samp><i>
              <tiny>
                Last updated: Thursday, July 16, 2026
              </tiny>
            </i></samp>
          <br>
          Template generated with <a href="https://petrapixel.neocities.org/coding/layout-generator.html">petrapixel's
            layout generator</a>.
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.tiny-text {
  font-size: 0.75rem;
}
</style>

<script setup>
// import router from '@/router';
import { RouterLink } from 'vue-router';

import '@/assets/css/main.css';
</script>
