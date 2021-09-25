<template>
  <div>
    <h1>Login</h1>
    <div class="loginInput">
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

      <div>
        <span>
          <input type="checkbox">
          <label>아이디 저장</label>
        </span>
        <span>
          <input type="checkbox">
          <label>자동 로그인</label>
        </span>
      </div>
    </div>

    <div class="btnStyle" :class="{ active: isActive }">
      <input type="submit" value="로그인"/>
    </div>
    <!--    <form @submit="onSubmit">-->
    <!--      <input placeholder="Enter your ID" v-model="uid">-->
    <!--      <input placeholder="Enter your password" v-model="password">-->
    <!--    </form>-->
  </div>
</template>

<script>
import validator from '../../../validator/validator.js'

export default {
  name: "userLogin",
  watch: {
    memberIdCheck(value) {
      this.errorMessages.memberId = validator.validate("아이디", value)
    },
    memberPasswordCheck(value) {
      this.errorMessages.memberPassword = validator.validate("비밀번호", value)
    }
  },
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
      isActive: false,
    }
  },
  methods: {
    onSubmit() {
      this.errorMessages.memberId = validator.validate("아아디", this.memberIdCheck)
    }
  },
  computed: {
  },
}
</script>