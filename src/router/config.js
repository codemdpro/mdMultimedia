export function routeTransition(store, router) {
  router.beforeEach((to, from, next) => {
    const nextPos = to.matched.some(record => record.meta.pos);
    const prevPos = from.matched.some(record => record.meta.pos);

    if (!prevPos && !nextPos) {
      return next();
    } else if (prevPos < nextPos) {
      store.commit("NEXT_VIEW");
      next();
    } else {
      store.commit("PREV_VIEW");
      next();
    }
  });
}
