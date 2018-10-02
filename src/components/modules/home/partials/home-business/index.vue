<template>
  <div class="home-business">
    <div class="home-business__clients">
      <div class="wrapper">
        <div class="home-business__title">{{content.sections[4].title}}</div>
        <ul class="home-business__list-icon mt-s mb-b clearfix">
          <li v-for="client in content.sections[4].clients">
            <img v-if='client.id == 1' src="~@/assets/img/source/home/business-icon1.png" :alt="client.content">
            <img v-if='client.id == 2' src="~@/assets/img/source/home/business-icon2.png" :alt="client.content">
            <img v-if='client.id == 3' src="~@/assets/img/source/home/business-icon3.png" :alt="client.content">
            <img v-if='client.id == 4' src="~@/assets/img/source/home/business-icon4.png" :alt="client.content">
            <p>{{client.content}}</p>
          </li>
        </ul>
        <div class="home-business__lists-wrapper mb-b clearfix">
          <ul class="icon-list-pointers">
            <li v-for="benefit in content.sections[4].benefits.slice(0, content.sections[4].benefits.length / 2)">{{benefit.content}}</li>
          </ul>
          <ul class="icon-list-pointers">
            <li v-for="benefit in content.sections[4].benefits.slice(content.sections[4].benefits.length / 2, content.sections[4].benefits.length)">{{benefit.content}}</li>
          </ul>
        </div>
        <div class="pull-center">
          <v-btn class="v-btn--sw-450 home-business__btn"
                 :to='content.sections[4].slug'>
            {{content.sections[4].button}}
          </v-btn>
        </div>
      </div>
    </div>
    <div class="home-business__companies pt-m">
      <div class="wrapper">
        <div class="f-table">
          <div class="f-td">
            <img src="~@/assets/img/source/home/chepov-scott@2x.png" class="chepov-scott" alt="">
          </div>
          <div class="f-td">
            <img src="~@/assets/img/source/home/geltco@2x.png" class="geltco" alt="">
          </div>
          <div class="f-td">
            <img src="~@/assets/img/source/home/b-w@2x.png" class="b-w" alt="">
          </div>
          <div class="f-td">
            <img src="~@/assets/img/source/home/realty-advisors@2x.png" class="realty-advisors" alt="">
          </div>
          <div class="f-td">
            <img src="~@/assets/img/source/home/coldwell@2x.png" class="coldwell" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>

