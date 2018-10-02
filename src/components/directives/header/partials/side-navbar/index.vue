<template>

  <div class="side-navbar">
    <div @click.stop="isShowSideNavbar = !isShowSideNavbar"
         class="side-navbar__btn"
         :class="{'active': isShowSideNavbar}">
      <span></span>
    </div>
    <div class="side-navbar__content">
      <v-navigation-drawer
        v-model="isShowSideNavbar"
        right
        hide-overlay
        fixed>
        <ul>
          <!--dashboard link-->
          <li v-if="user"
              class="side-navbar__content-item side-navbar__profile">
            <router-link :to="'dashboard'"
                         title="Home">
              <img v-if="user.avatar !== null && user.avatar !== ''"
                   :src="user.avatar"
                   title="User avatar"
                   class="side-navbar__profile-img">
              <img v-if="user.avatar === null || user.avatar === ''"
                   src="~@/assets/img/source/icon-men.png"
                   title="User avatar"
                   class="side-navbar__profile-img">
              <span class="side-navbar__profile-text">Dashboard</span>
            </router-link>
          </li>
          <!--END dashboard link-->
          <!--user link-->
          <li v-if="user"
              class="side-navbar__content-item">
            <router-link :to="'home'"
                         title="Home Page">
              Home Page
            </router-link>
          </li>
          <li v-if="user"
              class="side-navbar__content-item">
            <router-link :to="'exemption-check'"
                         title="My Exemption">
              My Exemption
            </router-link>
          </li>
          <li v-if="user"
              class="side-navbar__content-item">
            <router-link :to="'county-info({slug:cook})'"
                         title="County Taxes">
              County Taxes
            </router-link>
          </li>
          <li v-if="user"
              class="side-navbar__content-item">
            <router-link :to="'township-tax-info({county:cook})'"
                         title="Township Taxes">
              Township Taxes
            </router-link>
          </li>
          <li v-if="user"
              class="side-navbar__content-item">
            <router-link :to="'appeal-schedule({county:cook})'"
                         title="Appeal Schedules">
              Appeal Schedules
            </router-link>
          </li>
          <!--END user link-->
          <!--general links-->
          <li class="side-navbar__content-item">
            <router-link :to="'subscription-plans'"
                         title="Plans & Pricing">
              Plans & Pricing
            </router-link>
          </li>
          <li class="side-navbar__content-item">
            <router-link :to="'faq'"
                         title="FAQ">
              FAQ
            </router-link>
          </li>
          <li class="side-navbar__content-item">
            <router-link :to="'contact-us'"
                         title="Contact Us">
              Contact Us
            </router-link>
          </li>
          <li class="side-navbar__content-item">
            <router-link :to="'about-us'"
                         title="About Us">
              About Us
            </router-link>
          </li>
          <!--END general links-->
        </ul>
        <div class="side-navbar__auth pull-center mt-m">
          <!--# todo login-->
          <v-btn
              v-if="!user"
              :to="'auth/login'"
              class="v-btn--sw-230 side-navbar__auth-btn">
            Sign In
          </v-btn>
          <!--# todo  unlogin-->
          <v-btn
              v-if="user"
              @click="logout()"
              class="v-btn--sw-230 side-navbar__auth-btn">
            Logout
          </v-btn>
        </div>


        <!--&lt;!&ndash;=========22==============&ndash;&gt;-->
        <!--<div class="main-menu-lists" :class="{'dashboard-show': user}" >-->
          <!--<div class="js-scrollbar scrollbar-inner scrollbar-thin" js-scrollbar>-->
            <!--<div class="main-menu-additional-list">-->
              <!--<div ng-if="user">-->
                <!--<ul class="main-menu-page-links">-->

                <!--</ul>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--&lt;!&ndash;=========33==============&ndash;&gt;-->


      </v-navigation-drawer>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>

