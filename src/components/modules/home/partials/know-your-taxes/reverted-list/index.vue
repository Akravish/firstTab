<template>
  <ul class="reverted-list">
    <li v-for="action in content.sections[5].actions">
      <div class="reverted-list__content">
        <div class="reverted-list__front">
          <img v-if="action.type == 'county'" src="~@/assets/img/source/home/map-icon.png" alt="">
          <img v-if="action.type == 'township'" src="~@/assets/img/source/home/placeholder-icon.png" alt="">
          <img v-if="action.type == 'appeal'" src="~@/assets/img/source/home/calendar-icon.png" alt="">
          <p>{{action.title}}</p>
        </div>
        <div class="reverted-list__back">
          <div>
            <div class="page-text" v-html="action.content"></div>
            <div class="pull-center">
              <v-btn v-if="action.type == 'county'"
                     to='/'>
                <!--ui-sref="county-info({slug: pageContent.county})"-->
                {{action.button}}
              </v-btn>

              <v-btn v-if="action.type == 'township'"
                     to='/'>
                     <!--ui-sref="township-tax-info({slug: pageContent.county})"-->
                {{action.button}}
              </v-btn>

              <v-btn v-if="action.type == 'appeal'"
                     to='/'>
                <!--ui-sref="appeal-schedule({slug: pageContent.county})"-->
                {{action.button}}
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>

