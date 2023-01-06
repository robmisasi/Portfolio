import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en_US from "./en-US.json";

const resources = {
  en: { translation: en_US },
};

i18n.use(initReactI18next).init({ resources, lng: "en" });

export default i18n;
