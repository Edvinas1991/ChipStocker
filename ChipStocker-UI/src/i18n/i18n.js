import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import en from './translations/en.json';
import lt from './translations/lt.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en,lt
        },
        load:"languageOnly",
        ns:[],
        whitelist:['en','lt'],
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }

    });

export default i18n;