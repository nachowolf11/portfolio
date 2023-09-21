import React from 'react'
import { useTranslation } from 'react-i18next'

export const MainSection = ({headerHeight}) => {
const {t, i18n} = useTranslation("global");

  return (
    <section id='main' className='section-container min-h-screen pt-28 md:pt-40'>

        <div className='title-container'>
          <h2 className='title'>{t("mainSection.title")}</h2>
          <h4 className='subtitle'>{t("mainSection.subtitle")}</h4>
        </div>

        <div className='profilePicture-container'>
          <img src="./img/cv1x1.PNG" alt="" />
        </div>    
    </section>
  )
}
