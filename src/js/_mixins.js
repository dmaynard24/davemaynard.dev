const shared = {
  pageIndex: 0,
  setActivePrimaryView() {
    const primaryViews = document.querySelector(`.primary-views`);
    const transformString = `translateX(${shared.pageIndex * -100}vw)`;
    primaryViews.style.transform = transformString;
  },
};
