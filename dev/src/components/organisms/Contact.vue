<template>
  <section class="contact" id="contact">
    <p>Email: <a href="mailto:rudich1anastasia@gmail.com" target="_blank">rudich1anastasia@gmail.com</a></p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/anastasiia-rudych/" target="_blank">Anastasiia Rudych</a></p>
    <p>Facebook: <a href="https://www.facebook.com/anastasiia.rudych.3/" target="_blank">Anastasiia Rudych</a></p>
    <p>Instagram: <a href="https://www.instagram.com/anastasijkar/" target="_blank">@anastasijkar</a></p>
  </section>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style scoped lang="scss">
  @import '@/assets/mixins.scss';
  @import '@/assets/variables.scss';

  .contact {
    @include FWsection();
    justify-content: center;
    flex-direction: column;
    font-size: 1.1em;
    padding: 3em;
    box-sizing: border-box;
    min-height: calc(100vh - 150px);

    p {
      margin-bottom: 1em;
      opacity: .75;
    }
  }
</style>
