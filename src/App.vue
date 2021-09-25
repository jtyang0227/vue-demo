<template>
  <div id="app" class="app">
    <!--      <app-content v-on:onEmit="increaseNumber"></app-content>-->
    <app-header :propsData="num" />
    <item-list @emitName="paramNum" />
    <app-footer />
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

  methods: {
    // increaseNumber() {
    //   this.num++;
    // },

    // emit
    paramNum(value) {
      alert('emit : '+value);
      this.num = value;
    }
  },
  mounted() {
  },
  updated() {
  },
}
</script>
