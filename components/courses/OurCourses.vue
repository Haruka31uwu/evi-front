<template>
  <section class="our-courses-section pt-5">
    <div class="section-title" style="margin-bottom: 2em">
      <h2>Nuestros cursos</h2>
      <div class="section-decorator" style="left:5em;width: 80%;"></div>
    </div>
    <div class="our-courses-banner" style="position: relative;">
      <div class="our-courses-banner-text" >
        <p style="line-height: 1.5;margin: 0;">
          Brindamos
          <span @click="scrollIntoView('courses-list')">cursos</span> y
          <span @click="scrollIntoView('programs-list')">programas </span> de
          capacitación orientados a profesionales y estudiantes de diversas
          áreas de la salud.
        </p>
        
      </div>
      <svg
        style="position: absolute;bottom: 0;left: 0;"
          xmlns="http://www.w3.org/2000/svg"
          width="169"
          height="93"
          viewBox="0 0 169 93"
          fill="none"
        >
          <g opacity="0.2">
            <path
              d="M4.24095 6.14258C10.2134 6.14667 57.5382 6.14258 57.5382 6.14258C56.1045 8.82647 55.8436 11.2652 56.1889 16.9733C56.1889 16.9733 9.56887 16.9708 4.24095 16.9733C-1.08696 16.9758 -1.73149 6.13848 4.24095 6.14258Z"
              fill="#F0F0F0"
            />
            <path
              d="M11.3873 78.9121C15.6734 78.9162 49.6359 78.9121 49.6359 78.9121C48.607 81.596 48.4198 84.0347 48.6676 89.7428C48.6676 89.7428 15.2108 89.7404 11.3873 89.7428C7.56369 89.7453 7.10115 78.908 11.3873 78.9121Z"
              fill="#F0F0F0"
            />
            <path
              d="M40.5096 44.8301C48.871 44.8342 115.126 44.8301 115.126 44.8301C113.119 47.514 112.753 49.9527 113.237 55.6608C113.237 55.6608 47.9687 55.6583 40.5096 55.6608C33.0505 55.6633 32.1482 44.826 40.5096 44.8301Z"
              fill="#F0F0F0"
            />
            <path
              d="M89.8785 16.2012C95.8713 16.1971 143.358 16.2012 143.358 16.2012C141.919 13.5173 141.657 11.0786 142.004 5.37045C142.004 5.37045 95.2246 5.37293 89.8785 5.37045C84.5324 5.36797 83.8856 16.2053 89.8785 16.2012Z"
              fill="#F0F0F0"
            />
            <path
              d="M80.3343 89.3926C84.4799 89.3885 117.329 89.3926 117.329 89.3926C116.334 86.7087 116.153 84.27 116.392 78.5618C116.392 78.5618 84.0325 78.5643 80.3343 78.5618C76.6361 78.5594 76.1888 89.3967 80.3343 89.3926Z"
              fill="#F0F0F0"
            />
            <path
              d="M148.816 55.1113C157.178 55.1072 223.432 55.1113 223.432 55.1113C221.425 52.4274 221.06 49.9887 221.543 44.2806C221.543 44.2806 156.275 44.2831 148.816 44.2806C141.357 44.2781 140.455 55.1154 148.816 55.1113Z"
              fill="#F0F0F0"
            />
            <circle cx="71.6089" cy="12.3569" r="10.1538" fill="#F0F0F0" />
            <circle cx="63.6968" cy="82.7964" r="10.1538" fill="#F0F0F0" />
            <circle cx="129.203" cy="51.3257" r="10.1538" fill="#F0F0F0" />
          </g>
        </svg>
        <svg
        style="position: absolute;bottom: 0;right: 0;"
          xmlns="http://www.w3.org/2000/svg"
          width="169"
          height="93"
          viewBox="0 0 169 93"
          fill="none"
        >
          <g opacity="0.2">
            <path
              d="M4.24095 6.14258C10.2134 6.14667 57.5382 6.14258 57.5382 6.14258C56.1045 8.82647 55.8436 11.2652 56.1889 16.9733C56.1889 16.9733 9.56887 16.9708 4.24095 16.9733C-1.08696 16.9758 -1.73149 6.13848 4.24095 6.14258Z"
              fill="#F0F0F0"
            />
            <path
              d="M11.3873 78.9121C15.6734 78.9162 49.6359 78.9121 49.6359 78.9121C48.607 81.596 48.4198 84.0347 48.6676 89.7428C48.6676 89.7428 15.2108 89.7404 11.3873 89.7428C7.56369 89.7453 7.10115 78.908 11.3873 78.9121Z"
              fill="#F0F0F0"
            />
            <path
              d="M40.5096 44.8301C48.871 44.8342 115.126 44.8301 115.126 44.8301C113.119 47.514 112.753 49.9527 113.237 55.6608C113.237 55.6608 47.9687 55.6583 40.5096 55.6608C33.0505 55.6633 32.1482 44.826 40.5096 44.8301Z"
              fill="#F0F0F0"
            />
            <path
              d="M89.8785 16.2012C95.8713 16.1971 143.358 16.2012 143.358 16.2012C141.919 13.5173 141.657 11.0786 142.004 5.37045C142.004 5.37045 95.2246 5.37293 89.8785 5.37045C84.5324 5.36797 83.8856 16.2053 89.8785 16.2012Z"
              fill="#F0F0F0"
            />
            <path
              d="M80.3343 89.3926C84.4799 89.3885 117.329 89.3926 117.329 89.3926C116.334 86.7087 116.153 84.27 116.392 78.5618C116.392 78.5618 84.0325 78.5643 80.3343 78.5618C76.6361 78.5594 76.1888 89.3967 80.3343 89.3926Z"
              fill="#F0F0F0"
            />
            <path
              d="M148.816 55.1113C157.178 55.1072 223.432 55.1113 223.432 55.1113C221.425 52.4274 221.06 49.9887 221.543 44.2806C221.543 44.2806 156.275 44.2831 148.816 44.2806C141.357 44.2781 140.455 55.1154 148.816 55.1113Z"
              fill="#F0F0F0"
            />
            <circle cx="71.6089" cy="12.3569" r="10.1538" fill="#F0F0F0" />
            <circle cx="63.6968" cy="82.7964" r="10.1538" fill="#F0F0F0" />
            <circle cx="129.203" cy="51.3257" r="10.1538" fill="#F0F0F0" />
          </g>
        </svg>
    </div>
    <div class="our-couses-description">
      <div class="our-courses-description-text mt-1">
        <p>
          Nuestros cursos están enmarcados en dos programas de formación:
          <br />
          <span @click="scrollIntoView('investigation-courses')">
            Investigación en salud
          </span>
          y
          <span @click="scrollIntoView('evidences-courses')">
            Medicina basada en evidencias.
          </span>
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
import { scrollIntoView } from "/composables/main-composables.js";
</script>