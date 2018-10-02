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


        </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>