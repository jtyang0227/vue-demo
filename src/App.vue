<template>
  <div id="app">
    <div id="wrap">
      <app-header :propsData="num"></app-header>
      <!--      <app-content v-on:onEmit="increaseNumber"></app-content>-->
      <item-list @emitName="paramNum"></item-list>
      <app-footer></app-footer>
    </div>
  </div>
</template>
<script>
import AppHeader from "./components/common/AppHeader";
import AppFooter from "./components/common/AppFooter";
import ItemList from "./components/layout/ItemList";

export default {
  components: {
    AppFooter, AppHeader, ItemList
  },
  data() {
    return {
      num: 0
    }
  },
  // emit
  methods: {
    // increaseNumber() {
    //   this.num++;
    // },
    paramNum(value) {
      this.num = value;
    }
  },
  mounted() {
  },
  updated() {
  },
}
</script>

<style scoped>

</style>