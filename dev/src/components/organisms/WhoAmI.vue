<template>
  <section class="whoami" id="whoami">
    <div class="whoami__content">
      <img src="@/assets/pic.jpeg" alt="My personal photo" />
      <p class="standwithukraine">
        <span>#standWithUkraine</span>🇺🇦
      </p>
      <p>In the good old 2017, the year when I finished my <strong>Software Engineering studies</strong>, my journey in IT industry has begun.</p>
      <p>Now I have <strong>5 years of JS developer career</strong> behind my back, still counting!</p>
      <p>I love building usable, responsive and accessible web applications. Also I eventually enjoy working on complex animations, or server-side stuff.
      <br />I’m a big fan of Vue.js :)</p>
      <p>
        <em>At the moment I'm open for work opportunities in Portugal, ideally with a relocation package 🇵🇹</em>
      </p>
      <p>If you’d like to learn more - I invite you to scroll down to read about my career and skills. Also, please feel free to <a @click.prevent="goToContacts">drop me a line!</a></p>
    </div>
  </section>
</template>

<script>
import { scrollIntoView } from '@/utils/scrollIntoView';

export default {
  name: 'WhoAmI',
  methods: {
    goToContacts() {
      scrollIntoView('#contact');
    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/assets/mixins.scss';
  @import '@/assets/variables.scss';

  .whoami {
    @include FWsection();
    justify-content: flex-start;
    flex-direction: column;
    padding: 10em 0 5em;

    &__content {
      padding: 0 3em;
      max-width: 600px;
      margin: 0 auto;

      img {
        width: 200px;
        border-radius: 50%;
        //margin-bottom: 1.5em;
        border: 1px solid $green-dark;
      }

      p {
        line-height: 1.1em;
        margin-bottom: 1em;

        a {
          cursor: pointer;
        }

        &::first-letter {
          font-size: 1.5em;
        }

        &.standwithukraine {
          position: relative;
          top: -0.85em;
          font-style: italic;

          &::first-letter {
            font-size: inherit;
          }

          span {
            background: -webkit-linear-gradient(right, #317ac1, #f6db00);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
    }
  }
</style>
