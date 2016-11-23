<template>
  <div class="results-list">
    <div v-if="this.results.searching" class="notice">
      Searching...
    </div>

    <div v-if="this.results.items.length">
      <div v-on:click="clearSearchInputAndResults" class="clear">Clear results</div>
      <div v-for="item in results.items">
        <results-item :item="item"></results-item>
      </div>
    </div>
    <div v-else>
      <div class="notice">
        Simple Vue + Vuex application to search StackOverflow, created as an experiment to learn Vuex
        <!-- Add empty results notice, however it also displays on first load -->
      </div>
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

.notice {
  text-align: center;
  margin-top: 2rem;
  font-size: 1.3rem;
}

.clear {
  text-align: center;
  padding: 1rem;
}
</style>
