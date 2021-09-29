<template>
  <div id="app">
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
    // Emit
    paramNum(value) {
      console.log('emit value callback');
      // alert('emit : '+value);
      this.num = value;
    }
  },
  mounted() {
  },
  updated() {
  },
}
</script>
