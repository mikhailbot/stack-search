<template>
  <div class="results-list">
    <button v-on:click="clearSearchInputAndResults" class="clear">Clear results</button>

    <div v-for="item in results.items">
      <results-item :item="item"></results-item>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'results-list',

  components: {
    resultsItem: require('./ResultsItem.vue')
  },

  computed: mapState([
    'results'
  ]),

  methods: {
    clearSearchInputAndResults () {
      this.$store.dispatch('clearSearchInputAndResults')
    }
  }
}
</script>

<style>
.results-list {
  width: 90%;
  margin: auto;
}
</style>
