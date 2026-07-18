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
            <li><a href="#updates">Latest Updates</a></li>
            <li><a href="#archive">Archive</a></li>
          </ul>
        </div>
      </aside>

      <main>
        <section>
          <p><strong>NOTE:</strong> I am updating this page infrequently because I have to upload more images
            to my
            website.</p>
          <p>The bus list contained a variety of buses taken by myself within the United States and China. It
            was
            sorted by the region and when these photos are taken.
            For zero-emission vehicles, it will be found <RouterLink to="/transport/electricBus">here</RouterLink>.</p>
          <hr>
          <h2 id="updates">Latest Updates</h2>
          <div class=inner>
            <p><b>1/28/2026:</b></p>
            <p><b><mark class="highlighted-cr">CR</mark> &rarr; <mark class="highlighted-ex">EX</mark></b>
              The last of
              26 2006 Gold Coast Transit New Flyer C40LFRs were retired on December 16, 2025.</p>
          </div>
          <hr>
          <h2 id="archive">Archive</h2>
          <div class=inner>
            <p><b>3/15/2026:</b></p>
            <p>The Fresno Area Express 0600 series were retired on March 6, 2025 after the arrival of
              refurbished
              ex-Valley Metro 5000 series buses renumbered into 1300 series entered service.</p>
            <p><b>11/8/2025:</b></p>
            <p><b><mark class="highlighted-cr">CR</mark> &rarr; <mark class="highlighted-ex">EX</mark></b>
              The last of
              30 San Francisco Muni 8500 series (Orion VII 07.503 buses) were retired from service on
              October 21, with
              8528 the last unit
              and were replaced by ENC E-Z Rider II BRT buses in the 8530 series</p>
            <p><b>10/16/2025:</b></p>
            <p><b><mark class="highlighted-cr">CR</mark> &rarr; <mark class="highlighted-ex">EX</mark></b>
              The last of
              26 San Diego MTS 600 series (2011 New Flyer C40LFR) were retired from service on October 14,
              with 604 the
              last unit
              and were replaced by 2025 XN40s in the 300 series</p>
            <p><b>02/13/2025:</b> All of the 2013 New Flyer XN60 buses that San Diego had retired. The AC
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
</script>
