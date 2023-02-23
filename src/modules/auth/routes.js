const routes = [
  {
    path: "/access",
    name: "access",
    meta: {
      scope: "public",
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
    },
    component: () =>
      import(
        /* webpackChunkName: "resetPassword" */ "@/modules/auth/views/ResetPasswordView.vue"
      ),
  },
];

export default routes;
