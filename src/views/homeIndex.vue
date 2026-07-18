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
              <li><RouterLink to="/">Home</RouterLink></li>
              <li><RouterLink to="/transport/bus-list">Transport</RouterLink></li>
              <li><RouterLink to="/gamingView">Gaming</RouterLink></li>
              <li><RouterLink to="/projectView">Education</RouterLink></li>
              <li><RouterLink to="/updatesPage">Posts</RouterLink></li>
              <li><RouterLink to="/socialPage">Socials</RouterLink></li>
              <li><RouterLink to="/aboutPage">About</RouterLink></li>
              <li><a href="https:/evanlei1.neocities.org/">Classic Website</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <aside class="left-sidebar">
        <div class="sidebar-section">
          <div class="sidebar-title">Page contents</div>
          <ul>
            <li><a href="#intro">Intro</a></li>
            <li><a href="#update-links">Links (coming soon)</a></li>
            <li><a href="#old-buses">Old buses</a></li>
            <li><a href="#updates">Latest updates</a></li>
          </ul>
        </div>
      </aside>

      <main id="content">
        <!-- Section for introductory content -->
        <section id="intro">
          <h1 align="center">Hello there!</h1>
          <img :src="profilePic" align="right" width="100" alt="Profile picture">
          <p>My name is Evan Lei, and I am currently a second-year Computer Science and Engineering major at
            UC
            Merced.
            I like running, biking, and taking public transit across the San Francisco Bay Area. Other than
            doing exercise,
            I like to play video games and sometimes stream them on Twitch,
            like Pokemon Scarlet/Violet, Splatoon 3, and other Nintendo Switch games.</p>
          <RouterLink to="/legendsPage">Website legend leading to formatting of locations and speedometer</RouterLink>
        </section>
        <hr>
        <section id="update-links">
          <h1 align="center">Links (coming soon)</h1>
          <div class="gallery">
            <div class="box">
              <div class="image">
                <a target="_blank" :href="apr20">
                  <img :src="apr20" width="300" height="50%">
                </a>
              </div>

              <div class="text">
                <b>
                  <RouterLink to="/transport/sort-date/bus-2024">2024 update for BART legacy fleet</RouterLink>
                </b>
              </div>
            </div>

            <div class="box">
              <div class="image">
                <a target="_blank" :href="CaiHongRd">
                  <img :src="CaiHongRd" width="300" height="50%">
                </a>
              </div>

              <div class="text">
                2026 updates coming soon
              </div>
            </div>

            <div class="box">
              <div class="image">
                <a target="_blank" :href="cableCar">
                  <img :src="cableCar" width="300" height="240">
                </a>
              </div>

              <div class="text">
                2025 photography of San Francisco cable cars
              </div>
            </div>

            <div class="box">
              <div class="image">
                <a target="_blank" :href="BaoShanRd">
                  <img :src="BaoShanRd" width="300" height="240">
                </a>
              </div>

              <div class="text">
                Is Shanghai Metro 03A01 trainsets refurbished yet?
              </div>
            </div>
          </div>
        </section>
        <hr>
        <section id="old-buses">
          <h1 align="center">Old buses</h1>
          <div class="gallery">

            <div class="box">
              <div class="image">
                <a target="_blank" :href="VTA2001">
                  <img :src="VTA2001" width="300" height="50%">
                </a>
              </div>

              <div class="text">
                VTA 2001-02 Gillig Low Floor buses: 9/141
              </div>
            </div>

            <div class="box">
              <div class="image">
                <a target="_blank" :href="SCM1998">
                  <img :src="SCM1998" width="300" height="240">
                </a>
              </div>

              <div class="text">
                Santa Cruz Metro 1998 New Flyer D35/40 buses: 3/30
              </div>
            </div>

            <div class="box">
              <div class="image">
                <a target="_blank" :href="ACT2013">
                  <img :src="ACT2013" width="300" height="240">
                </a>
              </div>

              <div class="text">
                AC Transit 2013 Gillig Low Floor buses: 7/65
              </div>
            </div>
          </div>
        </section>
        <hr>
        <section id="updates">
          <h2>Latest Updates</h2>
          <p>For archived updates, click on this <RouterLink to="/updatesPage">link</RouterLink>.</p>
          <p><b>3/15/2026:</b></p>
          <p>The Fresno Area Express 0600 series were retired on March 6, 2025 after the arrival of
            refurbished
            ex-Valley Metro 5000 series buses renumbered into 1300 series entered service.</p>
          <p><b>11/8/2025:</b></p>
          <p><b><mark class="highlighted-cr">CR</mark> &rarr; <mark class="highlighted-ex">EX</mark></b> The
            last
            of 30 San Francisco Muni 8500 series (Orion VII 07.503 buses) were retired from service on
            October
            21, with 8528 the last unit
            and were replaced by ENC E-Z Rider II BRT buses in the 8530 series</p>
          <p><b>10/13/2025:</b></p>
          <p><b><mark class="highlighted-cr">CR</mark> &rarr; <mark class="highlighted-ex">EX</mark></b> The
            last
            of 26 San Diego MTS 600 series (2011 New Flyer C40LFR) were retired from service on October 3,
            with
            611 and 617 the last units
            and were replaced by 2025 XN40s in the 300 series</p>
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
import { RouterLink } from 'vue-router';


import profilePic from "@/assets/images/profile-pic.jpg"
import apr20 from "@/assets/images/2024/PXL_20240420_223556597.jpg";
import CaiHongRd from "@/assets/images/2026/01/IMG_6160.jpeg";
import cableCar from "@/assets/images/2025/08/IMG_3788.jpg";
import BaoShanRd from "@/assets/images/2024/07/PXL_20240717_025717279.jpg";
import VTA2001 from "@/assets/images/2023/PXL_20231022_024853279.jpg";
import SCM1998 from "@/assets/images/2022/02/PXL_20220206_223140747.jpg"
import ACT2013 from "@/assets/images/2023/PXL_20231024_201618649.jpg";
</script>
