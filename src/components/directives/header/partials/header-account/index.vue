<template>
  <div class="header-account">
    <div v-if="user === null" class="header-account__unlogged">
      <div class="header-account__unlogged-links">
        <!--#todo this fucntion-->
        <!--<a ng-click="Auth.loginAndGoBack()" title="Login" class="h-sign">Sign In</a>-->
        <router-link :to="'auth/login'"
                     class="header-account__unlogged-btn"
                     title="Sign In">
          Sign In
        </router-link>
      </div>
    </div>

    <div v-if="user !== null" class="header-account__logged">
      <router-link :to="'dashboard'"
                   title="dashboard">
        <img v-if="user.avatar !== null && user.avatar !== ''"
             :src="user.avatar" title="User avatar" class="header-account__logged-img">
        <img v-if="user.avatar === null || user.avatar === ''"
             src="~@/assets/img/source/icon-men.png" title="User avatar" class="header-account__logged-img">
      </router-link>

      <router-link :to="'dashboard'"
                   title="dashboard">
        <span class="header-account__logged-text">{{user.fullName}}</span>
      </router-link>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>

