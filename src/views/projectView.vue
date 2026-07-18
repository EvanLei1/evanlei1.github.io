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
            <li><a href="#school">Schools I attended</a></li>
            <li><a href="#ossProg">Out-of-School Programs</a></li>
            <li><a href="#related">Related Courses</a></li>
            <li><a href="#UCM">UC Merced</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#APCSP">AP Computer Science Principles project</a></li>
            <li><a href="#WRI-001">Dorothea Puente Case Study</a></li>
          </ul>
        </div>
      </aside>

      <main>
        <section>
          <h2 id="school" class="Lato1">Schools I attended</h2>

          <ul>
            <li>Lakeshore Elementary School, San Francisco (2010-16)</li>
            <li>James Denman Middle School, San Francisco (2016-19)</li>
            <li>Philip & Sala Burton High School, San Francisco (2019-23)</li>
            <li>University of California, Merced (2023-)</li>
          </ul>
          <h3 id="ossProg" class="Lato1">Out-of-School Programs</h3>
          <ul>
            <li>YMCA of San Francisco (2014-16)</li>
            <li>Boys and Girls Club of San Francisco (2016-20, 2021-23)</li>
          </ul>

          <h2 id="related" class="Lato1">Related Courses</h2>

          <p>Related courses were used when I was studying an important course covered over college.</p>
          <ul>
            <li><i>Coming soon...</i></li>
          </ul>

          <h2 id="UCM" class="Lato1">University of California, Merced</h2>
          <p class="Lato1"><big>Coming soon...</big></p>

          <h2 id="projects" class="Lato1">Projects</h2>

          <h3 id="APCSP" class="Lato1">AP Computer Science Principles project</h3>
          <p>This project was taught in the only AP Computer Science class in high school in the 2022-23 school year.
            <br>
            When I did the project, I asked users to list between 3 and 10 apps, remove the app names from this Python
            code,<br>
            and after the three remaining names were displayed, or the user inputs "done," the final list was sorted
            alphabetically
            and prints it out.
          </p>

          <h3 id="WRI-001" class="Lato1">Dorothea Puente Case Study</h3>
          <p>In my college writing class at the University of California, Merced (WRI 001), I wrote a final project
            that involved writing a case study of Dorothea Puente. It was assigned by the instructor Cindy Chavez,<br>
            who teaches writing classes, was involved in a car accident a day before school started on August 23,
            2023. She held the entire semester online, with the option of meeting in person (a <i>hyflex</i> class).
          </p>
          <a :href="PDF" class="Lato1">My case study about Dorothea Puente</a>

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
// Add your Composition API logic here
// import { ref } from 'vue'
// const count = ref(0)
import PDF from "@/assets/Dorothea-Puente-case-study.pdf"
</script>
