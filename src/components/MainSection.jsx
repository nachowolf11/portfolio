import React from 'react'
import { useTranslation } from 'react-i18next'

export const MainSection = ({headerHeight}) => {
const {t, i18n} = useTranslation("global");

  return (
    <section className='section-container' style={{ paddingTop: `calc(${headerHeight} + 100px)` }}>
        <div className='title-container'>
            <h1 className='title'>{t("mainSection.title")}</h1>
            <h4 className='subtitle'>{t("mainSection.subtitle")}</h4>
        </div>
    </section>
  )
}
