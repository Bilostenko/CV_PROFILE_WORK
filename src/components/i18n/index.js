import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { LOCALES } from './constants.js';
import { uk} from "../i18n/copies/uk.js";
import { en} from "../i18n/copies/en.js";


const resources = {
  [LOCALES.EN]: {
    translation: en
  },
  [LOCALES.UK]: {
    translation: uk
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: LOCALES.UK,
    // lng: LOCALES.UK,
    interpolation: {
      escapeValue: false
    }
  });

