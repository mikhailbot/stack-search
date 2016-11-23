<template>
  <div class="search-bar">
    <input type="text" v-model="search" placeholder="Search StackOverflow" v-on:keyup.enter="searchStackOverflow" />
  </div>
</template>

<script>
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
    searchStackOverflow () {
      this.$store.dispatch('searchStackOverflow')
    }
  }
}
</script>

<style>
</style>
