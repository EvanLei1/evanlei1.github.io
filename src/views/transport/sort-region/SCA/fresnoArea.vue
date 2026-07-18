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
            <li><a href="#FAX">Fresno Area Bus List</a></li>
            <li><a href="#KART">Kings Area Regional Transit</a></li>
            <li><a href="#FCRTA">Fresno County Rural Transit Agency</a></li>
            <li><a href="#Visalia">Visalia Transit</a></li>
            <li><a href="#Porterville">Porterville Transit</a></li>
            <li><a href="#TCAT">Tulare County Area Transit</a></li>
            <li><a href="#redlist">Buses to Look Out for</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>
      </aside>

      <main>
        <section>
          <h1 align="center">Fresno Area Bus List</h1>
          <h2 id="FAX">Fresno Area Express</h2>
          <h3>Active Fleet</h3>
          <h4>Old buses</h4>
          <ul>
            <li>16 2009 New Flyer C40LFR buses in the 0900 series</li>
            <li>9 2011-12 Gillig BRT CNG 40' buses in the 1100 series</li>
            <ul>
              <li>The first one was made in 2011, which is the first CNG buses by Gillig</li>
              <li>The remaining 8 units were 2012 models</li>
            </ul>
          </ul>
          <ul>
            <li>3 2012 Gillig BRT CNG 29' buses in the 1200 series</li>
            <ul>
              <li>Used on routes 33, 58, and 58E</li>
            </ul>
          </ul>

          <h4>Acquired buses</h4>
          <ul>
            <li>11 2013 New Flyer C40LFR buses in the 1300 series</li>
            <ul>
              <li>Ex-Phoenix Valley Metro 5000 series, refurbished in 2025.</li>
              <li>Entered service in late February, replacing the 0600 series</li>
            </ul>
          </ul>

          <h4>Original buses</h4>
          <ul>
            <li>16 2014, 2016 Gillig BRT CNG 40' buses</li>
            <ul>
              <li>10 2014 buses in the 1400 series</li>
              <li>6 2016 buses starting at 1612</li>
            </ul>
            <li>66 2016-21, 2024 Gillig BRT Plus CNG 40' buses</li>
            <ul>
              <li>11 2016 buses in the 1600 series</li>
              <li>26 2017 buses in the 1700 series, where the last 17 were used in FAX Q service</li>
              <li>Bus 1801 as a 2018 unit</li>
              <li>2 2019 buses starting at 1905</li>
              <li>8 2020 buses in the 2000 series</li>
              <li>6 2021 buses starting at 2103</li>
              <li>12 2024 buses in the 2400 series</li>
            </ul>
          </ul>

          <h4>Electric buses</h4>
          <ul>
            <li>9 2021-22 Proterra ZX5 40' buses</li>
            <ul>
              <li>2 2021 buses in the 2100 series, all inactive</li>
              <li>7 2022 buses in the 2200 series</li>
            </ul>
            <li>2 2024 New Flyer XHE40 buses in the 2400 series</li>
            <ul>
              <li>Uses a 24 dot high Hanover color signs on the front instead of 17</li>
            </ul>
          </ul>

          <h3 id="FAX retired fleet">Retired Fleet</h3>
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
            <tbody>
              <tr>
                <td>2005</td>
                <td>0501-0510</td>
                <td>New Flyer C40LF</td>
                <td>Retired in June 2025</td>
              </tr>
              <tr>
                <td>2005</td>
                <td>0601-0615</td>
                <td>New Flyer C40LFR</td>
                <td>Retired in March 2026 after the arrival of the 1300 series units</td>
              </tr>
            </tbody>
          </table>

          <h2 id="KART">Kings Area Regional Transit</h2>
          <p>12 buses made between 2012 and 2013 utilize New Flyer C35LFR or XN35. Later buses use ElDorado
            Axess BRT CNG
            35' and Gillig Low Floor CNG 35' buses. The 2010 units were decommissioned in September 2025.
          </p>
          <h2 id="FCRTA">Fresno County Rural Transit Agency</h2>
          <p>It is currently unknown which buses they operate, but I found some ElDorado Axess BRT CNG and
            Proterra buses
            on the road.
          </p>
          <h2 id="Visalia">Visalia Transit</h2>
          <p>Some Orion VII NG CNG buses were in service, while other units came from Gillig BRT Plus CNG and
            Proterra
            Catalyst BE40 buses. Two New Flyer XE35 buses made in 2023 were delivered. The Sequoia Shuttle
            utilize Gillig
            BRT HEV 29' or 35'.
          </p>
          <h2 id="Porterville">Porterville Transit</h2>
          <p>All buses were made by ElDorado E-Z Rider II MAX or BRT 32' CNG.
          </p>
          <h2 id="TCAT">Tulare County Area Transit</h2>
          <p>Since there were some Ford E-450s and rare NABI Ultra LF 35' buses, there were some Gillig Low
            Floor CNG 35'
            buses in this area.
          </p>

          <h1 id="redlist">Buses to Look Out for</h1>
          <b>This section was updated on Wednesday, June 24, 2026.</b> Active and inactive buses were
          retrieved from <a href="https://pantographapp.com">Pantograph</a> and <a
            href="https://transsee.ca">Transsee</a>.<br>
          Fleet information was provided by Wikipedia and <a href="https://cptdb.ca">CPTDB</a>.
          <p>Buses made between 2005 and 2006 (0500 and 0600 series) will be retired and were replaced into
            2400 and 1300
            series buses, respectively.<br>
            The last remaining C40LF retired on June 19. 2025. The last remaining 2006 C40LFR retired on
            March 6, 2026.
          </p>
          <div class="accordion-redlist">
            <details>
              <summary class="highlighted-ex">Extinct</summary>
            </details>
            <details>
              <summary class="highlighted-cr">Critically endangered</summary>
              Kings County:
              <span class="Splatoon2">KART 2012 buses (1/2): 3531</span> <s></s><br>
            </details>
          </div>
          <div class="accordion-redlist">
            <details>
              <summary class="highlighted-en">Endangered</summary>
              Fresno County:
              <span class="Splatoon2">FAX 0900 series (2009) (15/16): 0901-0906, 0908-0916,</span>
              <s>0907</s><br>
              Kings County:
              <span class="Splatoon2">KART 2013 buses (3/3)</span><s></s><br>
              Tulare County:
              <span class="Splatoon2">Visalia 1300 series (2013) (1/4): 1301,</span> <s>1302</s><br>
              <span class="Splatoon2">Visalia Orion VII NG CNG buses (2008-09) (7/17): 6270-6271, 6274,
                6285-6287,
                6289,</span> <s>6268-6269, 6273, 6283</s><br>
            </details>
          </div>
          <div class="accordion-redlist">
            <details>
              <summary class="highlighted-vl">Vulnerable</summary>
              Fresno County:
              <span class="Splatoon2">FAX 1100 series (2011-12) (9/9)</span> <s></s><br>
              <span class="Splatoon2">FAX 1200 series (2012) (1/3): 1203,</span> <s>1201-1202</s><br>
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
              Fresno County:
              <span class="Splatoon2">FAX 1300 series (11/11): 1301-1311</span><br>
              <span class="Splatoon2">FAX 2026 CNG buses (11/11)</span> <s></s><br>
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
              Fresno County:
              <span class="Splatoon2">FAX 2200 series (1/7): 2204</span><br>
              <span class="Splatoon2">FAX 2024 hydrogen buses (1/2): 2401</span><br>
              <span class="Splatoon2">FAX 2026 hydrogen buses (0/4)</span><br>
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
                                    alt="VTA 0185 at Palo Alto station serving as route 22, a rare occurrence"
                                    width="25%">
                            </a>
                            <div class="desc">VTA 0185 (2010 Gillig Low Floor HEV) <br>also used on the 4400 series
                            </div>
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
