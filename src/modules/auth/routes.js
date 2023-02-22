const routes = [
  {
    path: "/access",
    name: "access",
    meta: {
      scope: "public",
    },
    component: () =>
      import(/* webpackChunkName: "access" */ "@/views/Auth/AccessView.vue"),
  },
  {
    path: "/resetPassword/:token",
    name: "resetPassword",
    meta: {
      scope: "public",
    },
    component: () =>
      import(
        /* webpackChunkName: "resetPassword" */ "@/views/Auth/ResetPasswordView.vue"
      ),
  },
];

export default routes;
