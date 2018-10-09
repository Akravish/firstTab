<template>
  <div v-if="OWPData !== null" class="weather">

    <div class="weather__temp">
      <div v-if="weatherClassIcon !== null" class="weather__temp-icon wi" :class="weatherClassIcon"></div>
      <div class="weather__temp-num nowrap">{{OWPData.main.temp}}&#176;</div>
      <div class="weather__temp-tooltip nowrap">{{OWPData.weather[0].description}}</div>
    </div>

    <div class="weather__name">{{OWPData.name}}</div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>