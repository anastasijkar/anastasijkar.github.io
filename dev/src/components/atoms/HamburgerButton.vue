<template>
  <div role="button" class="hamburger" :class="{ 'open': toggled }">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'HamburgerButton',
  props: {
    toggled: Boolean
  }
}
</script>

<style scoped lang="scss">
  @import '@/assets/variables.scss';

  .hamburger {
    width: 60px;
    height: 45px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg) scale(0.6);
    -webkit-transition: .5s ease-in-out .25s;
    -moz-transition: .5s ease-in-out .25s;
    -o-transition: .5s ease-in-out .25s;
    transition: .5s ease-in-out .25s;
    cursor: pointer;

    span {
      display: block;
      position: absolute;
      height: 3px;
      width: 100%;
      background: $white;
      border-radius: 3px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: .25s ease-in-out .25s;
      -moz-transition: .25s ease-in-out .25s;
      -o-transition: .25s ease-in-out .25s;
      transition: .25s ease-in-out .25s;

      &:nth-child(1) {
        top: 0px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
      }

      &:nth-child(2) {
        top: 18px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
      }

      &:nth-child(3) {
        top: 36px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
      }
    }

    &.open {
      span {
        &:nth-child(1) {
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);
          top: -3px;
          left: 8px;
        }

        &:nth-child(2) {
          width: 0%;
          opacity: 0;
        }

        &:nth-child(3) {
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          transform: rotate(-45deg);
          top: 39px;
          left: 8px;
        }
      }
    }
  }
</style>
