<template>
  <div class="wrapper-contacts" id="element-5">
    <div class="title">{{ $t("main.contacts") }}</div>
    <div class="text">
      {{ $t("main.i_can_be_contacted_by_phone") }}
      <div class="text-phone">+79371648556</div>
    </div>
    <div class="social">
      <span class="social-item"
        ><Telegram scale="3" url="https://t.me/garleev"
      /></span>
      <span class="social-item"
        ><WhatsApp scale="3" url="https://wa.me/89371648556"
      /></span>
    </div>
  </div>
</template>

<script>
import { Telegram } from "vue-socialmedia-share";
import { WhatsApp } from "vue-socialmedia-share";

export default {
  name: "Contacts",
  components: {
    WhatsApp,
    Telegram,
  },
};
</script>

<style lang="scss"></style>
