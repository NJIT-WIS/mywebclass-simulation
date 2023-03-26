// Internationalization - Multi-language support
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from '../locales/en/translation.json';
import esTranslation from '../locales/es/translation.json';
import frTranslation from '../locales/fr/translation.json';

function applyLanguageTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const lookupKey = element.getAttribute('data-i18n');
    // Sets the actual translated text.
    // Note*: ESLint rule here is deliberately disabled to simplify the updating of page HTML elements here.
    // eslint-disable-next-line no-param-reassign
    element.textContent = i18next.t(lookupKey);
  });
}

function changeSiteLanguage(language) {
  i18next.changeLanguage(language);
  // Force applying new language translations since we do not have a framework
  // like REACT installed to re-render components.
  applyLanguageTranslations();
}

function loadLanguageSupport() {
  // Configure i18next
  i18next.use(LanguageDetector).init({
    debug: true,
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
      fr: {
        translation: frTranslation,
      },
    },
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'navigator'],
      caches: ['cookie'],
    },
  });
}

function addLanguageChangeHandler() {
  // Create and append a <script> element to be included in HTML pages
  const scriptElement = document.createElement('script');
  scriptElement.type = 'text/javascript';
  scriptElement.innerHTML = changeSiteLanguage.toString(); // Stringify our defined handler function
  document.head.appendChild(scriptElement);
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize language support and apply translations
  loadLanguageSupport();
  applyLanguageTranslations();
  // Add the language change handler to the rendered page.
  // addLanguageChangeHandler();
});

window.changeSiteLanguage = changeSiteLanguage;

export default {
  loadLanguageSupport,
  applyLanguageTranslations,
  addLanguageChangeHandler,
  changeSiteLanguage,
};
