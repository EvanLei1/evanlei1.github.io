<template>
  <div class="app-wrapper">
    <!-- The next line is a skip-to-content link for keyboard users. Do not remove it! -->
    <a href="#content" id="skip-to-content-link">Skip to content</a>
    <div class="layout">

      <header>

        <div class="header-content">
          <div class="header-title">Website Title</div>
          <nav>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="transport/bus-list">Transport</router-link></li>
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
          <div class="sidebar-title">Updates</div>
          <ul>
            <li><a href="East Bay">East Bay Bus List</a></li>
            <li>List</li>
            <li><a href="#">List</a></li>
            <li>List</li>
          </ul>
        </div>
      </aside>

      <main id="East Bay">
        <section>
          <h2 id=section-1>Description</h2>
          <p><strong>NOTE:</strong> I am updating this page infrequently because I have to upload more images to my
            website.</p>
          <p>The bus list contained a variety of buses taken by myself within the United States and China. It was
            sorted by the region and when these photos are taken.
            For zero-emission vehicles, it will be found <router-link to="/transport/electricBus">here</router-link>.
          </p>

          <h2 id=section-2>Sorted by date</h2>

          <p>The list only contained unusual sightings I encountered by year, rather than the photos I took at that
            time.</p>
          <ul>
            <li><router-link to="/transport/sort-date/bus-2020">pre-2020</router-link></li>
            <li><router-link to="/transport/sort-date/bus-2021">2021</router-link></li>
            <li><router-link to="/transport/sort-date/bus-2022">2022</router-link></li>
            <li><router-link to="/transport/sort-date/bus-2023">2023</router-link></li>
            <li><router-link to="/transport/sort-date/bus-2024">2024</router-link></li>
          </ul>

          <h2 id=section-3>Sorted by Region</h2>
          <img src="@/assets/images/CA-division-map.png" alt="Color-coded region of California specifically for sorting buses"
            width="300" />
          <ul>
            <li><router-link to="/transport/sort-region/bus-NCA" style="color:#3A0CCD;"><span class="Splatoon2">Northern
                  California</span></router-link></li>
            <li><router-link to="/transport/sort-region/bus-SCA" style="color:#D0BE08;"><span class="Splatoon2">Southern
                  California</span></router-link></li>
            <li><router-link to="/transport/sort-region/bus-misc"><strong>Miscellaneous sightings</strong></router-link></li>
          </ul>

        </section>
      </main>
      <footer>
        <div>
          <!-- <div align='center'><a href='https://www.free-website-hit-counter.com'><img src='https://www.free-website-hit-counter.com/c.php?d=6&id=172148&s=39' border='0' alt='Free Website Hit Counter'></a><br / ><small><a href='https://www.free-website-hit-counter.com' title="Free Website Hit Counter">Free website hit counter</a></small></div> -->
          <p id="copyright" align="center">Copyright &copy; 2025 Evan Lei.</p>

          <div id="footer" align="center">
            | <router-link to="/">Home</router-link>
            | <router-link to="/termsPage">Terms</router-link>
            | <router-link to="/aboutPage">About</router-link>
            | <router-link to="/socialPage">Contact</router-link>
          </div>

          <samp><i>
              <tiny>
                Last updated: Saturday, June 14, 2025
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
.tiny-text { font-size: 0.75rem; }
</style> 

<script setup lang="ts">
// import router from '@/router';
import { RouterLink } from 'vue-router';

// Add your Composition API logic here
// import { ref } from 'vue'
// const count = ref(0)
</script>