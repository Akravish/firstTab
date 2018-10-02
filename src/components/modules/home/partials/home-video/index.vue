<template>
  <div class="home-video">
    <div class="home-video__wrapper">
      <div class="home-video__bg">
        <video v-if="isContentLoaded"
               playsinline
               autoplay
               muted
               loop
               :poster="bgVideo.pic"
               class="home-video__bg-video">
          <source :src="bgVideo.url"
                  type="video/mp4">
        </video>

        <div :class="{'home-video__bg-img-hide': isContentLoaded !== false }" class="home-video__bg-img"></div>
      </div>

      <div v-if="content" class="home-video__content">
        <div class="wrapper">
          <h1 class="home-video__content-title pull-center" v-html="content.sections[0].tagLine"></h1>
          <div class="home-video__content-text pull-center mt-s">
            {{content.sections[0].message}}
          </div>
          <div class="home-video__search">
            <div class="home-video__search-title pull-center mb-es">{{content.sections[0].callToAction}}</div>
            <!--<search-property item-change="partPropertyDetail(item)"-->
                             <!--clear="setClearSearchProperty"-->
                             <!--class="search-input">-->
            <!--</search-property>-->
            <div class="home-video__search-example">
              ex.: 1234 North Road, Palatine, Chicago, IL
            </div>
          </div>

          <div class="home-video__popup">
            <div @click="showVideo" class="home-video__popup-btn"></div>
            <div class="home-video__popup-title">How it works?</div>
          </div>
        </div>
      </div>
      <home-video-footer></home-video-footer>

      <home-popup-video></home-popup-video>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>

