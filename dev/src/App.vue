<template>
  <div>
    <Navigation />
    <Landing />
    <WhoAmI />
    <Jobs />
    <Skills />
    <Life />
    <Contact />
    <Copy />
  </div>
</template>

<script>
import Landing from './components/organisms/Landing.vue';
import WhoAmI from './components/organisms/WhoAmI.vue';
import Jobs from './components/organisms/Jobs.vue';
import Skills from './components/organisms/Skills.vue';
import Life from './components/organisms/Life.vue';
import Contact from './components/organisms/Contact.vue';
import Copy from './components/molecules/Copy.vue';
import Navigation from './components/molecules/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Landing,
    WhoAmI,
    Jobs,
    Skills,
    Life,
    Contact,
    Copy
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:wght@300;400&display=swap');
@import './assets/variables.scss';
@import './assets/reset.scss';
@import './assets/global.scss';

body {
  font-family: 'Philosopher', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white;
  background-color: $black;
  min-height: 100vh;
  min-width: 100vw;
  font-size: 20px;
}
</style>
