<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 flex flex-col justify-between">
    <NavbarMenu />
    <main class="max-w-4xl mx-auto p-6 space-y-6">
      <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4" align="center">Greater
        Los Angeles Area Bus List</h1>
      <h2 class="text-3xl font-bold text-white pt-4" id="ventura">Ventura County</h2>
      <h3 class="text-2xl font-semibold text-indigo-400" id="gc">Gold Coast Transit</h3>
      <p>Serves Ventura County, with 17 NABI 35-LFW buses and 39 Gillig Low Floor CNG buses. The C40LFRs
        were retired
        on December 16, 2025.</p>
      <h3 class="text-2xl font-semibold text-indigo-400" id="thousandOaks">Thousand Oaks Transit</h3>
      <p>Serves the city of Thousand Oaks. One of a few Orion VII NG buses left in service, and the only
        one in
        Southern California. A few Gillig
        BRT CNG units were used around the city.
      </p>
      <h3 class="text-2xl font-semibold text-indigo-400" id="SimiValley">Simi Valley Transit</h3>
      <p>The fleet is entirely based on New Flyer Xcelsior natural gas buses, with 11 in total, including
        3 40' buses
        and 8 35' ones.
      </p>
      <h3 class="text-2xl font-semibold text-indigo-400" id="moorpark">Moorpark City Transit</h3>
      <p>Operated by Thousand Oaks Transit that serves Moorpark City, there were a few ElDorado National
        E-Z Rider II
        CNG buses.
      </p>
      <h3 class="text-2xl font-semibold text-indigo-400" id="vctc">Ventura County Transportation Commission</h3>
      <p>Intercity service around the county including Santa Barbara. It uses mostly MCI buses with a few
        Volvo 9700
        buses. An order of 5 BYD C10M was not delivered yet.
      </p>

      <h2 class="text-3xl font-bold text-white pt-4" id="sb">San Bernardino County</h2>
      <h3 class="text-2xl font-semibold text-indigo-400" id="omnitrans">Omnitrans</h3>
      <p>All of the buses were made by New Flyer. There were a lot of 2009 New Flyer C40LFRs in the 1200 series and
        a huge set of XN40s. Four electric and hydrogen electric buses were used in 2021 and 2024 respectively. The
        sbX service uses 15 2012 and 2017 New Flyer XN60 buses with 5 doors while the purple line has 18 2024 New
        Flyer XE40 buses with 3 doors.
      </p>
      <h3 class="text-2xl font-semibold text-indigo-400" id="mbt">Morongo Basin Transit Authority</h3>
      <p>Mostly using Ford buses with a few high floor ElDorado National buses and two Gillig Low Floor
        CNG buses.
      </p>
      <h3 class="text-2xl font-semibold text-indigo-400" id="vvta">Victor Valley Transit Authority</h3>
      <p>Serves the area between Apple Valley and Barstow, with intercity service to San Bernardino and Fort Irwin
        NTC. Most of the buses were made by ENC except for New Flyer electric buses and 5 MCI buses.
      </p>

      <h2 class="text-3xl font-bold text-white pt-4" id="riverside">Riveside County</h2>
      <h3 class="text-2xl font-semibold text-indigo-400" id="riversideTA">Riverside Transit Agency</h3>
      <h4 class="text-xl font-medium text-gray-200">Active Fleet</h4>

      <h3 class="text-2xl font-semibold text-indigo-400" id="sunLine">SunLine Transit Agency</h3>
      <p>Serves Palm Springs, Indio, and Cathedral City. Most of these buses were New Flyer XHE40 or XN40 with some
        BYD buses, MCI buses, and ElDorado National Axess FC bus. There were 3 MCI buses for San Bernardino service.
        15 ex-RTA Gillig buses were transferred to here. There were a few New Flyer C40LFs in this area.
      </p>

      <h2 class="text-3xl font-bold text-white pt-4" id="oc">Orange County</h2>
      <h3 class="text-2xl font-semibold text-indigo-400" id="octa">Orange County Transportation Agency</h3>

      <h3 class="text-2xl font-semibold text-indigo-400" id="art">Anaheim Resort Transportation</h3>
      <p>Serves the city of Anaheim. Most of the buses were BYD electric buses except for 3 ElDorado
        National buses. This agency was discontinued on March 31, 2026.
      </p>

      <h2 class="text-3xl font-bold text-white pt-4" id="sd">San Diego County</h2>
      <h3 class="text-2xl font-semibold text-indigo-400" id="nctd">North County Transit District</h3>
      <p>The entire fleet was based on New Flyer buses except for ex-MTS 3000 series Ford buses, used for the
        Coaster Connection routes. Four 2000 New Flyer D40LF buses remain in service, along with 2007 C40LF buses.
        Most of the units after 2012 were XN40s with the exception of 20 2019-20 XN35s in the 1900 series and 12
        2024 XHE40 buses.
      </p>
      <h3 class="text-2xl font-semibold text-indigo-400" id="sdmts">San Diego Metropolitan Transit System</h3>
      <h4 class="text-xl font-medium text-gray-200">Active Fleet</h4>
      <table>
        <thead>
          <tr>
            <th colspan="4">40- and 45-foot motor buses</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Imperial Avenue Division</td>
            <td>Kearny Mesa Division</td>
            <td>South Bay</td>
            <td>East County</td>
          </tr>
          <tr>
            <td>
              <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                <li><b><mark class="highlighted-nt">Near threatened</mark></b> 26 2013 Gillig Low
                  Floor CNG 40' buses in
                  the 800 series</li>
                <li>38 2025 New Flyer XN40 buses in the 300 series</li>
              </ul>
            </td>
            <td>
              <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                <li>12 2014 Gillig Low Floor CNG 40' buses in the 900 series</li>
                <li>23 2015 Gillig Low Floor CNG 40' buses in the 200 series</li>
              </ul>
            </td>
            <td>
              <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                <li><b><mark class="highlighted-cr">Critically endangered</mark></b> 27 2011-12 New Flyer C40LFR buses
                  in the 2900 series</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>22 2012 units, 4 2011 units (623-626) renumbered from Imperial Avenue
                    transfer as 2923-2927, which
                    were retired on January 22</li>
                </ul>
                <li>38 2014-15 Gillig Low Floor CNG 40' buses in the 2400 series</li>
                <li>14 2015 Gillig Low Floor CNG 40' buses in the 2000 series</li>
                <li>36 2017 Gillig Low Floor CNG 40' buses in the 2100 series</li>
                <li>7 2018 Gillig Low Floor CNG 40' buses in the 2780 series</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>Used on Route 992 as airport bus configuration</li>
                </ul>
                <li>37 2021 Gillig Low Floor CNG 40' buses in the 900 series</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>32 in 2600 series</li>
                  <li>5 in 2790 series</li>
                </ul>
                <li>38 2022 Gillig Low Floor CNG 40' buses in the 2200 series</li>
              </ul>
            </td>
            <td>
              <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                <li>13 2015 Gillig Low Floor CNG 40' buses in the 8200 series</li>
                <li>38 2016 Gillig Low Floor CNG 40' buses in the 8300 series</li>
                <li>6 2019 Gillig Low Floor CNG 40' buses in the 8350 series</li>
                <li>24 2020 MCI D4500CT CNG buses in the 8530 series</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>Suburban configuration that ran during weekdays in Rapid Express routes</li>
                </ul>
              </ul>
            </td>
          </tr>
          <tr>
            <td colspan="4" align="center">
              MIXED DIVISION
              <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                <li>24 2013 Gillig Low Floor CNG 40' buses in the 2300 series</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>The first 6 units were assigned to East County while the rest were assigned
                    to South Bay</li>
                </ul>
                <li>38 2020-21 Gillig Low Floor CNG 40' buses in the 1700 series</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>The first 15 buses were assigned to Imperial Avenue, the rest to Kearny Mesa
                  </li>
                  <li>The first 22 units were made in 2020, the rest were made in 2021</li>
                </ul>
              </ul>
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th colspan="3">60-foot motor buses</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Imperial Avenue Division</td>
            <td>Kearny Mesa Division</td>
            <td>South Bay</td>
          </tr>
          <tr>
            <td>
              <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                <li>18 2013 New Flyer XN60 buses in the 1200 series</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>Used for Rapid Route 215</li>
                </ul>
                <li>26 2021 New Flyer XN60 buses in the 1800 series</li>
              </ul>
            </td>
            <td>
              <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                <li>13 2015 New Flyer XN60 buses in the 1300 series</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>Used in Routes 7 and 10</li>
                </ul>
                <li>29 2023-24 New Flyer XN60 buses in the 1900 series</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>24 2023 units</li>
                  <li>5 2024 units starting at 1925</li>
                </ul>
              </ul>
            </td>
            <td>
              <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                <li>27 2017-18 New Flyer XN60 buses</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>10 in 7400 series, assigned to Routes 709 and 950</li>
                  <li>17 in 7500 series, used on Route 225</li>
                </ul>
              </ul>
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th colspan="4">Electric buses</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="4">
              <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                <li>6 2019 New Flyer XE40 buses, starting at the 1500 series</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>Two from each division for Imperial Avenue, East County, and South Bay</li>
                </ul>
                <li>7 2020-21 Gillig Low Floor Plus EV 40' buses in the 1600 series</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>Assigned to Imperial Avenue Division</li>
                  <li>First two were made in 2020 with green livery, the next 5 were 2021 models
                    in regular livery</li>
                </ul>
                <li>12 2023 New Flyer XE60 buses in the 7550 series</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>Assigned to South Bay and used on Rapid 227</li>
                </ul>
                <li>13 2025 New Flyer XE40 buses in the 7600 series</li>
                <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
                  <li>Out of a 91 bus order, it was assigned to South Bay</li>
                </ul>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <h4 class="text-xl font-medium text-gray-200">Retired Fleet</h4>
      <p>This table only shows buses retired after 2021</p>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Fleet numbers</th>
            <th>Model</th>
            <th>Notes</th>
          </tr>
          <tr>
            <td>2011</td>
            <td>601-626</td>
            <td>New Flyer C40LFR</td>
            <td>Retired in October 2025</td>
          </tr>
          <tr>
            <td>2012</td>
            <td>701-731</td>
            <td>New Flyer C40LFR</td>
            <td>Retired in August 2026</td>
          </tr>
        </thead>
      </table>

      <h2 class="text-3xl font-bold text-white pt-4" id="imperialCo">Imperial County</h2>
      <p>Under construction</p>

      <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4" id="redlist">Buses to
        Look Out for</h1>
      <b>This section was updated on Wednesday, August 19, 2026.</b> Active and inactive buses were retrieved from <a
        href="https://pantographapp.com">Pantograph</a>, <a href="https://transittrack.net/">Transit Track</a>, and
      <a href="https://transsee.ca">Transsee</a>.<br>
      Fleet information was provided by Wikipedia and <a href="https://cptdb.ca">CPTDB</a>.
      <p>70 of 108 RTA's 2013-14 Gillig BRT Plus CNG 40' were replaced into 2023-24 models, which were identical with
        special features than the newer fleet: different wheelchair ramps, color destination signs, etc.<br> In
        September 2025, the oldest buses that were in reserve.
      </p>
      <p>The MTS 300 series were natural gas buses intended to replace the 600, 700, and 2900 series while the 13
        electric buses in the 7600 series were delivered. NCTD 1100 series buses were still running. The 600 series
        buses were decommissioned on October 14, 2025. The 700 series buses were decommissioned on August 10, 2026.
      </p>
      <div class="accordion-redlist">
        <details>
          <summary class="highlighted-ex">Extinct</summary>
        </details>
        <details>
          <summary class="highlighted-cr">Critically endangered</summary>
          Riverside County:
          <span class="Splatoon2">RTA 31300 series (2013) (8/97): 31382-31386, 31388, 31391, 31395</span> <s></s><br>
          <span class="Splatoon2">RTA 31400 series (2014) (4/11): 31401-31402, 31404-31405, 31409</span> <s></s><br>
          Orange County:
          <span class="Splatoon2">5500 series (2006-07) (4/173): 5509, 5513-5514, 5519</span>
          <s></s><br>
          San Diego County:
          <span class="Splatoon2">NCTD 1100 series (2000) (4/53): 1138-1139, 1141, 1145,</span> <s></s><br>
          <span class="Splatoon2">MTS 2900 series (2012) (3/27): 2901, 2911, 2919,</span> <s>2905, 2912</s><br>
        </details>
      </div>
      <div class="accordion-redlist">
        <details>
          <summary class="highlighted-en">Endangered</summary>
          Ventura County:
          <span class="Splatoon2">Thousand Oaks 2008 buses (1/4): 554038</span><br>
        </details>
      </div>
      <div class="accordion-redlist">
        <details>
          <summary class="highlighted-vl">Vulnerable</summary>
          Ventura County:
          <span class="Splatoon2">Gold Coast 3500 series (2008-2009) (12/17): 3503-3506,
            3508-3512, 3514-3516,</span> <s>3513</s><br>

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
          San Diego County:
          <span class="Splatoon2">MTS 300 series (2025) (37/38): 301-319, 321-338</span><br>

        </details>
      </div>
      <div class="accordion-redlist">
        <details>
          <summary class="highlighted-dd">Data deficient</summary>
          Orange County:
          <span class="Splatoon2">5120 series (2008) (26/30): 5121-5122, 5124-5128, 5130-5139, 5141-5144,
            5146-5150,</span> <s>5129, 5140</s><br>
          <span class="Splatoon2">7530 series (2008) (46/63): 7530-7532, 7535, 7537-7538, 7540-7542, 7544-7545, 7547,
            7549-7552, 7554-7562, 7565, 7567-7571, 7573, 7575-7582, 7585-7587, 7589, 7591-7592,</span> <s>7536, 7563,
            7590</s><br>
          Ventura County:
          <span class="Splatoon2">Simi Valley 2014 40' buses (3/3)</span> <s></s><br>
          <span class="Splatoon2">Simi Valley 2014 35' buses (2/3): 4532, 4534</span> <s></s><br>
          San Bernardino County:
          <span class="Splatoon2">Omnitrans 2009 buses (22/27): 1201-1204, 1206-1209, 1211-1213, 1215-1222,
            1224-1225,</span> <s>1214</s><br>
          <span class="Splatoon2">Omnitrans 6000 series (2012, 2018) (14/15): 6001, 6003-6015</span> <s></s><br>
          San Diego County:
          <span class="Splatoon2">NCTD 2500 series (2007) (11/12): 2501-2511</span> <s></s><br>
          <span class="Splatoon2">NCTD 2600 series (2012) (28/30): 2601-2604, 2606-2618, 2620-2630,</span> <s>2605,
            2619</s><br>
        </details>
      </div>
      <div class="accordion-electric">
        <details>
          <summary>Electric buses</summary>
          Riverside County:
          <span class="Splatoon2">RTA 32600 series (2026) (1/5): 32601</span> <s></s><br>
          Orange County:
          <span class="Splatoon2">1110 series (2018) (1/10): 1120,</span> <s>1113, 1115-1116, 1119</s><br>
          <span class="Splatoon2">1120 series (2026) (1/40): 1121</span><br>
          <span class="Splatoon2">1200 series (2021-22) (10/10)</span> <s></s><br>
          <span class="Splatoon2">1210 series (2026) (9/10): 1211-1219</span><br>
          Ventura County:
          <span class="Splatoon2">VCTC 2024 buses (3/5): 336-337, 339,</span> <s>338</s><br>
          <span class="Splatoon2">Simi Valley 4540 series (0/6)</span><br>
          San Bernardino County:
          <span class="Splatoon2">VVTA 300 series electric buses (2019, 2022) (7/12): 302, 305, 307-310, 312,</span>
          <s>311</s><br>
          <span class="Splatoon2">VVTA 300 series hydrogen buses (2025-26) (3/13): 313, 316, 321</span><br>
          <span class="Splatoon2">Omnitrans 2500 series (2021) (3/4): 2502-2504,</span>
          <s>2501</s><br>
          <span class="Splatoon2">Omnitrans 3000 series (2024) (4/4)</span> <s></s><br>
          <span class="Splatoon2">Omnitrans 6100 series (2025) (18/18)</span><br>
          San Diego County:
          <span class="Splatoon2">NCTD 2220 series (2022) (6/6)</span> <s></s><br>
          <span class="Splatoon2">NCTD 2330 series (2024) (8/12): 2331-2338,</span> <s>2339</s><br>
          <span class="Splatoon2">NCTD 2440 series (2025) (0/23)</span> <s></s><br>
          <span class="Splatoon2">MTS 1500 series (2019) (0/6)</span> <s></s><br>
          <span class="Splatoon2">MTS 1600 series (2020-21) (7/7)</span> <s></s><br>
          <span class="Splatoon2">MTS 7550 series (2023) (6/12): 7553-7554, 7556, 7559-7560, 7562,</span> <s>7552, 7555,
            7557, 7561</s><br>
          <span class="Splatoon2">MTS 7600 series (2025) (13/13)</span><br>
        </details>
      </div>

      <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4" id="gallery">Gallery
      </h1>
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
</script>
