<template>
  <header>
    <app-header-layout>
      <!-- v-slot 생략어 # -->
      <template #right>
        <button slot="left" @click="goBack">이전</button>
      </template>
      <template v-slot:left>
        <button slot="right" @click="goPage">다음</button>
      </template>
      <template #close>
        <button slot="close" @click="close">닫기</button>
      </template>
    </app-header-layout>
    <hr>

    <div id="nav">
      <router-link to="/">사용</router-link>
      |
      <router-link to="/chargeMain">충전</router-link>
      |
      <router-link to="/benefitMain">해택</router-link>
      |
      <router-link to="/myPage">마이페이지</router-link>
      |
      <router-link to="/login">로그인</router-link>
      <hr>
    </div>
    <div style="background-color: grey">
      <router-view/>
    </div>

    components return data : {{ propsData }}
  </header>
</template>

<script>
import AppHeaderLayout from '../layout/AppHeaderLayout.vue';

export default {
  components: { AppHeaderLayout },
  props: ['propsData'],
  data() {
    return {
      active: false
    }
  },
  methods: {
    goBack() {
      window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/');
    },
    goPage() {
      window.history.forward();
    },
    close() {
      alert('close');
    }
  }
}
</script>

<style scoped>
</style>