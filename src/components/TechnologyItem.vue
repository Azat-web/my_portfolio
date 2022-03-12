<template>
  <div class="wrapper-technology-item">
    <div class="technology-item" v-for="tech in technology" :key="tech.id">
      <div class="techology-item-img">
        <img :src="getImgUrl(tech.src)" alt="techology icon" />
      </div>
      <div class="techology-item-name">
        {{ tech.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "technologyItem",
  data() {
    return {
      technology: [
        { id: 1, src: "html.jpg", name: "HTML" },
        { id: 2, src: "css.png", name: "CSS" },
        { id: 3, src: "sass.png", name: "SASS/SCSS" },
        { id: 4, src: "js.png", name: "JavaScript" },
        { id: 5, src: "vue.png", name: "Vue.js" },
        { id: 6, src: "react.png", name: "React.js" },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("@/assets/" + pic);
    },
  },
};
</script>

<style lang="scss"></style>
