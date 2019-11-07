const home = Vue.component('home', {
  template: `
  <div class="primary-views">
    <div class="primary-view active">
      <div class="primary-view__bg">
        <div class="primary-view__bg-inner" :style="{ 
          backgroundImage: 'url(' + image + ')', 
          transform: 'scale(1.05) translate(' + bgTranslateX + ', ' + bgTranslateY + ')' 
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
    <case-study></case-study>
  </div>
  `,
  data: () => {
    return {
      image: `assets/img/heros/home-hero.jpg`,
      label: `HOME`,
      title: `Design &amp; Code`,
      description: `
      <p>I'm an ambitious web developer with several years of experience creating functional, responsive websites and applications. I've worked closely with teams of designers and back-end developers, demonstrating the ability to communicate effectively with others in a fast-paced, agile environment.</p>
      `,
      bgTranslateX: '0%',
      bgTranslateY: '0%'
    };
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

    let _this = this;

    function handleMouseOver(e) {
      if (this.classList.contains('active')) {
        let windowBounds = window.getWindowBounds(),
          percentX = e.clientX / windowBounds.width,
          percentY = e.clientY / windowBounds.height;

        _this.bgTranslateX = (percentX * 2.25).toFixed(2) * -1 + '%';
        _this.bgTranslateY = (percentY * 2.25).toFixed(2) * -1 + '%';
      }
    }

    let primaryViews = document.querySelectorAll('.primary-view');
    primaryViews.forEach(pv => {
      pv.addEventListener('mousemove', handleMouseOver);
    });
  }
});
