const routes = [
  {
    path: "/",
    name: "externalIndex",
    meta: {
      scope: "private",
      reload: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "externalIndex" */ "@/modules/external/views/IndexView.vue"
      ),
  },
];

export default routes;
