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
            <li><a href="#Muni">San Francisco Muni</a></li>
            <li><a href="#SMCTD">San Mateo County Transit District</a></li>
            <li><a href="#SCC">Santa Clara County</a></li>
            <li><a href="#VTA">Santa Clara Valley Transportation Authority</a></li>
            <li><a href="#redlist">Buses to Look Out for</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>
      </aside>

      <main>
        <section>
          <h1 align="center">San Francisco Peninsula Bus List</h1>
          <h2 id="Muni">San Francisco Muni</h2>
          <h3>Active Fleet</h3>
          <table>
            <thead>
            <tr>
              <th colspan="2">32- and 40-foot motor buses</th>
            </tr>
            </thead><tbody>
            <tr>
              <td>Woods Division</td>
              <td>Kirkland Division</td>
            </tr>
            <tr>
              <td>
                <ul>
                  <li><b><mark class="highlighted-cr">Critically endangered</mark></b> 30 2007 Orion VII HEV 07.503
                    buses
                    in the 8500 series</li>
                  <ul>
                    <li>One unit remain in service, replaced by ENC units</li>
                    <li>Last remaining original Orion VII buses in California</li>
                  </ul>
                </ul>
                <ul>
                  <li><b><mark class="highlighted-nt">Near threatened</mark></b> 112 2013 New Flyer XDE40 buses</li>
                  <ul>
                    <li>62 in 8600 series</li>
                    <ul>
                      <li>First 23 buses have Allison transmission, the rest have BAE Systems</li>
                    </ul>
                    <li>50 in 8700 series</li>
                    <ul>
                      <li>Different seating layout</li>
                    </ul>
                    <li>TwinVision Chroma IV front and side signs</li>
                  </ul>
                </ul>
                <ul>
                  <li>102 2016-17 New Flyer XDE40 buses in the 8800 series</li>
                  <ul>
                    <li>First 24 buses have BAE Systems transmission, the rest have Allison</li>
                    <li>First 48 units have black numbering, the rest have white numbering</li>
                    <li>TwinVision Chroma I front sign</li>
                    <li>First 48 buses were refurbished in 2025</li>
                  </ul>
                </ul>
                <ul>
                  <li>30 2021-22 ENC E-Z Rider II BRT HEV 32' buses in the 8500 series, starting at 8531</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>68 2018-19 New Flyer XDE40 buses in the 8900 series, starting at 8902</li>
                  <ul>
                    <li>Uses a BAE Systems transmission with extended range</li>
                  </ul>
                </ul>
              </td>
            </tr>
            <tr>
              <td colspan="2" align="center">
                MIXED DIVISION
                <ul>
                  <li>30 2017 New Flyer XDE40 buses in the 8750 series</li>
                  <ul>
                    <li>The first 8 buses were assigned to Woods, the rest to Kirkland</li>
                    <li>Uses BAE Systems transmission</li>
                  </ul>
                </ul>
              </td>
            </tr>
            </tbody><thead>
            <tr>
              <th colspan="2">60-foot motor buses</th>
            </tr>
            </thead><tbody>
            <tr>
              <td>Islais Creek Division</td>
              <td>Flynn Division</td>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>80 2015-16 New Flyer XDE60 buses in the 6500 series</li>
                  <ul>
                    <li>55 2015 units</li>
                    <li>25 2016 units starting at 6560</li>
                    <li>Refurbished in 2023-24</li>
                  </ul>
                </ul>
              </td>
              <td>
                <ul>
                  <li>31 2015-17 New Flyer XDE60 buses in the 6700 series</li>
                  <ul>
                    <li>Uses BAE Systems transmission</li>
                    <li>Refurbished in 2023-24</li>
                  </ul>
                  <li>69 2017-18 New Flyer XDE60 buses in the 6600 series, starting at 6629</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colspan="2" align="center">
                MIXED DIVISION
                <ul>
                  <li>44 2016-17 New Flyer XDE60 buses in the 6500 series, starting at 6585</li>
                  <ul>
                    <li>The first 25 buses were assigned to Islais Creek, the rest to Flynn</li>
                    <li>Refurbished in 2023-24</li>
                  </ul>
                </ul>
              </td>
            </tr>
            </tbody><thead>
            <tr>
              <th colspan="2">Electric trolleybuses</th>
            </tr>
            </thead><tbody>
            <tr>
              <td>40-foot</td>
              <td>60-foot</td>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>185 2017-19 New Flyer XT40 buses in the 5700 series</li>
                  <ul>
                    <li>First 53 units were assigned to Potrero, the remainder to Presidio</li>
                  </ul>
                </ul>
              </td>
              <td>
                <ul>
                  <li>93 2014-15, 2017-18 New Flyer XT60 buses</li>
                  <ul>
                    <li>60 2014-15 units</li>
                    <li>33 2017-18 units starting at 7261</li>
                    <li>Exclusively assigned to Potrero Division</li>
                  </ul>
                </ul>
              </td>
            </tr>
            </tbody><thead>
            <tr>
              <th colspan="2">Electric buses</th>
            </tr>
            </thead><tbody>
            <tr>
              <td colspan="2">All electric buses are assigned to Woods Division.
                <ul>
                  <li>3 2021 New Flyer XE40 buses, starting at the 5000 series</li>
                  <li>3 2021 BYD K9MD buses</li>
                  <ul>
                    <li>The first bus do not have a rear window, while the other two have one</li>
                  </ul>
                  <li>3 2021 Proterra ZX5 40' buses</li>
                  <li>3 2022 Nova Bus LFSe+ buses</li>
                  <ul>
                    <li>The only 40' buses of that model in California</li>
                  </ul>
                </ul>
              </td>
            </tr>
            </tbody>
          </table>

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
            </thead><tbody>
            <tr>
              <td>2007</td>
              <td>8501-8530</td>
              <td>Orion VII HEV 07.503</td>
              <td>Retired in October 2025</td>
            </tr>
            </tbody>
          </table>

          <h2 id="SMCTD">San Mateo County Transit District</h2>
          <h3>Active Fleet</h3>
          <table>
            <thead>
            <tr>
              <th colspan="2">29- and 35-foot motor buses</th>
            </tr>
            </thead><tbody>
            <tr>
              <td>29-foot</td>
              <td>35-foot</td>
            </tr>
            <tr>
              <td>
                <ul>
                  <li><b><mark class="highlighted-lc">Least concern</mark></b> 16 2013-14 Gillig Low Floor 29' buses
                  </li>
                  <ul>
                    <li>4 in 2910 series</li>
                    <li>12 in 2950 series</li>
                  </ul>
                </ul>
              </td>
              <td>
                <ul>
                  <li><b><mark class="highlighted-nt">Near threatened</mark></b> 40 2010 Gillig BRT 35' buses in the 500
                    series</li>
                  <ul>
                    <li>The first 28 were assigned to itself, while the remainder was contracted</li>
                  </ul>
                </ul>
              </td>
            </tr>
            </tbody><thead>
            <tr>
              <th colspan="2">40-foot motor buses</th>
            </tr>
            </thead><tbody>
            <tr>
              <td colspan="2">
                <ul>
                  <li><b><mark class="highlighted-nt">Near threatened</mark></b> 91 2009-10 Gillig BRT 40' buses in the
                    400 series</li>
                  <ul>
                    <li>The first 29 were assigned to itself, while the remainder was contracted with some outliers</li>
                  </ul>
                </ul>
                <ul>
                  <li><b><mark class="highlighted-lc">Least concern</mark></b> 25 2013 Gillig BRT HEV 40' buses in the
                    700
                    series</li>
                  <li><b><mark class="highlighted-lc">Least concern</mark></b> 21 2014 Gillig BRT 40' buses in the 900
                    series</li>
                  <li>50 2017 Gillig BRT 40' buses in the 600 series</li>
                </ul>
              </td>
            </tr>
            </tbody><thead>
            <tr>
              <th colspan="2">60-foot motor buses</th>
            </tr>
            </thead><tbody>
            <tr>
              <td colspan="2">
                <ul>
                  <li>55 2019 New Flyer XD60 buses in the 800 series</li>
                </ul>
              </td>
            </tr>
            </tbody><thead>
            <tr>
              <th colspan="2">Electric buses</th>
            </tr>
            </thead><tbody>
            <tr>
              <td colspan="2">
                <ul>
                  <li>17 2022-23 New Flyer XE40 buses in the 1000 series</li>
                  <li>10 2023 New Flyer XHE40 buses in the 3000 series</li>
                  <li>20 2024 Gillig Low Floor Plus EV 40' buses in the 5000 series</li>
                </ul>
              </td>
            </tr>
            </tbody>
          </table>

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
            </thead><tbody>
            <tr>
              <td>2009</td>
              <td>2900-2903</td>
              <td>Gillig Low Floor 29'</td>
              <td>Retired in 2021</td>
            </tr>
            <tr>
              <td>2018, 2020</td>
              <td>725-734</td>
              <td>Proterra Catalyst BE40</td>
              <td>Retired in 2021 because of issues on the bus</td>
            </tr>
            </tbody>
          </table>

          <h1 id="SCC">Santa Clara County</h1>
          <h2 id="VTA">Santa Clara Valley Transportation Authority</h2>
          <p>There is only one transit agency for the entire Silicon Valley. Free shuttles serving Mountain View and
            Palo
            Alto do not count.</p>
          <h2>Active Fleet</h2>
          <h4>Old buses</h4>
          <ul>
            <li><b><mark class="highlighted-cr">Critically endangered</mark></b> 127 2001-02 Gillig Low Floor 40' buses</li>
            <ul>
              <li>61 buses in the 2010 series</li>
              <li>56 buses in the 2200 series</li>
              <li>3 units remain, of which 1 were in the
                2000 series. The 2200 series buses will retire in the spring. Most buses were training units. The late
                2001 units were possibly
                retired on March 27, and regular service in December. The 2000s ended regular service on March 31.</li>
            </ul>
            <li><b><mark class="highlighted-nt">Near threatened</mark></b> 70 2010-11 Gillig Low Floor HEV 40' buses in the 0130 series</li>
            <ul>
              <li>First hybrid buses for VTA with Allison hybrid transmission and plug doors. Some units were used on route 60 airport route.</li>
            </ul>
            <li><b><mark class="highlighted-lc">Active</mark></b> 40 2012, 2014 Gillig Low Floor HEV buses</li>
            <ul><li>20 2012 buses in the 0200 series</li>
            <li>20 2014 buses in the 4200 series</li>
            <li>Express buses with suburban configuration and one door. These buses were usually operated on local and rapid routes. Buses 4201-4210 were sold to Santa Cruz Metro.</li></ul>
            <li><b><mark class="highlighted-lc">Active</mark></b> 38 2014 Gillig BRT HEV 29' buses in the 4100 series</li>
            <ul><li>Single door units, Allison hybrid system</li></ul>
            <li><b><mark class="highlighted-lc">Active</mark></b> 29 2014 New Flyer XDE60 buses in the 4300 series</li>
            <ul><li>Mostly used for route 522</li></ul>
            <li><b><mark class="highlighted-lc">Active</mark></b> 15 2014 Gillig Low Floor HEV 40' buses in the 4400 series</li>
            <ul><li>Uses BAE hybrid system</li></ul>
            </ul>

          <h4>Original buses</h4>
          <ul>
            <li>10 Gillig Low Floor HEV 40' buses in the 6200 series</li>
            <ul>
              <li>Express buses with suburban configuration and one door. They have a different livery.</li>
            </ul>
            <li>34 2016-17 Gillig Low Floor HEV 40' buses in the 6400 series</li>
            <ul>
              <li>These units have an extended cap</li>
            </ul>
            <li>56 2017-18 Gillig Low Floor Plus HEV 40' buses in the 7400 series</li>
            <li>47 2018 New Flyer XDE60 buses in the 8300 series</li>
            <li>131 2023-25 Gillig Low Floor Plus HEV 40' buses</li>
            <ul>
              <li>92 2023-24 buses in the 3400 series</li>
              <li>4 2025 buses starting at 3493</li>
              <li>35 2025-26 buses in the 5400 series</li>
              <ul><li>Haven't entered service yet</li></ul>
              <li>Uses an Allison eGen Flex hybrid system</li>
            </ul>
          </ul>

          <h4>Electric buses</h4>
          <ul>
            <li><b><mark class="highlighted-ex">Inactive</mark></b> 10 2017, 2019 Proterra Catalyst BE40 buses</li>
            <ul><li>5 2017 buses in the 7500 series</li>
            <li>5 2019 buses in the 9500 series</li>
            <li>All electric buses were inactive because bus 9505 caught fire in 2023</li></ul>
            <li>35 2025-26 Gillig Low Floor Plus EV 40' buses in the 5500 series</li>
            <ul><li>Haven't entered service yet</li></ul>
          </ul>

          <h2>Retired Fleet</h2>
          <p>This table only shows buses retired after 2021</p>
          <table>
            <thead>
            <tr>
              <th>Year</th>
              <th>Fleet numbers</th>
              <th>Model</th>
              <th>Notes</th>
            </tr>
            </thead><tbody>
            <tr>
              <td>2000-2001</td>
              <td>1001-1052</td>
              <td>Gillig Low Floor 40'</td>
              <td>Retired on April 1, 2026 and were replaced by the 3400 series buses</td>
            </tr>
            <tr>
              <td>2002</td>
              <td>2101-2123</td>
              <td>Gillig Low Floor 35'</td>
              <td>Retired on December 4, 2024 and were replaced by the 3400 series buses</td>
            </tr>
            </tbody>
          </table>

          <h1 id="redlist">Buses to Look Out for</h1>
          <b>This section was updated on Wednesday, June 24, 2026.</b> Active and inactive buses were retrieved from <a
            href="https://pantographapp.com">Pantograph</a> and <a href="https://transsee.ca">Transsee</a>.<br>
          Fleet information was provided by Wikipedia and <a href="https://cptdb.ca">CPTDB</a>.
          <p>The 8500 series (Orion VII 32') were replaced by 30 ENC E-Z Rider II BRT units. It is unclear when the 94
            hybrid and 18 electric (12 40' and 6 60') buses will arrive that will
            replace 112 buses in the 8600 and 8700 series. All ENC buses were delivered and in service. Bus 8541 entered
            service on January 2, 2025, 8546 on January 20, 2025, 8550 on February 26, 8556 on April 30, and 8532 on
            July
            15.<br>
            The last remaining Orion VII (8528) ran on 37 Corbett on October 21, 2025.<br>
            Last active LRV3 train: car 1550 running on J Church on the night of October 11-12. It retired on November
            12
            after a farewell trip.</p>
          <p>The 1000, 2000, 2100, and 2200 series buses will be replaced by the new Gillig Low Floor Plus HEV 40' with
            Allison eGen Flex hybrid system as 3401-3492.
            All 96 new buses were delivered and entered service. Out of 192 old buses, 3 were still in service.
            <b>Note:</b> Training buses were labeled in black, while active buses were labeled in red.
          </p>
          <div class="accordion-redlist">
            <details>
              <summary class="highlighted-ex">Extinct</summary>
            </details>
            <details>
              <summary class="highlighted-cr">Critically endangered</summary>
              Santa Clara County:
              <span class="Splatoon2">2000 series (2001) (1/61): 2060,</span> <s>2018, 2042, 2047, 2050, 2055,
                2057-2058, 2061, 2070</s> Relegated to training buses on March 31<br>
              <a target="_blank" :href="VTA2017">
                <img :src="VTA2017"
                  alt="VTA 2017 at Milpitas station on October 21" width="25%">
              </a><br>
              <div class="desc">VTA 2017 (2001 Gillig Low Floor) <br>on October 21, 2023</div>
              <span class="Splatoon2">2200 series (2002) (2/56):
                <span style="color:red">2224</span>, 2249,</span> <s></s> Expected to retire within 1 month<br>
              <span class="Splatoon2">5400 series (2026) (21/35): 5401-5421</span><br>
            </details>
          </div>
          <div class="accordion-redlist">
            <details>
              <summary class="highlighted-en">Endangered</summary>
              <span class="Splatoon2">400 series (2009-10) (64/91): 400-406, 408, 410-428, 430-433, 435-461, 463-467,
                469,</span> <s>407, 468</s><br>
              <span class="Splatoon2">500 series (2010) (31/40): 500-507, 509-511, 514-517, 519-525, 528-529, 532-536,
                538-539,</span> <s>508, 512-513, 527, 530-531, 537</s><br>
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
              San Francisco:
              <span class="Splatoon2">8000 series (2025) (1/42): 8001-8003, 8006</span><br>

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
              San Francisco:
              <span class="Splatoon2">2021 New Flyer electric buses (0/3)</span><br>
              <span class="Splatoon2">2021 BYD electric buses (1/3): 5006,</span> <s>5005</s><br>
              <span class="Splatoon2">2021 Proterra electric buses (0/3)</span><br>
              <span class="Splatoon2">2022 Nova Bus electric buses (2/3): 5010, 5012</span> <s></s><br>
              San Mateo County:
              <span class="Splatoon2">1000 series (2022-23) (11/17): 1000-1001, 1003, 1005, 1008-1011, 1013,
                1015-1016,</span> <s>1004, 1012, 1014</s><br>
              <span class="Splatoon2">3000 series (2023, 2025) (9/118): 3000-3006, 3008-3009,</span> <s>3007</s><br>
              Santa Clara County:
              <span class="Splatoon2">5500 series (2025) (1/35): 5501</span><br>
            </details>
          </div>

          <h1 id="gallery">Gallery</h1>
          <p>This section is under construction</p>
          <div class="responsive">
            <div class="gallery">
              <a target="_blank" :href="VTA2017">
                <img :src="VTA2017"
                  alt="VTA 2017 at Milpitas station on October 21" width="25%">
              </a>
              <div class="desc">VTA 2017 (2001 Gillig Low Floor) <br>on October 21, 2023</div>
              <a target="_blank" :href="VTA0185">
                <img :src="VTA0185"
                  alt="VTA 0185 at Palo Alto station serving as route 22, a rare occurrence" width="25%">
              </a>
              <div class="desc">VTA 0185 (2010 Gillig Low Floor HEV) <br>also used on the 4400 series</div>
            </div>
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

import VTA2017 from '@/assets/images/2023/PXL_20231022_024853279.jpg'
import VTA0185 from '@/assets/images/2023/PXL_20231021_213224815.jpg'


</script>
