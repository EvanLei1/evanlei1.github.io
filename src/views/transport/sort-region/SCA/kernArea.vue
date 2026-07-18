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
            <li><a href="#kernCounty">Kern County</a></li>
            <li><a href="#GET">Golden Empire Transit</a></li>
            <li><a href="#KernTransit">Kern Transit</a></li>
            <li><a href="#SLOCounty">San Luis Obispo County</a></li>
            <li><a href="#SBCounty">Santa Barbara County</a></li>
            <li><a href="#redlist">Buses to Look Out for</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>
      </aside>

      <main>
        <section>
          <h1 align="center">Kern and Santa Barbara Counties Bus List</h1>
          <h2 id="kernCounty">Kern County</h2>
          <h3 id="GET">Golden Empire Transit</h3>
          <h4>Active Fleet</h4>
          <h5>Old buses</h5>
          <ul>
            <li><b><mark class="highlighted-en">Endangered</mark></b> 12 2012 New Flyer C40LFR buses starting at 1035
            </li>
            <li><b><mark class="highlighted-lc">Active</mark></b> 15 2013 New Flyer XN40 buses starting at 1047</li>
          </ul>

          <h5>Original buses</h5>
          <ul>
            <li><b><mark class="highlighted-ex">Inactive</mark></b> 3 2016, 2020 MCI D4500CT buses</li>
            <ul>
              <li>2 2016 buses in the 900 series</li>
              <li>Bus 902 as a 2020 model</li>
              <li>Inactive since 2024, used only on route X92 before discontinuation</li>
            </ul>
            <li>24 2018 New Flyer XN40 buses starting at 1062</li>
            <li>21 2021 Gillig Low Floor CNG 40' buses in the 2100 series</li>
          </ul>

          <h5>Electric buses</h5>
          <ul>
            <li>14 2021-22, 2024 New Flyer XHE40 buses</li>
            <ul>
              <li>5 2021 buses in the H2100 series</li>
              <ul>
                <li>Bus H2105 caught fire in 2022 and retired</li>
              </ul>
              <li>5 2022 buses in the H2200 series</li>
              <li>4 2024 buses in the H2400 series</li>
            </ul>
          </ul>

          <h4>Retired Fleet</h4>
          <p>This table only shows buses retired after 2021</p>
          <table>
            <tr>
              <th>Year</th>
              <th>Fleet numbers</th>
              <th>Model</th>
              <th>Notes</th>
            </tr>
          </table>
          <h3 id="KernTransit">Kern Transit</h3>
          <p>Most of the buses use either ElDorado National Axess BRT 35' or 40' in diesel or CNG, some Ford and
            Freightliner buses with or without CNG, and some BYD buses.
          </p>

          <h2 id="SLOCounty">Santa Barbara County</h2>
          <p>Under construction</p>

          <h2 id="SBCounty">Santa Barbara County</h2>
          <p>Under construction</p>

          <h1 id="redlist">Buses to Look Out for</h1>
          <b>This section was updated on Wednesday, June 24, 2026.</b> Active and inactive buses were retrieved from <a
            href="https://pantographapp.com">Pantograph</a> and <a href="https://transsee.ca">Transsee</a>.<br>
          Fleet information was provided by Wikipedia and <a href="https://cptdb.ca">CPTDB</a>.
          SBMTD retired its last 2004 29' buses on March 2, 2026, with bus 708 making its last run on routes 5 and 14.
          <div class="accordion-redlist">
            <details>
              <summary class="highlighted-ex">Extinct</summary>
              Santa Barbara County:
              <span class="Splatoon2">1000 series (2014) (0/3)</span>
            </details>
            <details>
              <summary class="highlighted-cr">Critically endangered</summary>
            </details>
          </div>
          <div class="accordion-redlist">
            <details>
              <summary class="highlighted-en">Endangered</summary>
              Kern County:
              <span class="Splatoon2">GET 2012 buses (6/12): 1037, 1039, 1041-1044,</span> <s>1040, 1045-1046</s><br>
              Santa Barbara County:
              <span class="Splatoon2">ex-SamTrans buses (2003) (7/17): 437-438, 440, 444-446, 450</span> <s>436,
                441</s><br>
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
              Kern County:
              <span class="Splatoon2">2600 series (1/?): 2604</span><br>
            </details>
          </div>
          <div class="accordion-redlist">
            <details>
              <summary class="highlighted-dd">Data deficient</summary>
              Santa Barbara County:
              <span class="Splatoon2">2006 29' diesel buses (3/3)</span> <s></s><br>
              <span class="Splatoon2">2007 40' hybrid buses (7/8): 900-906</span> <s></s><br>
              <span class="Splatoon2">2009 29' hybrid buses (3/3)</span> <s></s><br>
              <span class="Splatoon2">2011 40' hybrid buses (7/7)</span> <s></s><br>
              <span class="Splatoon2">2011 40' diesel buses (7/7)</span> <s></s><br>
            </details>
          </div>
          <div class="accordion-electric">
            <details>
              <summary>Electric buses</summary>
              Santa Barbara County:
              <span class="Splatoon2">30 series (2017) (10/14): 31-38, 42-43,</span> <s>40</s><br>
              <span class="Splatoon2">2022 buses (?/9)</span><br>
            </details>
          </div>

          <h1 id="gallery">Gallery</h1>
          <div class="responsive">
            <!-- <div class="gallery">
            <a target="_blank" href="\transport\files\2023\PXL_20231022_024853279.jpg">
              <img src="\transport\files\2023\PXL_20231022_024853279.jpg"
                alt="VTA 2017 at Milpitas station on October 21" width="25%">
            </a>
            <div class="desc">VTA 2017 (2001 Gillig Low Floor) <br>on October 21, 2023</div>
            <a target="_blank" href="\transport\files\2023\PXL_20231021_213224815.jpg">
              <img src="\transport\files\2023\PXL_20231021_213224815.jpg"
                alt="VTA 0185 at Palo Alto station serving as route 22, a rare occurrence" width="25%">
            </a>
            <div class="desc">VTA 0185 (2010 Gillig Low Floor HEV) <br>also used on the 4400 series</div>
          </div> -->
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
