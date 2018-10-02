<template>
  <div class="home">
    <div class="home__content">

      <div class="home__content-center">
        <timer v-if="configs.timer.isShowTimer"></timer>
        <div
            v-if="configs.greeting.isShowGreeting"
            class="home__content-greeting">
          <greeting ></greeting>
        </div>
      </div>
    </div>
    <!--<div class="page__header">-->
      <!--<header-component></header-component>-->
    <!--</div>-->
    <!--<div class="page__content">-->
      <!--<home-video></home-video>-->
      <!--<div v-if="isContentLoaded === true">-->
        <!--<you-ask></you-ask>-->
        <!--<why-profitable></why-profitable>-->
        <!--<home-business></home-business>-->
        <!--<know-your-taxes></know-your-taxes>-->
        <!--<home-sign-in></home-sign-in>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="page__footer">-->
      <!--<footer-component is-show-footer-menu></footer-component>-->
    <!--</div>-->
  </div>

</template>
<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>
