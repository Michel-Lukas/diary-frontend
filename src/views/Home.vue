<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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
