const routes = [
  {
    path: "/access",
    name: "access",
    meta: {
      scope: "public",
      reload: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "access" */ "@/modules/auth/views/AccessView.vue"
      ),
  },
  {
    path: "/resetPassword/:token",
    name: "resetPassword",
    meta: {
      scope: "public",
      reload: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "resetPassword" */ "@/modules/auth/views/ResetPasswordView.vue"
      ),
  },
];

export default routes;
