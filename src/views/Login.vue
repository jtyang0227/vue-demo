<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="onSubmit">
      <input v-model="memberIdCheck"
             id="memberId"
             class="memberId"
             type="text"
             ref="memberId"
      />
      <p v-if="errorMessages.memberId">{{ errorMessages.memberId[0] }}</p>

      <input v-model="memberPasswordCheck"
             id="memberPassword"
             class="memberPassword"
             type="password"
             ref="memberPassword"
      >
      <p v-if="errorMessages.memberPassword">{{ errorMessages.memberPassword[0] }}</p>

      <button type="submit">Submit</button>
    </form>

    <!--    <form @submit="onSubmit">-->
    <!--      <input placeholder="Enter your ID" v-model="uid">-->
    <!--      <input placeholder="Enter your password" v-model="password">-->
    <!--    </form>-->
  </div>
</template>

<script>
import validator from '../validator/validator.js'

export default {
  name: "Login",
  data() {
    return {
      uid: '',
      password: '',
      memberIdCheck: '',
      memberPasswordCheck: '',
      errorMessages: {
        memberId: [],
        memberPassword: [],
      },
    }
  },
  watch: {
    memberIdCheck(value) {
      this.errorMessages.memberId = validator.validate("아이디", value)
    },
    memberPasswordCheck(value) {
      this.errorMessages.memberPassword = validator.validate("비밀번호", value)
    }
  },
  methods: {
    onSubmit() {
      this.errorMessages.memberId = validator.validate("아아디", this.memberIdCheck)
    }
  },
}
</script>