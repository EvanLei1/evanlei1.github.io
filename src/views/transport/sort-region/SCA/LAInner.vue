<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 flex flex-col justify-between">
    <NavbarMenu />
    <main class="max-w-4xl mx-auto p-6 space-y-6">
      <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4">Los
        Angeles County bus list</h1>
      <h2 class="text-3xl font-bold text-white pt-4" id="LACMTA">Los Angeles County Metropolitan Transportation Agency
      </h2>
      <h3 class="text-2xl font-semibold text-indigo-400">Active fleet</h3>
      <h4 class="text-xl font-medium text-gray-200">Old buses</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
        <li>95 2007-08 NABI 60-BRT CNG buses in the 9500 series</li>
        <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
          <li>Some buses were retired</li>
          <li>Still uses the color Luminator signs</li>
        </ul>
        <li>550 2008-2013 NABI Metro 45C CNG buses</li>
        <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
          <li>The first 301 buses were 2008-10 models were in the 8100 series with a color Luminator
            sign, and a few
            were active</li>
          <li>91 2010-11 units in the 8400 series, with one in white sign</li>
          <li>150 2012-13 units in the 8500 series, with one in silver livery, these were the last
            buses of the model
          </li>
        </ul>
        <li>50 2010 NABI 31-LFW CNG buses in the 3100 series</li>
        <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
          <li>Used for contracted routes, with some buses retired</li>
        </ul>
      </ul>

      <h4 class="text-xl font-medium text-gray-200">Original buses</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
        <li>900 2013-16 New Flyer XN40 buses</li>
        <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
          <li>550 2013-15 units in the 5600 series</li>
          <li>350 2015-16 units in the 3850 series</li>
        </ul>
        <li>557 2018-22 ENC Axess BRT 40' CNG buses</li>
        <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
          <li>The first two buses starting at 1505 were 2018 models</li>
          <li>The remaining 293 units of the 1500 series were 2019 models</li>
          <li>62 2020 units in the 1800 series without opening windows</li>
          <li>The next 159 units were 2021 models</li>
          <li>The last 41 units after 2021 were 2022 models</li>
        </ul>
        <li>135 2018-21 New Flyer XN60 buses</li>
        <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
          <li>The first 65 units were made in 2018-19 as 2018 models</li>
          <li>The last 70 units were made in 2020-21 as 2020 models</li>
        </ul>
      </ul>

      <h4 class="text-xl font-medium text-gray-200">Electric buses</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
        <li>40 2019 New Flyer XE60 buses in the 19500 series</li>
        <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
          <li>Exclusively used for the G Line</li>
        </ul>
        <li>5 2020 BYD K11M buses in the 19000 series</li>
        <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
          <li>Used in the J Line</li>
        </ul>
        <li>100 2021, 2024-25 BYD K9M buses in the 10000 series</li>
        <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
          <li>The first 5 units were made in 2021 as 2020 models</li>
          <li>The remaining 95 units were 2024-25 BYD K9MD-ER units as 2023-24 models with some used
            in the J Line
          </li>
        </ul>
      </ul>

      <h3 class="text-2xl font-semibold text-indigo-400">Retired fleet</h3>
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

      <h2 class="text-3xl font-bold text-white pt-4" id="AVTA">Antelope Valley Transit Authority</h2>
      <p class="text-gray-300 leading-relaxed">Serves the cities of Palmdale and Lancaster, with commuter services to
        Los Angeles. All buses in this area were operated by BYD buses, while commuter services use MCI electric buses,
        making it a 100% electric fleet.
      </p>

      <h2 class="text-3xl font-bold text-white pt-4" id="burbank">Burbank Bus</h2>
      <p class="text-gray-300 leading-relaxed">Most of these buses were operated with ENC Axess 35' CNG buses and 5 rare
        NABI Ultra LF CNG buses.
      </p>

      <h2 class="text-3xl font-bold text-white pt-4" id="commerce">City of Commerce Municipal Bus</h2>
      <p class="text-gray-300 leading-relaxed">There were a few MCI buses an one Ford bus in service. Most of the fleet
        came from NABI, New Flyer, or Gillig.
      </p>

      <h2 class="text-3xl font-bold text-white pt-4" id="SantaClarita">City of Santa Clarita Transit</h2>
      <p class="text-gray-300 leading-relaxed">Most of the bus service uses Gillig Low Floor CNG buses, with commuter
        ones using MCI buses and 2 NABI 60-BRT CNG buses. Two trolley replicas were used in this fleet.
      </p>

      <h2 class="text-3xl font-bold text-white pt-4" id="culver">Culver CityBus</h2>
      <p class="text-gray-300 leading-relaxed">All of the fleet were New Flyer buses, running in Culver City and LAX.
      </p>

      <h2 class="text-3xl font-bold text-white pt-4" id="foothill">Foothill Transit</h2>
      <h3 class="text-2xl font-semibold text-indigo-400">Active fleet</h3>
      <h4 class="text-xl font-medium text-gray-200">Old buses</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
        <li>30 2009 NABI 42-BRT CNG buses in the F1700 series</li>
        <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
          <li>Only two buses were active</li>
          <li>Converted from semi-color signs to I/O Controls white signs</li>
        </ul>
        <li>12 2010 NABI 42-BRT CNG buses in the F1800 series</li>
        <li>14 2012 NABI 42-BRT CNG buses in the F1900 series</li>
        <li>64 2013 NABI 42-BRT CNG buses in the F2100 series</li>
        <li>30 2014 NABI 42-BRT CNG buses in the F2200 series</li>
      </ul>

      <h4 class="text-xl font-medium text-gray-200">Original buses</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
        <li>30 2015 NABI 42-BRT CNG buses in the F2300 series</li>
        <li>60 2016-17 New Flyer XN40 buses</li>
        <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
          <li>30 2016 units in the 2400 series</li>
          <li>30 2017 units in the 2500 series</li>
        </ul>
        <li>65 2018, 2020-21 ENC Axess BRT 40' CNG buses</li>
        <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
          <li>34 2018 units in the 2700 series</li>
          <li>11 2020 units starting at 2734</li>
          <li>18 2021 units starting at 2745</li>
          <li>2 2021 units starting at 2803</li>
        </ul>
        <li>24 2020 New Flyer XN60 buses in the 2900 series</li>
      </ul>

      <h4 class="text-xl font-medium text-gray-200">Electric buses</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
        <li>14 2016 Proterra Catalyst BE40 buses in the 2600 series</li>
        <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
          <li>Some buses were retired and replaced by the 3100 series</li>
        </ul>
        <li>2 Alexander Dennis Enviro500EV buses in the 3000 series</li>
        <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
          <li>First electric double-decker buses in the US, which is powered by Proterra motors</li>
        </ul>
        <li>33 2022 New Flyer XHE40 buses in the 3100 series</li>
      </ul>

      <h3 class="text-2xl font-semibold text-indigo-400">Retired fleet</h3>
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

      <h2 class="text-3xl font-bold text-white pt-4" id="Glendale">Glendale Beeline</h2>
      <p class="text-gray-300 leading-relaxed">All 8 buses were ENC buses, high and low floor, operating in the city of
        Alhambra.
      </p>

      <h2 class="text-3xl font-bold text-white pt-4" id="gtrans">GTrans</h2>
      <p class="text-gray-300 leading-relaxed">All 8 buses were ENC buses, high and low floor, operating in the city of
        Alhambra.
      </p>

      <h2 class="text-3xl font-bold text-white pt-4" id="dpw">Los Angeles County Department of Public Works</h2>
      <p class="text-gray-300 leading-relaxed">Uses ENC buses for service for unincorporated areas of the county
      </p>

      <h2 class="text-3xl font-bold text-white pt-4" id="dot">Los Angeles Department of Transportation</h2>

      <h2 class="text-3xl font-bold text-white pt-4" id="lbt">Long Beach Transit</h2>
      <p class="text-gray-300 leading-relaxed">Serves cities in south LA County. Notable units include Gillig BRT Plus
        CNG, BYD K9M, New Flyer XN40, XE35, XE40, GE40, and GE40LFA buses. There were 5 BYD C10M buses for commuter
        services and special events, and the New Flyer GE40LFA is the only operator with the type and the only LFA bus
        in the state.
      </p>

      <h2 class="text-3xl font-bold text-white pt-4" id="Montebello">Montebello Bus Lines</h2>
      <p class="text-gray-300 leading-relaxed">All of the buses were New Flyer, with a few gasoline electric units, and
        newer buses have Axion color destination signs.
      </p>

      <h2 class="text-3xl font-bold text-white pt-4" id="Norwalk">Norwalk Transit System</h2>
      <p class="text-gray-300 leading-relaxed">Most of the buses were Gillig Low Floor CNG except for some old New Flyer
        gasoline electric buses.
      </p>

      <h2 class="text-3xl font-bold text-white pt-4" id="Pasadena">Pasadena Transit</h2>
      <p class="text-gray-300 leading-relaxed">Serves the city of Pasadena. There is a mix of ElDorado National E-Z
        Rider II CNG buses and New Flyer XN35 and XE35 buses, with a few Ford buses.
      </p>

      <h2 class="text-3xl font-bold text-white pt-4" id="bigbluebus">Santa Monica's Big Blue Bus</h2>
      <h3 class="text-2xl font-semibold text-indigo-400">Active fleet</h3>
      <h4 class="text-xl font-medium text-gray-200">Old buses</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
        <li>9 NABI 40-LFW CNG buses starting at 3868</li>
        <li>21 2010-11 NABI 60-BRT CNG buses</li>
        <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
          <li>11 2010 units in the 5300 series</li>
          <li>10 2011 units starting at 5311</li>
        </ul>
        <li>57 2012-14 Gillig BRT CNG 40' buses</li>
        <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
          <li>Bus 1300 as a 2012 model</li>
          <li>44 2013 units starting at 1301</li>
          <li>13 2014 units starting at 1345</li>
        </ul>
      </ul>

      <h4 class="text-xl font-medium text-gray-200">Original buses</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
        <li>11 2015 Gillig BRT CNG 40' buses in the 1500 series</li>
        <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
          <li>Uses an updated version of the color Luminator sign</li>
        </ul>
        <li>7 2015 New Flyer XN60 buses in the 1560 series</li>
        <li>4 2016 Gillig BRT CNG 29' buses in the 1600 series</li>
        <li>25 2017 Gillig BRT CNG 40' buses in the 1700 series</li>
        <li>7 2018 Gillig BRT CNG 29' buses in the 1800 series</li>
        <li>19 2018 Gillig BRT CNG 40' buses starting at 1808</li>
      </ul>

      <h4 class="text-xl font-medium text-gray-200">Electric buses</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
        <li>Bus 1827 as a 2018 Gillig Low Floor Plus EV 40' unit</li>
        <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
          <li>First Gillig electric bus made using a 40-foot length</li>
        </ul>
        <li>18 2021 Gillig Low Floor Plus EV 40' buses in the 2100 series</li>
        <li>15 2025 Gillig Low Floor Plus EV 35' buses in the 2500 series</li>
      </ul>

      <h3 class="text-2xl font-semibold text-indigo-400">Retired fleet</h3>
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

      <h2 class="text-3xl font-bold text-white pt-4" id="torrance">Torrance Transit</h2>
      <p class="text-gray-300 leading-relaxed">All of the buses were New Flyer, serving the city of Torrance. The 2025
        models entered service in May, replacing the remaining GE40LFR and C40LFR units.
      </p>

      <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4" id="redlist">Buses to
        Look Out for</h1>
      <b>This section was updated on Wednesday, August 19, 2026.</b> Active and inactive buses were retrieved from <a
        href="https://pantographapp.com">Pantograph</a>, <a href="https://transittrack.net/">Transit Track</a>, and
      <a href="https://transsee.ca">Transsee</a>.<br>
      Fleet information was provided by Wikipedia and <a href="https://cptdb.ca">CPTDB</a>.
      <p class="text-gray-300 leading-relaxed">Santa Monica's Big Blue Bus 5300 series were inactive since July 21,
        2026. The GE40LFR buses of Torrance Transit were withdrawn on June 25.
        <!-- The Proterra buses for Foothill transit were inactive since July 2. --></p>
      <div class="accordion-redlist">
        <details>
          <summary class="highlighted-ex">Extinct</summary>
          <span class="Splatoon2">SMBBB 5300 series (2010-11) (0/21)</span> <s></s><br>
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
          <span class="Splatoon2">LADOT 11400 series (2011) (2/2)</span> <s></s><br>
          <span class="Splatoon2">LACMTA 9500 series (2007-08) (83/95): 9500-9523, 9525, 9527-9531, 9533-9540,
            9542-9557, 9559-9568, 9570-9576, 9578-9581, 9583-9584, 9586-9587, 9590-9592, 9594,</span> <s>9526, 9541,
            9558, 9577, 9582, 9585, 9588-9589, 9593</s><br>
        </details>
      </div>
      <div class="accordion-redlist">
        <details>
          <summary class="highlighted-lc">Least concern</summary>
          <span class="Splatoon2">Torrance 2025 buses (20/20)</span><br>
          <span class="Splatoon2">LADOT 12300 series 35' buses (2012) (14/14)</span> <s></s><br>
          <span class="Splatoon2">LADOT 12300 series 32' buses (2012) (22/22)</span> <s></s><br>
          <!-- <span class="Splatoon2">LADOT 12400 series (2012) (91/93): 12401-12405, 12407-12428, 12430-12493,</span>
          <s>12406, 12429</s><br> -->
          <span class="Splatoon2">LADOT 13400 series (2012) (2/3): 13402-13403,</span> <s>13401</s><br>
          <span class="Splatoon2">LADOT 13300 series 32' buses (2013) (20/22): 13301, 13303, 13305-13322,</span>
          <s>13302, 13304</s><br>
          <span class="Splatoon2">LADOT 13300 series 35' buses (2013) (6/6)</span> <s></s><br>
          <span class="Splatoon2">Pasadena 2013 buses (9/10): 3216-3221, 3223-3225</span> <s></s><br>
          <span class="Splatoon2">Pasadena 2014 buses (5/7): 3292-3293, 3296-3298</span> <s></s><br>

        </details>
      </div>
      <div class="accordion-redlist">
        <details>
          <summary class="highlighted-dd">Data deficient</summary>
          <span class="Splatoon2">LACMTA 8100 series (2008-10) (46/301): 8217, 8290, 8339, 8345-8347, 8350-8361,
            8364-8368, 8370-8377, 8379, 8381-8383, 8386, 8388-8392, 8394, 8396-8399,</span> <s>8342-8343, 8378,
            8384-8385, 8387</s><br>
          <span class="Splatoon2">LACMTA 3100 series (2010) (18/50): 3104-3106, 3108, 3110, 3112, 3115, 3120, 3123,
            3128, 3130, 3132-3133, 3138, 3140, 3142, 3145, 3148,</span> <s>3101, 3116</s><br>
          <span class="Splatoon2">LBT 2400 series (2005) (18/27): 2402-2403, 2406-2407, 2409-2410, 2412-2413, 2415-2416,
            2418-2420, 2422, 2424-2427,</span> <s>2404, 2411, 2415, 2421</s><br>
          <span class="Splatoon2">LBT 2500 series (2005) (17/22): 2501-2503, 2505-2507, 2509-2511, 2513-2517, 2519-2520,
            2522,</span> <s>2504, 2508, 2512</s><br>
          <span class="Splatoon2">LBT 2700 series (2007) (11/15): 2702-2708, 2710-2713,</span> <s>2701, 2709</s><br>
          <span class="Splatoon2">LBT 2900 series (2008) (15/25): 2902, 2904, 2906-2908, 2910, 2912-2916, 2920, 2922,
            2924-2925,</span> <s>2903, 2905, 2919</s><br>
          <span class="Splatoon2">SMBBB 2011 40' buses (9/9)</span> <s></s><br>
          <span class="Splatoon2">Foothill F1700 series (2009) (2/30): F1700-F1701</span><br>
          <span class="Splatoon2">Foothill F1800 series (2010) (8/12): F1800, F1802, F1804-F1807, F1810-F1811,</span>
          <s>F1801, F1803, F1808-F1809</s><br>
          <span class="Splatoon2">Foothill F1900 series (2012) (12/14): F1900-F1910, F1912,</span> <s>F1911,
            F1913</s><br>
          <span class="Splatoon2">Torrance 2011 buses (9/20): 320, 322-327, 329</span> <s></s><br>
          <span class="Splatoon2">Torrance 2012 buses (8/9): 330-333, 335-338</span> <s></s><br>
          <span class="Splatoon2">Santa Clarita 2007 buses (2/2)</span> <s></s><br>
          <span class="Splatoon2">Santa Clarita 2013 40' buses (6/11): 103-104, 106-107, 109-110</span>
          <s></s><br>
          <span class="Splatoon2">Glendale 2009 buses (8/9): B66-B73</span><br>
          <span class="Splatoon2">Glendale bus LC2 (2009): Yes</span><br>
          <span class="Splatoon2">Culver 2009 buses (6/6)</span><br>
          <span class="Splatoon2">Culver 2011-2012 buses (18/20): 7112-7118, 7120-7122, 7124-7131</span><br>

        </details>
      </div>
      <div class="accordion-electric">
        <details>
          <summary>Electric buses</summary>
          <span class="Splatoon2">LACMTA 19000 series (2020) (3/5): 19001, 19003-19004,</span> <s>19000</s><br>
          <s></s><br>
          <span class="Splatoon2">LACMTA 10000 series (2021, 2024-25) (87/100): 10000-10001, 10003, 10006, 10008-10061,
            10064-10068, 10070-10075, 10077-10078, 10080-10086, 10088-10092, 10094, 10097-10099</span>
          <s></s><br>
          <span class="Splatoon2">LADOT 17300 series (2017) (1/4): 17304,</span> <s>17301-17303</s><br>
          <span class="Splatoon2">LADOT 20300 series (2020) (0/26)</span> <s></s><br>
          <span class="Splatoon2">LADOT 21300 series (2021) (23/25): 21301-21304, 21306-21317, 21319-21325,</span>
          <s>21305, 21318</s><br>
          <span class="Splatoon2">LADOT 22300 series (2022-23) (?/100)</span> <s></s><br>
          <span class="Splatoon2">Foothill 2600 series (2017) (1/13): 2600</span> <s></s><br>
          <span class="Splatoon2">Foothill 3000 series (2020) (0/2)</span> <s></s><br>
          <span class="Splatoon2">Foothill 3100 series (2022, 2025) (42/52): 3100-3104, 3106-3110, 3112-3114, 3116-3120,
            3122-3127, 3129,<span style="color:green">3133-3141, 3143-3148, 3150-3151</span>,</span> <s>3105, 3111,
            3128</s><br>
          <span class="Splatoon2">LBT 1600 series (2016) (4/10): 1601, 1603-1604, 1608,</span> <s>1605-1606</s><br>
          <span class="Splatoon2">LBT 16010 buses (2021) (8/14): 16012, 16014, 16016-16019, 16023-16024,</span>
          <s>16013, 16015, 16020</s><br>
          <span class="Splatoon2">Culver 2021 buses (4/4)</span><br>
          <span class="Splatoon2">Glendale 2025 buses (4/5): B06-B07, B09-B10</span><br>
          <span class="Splatoon2">Pasadena bus 5030 (2025): No</span> <s></s><br>
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
