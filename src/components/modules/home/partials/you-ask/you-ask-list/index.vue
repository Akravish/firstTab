<template>
  <ul class="you-ask-list clearfix">
    <li v-for="(subsection, key) in content.sections[1].subsections"
        :class="{ 'active': key === activeSubsectionKey }">
      <div class="you-ask-list__content" @click="toggleSubsection(key)">
        <div class="you-ask-list__content-icon"></div>
        <div class="you-ask-list__content-title">{{subsection.title}}</div>
      </div>

      <v-dialog v-if="arrayOfSidebar.length > 0"
                transition="dialog-right-transition"
                content-class="v-dialog-sidebar you-ask-list__sidebar"
                @input="toggleSubsection(key)"
                attach=".you-ask"
                v-model="arrayOfSidebar[key]">

        <div class="you-ask-list__sidebar-content">
          <div class="you-ask-list__sidebar-close" @click="toggleSubsection(key)"></div>
          <div class="you-ask-list__sidebar-title mb-m">
            {{subsection.title}}
          </div>
          <div class="you-ask-list__sidebar-text">
            {{subsection.content}}
          </div>
          <div class="pull-center">
            <v-btn class="v-btn--sw-270 mt-s you-ask-list__sidebar-btn"
                   :to='content.sections[4].slug'>
              {{subsection.button}}
            </v-btn>
          </div>
        </div>
      </v-dialog>



      <!--#todo-->
      <!--<md-button ng-click="goTo(subsection.type)" class="mt-s btn-transparent btn-w-270">{{subsection.button}}</md-button>-->

    </li>
  </ul>

</template>
<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>

