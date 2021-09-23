<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  name: "Address",

  // String type
  props: {
    message: String
  },

  // Array type
  // props: ['message']
}
</script>

<style scoped>

</style>