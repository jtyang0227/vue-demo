<template>
  <section>
    <div>
<!--      <input type="text"-->
<!--             v-model="emitData"-->
<!--             v-on:keyup.enter="onEmit"-->
<!--      />-->
<!--      <button v-on:click="onEmit">onEmit</button>-->
      <button v-on:click="addNumber">addNumber</button>
    </div>
  </section>
</template>

<script>
// import UseMain from "./useMain";
export default {
  // components: {UseMain},
  data() {
    return {
      emitData: '',
    }
  },
  methods: {
    // onEmit() {
    //   this.$emit('message', {message: this.emitData})
    // },
    addNumber() {
      // emit event name : increase
      this.$emit('emitName', 10);
    }
  }
}
</script>

<style scoped>

</style>
