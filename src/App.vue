<template>
  <div id="app">
    <search-bar></search-bar>
    <results-list></results-list>
  </div>
</template>

<script>
export default {
  name: 'app',

  components: {
    searchBar: require('./components/SearchBar.vue'),
    resultsList: require('./components/ResultsList.vue')
  },
  }
</script>

<style></style>
