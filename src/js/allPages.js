function calculateBannerHeight() {
  const banner = document.querySelector('[role="banner"]');
  const bannerHeight = banner.offsetHeight;

  // Set the padding top of .scroll-offset to the banner height
  const scrollOffsetEls = document.querySelectorAll('.scroll-offset');
  // TODO: Need to revisit this in upcoming sprint to refactor this iteration to remove the disabled ESLint here.
  //   The disabling here is meant to be temporary only.
  // eslint-disable-next-line no-restricted-syntax
  for (const el of scrollOffsetEls) {
    el.style.paddingTop = `${bannerHeight}px`;
    el.style.marginTop = '-2em';
  }

  // Set the margin top of the body to the banner height
  document.body.style.marginTop = `${bannerHeight}px`;
}

function addScrollOffsetClass() {
  const headings = document.querySelectorAll('main h1, main h2, main h3, main h4, main h5, main h6');
  headings.forEach((heading) => {
    heading.classList.add('scroll-offset');
  });
}

exports.initialize = function myWebClassInitializer() {
  addScrollOffsetClass();
  calculateBannerHeight();
};
