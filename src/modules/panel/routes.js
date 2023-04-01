const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    meta: {
      scope: "private",
      reload: true,
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
      reload: true,
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
      reload: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/modules/panel/views/AboutView.vue"
      ),
  },
  {
    path: "/chat",
    name: "chat",
    meta: {
      scope: "private",
      reload: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "chat" */ "@/modules/panel/views/ChatView.vue"
      ),
  },
];

export default routes;
