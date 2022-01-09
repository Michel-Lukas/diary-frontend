<template>

  <div class="home">
    <img alt="diary logo" src="../assets/Diary-Logo.jpeg">
    <HelloWorld msg="Welcome to DEAR DIARY!"/>
    <EntryButton></EntryButton>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import EntryButton from '@/components/EntryButton'

export default {
  name: 'Home',
  components: {
    EntryButton,
    HelloWorld
  }
}
</script>
