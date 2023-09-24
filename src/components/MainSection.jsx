import React from 'react'
import { useTranslation } from 'react-i18next'

export const MainSection = ({headerHeight}) => {
const {t} = useTranslation("global");

  return (
    <section id='main' className='section-container min-h-screen pt-28 md:pt-40'>

        <div className='title-container'>
          <h2 className='title'>{t("mainSection.title")}</h2>
          <h4 className='subtitle'>{t("mainSection.subtitle")}</h4>
        </div>

        <div className='profilePicture-container animate__animated animate__fadeIn'>
          <img src="./img/cv.PNG" alt="" />
        </div>    
    </section>
  )
}
