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
      <p>I'm an ambitious web developer with several years of experience creating functional, responsive websites and applications. I've worked closely with teams of designers and back-end developers, demonstrating the ability to communicate effectively with others in a fast-paced, agile environment.</p>
      `
    };
  }
});
