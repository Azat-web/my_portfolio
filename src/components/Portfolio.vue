<template>
  <div class="wrapper-portfolio" id="element-4">
    <div class="title">{{ $t("main.portfolio") }}</div>
    <PortfolioProject />
  </div>
</template>

<script>
import PortfolioProject from "./PortfolioProject";

export default {
  name: "Portfolio",
  components: {
    PortfolioProject,
  },
};
</script>

<style lang="scss"></style>
