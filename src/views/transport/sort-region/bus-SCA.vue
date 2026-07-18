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
              <li>
                <RouterLink to="/">Home</RouterLink>
              </li>
              <li>
                <RouterLink to="/transport/bus-list">Transport</RouterLink>
              </li>
              <li>
                <RouterLink to="/gamingView">Gaming</RouterLink>
              </li>
              <li>
                <RouterLink to="/projectView">Education</RouterLink>
              </li>
              <li>
                <RouterLink to="/updatesPage">Posts</RouterLink>
              </li>
              <li>
                <RouterLink to="/socialPage">Socials</RouterLink>
              </li>
              <li>
                <RouterLink to="/aboutPage">About</RouterLink>
              </li>
              <li><a href="https:/evanlei1.neocities.org/">Classic Website</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <aside class="left-sidebar">
        <div class="sidebar-section">
          <div class="sidebar-title">Page content</div>
          <ul>
            <li><a href="#page-specific">Page-specific Links</a></li>
            <li><a href="#centralValley">Central Valley</a></li>
            <li><a href="#LAArea">Los Angeles Area</a></li>
          </ul>
        </div>
      </aside>

      <main id="East Bay">
        <section>
          <h2 id=section-1>Description</h2>

          <p><strong>NOTE:</strong> I am updating this page infrequently because I have to upload more images to my
            website.</p>
          <p>The bus list contained a variety of buses taken by myself within the United States and China. It was
            sorted by the region and when these photos are taken.</p>
          <h2 id="page-specific">Page-specific Links</h2>
          <p>The list only contained unusual sightings I encountered by year, rather than the photos I took at that
            time.</p>
          <h2 id="centralValley">Central Valley</h2>
          <ul>
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

          <h2 id="LAArea">Los Angeles Area</h2>
          <ul>
            <li>
              <RouterLink to="/transport/sort-region/SCA/LAInner">Los Angeles County</RouterLink>
            </li>
            <li>
              <RouterLink to="/transport/sort-region/SCA/LAOuter">Surrounding LA areas including Ventura and San Diego
                Counties</RouterLink>
            </li>
          </ul>

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
// Add your Composition API logic here
// import { ref } from 'vue'
// const count = ref(0)
import { RouterLink } from 'vue-router';

</script>
