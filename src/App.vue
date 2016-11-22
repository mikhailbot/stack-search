<template>
  <div id="app">
    <search-bar></search-bar>
  </div>
</template>

<script>
export default {
  name: 'app',

  components: {
    searchBar: require('./components/SearchBar.vue')
  },
  }
</script>

<style></style>
