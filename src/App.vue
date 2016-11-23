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

<style>
html, body {
  font-family: system, -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;
  background: #e8f1b9;
  color: #140b47;
}
/* Color scheme http://jxnblk.com/hello-color/?c=140b47 */
</style>
