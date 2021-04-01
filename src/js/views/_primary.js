const primaryView = Vue.component('primary-view', {
  template: `
  <div class="primary-view" @mousemove="handleMousemove">
    <div class="primary-view__bg">
      <div class="primary-view__bg-inner" :style="{ 
        backgroundImage: 'url(' + image + ')', 
        transform: 'scale(1.025) translate(' + bgTranslateX + ', ' + bgTranslateY + ')' 
      }"></div>
    </div>
    <div class="primary-view__content">
      <p class="h1 h1--large" aria-hidden="true" v-html="title"></p>
      <div class="primary-view__content-inner">
        <p class="label label--upper">{{ label }}</p>
      </div>
      <div class="primary-view__content-inner">
        <h1 v-html="title"></h1>
        <div v-html="description"></div>
      </div>
    </div>
    <aside class="primary-view__aside">
      <p class="h1 h1--xlarge" aria-hidden="true" v-html="title"></p>
    </aside>
  </div>
  `,
  props: ['image', 'label', 'title', 'description', 'screens'],
  data: () => {
    return {
      bgTranslateX: '0%',
      bgTranslateY: '0%'
    };
  },
  methods: {
    handleMousemove: function(e) {
      let windowBounds = window.getWindowBounds(),
        mouseX = e.clientX,
        mouseY = e.clientY,
        windowCenter = {
          x: windowBounds.width / 2,
          y: windowBounds.height / 2
        },
        percentX = (windowCenter.x - mouseX) / windowBounds.width,
        percentY = (windowCenter.y - mouseY) / windowBounds.height;

      this.bgTranslateX = (percentX * 1.2).toFixed(2) + '%';
      this.bgTranslateY = (percentY * 1.2).toFixed(2) + '%';
    }
  }
});