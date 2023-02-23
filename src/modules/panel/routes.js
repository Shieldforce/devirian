const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    meta: {
      scope: "private",
    },
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "@/modules/panel/views/DashboardView.vue"
      ),
  },
  {
    path: "/tasks",
    name: "tasks",
    meta: {
      scope: "private",
    },
    component: () =>
      import(
        /* webpackChunkName: "tasks" */ "@/modules/panel/views/TasksView.vue"
      ),
  },
  {
    path: "/about",
    name: "about",
    meta: {
      scope: "private",
    },
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/modules/panel/views/AboutView.vue"
      ),
  },
];

export default routes;
