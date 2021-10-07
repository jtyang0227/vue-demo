<template>
  <div>
    <h1>충전 메인페이지</h1>
    <h3>watch</h3>
    <p>{{ message }}, watch 사용하는 부분은 api call, route.push()</p>
    {{ reversedMessage }}

    <input v-model="question"/>
    <p>{{ answer }}</p>
  </div>
</template>

<script>
export default {
  name: "chargeMain",
  data() {
    return {
      message: 'Hello',
      question: '',
      answer: '질문을 하기 전까지는 대답할 수 없습니다.'
    }
  },

  computed: {
    reversedMessage: function () {
      // `this` 는 vm 인스턴스를 가리킵니다.
      return this.message.split('').reverse().join('')
    }
  },
  watch: {},
  created: function () {
  },
  methods: {}
}
</script>