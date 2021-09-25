<template>
  <div>
    <h1>마이페이지</h1>
    <BaseLayout>
      <template v-slot:header></template>
      <template #main></template>
      <template #footer></template>
    </BaseLayout>
  </div>
</template>

<script>
import BaseLayout from '../../components/layout/BaseLayout';

export default {
  components: {
    BaseLayout
  },
}
</script>