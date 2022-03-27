<template>
  <div class="skill-category">
    <h3>
      <slot name="title"></slot>
    </h3>
    <div class="skill-category__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsCategory',
}
</script>

<style scoped lang="scss">
  @import '@/assets/mixins.scss';
  @import '@/assets/variables.scss';

  .skill-category {
    border: 1px solid $white;
    padding: 2.5em;
    background: $black;

    h3 {
      font-weight: bold;
      background-color: $black;
      border: 2px solid $green-light;
      display: inline-block;
      padding: 0.5em 0.85em;
      border-radius: 50%;
      position: absolute;
      transform: translate(-50%, -3.2em);
    }

    &__content {
      line-height: 1.5em;
      text-align: left;
    }
  }
</style>
