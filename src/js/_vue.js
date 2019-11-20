// set up routes
let routes = [
  {
    path: '/',
    component: appView
  }
];

// dynamically add routes from the store
store.state.casestudies.forEach(cs => {
  routes.push(cs);
});

// set up router
const router = new VueRouter({
  routes: routes
});

// instantiate VueJS
let app = new Vue({
  router
}).$mount('#main-container');
