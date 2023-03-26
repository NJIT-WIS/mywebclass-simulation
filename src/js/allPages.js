/**
 * Calculates the page top banner height based on the element with role = banner.
 * Includes an explicit setting of '59' to account for our shared navigation bar.
 */
function calculateBannerHeight() {
  const banner = document.querySelector('[role="banner"]');
  const sharedNavigationHeight = 59; // We set an explicit value here to account for later JS loading of shared Navigation
  const bannerHeight = banner.offsetHeight + sharedNavigationHeight;

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

/**
 * Adds a 'scroll-offset' styling class to be applied where required in heading classes.
 * Customization of the 'scroll-offset' stylings applied can be managed in the calculatedBannerHeight() function.
 */
function addScrollOffsetClass() {
  const headings = document.querySelectorAll('main h1, main h2, main h3, main h4, main h5, main h6');
  headings.forEach((heading) => {
    heading.classList.add('scroll-offset');
  });
}

/**
 * Fetches and sets the shared navigation bar used throughout the application.
 */
function addSharedNavigation() {
  const xhr = new XMLHttpRequest();
  const url = './mainNavigation.html';

  xhr.open('GET', url);
  xhr.onload = function sharedNavFetch() {
    if (xhr.status === 200) {
      // Insert the navigation HTML into the placeholder
      const navDiv = document.querySelector('#main-navigation');
      navDiv.innerHTML = xhr.responseText;
    } else {
      // Log an error to the console to provide some indication of failure beyond navigation missing
      console.error('Failed to load main navigation:', xhr.statusText);
    }
  };
  xhr.send();
}

/**
 * Fetches and sets the shared Footer used throughout the application.
 */
function addSharedFooter() {
  const xhr = new XMLHttpRequest();
  const url = './mainFooter.html';

  xhr.open('GET', url);
  xhr.onload = function sharedFooterFetch() {
    if (xhr.status === 200) {
      // Insert the footer HTML into the placeholder
      const navDiv = document.querySelector('#main-footer');
      navDiv.innerHTML = xhr.responseText;
    } else {
      // Log an error to the console to provide some indication of failure beyond navigation missing
      console.error('Failed to load main footer:', xhr.statusText);
    }
  };
  xhr.send();
}

/**
 * Initialization function called from importing module.
 */
exports.initialize = function allPagesInitializer() {
  addSharedNavigation();
  addSharedFooter();
  addScrollOffsetClass();
  calculateBannerHeight();
};
