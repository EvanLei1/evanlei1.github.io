<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 flex flex-col justify-between">
    <NavbarMenu />
    <main class="max-w-4xl mx-auto p-6 space-y-6">
          <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4" align="center">Solano and Napa Bus List</h1>
          <h2 class="text-3xl font-bold text-white pt-2" id="Solano">Solano County</h2>
          <h3 class="text-2xl font-semibold text-indigo-400" id="Soltrans">Soltrans</h3>
          <h4 class="text-xl font-medium text-gray-200">Active fleet</h4>

          <h5 class="text-lg font-medium text-gray-300">Old buses</h5>
          <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
            <li><b><mark class="highlighted-en">Endangered</mark></b> 21 2011 Gillig Low Floor HEV buses in the 3900 series</li>
            <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2"><li>Currently being replaced by the 4600 series, 7 units remain</li></ul>
          </ul>

          <h5 class="text-lg font-medium text-gray-300">Acquired buses</h5>
          <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
            <li>Bus 4100 as a 2016 Nova Bus LFS CNG unit</li>
            <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
              <li>Used to be San Antonio VIA Metropolitan Transit pilot unit 421</li>
              <li>Only Nova Bus LFS CNG unit in service in California</li>
            </ul>
            <li>9 MCI D4500CT buses in the 5050 series</li>
            <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
              <li>Transferred from FAST in 2022</li>
            </ul>
          </ul>

          <h5 class="text-lg font-medium text-gray-300">Original buses</h5>
          <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
            <li>21 2017-19, 2022 MCI D4500CT CNG buses in the 5100 series</li>
            <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
              <li>First 6 buses were made in 2017</li>
              <li>4 buses were made in 2018</li>
              <li>6 buses were made in 2019</li>
              <li>5 buses were made in 2022</li>
            </ul>
          </ul>

          <h5 class="text-lg font-medium text-gray-300">Electric buses</h5>
          <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
            <li>4 2017, 2019 BYD K9M buses in the 4500 series</li>
            <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
              <li>2 buses were made in 2017, while the other two were made in 2019</li>
            </ul>
            <li>12 2025-26 Gillig Low Floor Plus EV 40' buses in the 4600 series</li>
            <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2"><li>5 2025 buses</li>
            <li>7 2026 buses</li></ul>
            <li>Bus 5501 as a 2022 BYD C10M coach</li>
          </ul>

          <h4 class="text-xl font-medium text-gray-200">Retired Fleet</h4>
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
          </table>

          <h3 class="text-2xl font-semibold text-indigo-400" id="FAST">Fairfield-Suisun Transit</h3>
          <p class="text-gray-300 leading-relaxed">Serves the city of Fairfield and Suisun City. The entire fleet is run by Gillig BRT units, with 3 electric
            35-foot vehicles.
          </p>

          <h3 class="text-2xl font-semibold text-indigo-400" id="Vacaville">Vacaville City Coach</h3>
          <p class="text-gray-300 leading-relaxed">Serves the city of Vacaville. The entire fleet is made by New Flyer.</p>

          <h2 class="text-3xl font-bold text-white pt-2" id="Napa">Napa County</h2>
          <h3 class="text-2xl font-semibold text-indigo-400" id="NVTA">Napa Valley Transit</h3>
          <h4 class="text-xl font-medium text-gray-200">Active fleet</h4>

          <h5 class="text-lg font-medium text-gray-300">Old buses</h5>
          <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
            <li><b><mark class="highlighted-en">Endangered</mark></b> 4 2013 ElDorado National Axess BRT 40' buses starting at 135</li>
            <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
              <li>Suburban configuration</li>
            </ul>
            <li><b><mark class="highlighted-en">Endangered</mark></b> 6 2013 ElDorado National Axess BRT 35' buses starting at 139</li>
            <li><b><mark class="highlighted-en">Endangered</mark></b> 5 2013 ElDorado National Axess BRT 35' CNG buses in the 200 series</li>
          </ul>

          <h5 class="text-lg font-medium text-gray-300">Acquired buses</h5>
          <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
            <li><b><mark class="highlighted-lc">Least concern</mark></b> 6 2016-17 ElDorado National E-Z Rider II BRT 32' CNG buses starting at 205</li>
            <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
              <li>Used to run at Los Angeles World Airports, primarily in LAX</li>
            </ul>
            <li>Bus 259 as 2016 ElDorado National Axess BRT 40' unit</li>
            <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
              <li>Formerly a demo from the bus manufacturer with a Luminator color sign</li>
              <li>Has CNG roof fairings, but it has a diesel engine</li>
            </ul>
          </ul>

          <h5 class="text-lg font-medium text-gray-300">Original buses</h5>
          <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
            <li>7 2016 ElDorado National Axess BRT 40' buses in the 250 series</li>
            <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
              <li>First 5 units uses regular seating</li>
              <li>Buses 257-258 have suburban seating</li>
            </ul>
            <li>2 2016 ElDorado National Axess BRT 35' buses starting at 255</li>
          </ul>

          <h5 class="text-lg font-medium text-gray-300">Electric buses</h5>
          <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
            <li>5 2022 BYD K7M-ER buses in the 300 series</li>
            <li>14 2025 Gillig Low Floor Plus EV 40' buses in the 330 series</li>
            <li>15 2025 Gillig Low Floor Plus EV 40' buses starting at 305</li>
            <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2"><li>Haven't entered service yet</li></ul>
          </ul>

          <h4 class="text-xl font-medium text-gray-200">Retired Fleet</h4>
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
                <td>2002</td>
                <td>1702-1705</td>
                <td>Gillig Low Floor 40'</td>
                <td>Ex-Monterey-Salinas Transit buses of the same number</td>
              </tr>
              <tr>
                <td>2003</td>
                <td>133-134</td>
                <td>Gillig Phantom 40'</td>
                <td>Ex-SamTrans 800-801 with a suburban configuration and no rear door, redistributed in 2008 and retired in about 2022</td>
              </tr>
              <tr>
                <td>2021</td>
                <td>320-321</td>
                <td>Proterra ZX5 40'</td>
                <td>Retired in 2026 after equipment issues</td>
              </tr>
              <tr>
                <td>2019</td>
                <td>1964-1967</td>
                <td>Gillig Low Floor HEV 40'</td>
                <td>Leased from Golden Gate Transit of the same numbers from 2024 to 2026</td>
              </tr>
            </tbody>
          </table>

          <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4" id="redlist">Buses to Look Out for</h1>
          <b>This section was updated on Tuesday, August 18, 2026.</b> Active and inactive buses were retrieved from <a
            href="https://pantographapp.com">Pantograph</a>, <a href="https://transittrack.net/">Transit Track</a>, and
          <a href="https://transsee.ca">Transsee</a>.<br>
          Fleet information was provided by Wikipedia and <a href="https://cptdb.ca">CPTDB</a>.
          <b><u>Note: FAST buses were not updated as of June 30. It relies on manual observation and
              when the bus is online.</u></b>
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
              Napa County:
              <span class="Splatoon2">2013 35' buses (2/6): 142-143</span> <s></s><br>
              <span class="Splatoon2">2013 40' buses (2/4): 135, 137,</span> <s>136, 138</s><br>
              <span class="Splatoon2">200 series (2013) (2/5): 203-204,</span> <s>202</s><br>
              Solano County:
              <span class="Splatoon2">SolTrans 3900 series (2011) (7/21): 3902, 3904, 3906, 3914-3915, 3918-3919,</span> <s>3901, 3908, 3910-3911, 3920-3921</s><br>
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
              Napa County:
              <span class="Splatoon2">2016-17 CNG 35' series (5/6): 205-206, 208-210</span> <s></s><br>
            </details>
          </div>
          <div class="accordion-redlist">
            <details>
              <summary class="highlighted-dd">Data deficient</summary>
              Solano County:
              <span class="Splatoon2">FAST 2007 buses (5/7): 07620, 07623, 07629-07630, 07633</span> <s></s><br>
              <span class="Splatoon2">FAST 2009 35' buses (1/3): 09626</span> <s></s><br>
              <span class="Splatoon2">FAST 2009 29' bus 09636: Yes</span><br>
              <span class="Splatoon2">FAST 2011 buses (2/3): 11632, 11645</span> <s></s><br>
              <span class="Splatoon2">FAST 2013 buses (5/6): 13640-13644</span> <s></s><br>

            </details>
          </div>
          <div class="accordion-electric">
            <details>
              <summary>Electric buses</summary>
              Solano County:
              <span class="Splatoon2">SolTrans 4500 series (2017, 2019) (3/4): 4500-4501, 4503</span> <s></s><br>
              <span class="Splatoon2">SolTrans 4600 series (2025-2026) (12/12)</span> <s></s><br>
              <span class="Splatoon2">FAST 2023 buses (3/3)</span><br>

              Napa County:
              <span class="Splatoon2">2022 electric buses (1/5): 302</span> <s></s><br>
              <span class="Splatoon2">2025 electric buses (12/14): 331-338, 340-343</span> <s></s><br>
            </details>
          </div>

          <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4" id="gallery">Gallery</h1>
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
