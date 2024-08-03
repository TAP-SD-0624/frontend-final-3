import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json";
import arTranslation from "./ar.json";
import LanguageDetector from "i18next-browser-languagedetector";

const initializeI18n = () => {
  const savedLanguage = localStorage.getItem("language") || "en";

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(
      {
        lng: savedLanguage,
        compatibilityJSON: "v3",
        resources: {
          ar: { translation: arTranslation },
          en: { translation: enTranslation },
        },
        fallbackLng: "ar",
        detection: {
          order: ["querystring", "cookie", "localStorage"],
          caches: ["localStorage", "cookie"],
        },
        keySeparator: ".",
        missingKeyHandler: function (lng, ns, key, fallbackValue) {
          console.error(`Missing translation key: ${key}`);
          throw new Error(`Missing translation key: ${key}`);
        },

        interpolation: {
          escapeValue: false,
        },
      },
      () => {
        updateBodyDirection(i18n.language);
      }
    );

  i18n.on("languageChanged", (language) => {
    updateBodyDirection(language);
  });
};

function updateBodyDirection(language: string) {
  if (language === "ar") {
    document.body.dir = "rtl";
  } else {
    document.body.dir = "ltr";
  }
}

const changeLanguage = (language: string) => {
  i18n.changeLanguage(language);
  localStorage.setItem("language", language); // Save the selected language to localStorage
};

export { initializeI18n, changeLanguage };
