import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useLanguage = () => {
    const { t, i18n } = useTranslation("global");
    const [useLang, setUseLang] = useState('es')

    const onChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setUseLang(lang);
        localStorage.setItem('lang',lang);
    }

    const onLoadLanguage = () => {
        const lang = localStorage.getItem('lang');
        i18n.changeLanguage(lang);
        setUseLang(lang);
    }

    return{
        t, i18n, onChangeLanguage, onLoadLanguage, useLang, setUseLang
    }
}