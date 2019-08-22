const navigation = Vue.component('navigation', {
  template: `
  <nav>
    <div class="nav">
      <div class="nav__upper">
        <div class="nav__upper-menu">
          <div class="nav__upper-menu-inner">
            <button class="hamburger" aria-haspopup="true">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" class="hamburger-svg" role="img">
                <title>Toggle Menu</title>
                <rect x="0" y="4" width="24" height="2" class="first-line" fill="#ffffff" />
                <rect x="0" y="11" width="24" height="2" class="second-line" fill="#ffffff" />
                <rect x="0" y="18" width="24" height="2" class="third-line" fill="#ffffff" />
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
        <div class="nav__content-inner">
          <a href="/" class="nav__content-inner-logo label label--upper">Dave Maynard</a>
          <div class="nav__selector">
            <div class="nav__selector-inner">
              <div class="nav__selector-inner-bgs">
                <div v-for="navItem in navItems"
                  class="nav__selector-inner-bgs-bg"
                  :class="{ 'active': navItem.active }">
                  <div :style="{ backgroundImage: 'url(' + navItem.image + ')' }"></div>
                </div>
              </div>
              <div class="nav__selector-inner-items">
                <div v-for="navItem in navItems"
                  class="nav__selector-inner-items-item h1"
                  :class="{ 'active': navItem.active }"
                  @mouseenter="onNavItemHover(navItem)">{{ navItem.text }}</div>
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
  methods: {
    onNavItemHover(navItem) {
      if (!navItem.active) {
        let component = this;

        component.navItems.forEach(item => {
          item.active = false;
        });
        navItem.active = true;
      }
    }
  }
});
