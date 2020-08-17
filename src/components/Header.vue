<template>
  <header class="header">
    <nav class="nav container">
      <ul class="nav__list">
        <router-link
          tag="li"
          class="nav__item"
          v-for="({ url, name }, index) in links"
          :key="index"
          :to="url"
          exact
        >
          <a class="nav__link" href>{{ name }}</a>
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "Blog", url: "/" },
        { name: "New post", url: "/new-post" }
      ]
    }
  }
}
</script>

<style>
.header {
  min-width: 320px;
  background-color: var(--main-color);
}

.nav__list {
  padding: 13px 20px;
  display: flex;
}

.nav__item {
  margin-right: 25px;
}

.nav__link {
  padding: 0 0.5rem;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: white;
}

.nav__link:hover {
  color: gainsboro;
}
</style>