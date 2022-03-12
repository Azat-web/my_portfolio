<template>
  <div id="app" class="wrapper">
    <Head />
    <Content />
    <AboutMe />
    <Skills />
    <Portfolio />
    <Contacts />
  </div>
</template>

<script>
import Head from "../src/components/Head";
import Content from "../src/components/Content";
import AboutMe from "../src/components/AboutMe";
import Skills from "../src/components/Skills";
import Portfolio from "../src/components/Portfolio";
import Contacts from "../src/components/Contacts";

export default {
  name: "App",
  components: {
    Head,
    Content,
    AboutMe,
    Skills,
    Portfolio,
    Contacts,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./theme/theme.scss";
</style>
