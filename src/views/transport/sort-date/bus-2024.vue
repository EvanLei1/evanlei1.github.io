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
            <li><a href="#jan11">January 11</a></li>
            <li><a href="#apr20section">April 20</a></li>
            <li><a href="#jun6">June 6</a></li>
            <li><a href="#jun24">June 24</a></li>
            <li><a href="#jul31">July 31</a></li>

          </ul>
        </div>
      </aside>

      <main id="East Bay">
        <section>
          <h1>Buses photographed in 2024</h1>
          <p>Buses that are photographed in 2024 are shown under the list, separated by dates, transit operators, and
            fleet numbers sorted in order:</p>
          <hr>
          <h2 id="jan11">January 11</h2>
          <a data-fancybox :data-src="jan11" data-caption="Hello world">
            <img :src="jan11" width="200" height="150" alt="" />
          </a>
          <p><strong>Transit Agency:</strong> SamTrans</p>
          <p><strong>Manufacturer:</strong> Gillig</p>
          <p><strong>Year made:</strong> 2009</p>
          <p><strong>Bus type:</strong> BRT 40'</p>
          <p><strong>Fleet number:</strong> 400</p>
          <p><strong>Route:</strong> 112 to Colma BART</p>
          <p><strong>Location:</strong> Serramonte Mall</p>
          <hr>
          <h2 id="apr20section">April 20</h2>
          <a data-fancybox="apr20" :data-src="apr20a"
            data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code">
            <img :src="apr20a" width="200" height="150" alt="BART A cab 1212 at MacArthur" />
          </a>

          <a data-fancybox="apr20" :data-src="apr20b">
            <img :src="apr20b" width="200" height="150"
              alt="Image 1 of 2 of the last legacy train leaving Fremont Station at 3:35 pm" />
          </a>

          <a data-fancybox="apr20" :data-src="apr20c">
            <img :src="apr20c" width="200" height="150"
              alt="Image 2 of 2 of the last legacy train leaving Fremont Station at 3:35 pm. The new BART train is on the left." />
          </a>
          <a data-fancybox="apr20" :data-src="apr20d">
            <img :src="apr20d" width="200" height="150"
              alt="A man holding a final legacy train poster after the second-to-last train reached Fremont station" />
          </a>
          <h3>Final BART legacy train run</h3>
          <p>On April 20, 2024, Bay Area Rapid Transit held a special event commemorating the final three train sets
            made
            by Rohr between 1971 and 1979, which include a special route from Oakland's MacArthur
            and Fremont stations. It was a unique experience for me, as I rode the second train. The second final train
            arrived at 3:09 pm, and the final train arrived at 3:25 pm. The final train left Fremont station at 3:35 pm.
          </p>
          <p>I was in car 1584 on the second set. The first set was reserved because it was a five-car formation, while
            the last two sets were available for the general public. In MacArthur, special events were held, like the
            speeches
            and the usage of the front end of a preserved BART A cab and train controls. I did not take a selfie at this
            event. After this event, a few legacy trains were preserved.</p>
          <h4>Train sets involved</h4>
          <ol>
            <li>1259 - 1738 - 1607 - 1897 - 1212</li>
            <li>1269-????-1580-1515-1890-1834-1584-1759-1760-1203</li>
            <li>Final legacy train: 1241-1869-1512-1596-1857-1501-1721-????-1587-1260</li>
          </ol>
          <hr>
          <h2 id="jun6">June 6</h2>
          <a data-fancybox="june6" :data-src="jun6a"
            data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code">
            <img :src="jun6a" width="200" height="150"
              alt="Right side view towards Marin County Airport from the bus on U.S. 101 in Novato" />
          </a>

          <a data-fancybox="june6" :data-src="jun6b">
            <img :src="jun6b" width="200" height="150"
              alt="Golden Gate Transit and Sonoma County Transit buses at Santa Rosa Transit Mall" />
          </a>

          <a data-fancybox="june6" :data-src="jun6c">
            <img :src="jun6c" width="200" height="150" alt="Back of the Santa Rosa CityBus Proterra ZX5" />
          </a>
          <a data-fancybox="june6" :data-src="jun6d">
            <img :src="jun6d" width="200" height="150" alt="SMART train in San Rafael" />
          </a>
          <h3>Golden Gate Transit Route 172</h3>
          <p>On June 6, 2024, I took the Golden Gate Transit bus from SF to Santa Rosa from 2:16 to 4:26 pm, with
            traffic
            increasing the travel time on three occasions,
            primarily between Novato San Marin Dr and Petaluma Blvd. Then, I took the CityBus to Coddingtown Mall,
            before
            taking the Sonoma-Marin Area Rail Transit to San Rafael. I took pics of
            Marin Transit buses before I return to SF. Golden Gate Transit Route 172 skips the entire Marin County,
            which
            runs during weekday peak hours in one direction in the morning and evening.</p>
          <p>A few images of Marin County Airport (Gnoss Field) were taken from the GGT bus on U.S. 101 during heavy
            traffic at 3:30 pm. Later on, when I rode the SMART train, I retook photos
            of the airport. On June 23, I took pictures of San Rafael Airport from the hill, which included a plane
            landing. It is one of two airports in Marin County, all with a single runway, and were locally controlled.
          </p>
          <hr>
          <h2 id="jun24">June 24</h2>
          <a data-fancybox :data-src="jun24" data-caption="Hello world">
            <img :src="jun24" width="200" height="150" alt="" />
          </a>
          <p><strong>Transit Agency:</strong> Marin Transit</p>
          <p><strong>Manufacturer:</strong> Gillig</p>
          <p><strong>Year made:</strong> 2021</p>
          <p><strong>Bus type:</strong> Low Floor Plus EV 40'</p>
          <p><strong>Fleet number:</strong> 2101</p>
          <p><strong>Route:</strong> 49</p>
          <p><strong>Location:</strong> San Rafael Transit Center</p>
          <hr>
          <h2 id="jul31">July 31</h2>
          <a data-fancybox :data-src="jul31a" data-caption="Hello world">
            <img :src="jul31a" width="" height="400" alt="" />
          </a>
          <p><strong>Transit Agency:</strong> AC Transit</p>
          <p><strong>Manufacturer:</strong> New Flyer</p>
          <p><strong>Year made:</strong> 2019</p>
          <p><strong>Bus type:</strong> XHE40</p>
          <p><strong>Fleet number:</strong> 7017</p>
          <p><strong>Route:</strong> E to Caldecott Lane</p>
          <p><strong>Location:</strong> San Francisco Transit Center</p>
          <a data-fancybox :data-src="jul31b" data-caption="Hello world">
            <img :src="jul31b" width="500" height="" alt="" />
          </a>
          <p><strong>Transit Agency:</strong> Western Contra Costa Transit Authority</p>
          <p><strong>Manufacturer:</strong> MCI</p>
          <p><strong>Year made:</strong> 2008</p>
          <p><strong>Bus type:</strong> D4500CT</p>
          <p><strong>Fleet number:</strong> 201</p>
          <p><strong>Route:</strong> Lynx</p>
          <p><strong>Location:</strong> San Francisco Transit Center</p>

        </section>
      </main>
      <footer>
        <div>
          <!-- <div align='center'><a href='https://www.free-website-hit-counter.com'><img src='https://www.free-website-hit-counter.com/c.php?d=6&id=172148&s=39' border='0' alt='Free Website Hit Counter'></a><br / ><small><a href='https://www.free-website-hit-counter.com' title="Free Website Hit Counter">Free website hit counter</a></small></div> -->
          <p id="copyright" align="center">Copyright &copy; 2026 Evan Lei.</p>

          <div id="footer" align="center">
            | <RouterLink to="/">Home</RouterLink>
            | <RouterLink to="/termsPage">Terms</RouterLink>
            | <RouterLink to="/aboutPage">About</RouterLink>
            | <RouterLink to="/socialPage">Contact</RouterLink>
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
import { useFancybox } from '@/composables/useFancybox';
import { RouterLink } from 'vue-router';


import jan11 from "@/assets/images/2024/PXL_20240111_194443143.jpg";
import apr20a from "@/assets/images/2024/PXL_20240420_203106154.jpg";
import apr20b from "@/assets/images/2024/PXL_20240420_223526765.jpg";
import apr20c from "@/assets/images/2024/PXL_20240420_223556597.jpg";
import apr20d from "@/assets/images/2024/PXL_20240420_221109823.jpg";
import jun6a from "@/assets/images/2024/PXL_20240606_223422460.jpg";
import jun6b from "@/assets/images/2024/PXL_20240607_014502098.jpg";
import jun6c from "@/assets/images/2024/PXL_20240606_233425557.jpg";
import jun6d from "@/assets/images/2024/PXL_20240606_232644019.jpg";
import jun24 from "@/assets/images/2024/PXL_20240624_010452758.jpg";
import jul31a from "@/assets/images/2024/PXL_20240801_003313969.jpg";
import jul31b from "@/assets/images/2024/PXL_20240801_003611967.jpg";

useFancybox();
</script>
