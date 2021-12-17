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
      entries: [
        {
          id: 2,
          input: 'This is my first Entry',
          date: 'September 1st 2021',
          time: '10.00 pm'
        },
        {
          id: 3,
          input: 'This is my best Entry',
          date: 'November 5th 2021',
          time: '11.15 am'
        },
        {
          id: 4,
          date: 'December 25th 2021',
          time: '8.45 pm'
        }

      ]
    }
  }
}
</script>

<style scoped>

</style>
