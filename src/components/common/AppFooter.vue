<template>
  <footer>
    <h5>footer</h5>
    <app-address message="messageString"></app-address>
  </footer>
</template>

<script>
import AppAddress from "./AppAddress";

export default {
  components: {
    AppAddress,
  },
  data() {
    return {
      messageString: "props 전달합니다."
    }
  },
}
</script>

<style scoped>

</style>