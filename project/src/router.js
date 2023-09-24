// 1. Define route components.
// These can be imported from other files
import Users from './pages/Users'
import Detail from './pages/Detail'
import Albums from './pages/Details/Albums'
import Posts from './pages/Details/Posts'
import Todos from './pages/Details/Todos'
import Photos from './pages/Details/Photos'
import { createRouter, createWebHistory } from 'vue-router'


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Users, name:"users" },
  { path: '/detail/:id', component: Detail, name:"detail",
   children: [
    {
      // UserProfile will be rendered inside User's <router-view>
      // when /user/:id/profile is matched
      path: 'todos',
      name: "todos",
      component: Todos,
    },
    {
      // UserPosts will be rendered inside User's <router-view>
      // when /user/:id/posts is matched
      path: 'posts',
      name: "posts",
      component: Posts,
    },
    
    {
      // UserPosts will be rendered inside User's <router-view>
      // when /user/:id/posts is matched
      path: 'albums',
      name: "albums",
      component: Albums,
    },

    {
      // UserPosts will be rendered inside User's <router-view>
      // when /user/:id/posts is matched
      path: 'photos/:id',
      name: "photos",
      component: Photos,
    },
  ]
 },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})


export  default router