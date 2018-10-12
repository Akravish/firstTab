<template>
  <div class="home">
    <div class="home__bg">
      <bg-img></bg-img>
    </div>
    <div v-if="configs !== null" class="home__content">
      <div class="home__content-top-right">
        <weather v-if="configs.weather.isShowWeather"></weather>
      </div>

      <div class="home__content-center">
        <timer v-if="configs.timer.isShowTimer"></timer>
        <div
            v-if="configs.greeting.isShowGreeting"
            class="home__content-greeting">
          <greeting></greeting>
        </div>
      </div>
    </div>
  </div>

</template>
<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>
