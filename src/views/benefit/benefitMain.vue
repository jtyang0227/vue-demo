<template>
  <div>
    <h1>해택 메인페이지</h1>
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "benefitMain",
  props: {
    title: {
      type: String,
      default: 'default title'
    },
  },
  data() {
    return {
      childData: "child",
      active: false
    };
  },
  methods: {
    close() {
      this.active = false;
    }
  }
}
</script>