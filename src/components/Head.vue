<template>
  <div class="wrapper-head">
    <Slide right :closeOnNavigation="true" v-if="small">
      <div class="head-nav" v-for="item in navTitles" :key="item.id">
        <div class="head-nav-item" v-scroll-to="`#element-${item.id}`">
          {{ $t("main." + item.title) }}
        </div>
      </div>
    </Slide>
    <div class="head-nav" v-for="item in navTitles" :key="item.id" v-else>
      <div class="head-nav-item" v-scroll-to="`#element-${item.id}`">
        {{ $t("main." + item.title) }}
      </div>
    </div>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";

export default {
  name: "Head",
  components: {
    Slide,
  },
  data() {
    return {
      small: false,
      navTitles: [
        {
          id: 1,
          title: "home",
        },
        {
          id: 2,
          title: "about_me",
        },
        {
          id: 3,
          title: "skills",
        },
        {
          id: 4,
          title: "portfolio",
        },
        {
          id: 5,
          title: "contacts",
        },
      ],
    };
  },
  methods: {
    onResize() {
      this.small = window.innerWidth <= 600;
    },
  },
  created() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>
