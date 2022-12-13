<template>
  <section class="life" id="life">
    <h1>About Me</h1>
    <div class="life__content">
      <p>I'd describe myself as a creative person who easily finds inspiration in simple things. I always try to be patient with anything in my life and keep a positive attitude.</p>
      <p>When it comes to hobbies, music takes a special place in my life. I've been a vocalist in a band for several years, then after moving abroad - done songwriting by myself and recorded music at home. Nowadays I'm more involved in another form of art - currently working on writing a novel, which has been my dream for a while.</p>
      <p>I've been practicing yoga for several years now. Last year I also picked roller skating, which I'm still learning but loving so far!</p>
      <p>Also I enjoy reading fiction books, experimenting with vegetarian cuisine, and just going on long beach walks.</p>
      <p>Currently I'm 27 y.o., originally from Kharkiv, Ukraine,
        <br/>now living in Costa da Caparica, a beautiful Portuguese oceanside village located in Lisbon Metropolitan Area.</p>
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
