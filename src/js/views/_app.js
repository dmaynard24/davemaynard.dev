const appView = Vue.component('app-view', {
  template: `
    <main id="app-view">
      <primary-view :image="home.image" :label="home.label" :title="home.title" :description="home.description"></primary-view>
      <primary-view v-for="casestudy in casestudies" :image="casestudy.image" :label="casestudy.label" :title="casestudy.title" :description="casestudy.description"></primary-view>
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
      },
      casestudies: [
        {
          image: `assets/img/heros/color-speaks-hero.jpg`,
          label: `CASE STUDY`,
          title: `Color Speaks`,
          description: `
          <p>Aenean non orci id libero ornare efficitur id eu ex. Quisque quis ullamcorper nibh. Nam lobortis velit in sagittis imperdiet. Nam eu mi ut ante placerat efficitur. Nullam fringilla ante sit amet sem porttitor pulvinar. Cras nec pharetra est. Maecenas magna nibh, pulvinar accumsan ipsum eget, fermentum sodales purus. Proin porta lacinia aliquam.</p>
          <p>Aenean non orci id libero ornare efficitur id eu ex. Quisque quis ullamcorper nibh. Nam lobortis velit in sagittis.</p>
          `
        }
      ]
    };
  }
});
