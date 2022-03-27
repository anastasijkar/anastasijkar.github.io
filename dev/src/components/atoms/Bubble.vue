<template>
  <div class="bubble" :style="bubbleStyle">
    <div class="bubble__inner-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bubble',
  props: {
    xOffset: {
      type: Number,
      default: 0
    },
    yOffset: {
      type: Number,
      default: 0
    },
    angle: {
      type: Number,
      default: 0
    }
  },
  computed: {
    bubbleStyle() {
      return {
        right: this.xOffset,
        top: this.yOffset,
        '--rotation': `rotate(${this.angle}deg)`
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/assets/mixins.scss';
  @import '@/assets/variables.scss';

  @include floatingAnimation(var(--rotation));

  .bubble {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    text-align: center;
    position: absolute;
    animation: floating 3s ease-in-out infinite;
    cursor: pointer;

    &:hover {
      animation-play-state: paused;
    }

    &__inner-wrapper {
      //@include bgGradient($green-light, $green-dark);
      background: url('@/assets/brush.svg');
      background-size: 100% 100%;
      display: inline-block;
      color: #fff;
      padding: 18px 40px;
      font-size: 0.9em;
      opacity: 0.85;
      border-radius: 20px;
      white-space: nowrap;
      transition: transform .3s ease-in-out;

      &:hover {
        transform: scale(1.075) rotate(3deg);
      }
    }
  }
</style>
