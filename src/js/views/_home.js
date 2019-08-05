const home = Vue.component('home', {
  template: `
  <div class="home-view">
    <div class="home-view__bg" style="background-image: url('assets/img/focused-hd.jpg');"></div>
    <div class="home-view__content">
      <p class="h1 h1--large" aria-hidden="true">Design &amp; Code</p>
      <div class="home-view__content-inner">
        <p class="label label--upper">Home</p>
      </div>
      <div class="home-view__content-inner">
        <h1>Design &amp; Code</h1>
        <p>Aenean non orci id libero ornare efficitur id eu ex. Quisque quis ullamcorper nibh. Nam lobortis velit in sagittis imperdiet. Nam eu mi ut ante placerat efficitur. Nullam fringilla ante sit amet sem porttitor pulvinar.</p>
      </div>
    </div>
    <aside class="home-view__aside">
      <p class="h1 h1--xlarge" aria-hidden="true">Design &amp; Code</p>
    </aside>
  </div>
  `
});
