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
            <li><a href="#Sac">Sacramento and Yolo Counties</a></li>
            <li><a href="#SACrt">Sacramento RT</a></li>
            <li><a href="#yolobus">Yolobus</a></li>
            <li><a href="#etran">e-tran</a></li>
            <li><a href="#folsom">Folsom Stage Line</a></li>
            <li><a href="#sct">South County Transit</a></li>
            <li><a href="#nSac">North of Sacramento</a></li>
            <li><a href="#yuba">Yuba Sutter Transit</a></li>
            <li><a href="#placerCounty">Placer County and Sierra Nevada</a></li>
            <li><a href="#pct">Placer County Transit</a></li>
            <li><a href="#Roseville">Roseville Transit</a></li>
            <li><a href="#Eldorado">El Dorado Transit</a></li>
            <li><a href="#NevadaCo">Nevada County Connects</a></li>
            <li><a href="#TTD">Tahoe Transportation District</a></li>
            <li><a href="#TART">Tahoe Truckee Area Regional Transit</a></li>
            <li><a href="#redlist">Buses to Look Out for</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>
      </aside>

      <main>
        <section>
          <h1 align="center">Sacramento Bus List</h1>
          <h2 id="Sac">Sacramento and Yolo Counties</h2>
          <h3 id="SACrt">Sacramento RT</h3>

          <h4>Old buses</h4>
          <ul>
            <li>5 2006 Orion VII CNG 07.501 buses in the 2600 series</li>
            <ul>
              <li>Three units remain</li>
            </ul>
          </ul>
          <ul>
            <li>91 2008 Orion VII NG CNG 07.501 buses in the 2800 series</li>
            <ul>
              <li>30 buses were refurbished in 2022-23</li>
            </ul>
          </ul>

          <h4>Original buses</h4>
          <ul>
            <li>96 2014-16 Gillig BRT Plus CNG 40' buses in the 1500 series</li>
            <ul>
              <li>First 30 buses were made in 2014-15</li>
              <li>Remaining 66 buses were made in 2016</li>
            </ul>
            <li>71 2022-23 Gillig BRT Plus CNG 40' buses in the 2200 series</li>
            <ul>
              <li>First 30 buses were made in 2022</li>
              <li>Remaining 41 buses were made in 2023</li>
            </ul>
          </ul>

          <h4>Electric buses</h4>
          <ul>
            <li>6 2019 Proterra Catalyst BE40 buses in the 1910 series</li>
            <ul>
              <li>All of them were inactive since early 2025</li>
            </ul>
            <li>3 2021 Gillig Low Floor Plus EV 40' buses in the 2100 series</li>
            <ul>
              <li>Used in route 142 to Sacramento International Airport</li>
            </ul>
          </ul>

          <h3>Retired Fleet</h3>
          <p>This table only shows buses retired after 2021</p>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Fleet numbers</th>
                <th>Model</th>
                <th>Notes</th>
              </tr>
            </thead>
          </table>

          <h2 id="yolobus">Yolobus</h2>
          <p>Serves Yolo County including a loop route between these cities and Sacramento and the airport. Four of
            eight
            2002 Orion VIIs were still active, making it the Last
            remaining original Orion VIIs in California. The 13 Orion VII NG CNG buses were piggybacked from SACRT and
            were still active. Otherwise, the remaining buses were
            6 MCI D4500CTs, 6 Proterra Catalyst BE40 units, and 28 Gillig Low Floor CNG buses between 2016 and 2025.
          </p>

          <h2 id="etran">e-tran</h2>
          <p>SacRT assumes operations in Elk Grove routes, including peak service to Sacramento. The entire fleet was
            based on 14 New Flyer C40LFR and 24 XN40s.</p>

          <h2 id="folsom">Folsom Stage Line</h2>
          <p>SacRT assumes operations in Folsom routes. There were 5 ElDorado National E-Z Rider II BRT CNG buses
            operating in this area.</p>

          <h2 id="sct">South County Transit</h2>
          <p>Although most buses were Fords in Galt, the three MCI D4500CT buses were used for weekdays to Sacramento.
          </p>

          <h2 id="nSac">North of Sacramento</h2>
          <h2 id="yuba">Yuba Sutter Transit</h2>
          <p>Local buses use diesel Gillig Low Floor 35' and rural buses use Ford or Chevrolet buses. Commuter services
            to
            Sacramento from Yuba or Sutter County use MCI D4500CT units.</p>

          <h2 id="placerCounty">Placer County and Sierra Nevada</h2>

          <h2 id="pct">Placer County Transit</h2>
          <p>Buses were either Ford, Gillig Low Floor CNG 35', or MCI buses. Some were served to downtown Sacramento,
            while Route 10 goes to Watt/I-80 station.</p>

          <h2 id="Roseville">Roseville Transit</h2>
          <p>Most buses use diesel Gillig Low Floor 35' as well as commuter Gillig BRT 40' from 2009 and PhoenixEV ZX5
            40'
            for mix.</p>

          <h2 id="Eldorado">El Dorado Transit</h2>
          <p>Commuter buses from Sacramento to Placerville use MCI D4500CT buses while local buses use diesel Gillig Low
            Floor 35'.</p>

          <h2 id="NevadaCo">Nevada County Connects</h2>
          <p>Most buses were ElDorado National Aero Elite models, with only two electric Gillig Low Floor 35' buses.</p>

          <h2 id="TTD">Tahoe Transportation District</h2>
          <p>These buses travel from South Lake Tahoe to cities in Nevada like Carson City and Incline Village. They use
            Gillig, Proterra, Blue Bird, and NABI buses.</p>

          <h2 id="TART">Tahoe Truckee Area Regional Transit</h2>
          <p>Most buses were Gillig Low Floor buses in North Lake Tahoe, mostly running CNG. In Truckee area, there were
            Ford buses.</p>

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
              Sacramento:
              <span class="Splatoon2">2600 series (2006) (3/5): 2601, 2604-2605</span> <s></s><br>
            </details>
          </div>
          <div class="accordion-redlist">
            <details>
              <summary class="highlighted-en">Endangered</summary>
              Sacramento:
              <span class="Splatoon2">2800 series (2008) (30/91): 2808, 2810, 2813, 2815-2816, 2820-2821, 2833-2834,
                2836, 2838-2839, 2843, 2847, 2849-2850, 2853-2854, 2857, 2860, 2864-2865, 2871-2874, 2876, 2880,
                2887</span>
              <s></s><br>
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
              Sacramento:
              <span class="Splatoon2">1910 series (2019) (0/6)</span> <s></s><br>
              <span class="Splatoon2">2100 series (2021) (2/3): 2102-2103,</span> <s>2101</s><br>
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
