<template>
  <div class="home-sign-in">
    <div class="wrapper">
      <!--#todo-->
      <!--<div class="pull-center" ng-if="!Auth.isAuthenticated()" >-->
      <div class="pull-center" >
        <div class="home-sign-in-title" v-html="content.sections[6].title"></div>
        <v-btn
            :to="{name: 'authLogin'}"
            class="home-sign-in-btn">
          {{content.sections[6].button}}
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>

