<template>
  <section class="comments">
    <h3 class="comments__title">Comments</h3>
    <ul
      v-if="comments.length"
      class="comments__list"
    >
      <li
        class="comments__item"
        v-for="[ id, value ] in comments"
        :key="id"
      >
        <Comment
          :author="value.author"
          :text="value.text"
          :date="value.date"
          @click="deleteComment(id)"
        />
      </li>
    </ul>
    <p v-else class="comments__plug">No comments yet. Write first!</p>
    <NewComment :postId="postId" />
  </section>
</template>

<script>
import Comment from '@/components/Comment';
import NewComment from '@/components/NewComment';

export default {
  props: ['postId'],
  computed: {
    comments() {
      const comments = this.$store.getters.commentsByPostId(this.postId);
      return Object.entries(comments);
    }
  },
  methods: {
    deleteComment(id) {
      this.$store.dispatch('deleteComment', {
        postId: this.postId,
        id
      });
    }
  },
  components: {
    Comment, NewComment
  },
}
</script>

<style>
.comments {
  border-top: 2px solid var(--main-color);
  padding: 20px 30px;
}

.comments__title {
  font-size: 25px;
  margin: 10px 0;
  color: var(--main-color);
}

.comments__plug {
  font-size: 18px;
  text-align: center;
  color: var(--main-color);
}

.comments__list {
  margin-bottom: 20px;
}

.comments__item {
  margin-bottom: 10px;
}
</style>