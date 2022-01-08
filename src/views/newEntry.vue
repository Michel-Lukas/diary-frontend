<template>
  <h1>Write Your New Diary Entry!</h1>
  <create-entry-form @created="addEntry"></create-entry-form>
</template>

<script>
import CreateEntryForm from '@/components/createEntryForm'
export default {
  name: 'newEntry',
  components: { CreateEntryForm },
  methods: {
    addEntry (entryLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + entryLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(entry => this.entries.push(entry))
        .then(error => console.log('error', error))
    }
  }
}

</script>

<style scoped>

</style>
