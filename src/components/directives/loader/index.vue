<template>
  <div v-if="content.loaderState === true" class="page-loader">
    <div class="page-loader__content pull-center">
      <pulse-loader
          :loading="true"
          :color="'#ff4600'"
          :size="'10px'">
      </pulse-loader>

      <div class="page-loader__content-text mt-es">
        <transition-group
            v-if="content.loaderText !== null && content.loaderText.length > 1"
            name="fade"
            tag="ul"
            mode="out-in"
            class="page-loader__content-list">
          <li
              v-for="item in collectionOfText"
              v-if="item.isActive"
              :key="item.id">
            <span>{{ item.text }}</span>
          </li>
        </transition-group>
        <span v-if="content.loaderText !== null && content.loaderText.length === 1">
          {{content.loaderText[0]}}
        </span>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>