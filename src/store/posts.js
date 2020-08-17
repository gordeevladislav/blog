import { v4 } from 'uuid';
import LSPosts from '@/classes/Storage';
import Comment from '@/classes/Comment';
import Post from '@/classes/Post';
import { LOCAL_STORAGE_ITEM_KEY } from '@/utils/utils';

const ls = new LSPosts(LOCAL_STORAGE_ITEM_KEY);

export default {
  state: {
    posts: {}
  },
  mutations: {
    updatePosts(state, payload) {
      state.posts = payload;
    }
  },
  actions: {
    createPost({ commit }, { title, anounce, text }) {
      const post = new Post(title, anounce, text);
      const id = v4();

      if (ls.itemExists() && ls.itemHasProps()) {
        ls.addPost(id, post);
      } else {
        ls.setItem({ [id]: post });
      }

      commit('updatePosts', ls.getItem());
    },

    editPost({ commit }, { id, post }) {
      ls.addPost(id, post);
      commit('updatePosts', ls.getItem());
    },

    deletePost({ commit }, id) {
      ls.removePost(id);
      commit('updatePosts', ls.getItem());
    },

    addComment({ commit }, { postId, author, text }) {
      const comment = new Comment(author, text);
      const id = v4();

      ls.addComment(postId, id, comment);
      commit('updatePosts', ls.getItem());
    },

    deleteComment({ commit }, { id, postId }) {
      ls.removeComment(postId, id);
      commit('updatePosts', ls.getItem());
    },

    synchronizeStoreWithLS({ commit }) {
      if (ls.itemExists() && ls.itemHasProps()) {
        commit('updatePosts', ls.getItem());
      }
    }
  },
  getters: {
    posts(state) {
      return state.posts;
    },
    postById(state) {
      return id => {
        return state.posts[id];
      }
    },
    commentsByPostId(state) {
      return id => {
        return state.posts[id].comments;
      }
    }
  }
}