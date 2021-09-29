<template>
  <footer>
    <hr>
    <app-address  v-bind:message="messageString">
      <template #address="{ returnData }">
        <address>
        {{ returnData }}
        </address>
      </template>
    </app-address>
  </footer>
</template>

<script>
import AppAddress from "./AppAddress";

export default {
  components: {
    AppAddress,
  },

  data() {
    return {
      // 상위 컴퍼넌트(slot)에서 데이터 전달하는 방법
      messageString: "slot 전달",
    }
  },
}
</script>
