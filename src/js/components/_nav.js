const navigation = Vue.component('navigation', {
  template: `
  <nav :class="{ 'active' : isNavActive }">
    <div class="nav">
      <div class="nav__upper">
        <div class="nav__upper-menu">
          <div class="nav__upper-menu-inner">
            <button class="hamburger" aria-haspopup="true" @click="toggleNav">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" class="hamburger-svg" role="img">
                <title>Toggle Menu</title>
                <rect x="0" y="4" width="24" height="2" class="line line--first" fill="#ffffff" />
                <rect x="0" y="11" width="24" height="2" class="line line--second" fill="#ffffff" />
                <rect x="0" y="18" width="24" height="2" class="line line--third" fill="#ffffff" />
              </svg>
            </button>
          </div>
        </div>
        <div class="nav__upper-arrows">
          <div class="nav__upper-arrows-inner">
            <button class="arrow-prev">
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.99787 13.0001L1 7.39992M9 1.78871L1.00213 7.38888" stroke="white" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>
            <button class="arrow-next">
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.99787 13.0001L1 7.39992M9 1.78871L1.00213 7.38888" stroke="white" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="nav__content">
        <div class="nav__content-before"></div>
        <div class="nav__content-inner">
          <div class="nav__content-inner-logo">
            <a href="/" class="label label--upper">Dave Maynard</a>
          </div>
          <div class="nav__selector">
            <div class="nav__selector-inner">
              <div class="nav__selector-inner-bgs">
                <div v-for="navItem in navItems"
                class="nav__selector-inner-bgs-bg"
                :class="{ 'active': navItem.active }">
                <div :style="{ backgroundImage: 'url(' + navItem.image + ')' }"></div>
                </div>
                <div class="nav__selector-inner-bgs-after"></div>
              </div>
              <div class="nav__selector-inner-items">
                <div v-for="navItem in navItems"
                  class="nav__selector-inner-items-item h1"
                  :class="{ 'active': navItem.active }"
                  @mouseenter="onNavItemHover(navItem)">
                  <span>{{ navItem.text }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="nav__content-inner-socials">
            <a v-for="social in socials" :href="social.href" class="nav__content-inner-socials-link label label--upper" target="_blank">{{ social.text }}</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  `,
  data: () => {
    return {
      navItems: [
        {
          image: `assets/img/heros/home-hero.jpg`,
          text: `Home`,
          active: true, // TODO: set this from the active route
          index: 1
        },
        {
          image: `assets/img/heros/color-speaks-hero.jpg`,
          text: `Color Speaks`,
          active: false,
          index: 2
        },
        {
          image: `assets/img/heros/shaw-floors-hero.jpg`,
          text: `Shaw Floors`,
          active: false,
          index: 3
        },
        {
          image: `assets/img/heros/floorfit-hero.jpg`,
          text: `FloorFit`,
          active: false,
          index: 4
        },
        {
          image: `assets/img/heros/sagepath-hero.jpg`,
          text: `Sagepath`,
          active: false,
          index: 5
        },
        {
          image: `assets/img/heros/about-hero.jpg`,
          text: `About`,
          active: false,
          index: 6
        }
      ],
      socials: [
        {
          href: `https://github.com/dmaynard24`,
          text: `GitHub`
        },
        {
          href: `https://www.linkedin.com/in/dmaynard24/`,
          text: `LinkedIn`
        },
        {
          href: `https://codepen.io/davemaynard/`,
          text: `CodePen`
        },
        {
          href: `mailto:davemaynard24@gmail.com`,
          text: `Email`
        },
        {
          href: `#`,
          text: `Resume`
        }
      ]
    };
  },
  computed: {
    isNavActive: function() {
      return store.state.isNavActive;
    }
  },
  methods: {
    onNavItemHover: function(navItem) {
      if (!navItem.active) {
        let component = this;

        component.navItems.forEach(item => {
          item.active = false;
        });
        navItem.active = true;
      }
    },
    toggleNav: function() {
      store.commit('setNavActive', !this.isNavActive);

      this.isNavActive ? openBurger() : closeBurger();
      this.isNavActive ? openFullscreen() : closeFullscreen();
    }
  }
});

