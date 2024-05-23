import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { LOCALES } from './constants';
import { uk } from './copies/uk';
import { en } from './copies/en';

const resources = {
  [LOCALES.EN]: {
    translation: en,
  },
  [LOCALES.UK]: {
    translation: uk,
  },
};
console.log('Initializing i18next with resources:', resources);

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: LOCALES.UK,
    interpolation: {
      escapeValue: false,
    },
  }, (err, t) => {
    if (err) {
      console.error('i18next initialization error:', err);
    } else {
      console.log('i18next initialized with language:', i18n.language);
      console.log('Available resources:', resources);
    }
  });

i18n.on('languageChanged', (lng) => {
  console.log(`Language changed to: ${lng}`);
  console.log('Current translations:', i18n.getDataByLanguage(lng));
});
export default i18n;

