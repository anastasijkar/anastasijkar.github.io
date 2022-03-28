<template>
  <section class="life" id="life">
    <h1>About Me</h1>
    <div class="life__content">
      <p>I'd describe myself as a creative person who gets easily inspired by new things (and even simple things) and is excited about meeting new people. I always try to be patient with anything in my life and keep a positive attitude.</p>
      <p>When it comes to hobbies, music takes a special place in my life. I've been a vocalist in a band for several years, now do songwriting by myself and record music at home. I like to travel, but who doesn't? :) Top-3 things in this topic for me have always been: airplanes, discovering new tasty foods, and going to music festivals!</p>
      <p>I am also interested in yoga, cooking, and eco lifestyle.</p>
      <p>Currently I'm 26 y.o., originally from Kharkiv, Ukraine, now living in Poznań, Poland.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Life',
}
</script>

<style scoped lang="scss">
  @import '@/assets/mixins.scss';

  .life {
    @include FWsection();
    justify-content: flex-start;
    flex-direction: column;
    padding: 10em 0 5em;

    h1 {
      @include largeHeading();
    }

    &__content {
      padding: 4em 3em;
      max-width: 600px;
      margin: 0 auto;

      p {
        margin-bottom: 1.5em;
        font-style: italic;
        line-height: 1.2em;
      }
    }
  }
</style>
