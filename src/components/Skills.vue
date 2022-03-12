<template>
  <div class="wrapper-skills" id="element-3">
    <div class="title">{{ $t("main.skills") }}</div>
    <div class="text">{{ $t("main.i_write_code_with") }}</div>
    <div class="technology">
      <TechnologyItem />
    </div>
  </div>
</template>

<script>
import TechnologyItem from "./TechnologyItem.vue";

export default {
  name: "Skills",
  components: {
    TechnologyItem,
  },
};
</script>

<style lang="scss"></style>
