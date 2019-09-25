<template>
  <div id="app">
    <Head/>
    <How/>
    <Join/>
    <Faq/>
    <Footer/>
  </div>
</template>

<script>
import Head from './components/Head.vue'
import How from './components/How.vue'
import Join from './components/Join.vue'
import Faq from './components/Faq.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Head,
    How,
    Join,
    Faq,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
