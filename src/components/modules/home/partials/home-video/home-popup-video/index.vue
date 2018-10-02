<template>
  <div>
    <v-dialog content-class="v-dialog-video"
              @input="e => e || closePopupVideo()"
              v-model="isShowPopupVideo">
      <div class="v-dialog-video__wrapper">
        <div class="v-dialog-video__close-btn" @click.stop="closePopupVideo()"></div>
        <div class="v-dialog-video__content">
          <vue-d-player v-if="isContentLoaded"
                        :options="popupDPlayerOptions"
                        ref="popupDPlayer">
          </vue-d-player>
        </div>
      </div>
    </v-dialog>
  </div>
</template>
<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>