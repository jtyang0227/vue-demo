<template>
  <header>
    <div>
      <button @click="goBack">이전</button>
      <button @click="goPage">다음</button>
    </div>

    <div id="nav">
      <router-link to="/">사용</router-link>
      |
      <router-link to="/chargeMain">충전</router-link>
      |
      <router-link to="/benefitMain">해택</router-link>
      |
      <router-link to="/myPage">my</router-link>
      |
      <router-link to="/login">Login</router-link>
      <router-view/>
    </div>
    AppHeader : {{ propsData }}
  </header>
</template>

<script>
export default {
  props: ['propsData'],
  methods: {
    goBack() {
      window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/');
    },
    goPage() {
      window.history.forward();
    },
  }
}
</script>

<style scoped>
</style>