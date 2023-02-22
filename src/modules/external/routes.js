const routes = [
  {
    path: "/",
    name: "externalIndex",
    meta: {
      scope: "public",
    },
    component: () =>
      import(
        /* webpackChunkName: "externalIndex" */ "@/views/External/IndexView.vue"
      ),
  },
];

export default routes;
