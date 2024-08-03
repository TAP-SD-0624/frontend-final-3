import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json";
import arTranslation from "./ar.json";

export const resources = {
  en: {
    translation: enTranslation,
  },
  ar: {
    translation: arTranslation,
  },
};

export function initializeI18n(language: string) {
  i18n.use(initReactI18next).init({
    resources,
    lng: language,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    returnNull: false,
    compatibilityJSON: "v3",
  });

  return i18n;
}
