<template>
  <section class="skills" id="skills">
    <h1>Skills</h1>
    <div class="skills__table">
      <SkillCategory>
        <template v-slot:title>Markup</template>
        <template v-slot:content>
          <p>HTML5, CSS3, SCSS/SASS, Responsive Styling</p>
          <p>various libraries &amp; styling toolkits</p>
        </template>
      </SkillCategory>
      <SkillCategory>
        <template v-slot:title>JS &amp; more</template>
        <template v-slot:content>
          <p>ECMAScript 6+, TypeScript</p>
          <p>React/Redux, Vue.js/Vuex, Nuxt</p>
          <p>Node.js, Firebase</p>
          <p>GraphQL</p>
          <p>Basics of C#</p>
        </template>
      </SkillCategory>
      <SkillCategory>
        <template v-slot:title>Testing</template>
        <template v-slot:content>
          <p>Jest</p>
          <p>Enzyme</p>
          <p>testing-library</p>
        </template>
      </SkillCategory>
      <SkillCategory>
        <template v-slot:title>Tools</template>
        <template v-slot:content>
          <p>Webpack, Gulp</p>
          <p>ESLint</p>
          <p>Git</p>
          <p>Jira (+ other Atlassian products)</p>
          <p>Photoshop, inVision, Sketch etc.</p>
        </template>
      </SkillCategory>
      <SkillCategory>
        <template v-slot:title>Languages</template>
        <template v-slot:content>
          <p>Ukrainian - native</p>
          <p>English - fluent</p>
          <p>Russian - fluent</p>
          <p>Polish - intermediate+</p>
          <p>Portuguese - beginner</p>
        </template>
      </SkillCategory>
    </div>
  </section>
</template>

<script>
import SkillCategory from '../molecules/SkillCategory.vue';

export default {
  name: 'Skills',
  components: {
    SkillCategory
  }
}
</script>

<style scoped lang="scss">
  @import '@/assets/mixins.scss';
  @import '@/assets/global.scss';

  .skills {
    @include FWsection();
    justify-content: flex-start;
    flex-direction: column;
    padding: 10em 0;

    h1 {
      @include largeHeading();
    }

    &__table {
      margin-top: 3.5em;
      padding: 0 1.5em;
      perspective: 1000px;
    }

    @media (min-width: $mobile-breakpoint) {
      &__table {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 3em;

        & > * {
          flex: 1 0 21%;
          max-width: 260px;
        }
      }
    }
  }
</style>
