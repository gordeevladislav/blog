<template>
  <article class="preview">
    <button
      class="preview__delete-button"
      type="button"
      @click.prevent="$emit('click')"
      aria-label="Delete preview"
    >
      <i class="preview__delete-icon fas fa-times" />
    </button>
    <h2 class="preview__title">{{ this.title }}</h2>
    <p class="preview__anounce">{{ this.anounce }}</p>
    <time class="preview__date">{{ this.date }}</time>
    <p class="preview__comments">
      Comments: <em>{{ this.commentsNum }}</em>
    </p>
  </article>
</template>

<script>
export default {
  props: {
    title: String,
    commentsNum: Number,
    anounce: String,
    date: String
  }
}
</script>

<style>

.preview {
  position: relative;
  padding: 12px 15px;

  cursor: pointer;
}

.preview:hover {
  background-color: var(--preview-color_hover);
}

.preview__title {
  margin: 0;
  margin-bottom: 12px;
  padding-right: 35px;

  font-size: 30px;
  word-break: break-all;
  color: var(--title-color);
}

.preview__anounce {
  margin: 0;
  margin-bottom: 12px;

  font-size: 24px;
  word-break: break-all;
  color: var(--anounce-color);
}

.preview__date {
  font-size: 16px;
  color: var(--date-color);
}

.preview__comments {
  position: absolute;
  bottom: 4px;
  right: 15px;
  font-size: 15px;
  color: var(--date-color);
}

.preview__delete-button {
  position: absolute;
  top: 10px;
  right: 15px;

  font-size: 30px;
  line-height: 15px;
  color: var(--close-icon-color);

  background-color: transparent;
  border: none;
  cursor: pointer;
}

.preview__delete-button:hover {
  color: var(--close-icon-color_hover);
}

.preview__delete-button:active {
  color: var(--close-icon-color_active);
}

</style>