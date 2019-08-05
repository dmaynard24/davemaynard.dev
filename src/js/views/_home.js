const home = Vue.component('home', {
  template: `
  <div class="primary-view">
    <div class="primary-view__bg" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
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
  data: () => {
    return {
      image: `assets/img/focus.jpg`,
      label: `HOME`,
      title: `Design &amp; Code`,
      description: `
      <p>Aenean non orci id libero ornare efficitur id eu ex. Quisque quis ullamcorper nibh. Nam lobortis velit in sagittis imperdiet. Nam eu mi ut ante placerat efficitur. Nullam fringilla ante sit amet sem porttitor pulvinar.</p>
      `
    };
  }
});
