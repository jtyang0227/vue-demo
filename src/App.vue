<template>
  <div id="app">
    <app-header :propsData="num"></app-header>
    <!--  emit(1)  -->
    <item-list @emitName="paramNum"></item-list>
    <app-footer></app-footer>
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
    // emit(2)
    paramNum(value) {
      console.log('emit value callback');
      alert('emit : ' + value);
      this.num = value;
    }
  },
  mounted() {
  },
  updated() {
  },
}
</script>
