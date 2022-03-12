<template>
  <div class="wrapper-project-item">
    <div
      class="project-container"
      v-for="project in projects"
      :key="project.id"
    >
      <div class="project-image">
        <img :src="getImgUrl(project.src)" alt="project icon" />
      </div>
      <div class="project-name">
        <a :href="project.href">{{ project.name }}</a>
      </div>
      <div class="project-description">
        {{ $t("main." + project.description) }}
      </div>
      <div class="project-technology">
        {{ $t("main.technology") }} : {{ project.technology }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectItem",
  props: {
    projects: {
      type: Array,
      require: true,
    },
  },
  methods: {
    getImgUrl(pic) {
      return require("@/assets/" + pic);
    },
  },
};
</script>

<style lang="scss"></style>
