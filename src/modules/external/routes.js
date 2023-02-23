const routes = [
  {
    path: "/",
    name: "externalIndex",
    meta: {
      scope: "public",
    },
    component: () =>
      import(
        /* webpackChunkName: "externalIndex" */ "@/modules/external/views/IndexView.vue"
      ),
  },
];

export default routes;
