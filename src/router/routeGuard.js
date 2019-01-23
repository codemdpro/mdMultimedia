export function initPass(store, router) {
  router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = localStorage.getItem("gUser")
      ? store.state.authenticated
        ? true
        : false
      : false;
    const hasCollection = store.state.hasCollection;
    const nextENV = to.matched.some(record => record.meta.env)
      ? to.meta.env
      : void 0;
    if (requiresAuth && !isAuthenticated) {
      store.commit("CAN_LOGOUT");
      next({ name: "loginview" });
    } else if (to.path == "/login" && isAuthenticated) {
      next({ name: "app" });
    } else if (isAuthenticated && !hasCollection) {
      store.dispatch("getMedias");
      console.log(nextENV);
      store.state.env = nextENV ? nextENV : void 0;
      next();
    } else {
      console.log(nextENV);
      nextENV ? (store.state.env = nextENV) : void 0;
      next();
    }
  });

  axios.interceptors.response.use(null, error => {
    if (error.response == 401) {
      store.commit("SERVER_ERROR", 401);
      router.push("login");
    }

    return Promise.reject(error.response.data.message);
  });

  if (store.getters.access_key !== null) {
    setAuthorization(store.getters.userKey);
  }
}

export function setAuthorization(_token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${_token}`;
}
