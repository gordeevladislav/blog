<template>
  <section class="blog container">
    <ul
      v-if="posts.length"
      class="blog__list"
    >
      <li
        class="blog__item"
        v-for="[ id, { title, comments, anounce, date, author } ] in posts"
        :key="id"
      >
        <router-link
          class="blog__link"
          tag="a"
          :to="`/post/${id}`"
        >
          <PostPreview
            :author="author"
            :title="title"
            :commentsNum="Object.keys(comments).length"
            :anounce="anounce"
            :date="date"
            @click="deletePost(id)"
          />
        </router-link>
      </li>
    </ul>
    <router-link
      v-else
      class="blog__plug"
      tag="p"
      :to="'/new-post'"
    >
      Write your first post!
    </router-link>
  </section>
</template>

<script>
import PostPreview from "../components/PostPreview";

export default {
  computed: {
    posts() {
      const posts = this.$store.getters.posts;
      return Object.entries(posts);
    }
  },
  methods: {
    deletePost(id) {
      this.$store.dispatch('deletePost', id);
    }
  },
  components: {
    PostPreview
  },
}
</script>

<style>
.blog {
  box-sizing: border-box;
  padding: 20px;
}

.blog__item {
  margin-bottom: 15px;
}

.blog__link {
  text-decoration: none;
}

.blog__plug {
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  color: var(--main-color);

  cursor: pointer;
}

.blog__plug:hover {
  color: var(--main-color_hover);
}

</style>