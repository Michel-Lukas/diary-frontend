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
          <textarea class="form-control" rows="5" id="comment"></textarea>
          <small class="form-text text-muted">
            This is a safe space to write about your day.
          </small>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-outline-primary">Done!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newEntry'
}
</script>

<style scoped>

</style>
