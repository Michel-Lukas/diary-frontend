<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="entry in entries" :key="entry.id">
      <EntryComp :entry="entry"></EntryComp>
    </div>
  </div>
</template>

<script>
import EntryComp from './EntryComp'
export default {
  name: 'EntryCompList',
  components: { EntryComp },
  props: {
    entries: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
