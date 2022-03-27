<template>
  <div class="job-entry">
    <h2>{{ title }}</h2>
    <div class="job-entry__tags">
      <span class="job-entry__tag" v-for="tag in tags" :key="`tag_${tag}`">
        {{ tag }}
      </span>
      <span class="job-entry__tag job-entry__tag--techs" v-for="tech in techs" :key="`tech_${tech}`">
        {{ tech }}
      </span>
    </div>
    <div class="job-entry__desc" v-html="description"></div>
  </div>
</template>

<script>
export default {
  name: 'JobEntry',
  props: {
    title: String,
    tags: Array,
    techs: Array,
    description: String
  }
}
</script>

<style scoped lang="scss">
  @import '@/assets/variables.scss';

  .job-entry {
    padding: 0 30px 20px;
    text-align: left;

    h2 {
      font-weight: bold;
    }

    &__desc {
      font-size: 0.9em;
      line-height: 1.1em;
    }

    &__tags {
      margin: 0.4em 0;
    }

    &__tag {
      font-size: 0.7em;
      font-weight: bold;
      border: 1px solid $white;
      padding: 4px 11px;
      border-radius: 12px;
      display: inline-block;
      margin: 0 0.4em 0.4em 0;

      &--techs {
        border-color: $green-light;
      }
    }

    @media (min-width: $mobile-breakpoint) {
      padding-bottom: 50px;
    }
  }
</style>

<style lang="scss">
  .job-entry__desc {
      p {
        margin-bottom: 0.3em;
      }
  }
</style>