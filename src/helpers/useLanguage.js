import { useTranslation } from "react-i18next";

export const useLanguage = () => {
    const { t, i18n } = useTranslation("global");

    const onChangeLanguage = (e) => {
        const lang = e.currentTarget.getAttribute('data-lang')
        i18n.changeLanguage(lang);
        localStorage.setItem('lang',lang);
    }

    const onLoadLanguage = () => {
        const lang = localStorage.getItem('lang');
        i18n.changeLanguage(lang);
    }

    return{
        t, i18n, onChangeLanguage, onLoadLanguage
    }
}