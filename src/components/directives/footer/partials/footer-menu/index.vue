<template>
  <div class="footer-menu">
    <div class="wrapper">
      <ul class="footer-menu__list clearfix">
        <li>
          <router-link :to="{ name:'aboutUs' }" title="About Us">About Us</router-link>
        </li>
        <li>
          <router-link :to="{ name:'contactUs' }" title="Contact Us">Contact Us</router-link>
        </li>
        <li>
          <router-link :to="'pages({slug:terms-of-use})'" title="Terms of Use">Terms of Use</router-link>
        </li>
        <li>
          <router-link :to="'pages({slug:terms-of-use})'" title="Privacy">Privacy</router-link>
        </li>
        <li>
          <router-link :to="{ name:'FaQ' }" title="FAQ">FAQ</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>

