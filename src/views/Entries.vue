<template>
  <h1>This is where you find all your Diary Entries!</h1>
  <ul class="list-group list-group-flush">
    <div class="col" v-for="entry in entries" :key="entry.id">
      <li class="list-group-item">Entry from {{entry.date}} at {{entry.time}}. {{ entry.input }} </li>
    </div>
  </ul>
  <EntryButton style="position:absolute;bottom:20px;right:25px;margin:0;padding:5px 5px;" type="button" class="btn btn-primary">Write New Entry</EntryButton>
</template>

<script>

import EntryButton from '../components/EntryButton'
export default {
  name: 'Entries',
  components: { EntryButton },
  data () {
    return {
      entries: []
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/entries'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(entry => {
        this.entries.push(entry)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
