<template>
  <div class="home">
    <input-Value></input-Value>
    <input-table></input-table>
  </div>
</template>

<script>
import InputValue from '@/components/InputValue.vue'
import InputTable from '@/components/InputTable.vue'
export default {
  name: 'Home',
  components: {
    InputValue,
    InputTable,
  }
}
</script>

<style>
</style>