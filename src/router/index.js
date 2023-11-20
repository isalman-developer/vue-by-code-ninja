import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/reaction-counter",
    name: "reaction-counter",
    component: () => import("../views/reaction-counter/ReactionCounter.vue"), //this is called lazy loading component
  },
  {
    path: "/signup-form",
    name: "signup-Form",
    component: () => import("../views/signup-form/SingupForm.vue"),
  },
  {
    path: "/jobs",
    name: "jobs",
    component: () => import("../views/jobs/Jobs.vue"),
  },
  {
    path: "/job/:id",
    name: "job-details",
    component: () => import("../views/jobs/JobDetail"),
  },
  // redirect route
  {
    path: "/all-jobs",
    redirect: "jobs",
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/project-planners/Projects.vue"),
  },
  {
    path: "/add-project",
    name: "addProject",
    component: () => import("../components/project-planners/AddProject.vue"),
  },
  {
    path: "/edit-project/:id",
    name: "editProject",
    component: () => import("../components/project-planners/EditProject.vue"),
    props: true,
  },
  {
    path: "/composition-api-basic",
    name: "compositionApiBasic",
    component: () => import("../views/composition-api-basic/Basics.vue"),
    children: [
      {
        path: "computed",
        name: "computedRoute",
        component: () =>
          import("../components/composition-api/RefComputed.vue"),
      },
      {
        path: "props",
        name: "propsRoute",
        component: () => import("../components/composition-api/Props.vue"),
      },
      {
        path: "postsAsyncAwait",
        name: "postsAsyncAwait",
        component: () =>
          import(
            "../components/composition-api/async-await/PostsAsyncAwaitView.vue"
          ),
      },
      {
        path: "postDetailAsyncAwait/:id",
        name: "postDetailAsyncAwait",
        component: () =>
          import("../components/composition-api/async-await/PostDetail.vue"),
        props: true,
      },
      {
        path: "postAddAsyncAwait",
        name: "postAddAsyncAwait",
        component: () =>
          import("../components/composition-api/async-await/AddPost.vue"),
        props: true,
      },
      {
        path: "tags/:tag",
        name: "Tag",
        component: () =>
          import("../components/composition-api/async-await/Tag.vue"),
        props: true,
      },
    ],
  },
  // 404 route
  {
    path: "/:catchAll(.*)",
    component: () => import("../components/404/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
