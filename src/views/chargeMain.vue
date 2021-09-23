<template>
  <div>
    <h1>충전 메인페이지</h1>
    <h3>watch</h3>
    <h5>api call, route.push()</h5>
    <p>원본 메시지: "{{ message }}"</p>
    <p>역순으로 표시한 메시지: "{{ reversedMessage }}"</p>
  </div>
</template>

<script>

export default {
  name: "chargeMain",
  data() {
    return {
      message: '안녕하세요',
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