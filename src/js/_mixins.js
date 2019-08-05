const shared = {
  pageIndex: 0,
  setActivePrimaryView: function() {
    let primaryViews = document.querySelector('.primary-views'),
      transformString = `translateX(${shared.pageIndex * -100}vw)`;
    primaryViews.style.transform = transformString;
  }
};
