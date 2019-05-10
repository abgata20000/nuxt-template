<template lang="pug">
  .site-content-all
    the-header
    the-content
      nuxt
    the-footer
</template>
<script>
import TheHeader from "~/components/layouts/organisms/TheHeader"
import TheContent from "~/components/layouts/organisms/TheContent"
import TheFooter from "~/components/layouts/organisms/TheFooter"

export default {
  head() {
    const bodyClass = this.$store.getters.bodyClass
    return { bodyAttrs: { class: bodyClass } }
  },
  components: {
    TheHeader,
    TheContent,
    TheFooter
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {}
}
</script>
