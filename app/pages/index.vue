<template>
  <section class="container">
    <button @click="echo">echo</button>
  </section>
</template>

<script>
export default {
  components: {},
  methods: {
    echo() {
      this.$consola.log(process.env.API_BASE_URL)
      this.$consola.log(process.env.TEST)
    }
  }
}
</script>
