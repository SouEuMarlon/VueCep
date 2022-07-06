<template>
  <Header />
  <Form />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Form,
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  @apply flex flex-col justify-between h-screen;
}
</style>
