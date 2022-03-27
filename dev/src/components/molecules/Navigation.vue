<template>
  <div>
    <div class="menu-button-wrapper" @click="toggleMobileMenu">
      <HamburgerButton :toggled="mobileMenuOpen" />
    </div>
    <nav class="navigation" :class="{ 'toggled': mobileMenuOpen, 'touched': mobileMenuTouched, 'desktop-visible': desktopMenuVisible }">
      <span class="navigation__title">Anastasiia Rudych · JS developer</span>
      <span class="navigation__link" @click="goToSection('#whoami')">Who Am I?</span>
      <span class="navigation__link" @click="goToSection('#jobs')">Employment history</span>
      <span class="navigation__link" @click="goToSection('#skills')">Skills</span>
      <span class="navigation__link" @click="goToSection('#life')">Life outside work</span>
      <span class="navigation__link" @click="goToSection('#contact')">Contacts</span>
    </nav>
  </div>
</template>

<script>
import { scrollIntoView } from '@/utils/scrollIntoView';

import HamburgerButton from '@/components/atoms/HamburgerButton.vue';

export default {
  name: 'Navigation',
  components: {
    HamburgerButton
  },
  mounted() {
    let timeout = setTimeout(() => {
      this.desktopMenuVisible = true;
      clearTimeout(timeout);
    }, 800);
  },
  data() {
    return {
      mobileMenuOpen: false,
      mobileMenuTouched: false,
      desktopMenuVisible: false
    }
  },
  methods: {
    goToSection(anchor) {
      this.mobileMenuOpen = false;
      scrollIntoView(anchor);
    },
    toggleMobileMenu() {
      if (!this.mobileMenuTouched) {
        this.mobileMenuTouched = true;
      }
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/mixins.scss';
@import '@/assets/variables.scss';

  .navigation {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    background: $black;
    box-sizing: border-box;
    display: flex;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: 2;
    text-transform: lowercase;
    flex-direction: column;
    padding: 3em 10%;
    font-size: 1.75rem;
    transform: translateX(-100vw);
    max-height: 100vh;
    overflow-y: auto;

    &.touched {
      transition: transform .8s ease-out;
    }

    &.toggled {
      transform: translateX(0);
    }

    &__title {
      text-align: left;
      margin-bottom: 2em;
    }

    &__link {
      font-style: normal;
      text-decoration: none;
      opacity: 0.75;
      transition: opacity .25s ease-in;
      font-size: 0.9em;
      cursor: pointer;
      text-align: left;
      margin: 0 0 1em;

      &:hover {
        opacity: 1;
      }
    }

    @media (min-width: $mobile-breakpoint) {
      height: 60px;
      align-items: center;
      justify-content: flex-end;
      padding: 0 2em;
      font-size: 1.2rem;
      flex-direction: row;
      max-height: unset;
      overflow-y: unset;
      transform: translateY(-60px);
      
      &.desktop-visible {
        transform: translateY(0);
      }

      &::after {
        @include bgGradient($black, transparent);
        content: "";
        width: 100%;
        height: 25px;
        display: block;
        position: fixed;
        top: 60px;
        left: 0;
      }

      &__title {
        flex: 1;
        margin: 0;
      }

      &__link {
        margin: 0 0 0 1em;
      }
    }
  }

  .menu-button-wrapper {
    position: fixed;
    right: .5em;
    top: .5em;
    z-index: 3;

    @media (min-width: $mobile-breakpoint) {
      display: none;
    }
  }
</style>
