<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 flex flex-col justify-between">
    <NavbarMenu />
    <main class="max-w-4xl mx-auto p-6 space-y-6">
      <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4" align="center">Sonoma
        and Marin County Bus List</h1>
      <h2 class="text-3xl font-bold text-white pt-2" id="Marin">Marin County</h2>
      <h3 class="text-2xl font-semibold text-indigo-400">Golden Gate Transit and Marin Transit Active Fleet</h3>

      <table>
        <thead>
          <tr>
            <th id="GGT" colspan="2">Golden Gate Transit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                <li><b><mark class="highlighted-nt">Near threatened</mark></b> 57 2012, 2014 MCI D4500CT buses in the
                  900 series</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>32 2012 buses</li>
                  <li>25 2014 buses</li>
                  <li>Rarely runs during the weekends</li>
                </ul>
              </ul>
            </td>
            <td>
              <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                <li>67 2018-19 Gillig Low Floor HEV 40' buses</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>Commuter configuration without a rear door</li>
                  <li>The last 4 buses were leased to Napa VINE in 2025, which were returned back in 2026 after the
                    arrival of electric buses</li>
                  <li>6 buses were transferred to Santa Rosa CityBus as 24918-24923 in October 2025</li>
                </ul>
              </ul>
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th id="Marin-Transit" colspan="2">Marin Transit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Independent</td>
            <td>Golden Gate Transit</td>
          </tr>
          <tr>
            <td>
              <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                <li>7 2015, 2017, 2021 ENC XHF 29' buses</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>301 is a 2015 model</li>
                  <li>2 2017 buses in the 1760 series</li>
                  <li>4 2021 buses in the 2160 series</li>
                  <li>Used for school trippers and West Marin routes</li>
                </ul>
                <li>4 2015 Gillig BRT HEV 29' buses in the 1500 series</li>
                <li>7 2015 Gillig BRT HEV 40' buses, starting at 1505</li>
                <li>10 2017 Gillig BRT HEV 40' buses in the 1700 series</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>Transferred from Golden Gate Transit routes between 2021 and early 2025</li>
                </ul>
                <li>4 2026 Gillig BRT 29' buses in the 2600 series</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>Single door, entered service in mid-July</li>
                </ul>
                <li>10 2019, 2021 Ford E-450 buses</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>Bus 1980 is a 2019 model</li>
                  <li>9 2021 buses in the 2080 series</li>
                </ul>
                <li>4 2018, 2021 ENC XHF 35' buses</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>2 2018 buses in the 1860 series</li>
                  <li>2 2021 buses in the 2170 series</li>
                </ul>
              </ul>
            </td>
            <td>
              <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                <li>11 2020 Gillig BRT HEV 40' buses in the 2000 series</li>
                <li>4 2024 Gillig BRT HEV 35' buses in the 2400 series</li>
                <li>3 2024 Gillig BRT HEV 40' buses starting at 2405</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>These 7 buses have Allison eGen Flex hybrid system</li>
                </ul>
              </ul>
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th colspan="2">Electric buses</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                <li>4 2021 Gillig Low Floor EV 40' buses in the 2100 series</li>
              </ul>
            </td>
            <td>
              <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                <li>2 2018 BYD K9S buses in the 1800 series</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Retired Fleet</h3>
      <p class="text-gray-300 leading-relaxed">This table only shows buses retired after 2021</p>
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
            <td>2010</td>
            <td>901-923</td>
            <td>MCI D4500CT</td>
            <td>Retired in 2021 as surplus buses</td>
          </tr>
          <tr>
            <td>2011, 2013</td>
            <td>100, 105, 108-115</td>
            <td>Ford E-450</td>
            <td>The last bus retired in July 2025</td>
          </tr>
          <tr>
            <td>2012, 2015</td>
            <td>618-620, 1560-1561</td>
            <td>Ford F-550</td>
            <td>Retired in 2021 and 2023 respectively</td>
          </tr>
          <tr>
            <td>2008, 2011-2012</td>
            <td>3060-3069</td>
            <td>ElDorado National XHF 35'</td>
            <td>Retired in 2021 and 2023 respectively</td>
          </tr>
          <tr>
            <td>2010</td>
            <td>3301-3307</td>
            <td>New Flyer DE35LF</td>
            <td>One of only two operators with that type, the other one operates in Puerto Rico, and the last
              production
              units of this type.
              Used for Marin Transit routes, retired in July 2024 by the 2400 series.
            </td>
          </tr>
          <tr>
            <td>2016, 2018</td>
            <td>1680, 1880</td>
            <td>Ford E-450</td>
            <td>Retired in 2026 after the arrival of the 2600s</td>
          </tr>
        </tbody>
      </table>

      <h2 class="text-3xl font-bold text-white pt-2" id="Sonoma">Sonoma County</h2>
      <h3 class="text-2xl font-semibold text-indigo-400" id="Petaluma">Petaluma Transit</h3>
      <p class="text-gray-300 leading-relaxed">Most of the fleet were made up of Gillig BRT vehicles from 2011 to 2016
        (4 35', 4 29', and 1 40'). Three 1998 New Flyer D40LF buses purchased from Santa Rosa CityBus in 2014 were here,
        and only bus 41 was active.<br> Numbers 1045-1048 ex-AC Transit 1200 series that were donated to this agency.
        Buses 49 to 52 were electric buses of 35' and 40' with 2 each.
        <!-- The remaining 2007 model buses were decommissioned in December 2025. -->
      </p>
      <h3 class="text-2xl font-semibold text-indigo-400" id="SCT">Sonoma County Transit</h3>
      <p class="text-gray-300 leading-relaxed">Orion, ENC, and BYD buses make up the fleet. It consists of 14 Orion VII
        NG CNG buses made in 2010 and 2012, 17 ENC Axess CNG 40' from 2014 to 2019, 7 ENC EZ Rider II BRT CNG 32' buses
        made in 2015, 2017, and 2019, and 11 BYD buses of various length made from 2018 to 2026. The last remaining
        Orion V CNG buses retired in late 2024. Two buses (235-236) were ex-Valley Metro 5000 series, the last New Flyer
        C40LFRs delivered in Phoenix in 2013.
      </p>
      <h3 class="text-2xl font-semibold text-indigo-400" id="CityBus">Santa Rosa CityBus</h3>
      <p class="text-gray-300 leading-relaxed">Most of the buses were New Flyer, including 7 2011 New Flyer XDE40 buses.
        Four 2018 ENC Axess BRT 40' were used in service. Two buses were seen on Pantograph as 2024 models, but the
        model is unknown. In October 2025, 6 Gillig hybrid buses were acquired from the Golden Gate Transit
        (24918-24923), replacing the Proterra buses and the last remaining 2008 hybrid. In January 2026, the 2025 Gillig
        electric vehicles entered service, replacing the oldest units.
      </p>
      <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4" id="redlist">Buses to
        Look Out for</h1>
      <b>This section was updated on Tuesday, August 18, 2026.</b> Active and inactive buses were retrieved from <a
        href="https://pantographapp.com">Pantograph</a>, <a href="https://transittrack.net/">Transit Track</a>, and
      <a href="https://transsee.ca">Transsee</a>.<br>
      Fleet information was provided by Wikipedia and <a href="https://cptdb.ca">CPTDB</a>.
      <p class="text-gray-300 leading-relaxed">For Petaluma Transit, all 3 1998 New Flyer D40LF buses were inactive
        since May. Sonoma County Transit Orion V CNG units retired in September 2024. All of the 2010 and some 2012
        units were used for contingency fleet for the Golden Gate Transit.<br> Petaluma Transit's 1998 New Flyer D40LF
        bus 41 was last seen active in May 2026.</p>
      <b><u>Note: Marin Transit buses were not updated as of September 6.</u></b><br>
      <b><u>Note: Petaluma Transit buses were not updated as of September 6. It relies on manual observation and
          when the bus is online.</u></b>
      <div class="accordion-redlist">
        <details>
          <summary class="highlighted-ex">Extinct</summary>
          Sonoma County:
          <span class="Splatoon2">PT 1998 buses (0/3)</span><br>
          Marin County:
          <span class="Splatoon2">MT bus 301: No</span><br>
        </details>
        <details>
          <summary class="highlighted-cr">Critically endangered</summary>
          <span class="Splatoon2">PT 2007 buses (2/4): 33, 36</span> <s></s><br>
        </details>
      </div>
      <div class="accordion-redlist">
        <details>
          <summary class="highlighted-en">Endangered</summary>
          Marin County:
          <span class="Splatoon2">MT 1860 series (2018) (1/2): 1860</span><br>
          Sonoma County:
          <span class="Splatoon2">SR 24100 series (2011) (5/7): 24113-24114, 24116, 24118-24119,</span> <s>24115</s><br>
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
          Marin County:
          <span class="Splatoon2">GGT 900 series (2010, 2012, 2014) (33/80): 937-944, 956-980</span> <s></s><br>
          Sonoma County:
          <span class="Splatoon2">PT 2011 buses (4/4)</span> <s></s><br>
          <span class="Splatoon2">SCT OBI VII NG CNG (2010) (7/10): 204-206, 208-209, 211, 213</span>
          <s></s><br>
          <span class="Splatoon2">SCT OBI VII EPA10 CNG (2012) (3/4): 214-216,</span> <s>217</s><br>
        </details>
      </div>
      <div class="accordion-redlist">
        <details>
          <summary class="highlighted-lc">Least concern</summary>
          Marin County:
          <span class="Splatoon2">MT 1500 series (2015) (4/4)</span><br>
          <span class="Splatoon2">MT 2600 series (2026) (4/4)</span><br>
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
          Sonoma County:
          <span class="Splatoon2">SCT 2026 40' buses (2/7): 512-513</span><br>
          <span class="Splatoon2">SR 24610 series (2026) (0/6)</span><br>
        </details>
      </div>

      <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4" id="gallery">Gallery
      </h1>
      <p class="text-gray-300 leading-relaxed">This section is under construction</p>
      <div class="responsive">
        <div class="gallery">
          <a target="_blank" :href="Marin2101">
            <img :src="Marin2101" alt="Marin Transit 2101" width="25%">
          </a>
          <div class="desc">Marin Transit 2101 (Gillig Low Floor Plus 40') <br>on June 23</div>

        </div>
      </div>
    </main>
    <FooterMenu />
  </div>
</template>

<script setup>
import { useFancybox } from '@/composables/useFancybox';
import { RouterLink } from 'vue-router';
import NavbarMenu from '@/components/navbarMenu.vue';
import FooterMenu from '@/components/footerMenu.vue';

useFancybox();

import Marin2101 from '@/assets/images/2024/PXL_20240624_010452758.jpg';
</script>
