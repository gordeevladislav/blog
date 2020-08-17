<template>
  <section class="new-post container">
    <h2 class="new-post__title">Create new post</h2>
    <form
      action="submit"
      class="new-post__form"
      @submit.prevent="createPost"
    >
      <div class="new-post__wrapper">
        <label class="new-post__label" for="new-post-title">Title</label>
        <input class="form-input" type="text" id="new-post-title" placeholder="Enter title" v-model="title" />
      </div>
      <div class="new-post__wrapper">
        <label class="new-post__label" for="new-post-anounce">Anounce</label>
        <input class="form-input" type="text" id="new-post-anounce" placeholder="Enter short description" v-model="anounce" />
      </div>
      <div class="new-post__wrapper">
        <label class="new-post__label" for="new-post-text">Text</label>
        <textarea class="form-input new-post__textarea" id="new-post-text" placeholder="Enter text" v-model="text"></textarea>
      </div>
      <button
        class="form-submit"
        type="submit"
        :disabled="!title.trim() || !anounce.trim() || !text.trim()"
      >Create</button>
    </form>
  </section>
</template>

<script>
import { formatTextToArray } from '@/utils/utils';

export default {
  data() {
    return {
      title: '',
      anounce: '',
      text: '',
    }
  },
  methods: {
    createPost() {
      const formattedText = formatTextToArray(this.text);

      this.$store.dispatch('createPost', {
        title: this.title,
        anounce: this.anounce,
        text: formattedText
      });

      this.anounce = this.title = this.text = ''
      this.$router.push('/');
    },
  }
}
</script>

<style>
.new-post__form {
  padding: 0 10%;
}

.new-post__title {
  font-size: 30px;
  text-align: center;
  color: var(--main-color);
}

.new-post__wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.new-post__label {
  margin-bottom: 6px;

  font-weight: 700;
  font-size: 20px;
  color: var(--main-color);
}

.new-post__textarea {
  height: 100px;
}
</style>