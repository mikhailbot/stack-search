<template>
  <div class="search-bar">
    <input class="search" type="text" v-model="search" placeholder="Search StackOverflow" v-on:keyup.enter="searchStackOverflow" />
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
.search {
  display: block;
  position: relative;
  margin: 1rem auto;
  padding: 1rem 0;
  width: 300px;
  box-sizing: border-box;
  color: #444;
  font-size: 1.6rem;
  outline: 0;
  border: none;
  transition: all 0.5s cubic-bezier(0.64, 0.09, 0.08, 1);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #140b47 4%);
  background-position: -300px 0;
  background-size: 300px 100%;
  background-repeat: no-repeat;
}

.search:focus {
  background-position: 0 0;
  color: #444;
  transition: all 0.5s cubic-bezier(0.64, 0.09, 0.08, 1);
}
</style>
