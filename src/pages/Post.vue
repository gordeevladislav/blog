<template>
  <div class="post container">
    <section :class="!editMode ? 'post__wrapper' : 'post__wrapper--edit' ">
      <header :class="!editMode ? 'post__header' : 'post__header--edit'">
        <div v-if="!editMode">
          <h2 class="post__title">{{ post.title }}</h2>
          <time class="post__date">{{ post.updateDate }}</time>
        </div>
        <div v-else>
          <div class="post__edit-wrapper">
            <label class="visually-hidden" for="title-edit">Edit</label>
            <input class="form-input post__edit-input post__edit-input--title" type="text" id="title-edit" v-model="post.title">
          </div>
          <div class="post__edit-wrapper">
            <label class="visually-hidden" for="anounce-edit">Anounce</label>
            <input class="form-input post__edit-input" type="text" id="anounce-edit" v-model="post.anounce">
          </div>
        </div>
      </header>

      <div v-if="!editMode" class="post__main">
        <p
          v-for="(paragraph, index) in post.text"
          :key="index"
          class="post__text"
        >
          {{ paragraph }}
        </p>
      </div>

      <div v-else class="post__edit-wrapper">
        <textarea type="text" v-model="editingText" class=" form-input post__edit-textarea"></textarea>
      </div>

      <button v-if="!editMode" @click="editPost" class="post__edit-button" aria-label="Edit post">
        <i class="far fa-edit" />
      </button>
      <button v-else @click="savePost" class="post__edit-button" aria-label="Save post">
        <i class="far fa-check-square" />
      </button>
    </section>
    <CommentsWrapper
      :comments="post.comments"
      :postId="id"
    />
  </div>
</template>

<script>
import CommentsWrapper from '@/components/CommentsWrapper';
import {
  formatTextToString,
  formatTextToArray,
  getCurrentDate,
  getCurrentTime
} from '@/utils/utils';

export default {
  props: ['id'],
  data() {
    return {
      post: {},
      editMode: false,
      editingText: '',
    }
  },
  methods: {
    editPost() {
      this.editMode = true;
      this.editingText = formatTextToString(this.post.text);
    },
    savePost() {
      const text = formatTextToArray(this.editingText);
      const updateDate = `${this.post.date} (last update: ${getCurrentDate()}, ${getCurrentTime()})`;

      this.$store.dispatch('editPost', {
        id: this.id,
        post: {
          ...this.post,
          updateDate,
          text
        }
      });

      this.post.text = text;
      this.editMode = false;
    }
  },
  beforeMount() {
    const post = this.$store.getters.postById(this.id);

    if (post) {
      this.post = post;
    } else {
      this.$router.push('/');
    }
  },
  components: {
    CommentsWrapper
  }
}
</script>

<style>
.post__wrapper {
  position: relative;
  padding: 20px 0;
}

.post__wrapper--edit {
  position: relative;
  padding: 20px 20px;
}

.post__header {
  margin-bottom: 20px;
  padding: 0 10px;
}

.post__header--edit {
  margin-bottom: 20px;
  padding: 0;
}

.post__title {
  margin: 0;
  margin-bottom: 8px;
  padding-right: 45px;

  font-size: 32px;
  word-break: break-all;
  color: var(--main-color);
}

.post__date {
  display: block;

  font-size: 15px;
  color: var(--date-color);
}

.post__main {
  padding: 0 20px;
}

.post__text {
  margin: 0;
  margin-bottom: 10px;
  min-height: 20px;

  font-size: 18px;
  line-height: 25px;
  word-break: break-all;
  color: var(--text-color);
}

.post__edit-textarea {
  box-sizing: border-box;
  width: 100%;
  height: 200px;
}

.post__edit-wrapper {
  margin-bottom: 10px;
}

.post__edit-input {
  box-sizing: border-box;
  width: 100%;
}

.post__edit-input--title {
  width: 80%;
}

.post__edit-button {
  position: absolute;
  top: 20px;
  right: 10px;

  font-size: 25px;
  color: var(--main-text);

  background-color: transparent;
  border: none;

  cursor: pointer;
}

.post__edit-button:hover {
  color: var(--main-color_hover);
}

.post__edit-button:active {
  color: var(--main-color_active);
}

.post__edit-button:disabled {
  color: var(--main-color_disabled);
}

</style>