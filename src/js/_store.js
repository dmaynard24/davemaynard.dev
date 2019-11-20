const store = new Vuex.Store({
  state: {
    isNavActive: false,
    casestudies: [
      {
        path: '/color-speaks',
        component: primaryView,
        props: {
          image: `assets/img/heros/color-speaks-hero.jpg`,
          label: `CASE STUDY`,
          title: `Color Speaks`,
          description: `
          <p>Aenean non orci id libero ornare efficitur id eu ex. Quisque quis ullamcorper nibh. Nam lobortis velit in sagittis imperdiet. Nam eu mi ut ante placerat efficitur. Nullam fringilla ante sit amet sem porttitor pulvinar. Cras nec pharetra est. Maecenas magna nibh, pulvinar accumsan ipsum eget, fermentum sodales purus. Proin porta lacinia aliquam.</p>
          <p>Aenean non orci id libero ornare efficitur id eu ex. Quisque quis ullamcorper nibh. Nam lobortis velit in sagittis.</p>
          `,
          screens: [`assets/img/screens/color-speaks-screen-1.jpg`, `assets/img/screens/color-speaks-screen-2.jpg`]
        }
      },
      {
        path: '/shaw-floors',
        component: primaryView,
        props: {
          image: `assets/img/heros/shaw-floors-hero.jpg`,
          label: `CASE STUDY`,
          title: `Shaw Floors`,
          description: `
          <p>Aenean non orci id libero ornare efficitur id eu ex. Quisque quis ullamcorper nibh. Nam lobortis velit in sagittis imperdiet. Nam eu mi ut ante placerat efficitur. Nullam fringilla ante sit amet sem porttitor pulvinar. Cras nec pharetra est. Maecenas magna nibh, pulvinar accumsan ipsum eget, fermentum sodales purus. Proin porta lacinia aliquam.</p>
          <p>Aenean non orci id libero ornare efficitur id eu ex. Quisque quis ullamcorper nibh. Nam lobortis velit in sagittis.</p>
          `
        }
      },
      {
        path: '/floorfit',
        component: primaryView,
        props: {
          image: `assets/img/heros/floorfit-hero.jpg`,
          label: `CASE STUDY`,
          title: `FloorFit`,
          description: `
          <p>Aenean non orci id libero ornare efficitur id eu ex. Quisque quis ullamcorper nibh. Nam lobortis velit in sagittis imperdiet. Nam eu mi ut ante placerat efficitur. Nullam fringilla ante sit amet sem porttitor pulvinar. Cras nec pharetra est. Maecenas magna nibh, pulvinar accumsan ipsum eget, fermentum sodales purus. Proin porta lacinia aliquam.</p>
          <p>Aenean non orci id libero ornare efficitur id eu ex. Quisque quis ullamcorper nibh. Nam lobortis velit in sagittis.</p>
          `
        }
      },
      {
        path: '/sagepath',
        component: primaryView,
        props: {
          image: `assets/img/heros/sagepath-hero.jpg`,
          label: `CASE STUDY`,
          title: `Sagepath`,
          description: `
          <p>Aenean non orci id libero ornare efficitur id eu ex. Quisque quis ullamcorper nibh. Nam lobortis velit in sagittis imperdiet. Nam eu mi ut ante placerat efficitur. Nullam fringilla ante sit amet sem porttitor pulvinar. Cras nec pharetra est. Maecenas magna nibh, pulvinar accumsan ipsum eget, fermentum sodales purus. Proin porta lacinia aliquam.</p>
          <p>Aenean non orci id libero ornare efficitur id eu ex. Quisque quis ullamcorper nibh. Nam lobortis velit in sagittis.</p>
          `
        }
      }
    ]
  },
  mutations: {
    setNavActive: (state, boolean) => {
      state.isNavActive = boolean;
    }
  },
  getters: {}
});
