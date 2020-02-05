const store = new Vuex.Store({
  state: {
    isNavActive: false,
    activePageIndex: 0,
    home: {
      path: '/',
      name: 'home',
      component: primaryView,
      meta: {
        pageIndex: 0
      },
      props: {
        image: `assets/img/heros/home-hero.jpg`,
        label: `HOME`,
        title: `Design &amp; Code`,
        description: `
        <p>I'm an ambitious web developer with several years of experience creating functional, responsive websites and applications. I've worked closely with teams of designers and back-end developers, demonstrating the ability to communicate effectively with others in a fast-paced, agile environment.</p>
        `
      }
    },
    casestudies: [
      {
        path: '/color-speaks',
        name: 'color-speaks',
        component: primaryView,
        meta: {
          pageIndex: 1
        },
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
        name: 'shaw-floors',
        component: primaryView,
        meta: {
          pageIndex: 2
        },
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
        name: 'floorfit',
        component: primaryView,
        meta: {
          pageIndex: 3
        },
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
        name: 'sagepath',
        component: primaryView,
        meta: {
          pageIndex: 4
        },
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
    },
    setActivePageIndex: (state, index) => {
      state.activePageIndex = index;
    }
  },
  getters: {
    getRoutePathByIndex: state => index => {
      for (let i = 0; i < Object.keys(state).length; i++) {
        let value = state[Object.keys(state)[i]];
        if (value.length) {
          for (let j = 0; j < value.length; j++) {
            let val = value[j];
            if (val.meta && val.meta.pageIndex == index) {
              return val.path;
            }
          }
        } else {
          if (value.meta && value.meta.pageIndex == index) {
            return value.path;
          }
        }
      }
    }
  }
});
