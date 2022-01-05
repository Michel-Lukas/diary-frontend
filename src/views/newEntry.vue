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
    <form class="row needs-validation">
      <div class="col">
        <div class="form-group">
          <label for="validationCustom03" class="form-label"></label>
          <input type="text" class="form-control" id="validationCustom03" v-model="input" required>
          <div class="invalid-feedback">
            Please provide a valid city.
          </div>
          <small class="form-text text-muted">
            This is a safe space to write about your day.
          </small>
        </div>
      </div>
    </form>
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
      const valid = this.validate()
      if (valid) {
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
    },
    validate () {
      let valid = true
      const forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              valid = false
              event.preventDefault()
              event.stopPropagation()
            }

            form.classList.add('was-validated')
          }, false)
        })
      return valid
    }
  }
}
</script>

<style scoped>

</style>
