const navigation = Vue.component('navigation', {
  template: `
  <nav :class="{ 'active' : isNavActive }">
    <div class="nav">
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
                  <span>
                    <a :href="navItem.path" target="_blank">{{ navItem.text }}</a>
                  </span>
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
      navItems: [],
      casestudies: [
        {
          path: '/color-speaks',
          name: 'color-speaks',
          meta: {
            pageIndex: 1
          },
          props: {
            image: `assets/img/heros/color-speaks-hero.jpg`,
            label: `CASE STUDY`,
            title: `Color Speaks`
          }
        },
        {
          path: '/shaw-floors',
          name: 'shaw-floors',
          meta: {
            pageIndex: 2
          },
          props: {
            image: `assets/img/heros/shaw-floors-hero.jpg`,
            label: `CASE STUDY`,
            title: `Shaw Floors`
          }
        },
        {
          path: '/floorfit',
          name: 'floorfit',
          meta: {
            pageIndex: 3
          },
          props: {
            image: `assets/img/heros/floorfit-hero.jpg`,
            label: `CASE STUDY`,
            title: `FloorFit`
          }
        },
        {
          path: '/sagepath',
          name: 'sagepath',
          meta: {
            pageIndex: 4
          },
          props: {
            image: `assets/img/heros/sagepath-hero.jpg`,
            label: `CASE STUDY`,
            title: `Sagepath`
          }
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
          href: `mailto:davemaynard24@gmail.com`,
          text: `Email`
        },
        {
          href: `#`,
          text: `Resume`
        }
      ],
      isNavActive: true
    };
  },
  beforeMount: function() {
    this.navItems = this.casestudies.map(cs => {
      return {
        path: cs.path,
        image: cs.props.image,
        text: cs.props.title,
        meta: {
          pageIndex: cs.meta.pageIndex
        },
        active: false
      };
    });
  },
  mounted: function() {
    revealFullscreen();
    this.navItems[0].active = true;
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
    }
  }
});

// nav animation timelines

let fullscreen;

function revealFullscreen() {
  if (fullscreen) {
    fullscreen.pause();
  }
  fullscreen = anime.timeline();

  let navItemSpans = document.querySelectorAll('.nav__selector-inner-items-item span');

  fullscreen
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
