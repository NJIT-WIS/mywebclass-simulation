/* eslint-disable no-undef,  no-unused-vars */
import '../scss/styles.scss';
// Import all of Bootstrap's JS
import { Modal } from 'bootstrap';
import * as bootstrap from 'bootstrap';
// Imported JS definition inclusions
import allPages from './allPages';
import contentPage from './contentPage';
import i18next from './i18next';

// Imports here allow SiteMap and Robots.txt to be picked up and emitted by Webpack
import '../sitemap.xml';
import '../robots.txt';

let resizeTimer;

window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    allPages.initialize();
  }, 250);
});

function createPrivacyModal() {
  const modalHtml = `
    <div class="modal fade" id="privacyModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Privacy Policy</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Policy modal Close Button"></button>
          </div>
          <div class="modal-body">
            <p>Please read our <a href="privacy.html" target="_blank">Privacy Policy</a> carefully before using our website.</p>
            <p>Do you agree to our Privacy Policy?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Disagree Policy Button">Disagree</button>
            <button type="button" class="btn btn-primary" id="agreeButton" aria-label="Agree Policy Button">Agree</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Append the modal HTML to the body of the document
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function initializePrivacyModal() {
  const privacyModal = new Modal(document.getElementById('privacyModal'));

  // Check if the user has already agreed to the policy
  const agreed = localStorage.getItem('privacyPolicyAgreed') === 'true';
  if (!agreed) {
    // Show the modal if the user hasn't agreed
    privacyModal.show();
  }

  // Handle the click event on the Agree button
  const agreeButton = document.getElementById('agreeButton');
  agreeButton.addEventListener('click', () => {
    // Remember the user's choice
    localStorage.setItem('privacyPolicyAgreed', 'true');
    // Hide the modal
    privacyModal.hide();
    // Enable Google Analytics tracking
    gtag('consent', 'update', {
      analytics_storage: 'granted',
    });
  });
}

function createWipModal() {
  const modalHtml = `
  <!-- WIP Modal -->
    <div class="modal fade" id="wipModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Work in Progress</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            This feature is currently a work in progress. Please check back later!
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Append the WIP modal HTML to the body of the document
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function loadGoogleAnalytics() {
  // Replace "GA_MEASUREMENT_ID" with your Google Analytics Measurement ID
  const gaMeasurementId = 'G-31RN40BDBG';

  // Load the Google Analytics tracking code
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize Google Analytics tracking
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', gaMeasurementId, { anonymize_ip: true });

  // Check if the user has provided consent for Google Analytics tracking
  const consent = localStorage.getItem('googleAnalyticsConsent');
  if (consent === 'granted') {
    // Enable Google Analytics tracking if consent has been granted
    gtag('consent', 'update', {
      analytics_storage: 'granted',
    });
  } else if (consent === 'denied') {
    // Disable Google Analytics tracking if consent has been denied
    gtag('consent', 'update', {
      analytics_storage: 'denied',
    });
  } else {
    // Show the privacy modal if no consent has been given
    initializePrivacyModal();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Privacy and Analytics initialized
  createPrivacyModal();
  loadGoogleAnalytics();
  // Add a WIP progress modal for to display on user click for features coming soon
  createWipModal();
  // Imported JS definitions for pages/content initialized
  allPages.initialize();
  contentPage.initialize();
});
