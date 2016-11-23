<template>
  <div class="results-item">
    <div class="item-head">
      <div class="item-date">
        Created <span>{{ createdDate }}</span>
      </div>
      <div class="item-status">
        <span class="answered" v-if="this.item.is_answered"><i class="material-icons">done</i></span>
        <span class="closed" v-if="this.item.closed_date"><i class="material-icons">block</i></span>
      </div>
    </div>
    <div class="item-body">
      <div class="content">
        <div class="item-title">
          <a :href="this.item.link" v-html="this.item.title"></a>
        </div>
        <div class="user">
          <i class="material-icons">person</i> <span>{{ this.item.owner.display_name }}</span>
        </div>
      </div>
      <div class="meta">
        <div class="view count">
          <span>{{ this.item.view_count }}</span> <i class="material-icons">visibility</i>
        </div>
        <div class="answer count">
          <span>{{ this.item.answer_count }}</span> <i class="material-icons">question_answer</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
moment.locale('en')

export default {
  props: [ 'item' ],

  computed: {
    createdDate () {
      return moment.unix(this.item.creation_date).fromNow()
    }
  }
}
</script>

<style>
.results-item {
  margin-bottom: 3rem;
}

.item-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #8d8e88;
  border-bottom: 1px #8d8e88 solid;
  margin-bottom: 1rem;
}

.item-status > span > i {
  font-size: 1rem;
}

.item-body {
  display: flex;
}

.content {
  width: 70%;
}

.meta {
  width: 30%;
}

.item-title > a {
  text-decoration: none;
  color: #c9d0a8;
  font-weight: bold;
  line-height: 1.6;
}

.user {
  color: #8d8e88;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  padding-top: 1rem;
}

.user > i {
  font-size: 1rem;
  padding-right: 0.25rem;
}

.count {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.8rem;
  padding-top: 0.5rem;
  color: #8d8e88;
}

.count > i {
  font-size: 1rem;
  padding-left: 0.5rem;
}
</style>