// nav animation timelines

let burger;

function openBurger() {
  if (burger) {
    burger.pause();
  }
  burger = anime.timeline();

  burger
    .add(
      {
        targets: '.hamburger .line--first, .hamburger .line--third',
        y: 11,
        rotate: 0,
        transformOrigin: '50% 50% 0',
        easing: EASE_OUT_QUAD,
        duration: 250
      },
      0
    )
    .add(
      {
        targets: '.hamburger .line--second',
        opacity: 0,
        duration: 1
      },
      250
    )
    .add(
      {
        targets: '.hamburger .line--first',
        y: 11,
        rotate: 45,
        transformOrigin: '50% 50% 0',
        easing: EASE_OUT_QUAD,
        duration: 250
      },
      250
    )
    .add(
      {
        targets: '.hamburger .line--third',
        y: 11,
        rotate: -45,
        transformOrigin: '50% 50% 0',
        easing: EASE_OUT_QUAD,
        duration: 250
      },
      250
    );
}

function closeBurger() {
  if (burger) {
    burger.pause();
  }
  burger = anime.timeline();

  burger
    .add(
      {
        targets: '.hamburger .line--first',
        y: 11,
        rotate: 0,
        transformOrigin: '50% 50% 0',
        easing: EASE_IN_QUAD,
        duration: 250
      },
      0
    )
    .add(
      {
        targets: '.hamburger .line--third',
        y: 11,
        rotate: 0,
        transformOrigin: '50% 50% 0',
        easing: EASE_IN_QUAD,
        duration: 250
      },
      0
    )
    .add(
      {
        targets: '.hamburger .line--second',
        opacity: 1,
        duration: 1
      },
      250
    )
    .add(
      {
        targets: '.hamburger .line--first',
        y: 4,
        rotate: 0,
        transformOrigin: '50% 50% 0',
        easing: EASE_IN_QUAD,
        duration: 250
      },
      250
    )
    .add(
      {
        targets: '.hamburger .line--third',
        y: 18,
        rotate: 0,
        transformOrigin: '50% 50% 0',
        easing: EASE_IN_QUAD,
        duration: 250
      },
      250
    );
}

let fullscreen;

function openFullscreen() {
  if (fullscreen) {
    fullscreen.pause();
  }
  fullscreen = anime.timeline();

  let navItemSpans = document.querySelectorAll('.nav__selector-inner-items-item span');

  fullscreen
    .add(
      {
        targets: '.nav__content-before',
        height: '100%',
        easing: EASE_OUT_QUAD,
        duration: 400
      },
      0
    )
    .add(
      {
        duration: 320,
        begin: function(anim) {
          document.querySelector('.nav__content').classList.add('active');
          navItemSpans.forEach(node => {
            node.classList.remove('faded');
          });
        },
        complete: function(anim) {
          document.querySelector('.nav__selector').classList.add('active');
          navItemSpans.forEach(node => {
            node.classList.add('active');
          });
        }
      },
      0
    )
    .add(
      {
        targets: '.nav__selector-inner-bgs-after',
        height: '0%',
        easing: EASE_OUT_QUAD,
        duration: 400
      },
      320
    );
}

function closeFullscreen() {
  if (fullscreen) {
    fullscreen.pause();
  }
  fullscreen = anime.timeline();

  fullscreen
    .add(
      {
        targets: '.nav__selector-inner-bgs-after',
        height: '100%',
        easing: EASE_IN_QUAD,
        duration: 400,
        begin: function(anim) {
          document.querySelectorAll('.nav__selector-inner-items-item span').forEach(node => {
            node.classList.remove('active');
            node.classList.add('faded');
          });
        },
        complete: function(anim) {
          document.querySelector('.nav__selector').classList.remove('active');
        }
      },
      0
    )
    .add(
      {
        targets: '.nav__content-before',
        height: '0%',
        easing: EASE_IN_QUAD,
        duration: 400
      },
      400
    );

  fullscreen.finished.then(() => {
    document.querySelector('.nav__content').classList.remove('active');
  });
}
