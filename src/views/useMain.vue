<template>
  <div>
    <h1>사용 메인페이지</h1>
    <h2>computed</h2>
    <p>원본 메시지: "{{ message }}"</p>
    <p>역순으로 표시한 메시지: "{{ reversedMessage }}"</p>

    <button v-on:click="changeNameSetter('yang jongtae')">Change Name (setter)</button><br>
    firstName : {{ firstName }}<br>
    lastName : {{ lastName }}<hr>

  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "안녕하세요",
      firstName: '성',
      lastName: '이름'
    }
  },
  components: {},
  computed: {
    // getter
    reversedMessage: function () {
      // `this` 는 vm 인스턴스를 가리킵니다.
      console.log(this);
      return this.message.split('').reverse().join('')
    },

    fullName: {
      get() {
        return this.firstName + ' ' + this.lastName;
      },
      set(newValue) {
        const setName = newValue.split(' ');
        this.firstName = setName[0];
        this.lastName = setName[setName.length - 1];
      }
    }
  },

  methods: {
    changeNameSetter: function (newName) {
      this.fullName = newName;
    }
  },
};
</script>