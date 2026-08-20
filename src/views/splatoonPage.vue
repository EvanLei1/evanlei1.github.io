<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 flex flex-col justify-between">
    <NavbarMenu />
    <main class="max-w-4xl mx-auto p-6 space-y-6">
      <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4" id="stats">Splatoon Stats</h1>
          <h2 class="text-3xl font-bold text-white pt-4" id="spl3">Splatoon 3</h2>
          <h3 class="text-2xl font-semibold text-indigo-400" id="splfest">Splatfest</h3>
          <p>I attended five Splatfests and won two after I picked the team. I listed these events that I attended:</p>
          <table cless="center">
            <thead>
              <tr class="Splatoon1">
                <th>Date</th>
                <th>Choices</th>
                <th>Picked</th>
                <th>Result</th>
                <th>Title</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3/22-24/2024</td>
                <td>Drums vs. Guitar vs. Keyboard</td>
                <td>Drums</td>
                <td>Lost<br>180-190-<b>500</b></td>
                <td>Drums Defender</td>
                <td>Won a 100x battle on the 4th attempt</td>
              </tr>
              <tr>
                <td>4/19-21/2024</td>
                <td>Baby Chicks vs. Li'l Bunnies vs. Bear Cubs</td>
                <td>Bear Cubs</td>
                <td>Won<br>210-175-<b>485</b></td>
                <td>Bear Cubs Ruler +1</td>
                <td>Invalidated a claim to reward items 3 weeks after the Splatfest. This is a special Splatfest.</td>
              </tr>
              <tr>
                <td>5/17-19/2024</td>
                <td>Same Ol' vs. Bucket List vs. Save the Day</td>
                <td>Save the Day</td>
                <td>Lost<br>395-<b>415</b>-60</td>
                <td>Save the Day Ruler +1</td>
                <td></td>
              </tr>
              <tr>
                <td>8/9-11/2024</td>
                <td>Bread vs. Rice vs. Pasta</td>
                <td>Rice</td>
                <td>Won<br>150-<b>460</b>-260</td>
                <td>Rice Champion</td>
                <td>Lost 9 consecutive battles between 9:09 and 9:56 pm August 10, also called <b>an hour of losses</b>
                </td>
              </tr>
              <tr>
                <td>9/12-15/2024</td>
                <td>Past vs. Present vs. Future</td>
                <td>Present</td>
                <td>Lost<br><b>500</b>-370-0</td>
                <td>Present Ruler +4</td>
                <td>A 3-day special Splatfest with tricolor happening throughout the event<br>Won 1 of 2 100x battles in
                  the last hour of the event</td>
              </tr>
              <tr>
                <td>1/10-12/2025</td>
                <td>Money vs. Experiences vs. Presents</td>
                <td>Experiences</td>
                <td>TBD</td>
                <td>Experiences Champion</td>
                <td>The second Splatfest after the Grand Festival.</td>
              </tr>
              <tr>
                <td>7/10-12/2026</td>
                <td>Speed vs. Power vs. Tactics</td>
                <td>Speed</td>
                <td>TBD</td>
                <td>Speed Defender</td>
                <td>Special Splatfest based on Splatoon Raiders, which will be released within two weeks. Lost one 100x battle in this event.</td>
              </tr>
            </tbody>
          </table>
          <hr>
          <table class="center">
            <thead>
              <tr class="Splatoon2">
                <th>Event</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bread vs. Rice vs. Pasta</td>
                <td class="Splatoon1"><span style="font-size:24">15</span></td>
                <td class="Splatoon1"><span style="font-size:24">21</span></td>
                <td class="Splatoon2">41.67%</td>
              </tr>
              <tr>
                <td>Past vs. Present vs. Future</td>
                <td class="Splatoon1"><span style="font-size:24">55+</span></td>
                <td class="Splatoon1"><span style="font-size:24">55+</span></td>
                <td class="Splatoon2">Approx. 50%</td>
              </tr>
              <!-- Out of at least 21 tricolor turf war battles, I won 9 of them (3 on attacking), and in 9 cases, I was placed on the defending team. -->
              <tr>
                <td>Money vs. Experiences vs. Presents</td>
                <td class="Splatoon1"><span style="font-size:24">11+</span></td>
                <td class="Splatoon1"><span style="font-size:24">13</span></td>
                <td class="Splatoon2">45.83%</td>
              </tr>
              <!-- Out of 12 tricolor turf war battles, I won 4 of them (4 on attacking), and in 6 cases, I was placed on the defending team. 8 of the battles were of the same team. -->
            </tbody>
          </table>

          <h3 class="text-2xl font-semibold text-indigo-400" id="Salmon-Run">Salmon Run</h3>
          <h4 class="text-xl font-medium text-gray-200" id="Big-Run">Big Run</h4>
          <p>I attended two Big Runs since I bought this game. It happened every three months. I listed these events
            that I attended:</p>
          <table cless="center">
            <thead>
              <tr class="Splatoon1">
                <th>Date</th>
                <th>Reward</th>
                <th>Power Eggs</th>
                <th>Weapons</th>
                <th>High Score</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>6/7-9/2024</td>
                <td>Participation</td>
                <td>72</td>
                <td>4 regular and rare mystery</td>
                <td>Profreshional 40</td>
                <td>Contains all the previous Big Run sites</td>
              </tr>
              <tr>
                <td>9/6-8/2024</td>
                <td>Bronze</td>
                <td>124</td>
                <td>4 rare mystery</td>
                <td>Eggsecutive VP 40</td>
                <td>Involves a new stage called Grand Splatlands Bowl. I was demoted one rank after reaching the top
                  title.</td>
              </tr>
            </tbody>
          </table>
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
