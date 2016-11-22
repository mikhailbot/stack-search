<template>
  <div class="results-list">
    <h1>Results</h1>

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
  ])
}
</script>

<style>
</style>
