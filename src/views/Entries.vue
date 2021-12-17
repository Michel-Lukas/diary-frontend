<template>
  <h1>This is where you find all your Diary Entries!</h1>
  <ul class="list-group list-group-flush">
    <div class="col" v-for="entry in entries" :key="entry.id">
      <li class="list-group-item">Entry from {{entry.date}}. Written at {{entry.time}} </li>
    </div>
  </ul>
  <button style="position:absolute;bottom:20px;right:25px;margin:0;padding:5px 5px;" type="button" class="btn btn-primary">Write New Entry</button>
</template>

<script>

export default {
  name: 'Entries',
  data () {
    return {
      entries: []
    }
  },
  methods: {
    mounted () {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      fetch('http://localhost:8080/api/v1/entries', requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(entry => {
          this.entries.push(entry)
        }))
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>

</style>
