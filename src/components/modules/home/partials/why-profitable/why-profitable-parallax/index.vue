<template>
  <ul class="why-profitable-list">
    <!--parallax-->
    <!--parallax-ratio="0.2"-->
    <!--parallax-vertical-offset="50"-->
    <!--parallax-horizontal-offset="0"-->
    <li>
        <div  class="why-profitable-list__graph-block">
          <div class="why-profitable-list__graph-content">
            <div class="why-profitable-list__graph-title mt-b">
              Instant Property Tax Analysis!
            </div>
            <div class="why-profitable-list__graph-img">
              <img src="~@/assets/img/source/home/infographic-1@2x.png" alt="">
            </div>

          </div>
        </div>
      <!--parallax-item-->
        <div class="why-profitable-list__info-block">
          <div class="number">1</div>
          <div class="text" v-html="content.sections[2].subsections[0].content"></div>
        </div>
    </li>
    <!--parallax-->
    <!--parallax-ratio="0.2"-->
    <!--parallax-vertical-offset="50"-->
    <!--parallax-horizontal-offset="0"-->
    <li>
      <div class="why-profitable-list__graph-block">
        <div class="why-profitable-list__graph-content">
          <div class="why-profitable-list__graph-title mt-b">
            Instant Exemptions & Refund Analysis
          </div>
          <div class="why-profitable-list__graph-img">
            <img src="~@/assets/img/source/home/infographic-2@2x.svg" alt="">
          </div>
        </div>
      </div>
      <!--parallax-item-->
      <div class="why-profitable-list__info-block">
        <div class="number">2</div>
        <div class="text" v-html="content.sections[2].subsections[1].content"></div>
      </div>
    </li>
    <!--parallax-->
    <!--parallax-ratio="0.2"-->
    <!--parallax-vertical-offset="50"-->
    <!--parallax-horizontal-offset="0"-->
    <li>
      <div class="why-profitable-list__graph-block">
        <div class="why-profitable-list__graph-content">
          <div class="why-profitable-list__graph-title mt-b">
            Don't Miss a single Appeal Deadline
          </div>
          <div class="why-profitable-list__graph-img">
            <img src="~@/assets/img/source/home/infographic-3@2x.png" alt="">
          </div>
        </div>
      </div>
      <!--parallax-item -->
      <div class="why-profitable-list__info-block">
        <div class="number">3</div>
        <div class="text" v-html="content.sections[2].subsections[2].content"></div>
      </div>
    </li>
    <!--parallax-->
    <!--parallax-ratio="0.2"-->
    <!--parallax-vertical-offset="50"-->
    <!--parallax-horizontal-offset="0"-->
    <li>
      <div class="why-profitable-list__graph-block">
        <div class="why-profitable-list__graph-content">
          <div class="why-profitable-list__graph-title mt-b">
            Find Property Tax Attorney Near You Online
          </div>
          <div class="why-profitable-list__graph-img">
            <img src="~@/assets/img/source/home/infographic-4@2x.png" alt="">
          </div>
        </div>
      </div>
      <!--parallax-item -->
      <div class="why-profitable-list__info-block">
        <div class="number">4</div>
        <div class="text" v-html="content.sections[2].subsections[3].content"></div>
      </div>
    </li>
  </ul>
</template>
<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>

