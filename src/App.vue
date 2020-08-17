<template>
  <div>
    <Header />
    <main>
      <h1 class="visually-hidden">My awesome blog</h1>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  components: {
    Header
  },
  beforeMount() {
    this.$store.dispatch('synchronizeStoreWithLS');
  }
}

</script>

<style>

:root {
  --main-color: rgb(26, 32, 44);
  --main-color_hover: rgba(26, 32, 44, 0.8);
  --main-color_active: rgba(26, 32, 44, 0.4);
  --main-color_disabled: rgba(26, 32, 44, 0.2);

  --text-color: rgb(74, 85, 104);
  --date-color: rgb(171, 173, 178);

  --preview-color_hover: rgba(30, 144, 255, 0.2);
  --anounce-color: rgb(94, 98, 107);
  --title-color: rgb(59, 63, 75);
  --close-icon-color: rgb(128, 128, 128);
  --close-icon-color_hover: rgba(128, 128, 128, 0.6);
  --close-icon-color_active: rgba(128, 128, 128, 0.3);

  --comment-color: rgb(41, 50, 69);
}

body {
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.container {
  max-width: 900px;
  min-width: 320px;
  margin: 0 auto;
}

.visually-hidden {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;

  white-space: nowrap;

  border: 0;

  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.form-submit {
  box-sizing: border-box;
  padding: 6px 30px;

  font-size: 18px;
  font-weight: 50;
  color: white;

  background-color: var(--main-color);
  border: none;
  border-radius: 5px;

  cursor: pointer;
}

.form-submit:hover {
  background-color: var(--main-color_hover);
}

.form-submit:active {
  background-color: var(--main-color_active);
}

.form-submit:disabled {
  background-color: var(--main-color_disabled);
  color: black;
  cursor: not-allowed;
}

</style>