// set up routes
const routes = [
  {
    path: '/',
    component: appView
  }
];

// set up router
const router = new VueRouter({
  routes: routes
});

// instantiate VueJS
let app = new Vue({
  router
}).$mount('#main-container');
