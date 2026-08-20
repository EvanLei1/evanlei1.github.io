<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 flex flex-col justify-between">
    <NavbarMenu />
    <main class="max-w-4xl mx-auto p-6 space-y-6">
          <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4" id="legend">Legend</h1>
          <h2 class="text-3xl font-bold text-white pt-2" id="speedometer">Speedometer</h2>
          <div class="container">
            <div class="image">
              <img :src="speedometer" width="256p">
            </div>
            <div>
              <p class="text-gray-300 leading-relaxed">This speedometer is designed by putting it on images and videos that involve driving. In this example,
                the
                speedometer is used for a car, separating the speed into increments of 25-40 mph with a max speed of
                100-160
                mph.
                I also set up the speedometer in km/h and included yellow and red sections to alert you to the dangers
                of going
                at a very high speed. It also applies to trains but has three different categories with different max
                speeds.
                There were three options of a train speedometer, with a max speed of 80, 100, and 220 mph. The
                speedometer
                diagram was used to simulate recorded videos and estimate photos.</p>
              <p class="text-gray-300 leading-relaxed">The speedometer has three signal words: warning, danger, and peril. It applies to cars and trains.</p>
              <p class="text-gray-300 leading-relaxed">All caps were used for road conditions, while the exclamation mark was added for emergencies and sudden
                traffic
                slowdowns.</p>
              <table>
                <thead>
                  <tr>
                    <th>Signal word</th>
                    <th>All caps</th>
                    <th>Exclamation</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="color:orange">Warning</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>If the speedometer is 16.7% above the speed limit or at least 80 mph, or <br>if there are
                      weather
                      advisories in the area</td>
                  </tr>
                  <tr>
                    <td style="color:yellow">Danger</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>If the speedometer is 33.3% above the speed limit or at least 99 mph or <br>if there is a
                      weather watch or
                      traffic involving construction</td>
                  </tr>
                  <tr>
                    <td style="color:red">Danger</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>Only used in any weather warning, including high - very high fire danger or red flag warning,
                      <br> or if
                      obstructions or accidents cause traffic and bad road conditions</td>
                  </tr>
                  <tr>
                    <td style="color:red">Peril</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>If the speedometer is 50% above the speed limit or at least 110 mph or <br>if there is a road
                      closure
                      related to an accident or weather</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- <h3 class="text-2xl font-semibold text-indigo-400" id="examples">Examples of signal words given out based on the speedometer</h3>
          <li></li> -->
          <h2 class="text-3xl font-bold text-white pt-2" id="redlist">Bus and Train Active List</h2>
          <p class="text-gray-300 leading-relaxed">This list was similar to above, but it was based on a classification used on the conservation status page
            like <a href="https://bateman.monologue.jp/en/index.html">the Red List of Trains</a>.</p>
          <table class="center">
            <thead>
              <tr>
                <th>Classification</th>
                <th>Equivalent to</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="color:Blue">Active</td>
                <td>Least Concern</td>
                <td>In service and operational</td>
              </tr>
              <tr>
                <td style="color:green">Reserve/Near threatened</td>
                <td>Near threatened</td>
                <td>Replacement plan announced or fleet placed in reserve</td>
              </tr>
              <tr>
                <td style="color:yellow">Warning/Bulnerable</td>
                <td>Vulnerable</td>
                <td>Buses or trains that will retire soon</td>
              </tr>
              <tr>
                <td style="color:yellow">Danger/Endangered</td>
                <td>Endangered</td>
                <td>Parts of the fleet were gradually retired</td>
              </tr>
              <tr>
                <td style="color:red">Danger/Critically endangered</td>
                <td>Critically endangered</td>
                <td>Most of the fleet retired and will be withdrawn very soon</td>
              </tr>
              <tr>
                <td style="color:maroon">Retired/Inactive/Extinct</td>
                <td>Extinct</td>
                <td>No longer in service and cannot be restored to service</td>
              </tr>
              <tr>
                <td style="color:black">Data deficient</td>
                <td>Data deficient</td>
                <td>Not enough information</td>
              </tr>
            </tbody>
          </table>
          <hr>
          <h2 class="text-3xl font-bold text-white pt-2" id="definitions">New definitions</h2>
          <h3 class="text-2xl font-semibold text-indigo-400" id="sacramento">Sacramento Effect</h3>
          <p class="text-gray-300 leading-relaxed">This word that I made up was called the Sacramento Effect because I was playing <RouterLink
              to="/splatoonPage">Splatoon 3</RouterLink> turf war match when a deviation of +/- 15%
            triggered how the team was way behind, but in some cases, the turfing coverage was unstable and the team
            that was
            behind can make a comeback within 10-30 seconds because of
            team effort. I looked on <a href="https://twitch.tv">Twitch</a> and X some of the time about this common
            sighting.
          </p>
          <p class="text-gray-300 leading-relaxed">It was called this because of how the door buttons were sounding once the Sacramento light rail train makes
            a full
            stop in a station. When the door closes, the beeping was heard.
            I commonly heard the beeping noise of the CAF light rail trains.
          </p>
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
import speedometer from "@/assets/images/s-meterNR-sample.png"
</script>
