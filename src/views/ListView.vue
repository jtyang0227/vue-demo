<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from "../components/common/ListItem";
import {} from "@/api";

export default {
  name: "ListView",
  components: {
    ListItem,
  },

  // ListItem 전달 값 선언
  data() {
    return {
    }
  },

  // API Callback
  methods: {
    name() {

    }
  },

  // API Call
  created() {
    // this.api
  }
}
</script>

<style scoped>

</style>