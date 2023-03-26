// Internationalization - Multi-language support
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from '../locales/en/translation.json';
import esTranslation from '../locales/es/translation.json';
import frTranslation from '../locales/fr/translation.json';

/**
 * Uses the appropriate translation dictionary, based on language, and associated lookupKey entry to
 * apply translations to elements with the associated 'data-i18n' attribute. This causes text in the DOM to change
 * based on language.
 */
function applyLanguageTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const lookupKey = element.getAttribute('data-i18n');
    // Sets the actual translated text.
    // Note*: ESLint rule here is deliberately disabled to simplify the updating of page HTML elements here.
    // eslint-disable-next-line no-param-reassign
    element.textContent = i18next.t(lookupKey);
  });
}

/**
 * Calls the library i18next.changeLanguage() function and then invokes the applyLanguageTranslations() function
 * in order to update the DOM text with the desired language content.
 * @param {string} language - A i18next library supported language (e.g. en, fr, es, etc...).
 */
function changeSiteLanguage(language) {
  i18next.changeLanguage(language);
  // Force applying new language translations since we do not have a framework
  // like REACT installed to re-render components.
  applyLanguageTranslations();
}

/**
 * Loads the custom i18next configuration that includes language support for English, Spanish and French.
 * Sets the fallback language to English by default.
 */
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

document.addEventListener('DOMContentLoaded', () => {
  // Initialize language support and apply translations
  loadLanguageSupport();
  applyLanguageTranslations();
});

// Sets changeSiteLanguage to the global context so that the function is available as needed
// when language selection is updated.
window.changeSiteLanguage = changeSiteLanguage;

export default {
  loadLanguageSupport,
  applyLanguageTranslations,
  changeSiteLanguage,
};
