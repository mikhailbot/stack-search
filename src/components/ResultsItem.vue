<template>
  <div class="results-item">
    <div class="item-head">
      <div class="item-date">
        <i class="material-icons">date_range</i> <span>{{ createdDate }}</span>
      </div>
      <div class="item-title">
        <a :href="this.item.link" v-html="this.item.title"></a>
      </div>
      <div class="item-status">
        <span class="answered" v-if="this.item.is_answered"><i class="material-icons">done</i></span>
        <span class="closed" v-if="this.item.closed_date"><i class="material-icons">block</i></span>
      </div>
    </div>
    <div class="item-meta">
      <div class="view count">
        <i class="material-icons">visibility</i> <span>{{ this.item.view_count }}</span>
      </div>
      <div class="answer count">
        <i class="material-icons">question_answer</i> <span>{{ this.item.answer_count }}</span>
      </div>
      <div class="user">
        <span>{{ this.item.owner.display_name }}</span> <i class="material-icons">person</i>
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
  background: #fff;
  border-radius: 5px;
  display: inline-block;
  max-height: 300px;
  margin: 1rem;
  position: relative;
  width: 300px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.item-head {
  margin: 1rem;
}

.item-date {
  color: #aaaaaa;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  display: flex;
  align-content: center;
}

.item-date > i {
  font-size: 1rem;
}

.item-date > span {
  padding-left: 0.5rem;
}

.item-title {
  margin: 1rem 0;
  font-size: 1.1rem;
}

.item-title > a {
  text-decoration: none;
  color: #d35400;
}

.item-status > span > i {
  font-size: 1rem;
}

.answered {
  color: #ecf0f1;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 30px;
  height: 30px;
  background: #27ae60;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.closed {
  color: #ecf0f1;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 30px;
  height: 30px;
  background: #c0392b;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-meta {
  margin: 1rem;
  color: #aaaaaa;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
}

.count {
  display: flex;
  align-items: center;
  padding-right: 1rem;
}

.count > i {
  font-size: 1rem;
}

.count > span {
  padding-left: 0.25rem;
}

.user {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.user > i {
  font-size: 1rem;
}

.user > span {
  padding-right: 0.25rem;
}
</style>
