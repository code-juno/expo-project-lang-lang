import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import tl from './locales/tl.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          ...en
        }
      },
      es: {
        translation: {
          ...es
        }
      },
      fr: {
        translation: {
          ...fr
        }
      },
      tl: {
        translation: {
          ...tl
        }
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });
