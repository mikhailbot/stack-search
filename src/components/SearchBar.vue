<template>
  <div class="search-bar">
    <input type="text" v-model="search" />
    <button v-on:click="searchStackOverflow">Search</button>
    <button v-on:click="clearSearchInput">Clear</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    search: {
      get: function () {
        return this.$store.state.search.keywords
      },
      set: function (search) {
        this.$store.dispatch('updateSearchInput', search)
      }
    }
  },

  methods: {
    clearSearchInput () {
      this.$store.dispatch('clearSearchInput')
    },
    searchStackOverflow () {
      this.$store.dispatch('searchStackOverflow')
    }
  }
}
</script>

<style>
</style>
