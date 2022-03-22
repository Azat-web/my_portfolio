<template>
  <div class="wrapper-project">
    <div>
      <div class="text">
        {{ $t("main.real_project") }}
      </div>
      <ProjectItem :projects="realProjects" />
    </div>
    <div>
      <div class="text">
        {{ $t("main.pet_project") }}
      </div>
      <ProjectItem :projects="petProjects" />
    </div>
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";

export default {
  name: "PortfolioProject",
  components: {
    ProjectItem,
  },
  data() {
    return {
      realProjects: [
        {
          id: 1,
          src: "letstell.png",
          href: "https://app.letstell.ru/auth/login",
          name: "Letstell",
          description: "letstell",
          technology: "Frontend - HTML, CSS, JS, Vue.js, Vuex. Backend - PHP",
        },
      ],
      petProjects: [
        {
          id: 1,
          src: "notes.png",
          href: "https://frolicking-liger-89dca4.netlify.app/",
          name: "Notes App(Nuxt.js, SSR)",
          description: "note_application",
          technology: "HTML, CSS, JS, Vue.js, Nuxt.js, Vuex, API",
        },
        {
          id: 2,
          src: "notes.png",
          href: "https://practical-banach-e9040e.netlify.app/",
          name: "Notes App",
          description: "note_application",
          technology: "HTML, CSS, JS, Vue.js, Vuex, API",
        },
        {
          id: 3,
          src: "player.png",
          href: "https://azat-web.github.io/vue__music/",
          name: "Web audio player",
          description: "application_for_playing_music",
          technology: "HTML, CSS, JS, Vue.js",
        },
        {
          id: 4,
          src: "weather.png",
          href: "https://azat-web.github.io/weather__react/",
          name: "Current weather forecast",
          description: "weather",
          technology: "HTML, CSS, JS, React.js",
        },
        {
          id: 5,
          src: "todo.png",
          href: "https://romantic-engelbart-ea5b51.netlify.app/#",
          name: "Todo list",
          description: "todo_list",
          technology: "HTML, CSS, JS, React.js",
          realProject: false,
        },
        {
          id: 6,
          src: "design.png",
          href: "https://azat-web.github.io/design.github.io/",
          name: "Design studio",
          description: "design_studios",
          technology: "HTML, CSS, JS",
        },
        {
          id: 7,
          src: "collage.png",
          href: "https://azat-web.github.io/photoalbum/",
          name: "Photo collage",
          description: "photo_collage",
          technology: "HTML, CSS",
          realProject: false,
        },
        {
          id: 8,
          src: "bali.png",
          href: "https://azat-web.github.io/bali/",
          name: "Tour agency",
          description: "travel",
          technology: "HTML, CSS",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
