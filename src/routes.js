import Vue from 'vue';
import Router from 'vue-router';
import Blog from '@/pages/Blog';
import Post from '@/pages/Post';
import NewPost from '@/pages/NewPost';
import NotFound from '@/pages/NotFound';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blog',
      component: Blog
    },
    {
      path: '/post/:id',
      props: true,
      name: 'Post',
      component: Post
    },
    {
      path: '/new-post',
      name: 'newPost',
      component: NewPost
    },
    {
      path: '*',
      component: NotFound
    }
  ],
  mode: 'history'
});