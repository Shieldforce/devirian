const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    meta: {
      scope: "private",
    },
    component: () =>
      import(
        /* webpackChunkName: "externalIndex" */ "@/views/Panel/DashboardView.vue"
      ),
  },
];

export default routes;
