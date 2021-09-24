<template>
  <div>
    <!-- v-bind 생략어 :(콜론) -->
    <slot name="address" :returnData="returnData"></slot>
    Footer props : {{ message }}
  </div>
</template>

<script>
export default {
  name: "address",
  // 하위 컴퍼넌트(slot)에서 데이터 전달하는 방법
  data() {
    return {
      returnData: "주소 입력 공간"
    }
  },
  props: {
    message: {
      type: String,
      default: '기본 주소'
    },
  },
  // String type
  // props: {
  //   message: String
  // },

  // Array type
  // props: ['message']
}
</script>