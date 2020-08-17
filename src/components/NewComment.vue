<template>
  <form class="comments__form" action="submit" @submit.prevent="addComment">
    <div class="comments__field">
      <label class="comments__label" for="comment-author">Author</label>
      <input class="comments__input form-input" type="text" id="comment-author" placeholder="Add nick or nickname" v-model="author">
    </div>
    <div class="comments__field">
      <label class="comments__label" for="comment-text">Text</label>
      <textarea class="comments__textarea form-input" type="text" id="comment-text" placeholder="Add comment text" v-model="text"></textarea>
    </div>
    <div class="comments__button-wrapper">
      <button
        class="form-submit"
        type="submit"
        :disabled="!text.trim()"
      >Submit</button>
    </div>
  </form>
</template>

<script>
import { formatTextToArray } from '@/utils/utils';

export default {
  data() {
    return {
      author: '',
      text: ''
    }
  },
  props: ['postId'],
  methods: {
    addComment() {
      const author = this.author ? this.author : null;
      const text = formatTextToArray(this.text);

      this.$store.dispatch('addComment', {
        postId: this.postId,
        text,
        author
      });

      this.author = this.text = '';
    }
  }
}
</script>

<style>
.comments__form {
  display: flex;
  flex-direction: column;
}

.comments__field {
  display: flex;
  flex-direction: column;
  margin-bottom: 9px;
}

.form-input {
  padding: 5px 8px;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  border: 1px solid #293245;
  border-radius: 4px;
}

.comments__label {
  margin-bottom: 5px;
  font-weight: 700;
}

.comments__textarea {
  box-sizing: border-box;
  height: 80px;
}

</style>