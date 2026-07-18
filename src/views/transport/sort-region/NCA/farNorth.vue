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
            <li></li>
          </ul>
        </div>
      </aside>

      <main>
        <section>
          <h1 align="center">North Central Valley and Sierra Nevada Bus List</h1>
          <h2 id="Humboldt">Humboldt and Del Norte Counties</h2>


          <h1 id="redlist">Buses to Look Out for</h1>
          <b>This section was updated on Wednesday, June 24, 2026.</b> Active and inactive buses were retrieved from <a
            href="https://pantographapp.com">Pantograph</a> and <a href="https://transsee.ca">Transsee</a>.<br>
          Fleet information was provided by Wikipedia and <a href="https://cptdb.ca">CPTDB</a>.
          <div class="accordion-redlist">
            <details>
              <summary class="highlighted-ex">Extinct</summary>
            </details>
            <details>
              <summary class="highlighted-cr">Critically endangered</summary>
            </details>
          </div>
          <div class="accordion-redlist">
            <details>
              <summary class="highlighted-en">Endangered</summary>
            </details>
          </div>
          <div class="accordion-redlist">
            <details>
              <summary class="highlighted-vl">Vulnerable</summary>
            </details>
          </div>
          <div class="accordion-redlist">
            <details>
              <summary class="highlighted-nt">Near threatened</summary>
            </details>
          </div>
          <div class="accordion-redlist">
            <details>
              <summary class="highlighted-lc">Least concern</summary>
            </details>
          </div>
          <div class="accordion-redlist">
            <details>
              <summary class="highlighted-dd">Data deficient</summary>
            </details>
          </div>
          <div class="accordion-electric">
            <details>
              <summary>Electric buses</summary>
            </details>
          </div>

          <h1 id="gallery">Gallery</h1>
          <!-- <div class="responsive">
            <div class="gallery">
              <a target="_blank" href="\transport/files/2023/05/PXL_20220206_222524816.jpg">
                <img src="\transport/files/2023/05/PXL_20220206_222524816.jpg" alt="SCMTD 2318" width="25%">
              </a>
              <div class="desc">Santa Cruz Metro 2318 at transit center</div>
              <a target="_blank" href="transport/files/2023/05/PXL_20220206_223140747.jpg">
                <img src="\transport/files/2023/05/PXL_20220206_223140747.jpg" alt="AC Transit 7038" width="25%">
              </a>
              <div class="desc">Santa Cruz Metro 9824</div>
              <a target="_blank" href="\transport/files/2023/05/PXL_20230529_014032875.jpg">
                <img src="\transport/files/2023/05/PXL_20230529_014032875.jpg" alt="AC Transit 1344" width="25%">
              </a>
              <div class="desc">Santa Cruz Metro 1612</div>
            </div>
          </div> -->
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
                Last updated: Friday, July 17, 2026
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
import { RouterLink } from 'vue-router';
// Add your Composition API logic here
// import { ref } from 'vue'
// const count = ref(0)


</script>
