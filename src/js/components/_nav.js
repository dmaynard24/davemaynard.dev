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
              <div class="nav__selector-inner-bgs" data-vs-id="multiple-textures-vs" data-fs-id="multiple-textures-fs">
                <div id="canvas"></div>
                <!-- here we are using the data-sampler attribute to name our displacement sampler uniform -->
                <img src="assets/img/displacement.jpg" data-sampler="displacement" />
                <img v-for="navItem in navItems" :src="navItem.image" />
              </div>
              <div class="nav__selector-inner-items">
                <div v-for="navItem in navItems"
                  class="nav__selector-inner-items-item h1"
                  :class="{ 'active': navItem.active }"
                  @mouseenter="onNavItemHover(navItem)">{{ navItem.text }}</div>
              </div>
            </div>
            <div v-for="navItem in navItems">{{ navItem.title }}</div>
          </div>
          <div class="nav__content-inner-socials">
            <a v-for="social in socials" :href="social.href" class="nav__content-inner-socials-link label label--upper" target="_blank">{{ social.text }}</a>
          </div>
        </div>
      </div>
    </div>
    <script id="multiple-textures-vs" type="x-shader/x-vertex">
      #ifdef GL_ES
      precision mediump float;
      #endif

      // default mandatory variables
      attribute vec3 aVertexPosition;
      attribute vec2 aTextureCoord;

      uniform mat4 uMVMatrix;
      uniform mat4 uPMatrix;

      // varyings : notice we've got 3 texture coords varyings
      // one for the displacement texture
      // one for our visible texture
      // and one for the upcoming texture
      varying vec3 vVertexPosition;
      varying vec2 vTextureCoord;
      varying vec2 vActiveTextureCoord;
      varying vec2 vNextTextureCoord;

      // textures matrices
      uniform mat4 activeTexMatrix;
      uniform mat4 nextTexMatrix;

      // custom uniforms
      uniform float uTransitionTimer;
      uniform vec2 uResolution;

      void main() {
        vec3 vertexPosition = aVertexPosition;

        gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

        // varyings
        vTextureCoord = aTextureCoord;
        vActiveTextureCoord = (activeTexMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
        vNextTextureCoord = (nextTexMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;

        vVertexPosition = vertexPosition;
      }
    </script>
    <script id="multiple-textures-fs" type="x-shader/x-fragment">
      #ifdef GL_ES
      precision mediump float;
      #endif

      varying vec3 vVertexPosition;
      varying vec2 vTextureCoord;
      varying vec2 vActiveTextureCoord;
      varying vec2 vNextTextureCoord;

      // custom uniforms
      uniform float uTransitionTimer;
      uniform vec2 uResolution;

      // our textures samplers
      // notice how it matches the sampler attributes of the textures we created dynamically
      uniform sampler2D activeTex;
      uniform sampler2D nextTex;
      uniform sampler2D displacement;

      void main( void ) {
        // our displacement texture
        vec4 displacementTexture = texture2D(displacement, vTextureCoord);

        // slides transitions based on displacement and transition timer
        vec2 firstDisplacementCoords = vActiveTextureCoord + displacementTexture.r * ((cos((uTransitionTimer + 45.0) / (45.0 / 3.141592)) + 1.0) / 1.25);
        vec4 firstDistortedColor = texture2D(activeTex, vec2(vActiveTextureCoord.x, firstDisplacementCoords.y));

        // same as above but we substract the effect
        vec2 secondDisplacementCoords = vNextTextureCoord - displacementTexture.r * ((cos(uTransitionTimer / (45.0 / 3.141592)) + 1.0) / 1.25);
        vec4 secondDistortedColor = texture2D(nextTex, vec2(vNextTextureCoord.x, secondDisplacementCoords.y));

        // mix both texture
        vec4 finalColor = mix(firstDistortedColor, secondDistortedColor, 1.0 - ((cos(uTransitionTimer / (45.0 / 3.141592)) + 1.0) / 2.0));

        // handling premultiplied alpha
        finalColor = vec4(finalColor.rgb * finalColor.a, finalColor.a);

        gl_FragColor = finalColor;
      }
    </script>
  </nav>
  `,
  data: () => {
    return {
      navItems: [
        {
          image: `assets/img/heros/home-hero.jpg`,
          text: `Home`,
          active: false
        },
        {
          image: `assets/img/heros/color-speaks-hero.jpg`,
          text: `Color Speaks`,
          active: false
        },
        {
          image: `assets/img/heros/shaw-floors-hero.jpg`,
          text: `Shaw Floors`,
          active: false
        },
        {
          image: `assets/img/heros/floorfit-hero.jpg`,
          text: `FloorFit`,
          active: false
        },
        {
          image: `assets/img/heros/sagepath-hero.jpg`,
          text: `Sagepath`,
          active: false
        },
        {
          image: `assets/img/heros/about-hero.jpg`,
          text: `About`,
          active: false
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
    slideshowState: function() {
      return {
        activeTextureIndex: 1,
        nextTextureIndex: 2, // does not care for now
        maxTextures: this.navItems.length,
        isChanging: false,
        transitionTimer: 0
      };
    }
  },
  mounted: function() {
    // document.querySelector('.arrow-next').addEventListener('click', function() {
    //   shared.pageIndex++;
    //   shared.setActivePrimaryView();
    // });
    // document.querySelector('.arrow-prev').addEventListener('click', function() {
    //   shared.pageIndex--;
    //   shared.setActivePrimaryView();
    // });

    // retain the value of 'this' for accessing slideshowState
    let component = this;

    window.addEventListener('DOMContentLoaded', function() {
      // set up our WebGL context and append the canvas to our wrapper
      var webGLCurtain = new Curtains('canvas');

      // get our plane element
      var planeElements = document.getElementsByClassName('nav__selector-inner-bgs');

      // handling errors
      webGLCurtain.onError(function() {
        // we will add a class to the document body to display original images
        document.body.classList.add('no-curtains', 'image-1');

        // handle simple slides management here
        planeElements[0].addEventListener('click', function() {
          if (component.slideshowState.activeTextureIndex < component.slideshowState.maxTextures) {
            component.slideshowState.nextTextureIndex = component.slideshowState.activeTextureIndex + 1;
          } else {
            component.slideshowState.nextTextureIndex = 1;
          }

          document.body.classList.remove('image-1', 'image-2', 'image-3', 'image-4');
          document.body.classList.add('image-' + component.slideshowState.nextTextureIndex);

          component.slideshowState.activeTextureIndex = component.slideshowState.nextTextureIndex;
        });
      });

      // disable drawing for now
      webGLCurtain.disableDrawing();

      // could be useful to get pixel ratio
      var pixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1.0;

      // some basic parameters
      // we don't need to specifiate vertexShaderID and fragmentShaderID because we already passed it via the data attributes of the plane HTML element
      var params = {
        uniforms: {
          resolution: {
            name: 'uResolution',
            type: '2f',
            value: [pixelRatio * planeElements[0].clientWidth, pixelRatio * planeElements[0].clientHeight]
          },
          transitionTimer: {
            name: 'uTransitionTimer',
            type: '1f',
            value: 0
          }
        }
      };

      var multiTexturesPlane = webGLCurtain.addPlane(planeElements[0], params);

      if (multiTexturesPlane) {
        // the idea here is to create two additionnal textures
        // the first one will contain our visible image
        // the second one will contain our entering (next) image
        // that we will deal with only activeTex and nextTex samplers in the fragment shader
        // and the could work with more images in the slideshow...
        var activeTex = multiTexturesPlane.createTexture('activeTex');
        var nextTex = multiTexturesPlane.createTexture('nextTex');

        multiTexturesPlane
          .onReady(function() {
            // we need to render the first frame
            webGLCurtain.needRender();

            // we set our very first image as the active texture
            activeTex.setSource(multiTexturesPlane.images[component.slideshowState.activeTextureIndex]);
            // we set the second image as next texture but this is not mandatory
            // as we will reset the next texture on slide change
            nextTex.setSource(multiTexturesPlane.images[component.slideshowState.nextTextureIndex]);

            planeElements[0].addEventListener('click', function() {
              if (!component.slideshowState.isChanging) {
                // enable drawing for now
                webGLCurtain.enableDrawing();

                component.slideshowState.isChanging = true;

                // check what will be next image
                if (component.slideshowState.activeTextureIndex < component.slideshowState.maxTextures) {
                  component.slideshowState.nextTextureIndex = component.slideshowState.activeTextureIndex + 1;
                } else {
                  component.slideshowState.nextTextureIndex = 1;
                }
                // apply it to our next texture
                nextTex.setSource(multiTexturesPlane.images[component.slideshowState.nextTextureIndex]);

                setTimeout(function() {
                  // disable drawing now that the transition is over
                  webGLCurtain.disableDrawing();

                  component.slideshowState.isChanging = false;
                  component.slideshowState.activeTextureIndex = component.slideshowState.nextTextureIndex;
                  // our next texture becomes our active texture
                  activeTex.setSource(multiTexturesPlane.images[component.slideshowState.activeTextureIndex]);
                  // reset timer
                  component.slideshowState.transitionTimer = 0;
                }, 780); // add a bit of margin to the timer
              }
            });
          })
          .onRender(function() {
            // increase or decrease our timer based on the active texture value
            if (component.slideshowState.isChanging) {
              component.slideshowState.transitionTimer = Math.min(90, component.slideshowState.transitionTimer + 1);
            }

            // update our transition timer uniform
            multiTexturesPlane.uniforms.transitionTimer.value = component.slideshowState.transitionTimer;
          });
      }
    });
  },
  methods: {
    onNavItemHover(navItem) {
      this.navItems.forEach(item => {
        item.active = false;
      });
      navItem.active = true;
    }
  }
});
