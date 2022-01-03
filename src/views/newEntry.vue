<template>
  <h1>Write Your New Diary Entry!</h1>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <input class="form-control" type="text" placeholder="Dear Diary, " readonly>
      </div>
      <div class="col offset-6">
        <input class="form-control" type="text" placeholder="Time" readonly>
      </div>
      <div class="col">
        <input class="form-control" type="text" placeholder="Date" readonly>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label></label>
          <textarea class="form-control" rows="5" id="comment" v-model="input"></textarea>
          <small class="form-text text-muted">
            This is a safe space to write about your day.
          </small>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-outline-primary" type="submit" @click.prevent="createEntry">Done!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newEntry',
  data () {
    return {
      input: '',
      date: '',
      time: ''
    }
  },
  methods: {
    createEntry () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/entries'
      const today = new Date().toISOString().slice(0, 10)
      const timehelp = new Date()
      const time = timehelp.getHours() + ':' + timehelp.getMinutes()
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        input: this.input,
        date: today,
        time: time
      })

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }
      console.log(time)

      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))
      console.log(this.input)
    }
  }
}
</script>

<style scoped>

</style>
