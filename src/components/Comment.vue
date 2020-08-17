<template>
  <article class="comment">
    <header class="comment__header">
      <p class="comment__author">{{ author }}</p>
      <time class="comment__date">{{ date }}</time>
    </header>
    <div class="comment__wrapper">
      <p
        v-for="(paragraph, index) in text"
        :key="index"
        class="comment__text"
      >
        {{ paragraph }}
      </p>
    </div>
    <button
      class="comment__delete-button"
      type="button"
      @click="$emit('click')"
    >
      Delete
    </button>
  </article>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      default: 'Anonymous'
    },
    text: Array,
    date: String
  }
}
</script>

<style>
.comment {
  position: relative;
  border-bottom: 1px solid var(--comment-color);
}

.comment__header {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 5px 7px;

  font-size: 17px;
  color: white;

  background-color: var(--comment-color);
  border-radius: 4px;
}

.comment__author {
  margin: 0;
}

.comment__wrapper {
  padding: 7px 5px;
  padding-bottom: 18px;
}

.comment__text {
  margin: 0;
  padding: 3px 0;

  word-break: break-all;
}

.comment__delete-button {
  position: absolute;
  bottom: 5px;
  right: 5px;

  background-color: transparent;
  border: none;

  cursor: pointer;
}

.comment__delete-button:hover {
  text-decoration: underline;
}
</style>