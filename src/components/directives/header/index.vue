<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="header__content">
        <div class="header__content-left">
          <router-link v-if="content.meta"
                       :to="'/'"
                       class="header__logo"
                       :title="content.meta.title">
            <img :src="content.meta.mainLogo" alt="PTD">
          </router-link>
        </div>
        <div class="header__content-right">
          <header-account></header-account>
          <side-navbar></side-navbar>
          <!--<div ng-if="filtersMenuShow" filters-menu="filters"></div>-->

          <!--<div ng-if="landingMenuShow && !isMobile">-->
          <!--<span landing-menu landing-links="landingLinks"></span>-->
          <!--</div>-->

          <!--<main-menu landing-menu-show="landingMenuShow"-->
          <!--landing-links="landingLinks"-->
          <!--profile="profile">-->
          <!--</main-menu>-->
        </div>




      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>