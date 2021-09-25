<template>
  <div>
    <h1>충전 메인페이지</h1>
    <h3>watch</h3>
    <p>{{ message }}, watch 사용하는 부분은 api call, route.push()</p>
  </div>
</template>

<script>

export default {
  name: "chargeMain",
  data() {
    return {
      message: 'Hello',
      reversedMessage: '',
    }
  },

  watch: {
    message: function (newVal) {
      this.reversedMessage = newVal.split('').reverse().join('')
    }
  }
}
</script>