<template>
  <h1>This is where you find all your Diary Entries!</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="entry in entries" :key="entry.id">
        <div class="card text-white bg-primary mb-3">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">{{entry.date}} at {{entry.time}}</h5>
            <p class="card-text">{{entry.input}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
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
