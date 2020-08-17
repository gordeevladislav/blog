class LocalStorage {
  setItem(value) {
    const stringifyValue = JSON.stringify(value);
    localStorage.setItem(this.key, stringifyValue);
  }

  removeItem() {
    localStorage.removeItem(this.key);
  }

  getItem () {
    const item = localStorage.getItem(this.key);
    return JSON.parse(item);
  }

  itemExists() {
    return !!this.getItem();
  }

  itemHasProps() {
    return !!Object.keys(this.getItem())
  }
}

export default class LSPosts extends LocalStorage {
  constructor(key) {
    super();
    this.key = key;
  }

  addPost(id, post) {
    const posts = this.getItem();
    posts[id] = post;
    this.setItem(posts);
  }

  removePost(id) {
    const posts = this.getItem();
    delete posts[id];
    this.setItem(posts);
  }

  addComment(postId, commentId, comment) {
    const posts = this.getItem();
    posts[postId].comments[commentId] = comment;
    this.setItem(posts);
  }

  removeComment(postId, commentId) {
    const posts = this.getItem();
    delete posts[postId].comments[commentId];
    this.setItem(posts);
  }
}