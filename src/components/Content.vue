<template>
  <div class="wrapper-content" id="element-1">
    <div class="content">
      <div class="content-item">
        <div>{{ $t("main.galiev") }}</div>
        <div>{{ $t("main.azat") }}</div>
      </div>
      <div class="content-item">
        <div>{{ $t("main.frontend_developer") }}</div>
        <div>{{ $t("main.years_old_ufa") }}</div>
      </div>
      <div class="content-item">
        <span
          class="content-item-lang"
          :class="{ active: isActiveRu }"
          @click="switchLang('ru')"
        >
          RU {{ "\u00A0" }}</span
        >
        |
        <span
          class="content-item-lang"
          :class="{ active: isActiveEn }"
          @click="switchLang('en')"
          >{{ "\u00A0" }} ENG
        </span>
      </div>
    </div>
    <div class="content-image">
      <img src="@/assets/foto.jpg" alt="photo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      isActiveRu: false,
      isActiveEn: true,
    };
  },
  methods: {
    switchLang(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        if (locale === "ru") {
          console.log("fdf");
          this.isActiveRu = true;
          this.isActiveEn = false;
        } else {
          this.isActiveEn = true;
          this.isActiveRu = false;
        }
      }
    },
  },
};
</script>

<style lang="scss"></style>
