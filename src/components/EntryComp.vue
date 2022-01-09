<template>
  <div class="card text-white bg-secondary mb-3">
    <div class="card-header">{{entry.date}} at {{entry.time}}</div>
    <div class="card-body">
      <p class="card-text">{{entry.input}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EntryComp',
  props: {
    entry: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
