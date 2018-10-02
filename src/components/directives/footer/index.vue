<template>
  <div class="footer">


    <footer-menu v-if="isShowFooterMenu"></footer-menu>

    <div class="footer__content">
      <div class="wrapper">
        <div class="footer__info">
          <div class="footer__info-left">
            <router-link v-if="content.meta"
                         :to="'home'"
                         class="footer__logo"
                         title="Home">
              <img :src="content.meta.bwMainLogo" alt="PTD">
            </router-link>
          </div>
          <div class="footer__info-right">
            <div class="footer__social-text">Follow Us</div>
            <div v-if="content.meta" class="footer__social-links">
              <!--<noindex>-->
                <a rel="nofollow"
                   :href="content.meta.facebookProfileUri"
                   title="Facebook"
                   class="facebook"></a>
              <!--</noindex>-->
              <!--<noindex>-->
                <a rel="nofollow"
                   :href="content.meta.twitterProfileUri"
                   title="Twitter"
                   class="twitter"></a>
              <!--</noindex>-->
              <!--<noindex>-->
                <a rel="nofollow"
                   :href="content.meta.googleProfileUri"
                   title="Google +"
                   class="googleplus"></a>
              <!--</noindex>-->
            </div>
          </div>
        </div>
      </div>
      <div v-if="content.meta" class="footer__copy">{{content.meta.copyrightNotice}}</div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>