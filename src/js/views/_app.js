const appView = Vue.component('app-view', {
  template: `
    <main id="app-view">
      <primary-view :image="home.image" :label="home.label" :title="home.title" :description="home.description"></primary-view>
    </main>
  `,
  data: () => {
    return {
      home: {
        image: `assets/img/heros/home-hero.jpg`,
        label: `HOME`,
        title: `Design &amp; Code`,
        description: `
        <p>I'm an ambitious web developer with several years of experience creating functional, responsive websites and applications. I've worked closely with teams of designers and back-end developers, demonstrating the ability to communicate effectively with others in a fast-paced, agile environment.</p>
        `
      }
    };
  }
});
