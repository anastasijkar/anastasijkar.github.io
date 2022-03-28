<template>
  <section class="jobs" id="jobs">
    <h1>Employment history</h1>
    <div class="jobs__carousel-wrapper">
      <Carousel :itemsToShow="1.3" :wrapAround="true" :transition="1000" :breakpoints="breakpoints">
        <Slide v-for="entry in jobData" :key="entry.title">
          <div class="carousel__item">
            <JobEntry
              :title="entry.title"
              :tags="entry.tags"
              :techs="entry.techs"
              :description="entry.description"
            />
          </div>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script>
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

import JobEntry from '../molecules/JobEntry.vue';

export default {
  name: 'Jobs',
  components: {
    Carousel,
    Slide,
    Pagination,
    JobEntry
  },
  data() {
    return {
      breakpoints: {
        870: {
          itemsToShow: 2.3,
        },
      },
      jobData: [{
        title: 'Apptension',
        tags: ['2021-now', 'Poznan | PL'],
        techs: ['React', 'Vue', 'Typescript'],
        description: `<p><strong>Responsibilities:</strong> working on ongoing and new projects, architecting, coding, & maintaining.</p>
        <p>I took part in development of various projects - from small marketing campaign landings to large CRM-like applications. I've been involved mostly in Frontend works, though for some time came back to Firebase and Node.js; also I had a chance to try out React Native. During my work here I've put effort into enhancing my skills in unit testing and writing better accessible HTML.</p>
        <p><strong>Tech stack:</strong> HTML5, SCSS, TypeScript, React/Redux, Vue/Vuex, Nuxt, react-testing-library, Jest, Node, Firebase, React Native.</p>`
      }, {
        title: 'Appchance',
        tags: ['2020-2021', 'Poznan | PL'],
        techs: ['Vue', 'Typescript'],
        description: `<p><strong>Responsibilities:</strong> working on ongoing and new projects, architecting, coding, & maintaining.</p>
        <p>Here I’ve worked on several e-commerce projects, sometimes had to implement whole Frontend-side by myself from scratch. Had a chance to enhance my TypeScript skills and gain on-hand experience with server-rendering.</p>
        <p><strong>Tech stack:</strong> HTML5, SCSS, TypeScript, Vue/Vuex, Vuetify, Nuxt, Jest/Enzyme.</p>`
      }, {
        title: 'Liki MS',
        tags: ['2019-2020', 'Gdansk | PL'],
        techs: ['React'],
        description: `<p><strong>Responsibilities:</strong> working on ongoing and new projects, architecting, coding, & maintaining.</p>
        <p>I have been working mostly on a Frontend part here. Have been involved into several short-term projects, worked as a part of a team or independently.</p>
        <p><strong>Tech stack:</strong> HTML5, SCSS, ES6+, React/Redux (Redux Saga), Material UI, React Storybook, GraphQL.</p>`
      }, {
        title: 'TBWA /X',
        tags: ['2018-2019', 'Kharkiv | UA'],
        techs: ['React', 'Node'],
        description: `<p><strong>Responsibilities:</strong> working on ongoing and new projects, R&D prototyping, architecting, coding, refactoring & maintaining.</p>
        <p>Here I’ve started as Frontend developer, have put a lot of effort into web animations, developed web games. Later on I was promoted to Full Stack JS & switched to backend development with Node.</p>
        <p><strong>Tech stack:</strong> HTML5, SCSS, React/Redux, various animation & gaming libraries (such as GSAP, anime.js etc), ES6+; Node.js, Firebase.</p>`
      }, {
        title: 'Inn4Science',
        tags: ['2017-2018', 'Kharkiv | UA'],
        techs: ['Angular.js', 'Vue'],
        description: `<p><strong>Responsibilities:</strong> working on ongoing projects, coding, refactoring & maintaining.</p>
        <p>Here I’ve gained a lot of experience in direct communication with customers from all around the world, also was mentoring frontend trainees.</p>
        <p><strong>Tech stack:</strong> HTML5, CSS3/SASS/SCSS, Angular.js, Vue.js/Vuex, JS, CoffeeScript, TypeScript, ES6, axios, various libraries & styling toolkits.</p>`
      }, {
        title: 'Software Engineering Studies',
        tags: ['2013-2017', 'Bachelor\'s degree', 'Kharkiv | UA'],
        description: `<p>“Computer Science” faculty, dep. “Software Engineering and Management Information Technologies”.</p>
        <p>National Technical University “Kharkiv Polytechnical Institute”</p>`
      }, {
        title: 'Genie Solutions',
        tags: ['2013', 'Part-time', 'Kharkiv | UA'],
        techs: ['html', 'css'],
        description: `<p><strong>Responsibilities:</strong> creating/correcting html markup.</p>
        <p>This was my first IT job - to try things out :)</p>`
      }]
    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/assets/mixins.scss';

  .jobs {
    @include FWsection();
    flex-direction: column;
    padding: 10em 0;

    h1 {
      @include largeHeading();
    }

    &__carousel-wrapper {
      margin: 0 auto;
    }
  }
</style>

<style lang="scss">
  @import '@/assets/variables.scss';

  .jobs {
    .carousel {
      width: 100vw;
    }

    .carousel__slide {
      padding: 30px 0;
    }

    .carousel__pagination-button {
      background-color: $white;
      height: 2px;
      width: 15px;
      margin: 0 8px;
      transition: width 0.5s ease-out;

      &--active {
        width: 65px;
      }
    }
    
    .carousel__slide > .carousel__item {
      transform: scale(1);
      opacity: 0.5;
      transition: 0.5s;
      height: 100%;
      cursor: grab;
    }
    .carousel__slide--visible > .carousel__item {
      opacity: 1;
      transform: rotateY(0);
    }
    .carousel__slide--next > .carousel__item {
      transform: scale(0.9) translate(-10px);
    }
    .carousel__slide--prev > .carousel__item {
      transform: scale(0.9) translate(10px);
    }
    .carousel__slide--active > .carousel__item {
      transform: scale(1.1);
    }
  }
</style>