// set up routes
let routes = [store.state.home];

// dynamically add routes from the store
store.state.casestudies.forEach(cs => {
  routes.push(cs);
});

// set up router
const router = new VueRouter({
  routes: routes
});

router.beforeEach(function(to, from, next) {
  if (to.name) {
    // likely programmatic navigation
    store.commit('setActivePageIndex', to.meta.pageIndex);
    next();
  } else {
    // user manually entered a path that doesn't resolve, don't navigate
    next(false);
  }
});

// instantiate VueJS
let app = new Vue({
  router
}).$mount('#main-container');
