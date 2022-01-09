<template>
  <h1>This is where you find all your Diary Entries!</h1>
  <div class="container-fluid">
    <entry-comp-list :entries="this.entries"></entry-comp-list>
  </div>
  <button style="position:absolute;bottom:20px;right:25px;margin:0;padding:5px 5px;" type="button" class="btn btn-primary">Write New Entry</button>
</template>

<script>

import EntryCompList from '../components/EntryCompList'
export default {
  name: 'Entries',
  components: { EntryCompList },
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
