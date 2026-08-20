<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 flex flex-col justify-between">
    <NavbarMenu />
    <main class="max-w-4xl mx-auto p-6 space-y-6">
      <h1 class="text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4">My Education and Projects</h1>
          <h2 class="text-3xl font-bold text-white pt-2" id="school">Schools I attended</h2>

          <ul class="list-disc list-inside space-y-1 text-gray-300 pl-2">
            <li>Lakeshore Elementary School, San Francisco (2010-16)</li>
            <li>James Denman Middle School, San Francisco (2016-19)</li>
            <li>Philip & Sala Burton High School, San Francisco (2019-23)</li>
            <li>University of California, Merced (2023-)</li>
          </ul>
          <h3 class="text-2xl font-semibold text-indigo-400" id="ossProg">Out-of-School Programs</h3>
          <ul>
            <li>YMCA of San Francisco (2014-16)</li>
            <li>Boys and Girls Club of San Francisco (2016-20, 2021-23)</li>
          </ul>

          <h2 class="text-3xl font-bold text-white pt-2" id="related">Related Courses</h2>

          <p class="text-gray-300 leading-relaxed">Related courses were used when I was studying an important course covered over college.</p>
          <ul>
            <li><i>Coming soon...</i></li>
          </ul>

          <h2 class="text-3xl font-bold text-white pt-2" id="UCM">University of California, Merced</h2>
          <p class="text-gray-300 leading-relaxed"><big>Coming soon...</big></p>

          <h2 class="text-3xl font-bold text-white pt-2" id="projects">Projects</h2>

          <h3 class="text-2xl font-semibold text-indigo-400" id="APCSP">AP Computer Science Principles project</h3>
          <p class="text-gray-300 leading-relaxed">This project was taught in the only AP Computer Science class in high school in the 2022-23 school year.
            <br>
            When I did the project, I asked users to list between 3 and 10 apps, remove the app names from this Python
            code,<br>
            and after the three remaining names were displayed, or the user inputs "done," the final list was sorted
            alphabetically
            and prints it out.
          </p>

          <h3 class="text-2xl font-semibold text-indigo-400" id="WRI-001">Dorothea Puente Case Study</h3>
          <p class="text-gray-300 leading-relaxed">In my college writing class at the University of California, Merced (WRI 001), I wrote a final project
            that involved writing a case study of Dorothea Puente. It was assigned by the instructor Cindy Chavez,<br>
            who teaches writing classes, was involved in a car accident a day before school started on August 23,
            2023. She held the entire semester online, with the option of meeting in person (a <i>hyflex</i> class).
          </p>
          <a :href="PDF">My case study about Dorothea Puente</a>
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

import PDF from "@/assets/Dorothea-Puente-case-study.pdf"
</script>
