// set up routes
const routes = [
  {
    path: '/',
    component: appView,
    children: [
      {
        path: '/',
        name: 'home',
        component: home,
        meta: {
          pathIndex: 0
        }
      }
    ]
  }
];

// set up router
const router = new VueRouter({
  routes: routes
});

// instantiate VueJS
var app = new Vue({
  router
}).$mount('#main-container');
