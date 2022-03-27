<template>
  <section class="landing">
    <h1>Hi! My name is <span>Anastasiia Rudych</span> and I am <span>JS developer</span>.</h1>
    <!--<div class="landing__bubbles">
      <Bubble
        :xOffset="'57vw'"
        :yOffset="'23vh'"
        :angle="-21"
        @click="goToSection('#whoami')"
      >Who am I?</Bubble>
      <Bubble
        :xOffset="'16vw'"
        :yOffset="'27vh'"
        :angle="10"
        @click="goToSection('#jobs')"
      >Employment history</Bubble>
      <Bubble
        :xOffset="'17.5vw'"
        :yOffset="'52vh'"
        :angle="-2"
        @click="goToSection('#skills')"
      >Skills</Bubble>
      <Bubble
        :xOffset="'30vw'"
        :yOffset="'74vh'"
        :angle="-9"
        @click="goToSection('#life')"
      >Life outside work</Bubble>
      <Bubble
        :xOffset="'64vw'"
        :yOffset="'64vh'"
        :angle="7"
        @click="goToSection('#contact')"
      >Contacts</Bubble>
    </div>-->
  </section>
</template>

<script>
import { scrollIntoView } from '@/utils/scrollIntoView';

//import Bubble from '../atoms/Bubble.vue';

export default {
  name: 'Landing',
  /*components: {
    Bubble
  },*/
  methods: {
    goToSection(anchor) {
      scrollIntoView(anchor);
    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/assets/mixins.scss';
  @import '@/assets/variables.scss';

  .landing {
    @include FWsection();
    align-items: center;

    h1 {
      max-width: 500px;
      text-align: left;
      font-size: 10vw;
      margin: 0 auto;
      width: 85%;

      span {
        background: #1e8761cc;
        line-height: 0.45em;
        display: inline-block;
      }

      @media (min-width: 570px) {
        font-size: 3em;

        h1 {
          width: auto;
        }
      }
    }
  }
</style>
