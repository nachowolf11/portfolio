import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const MainSection = ({headerHeight}) => {
const {t} = useTranslation("global");
const [imageLoaded, setImageLoaded] = useState(false);

const handleImageLoad = () => {
  setImageLoaded(true);
};

  return (
    <section id='main' className='section-container min-h-screen pt-28 md:pt-40'>

        <div className='title-container'>
          <h2 className='title'>{t("mainSection.title")}</h2>
          <h4 className='subtitle'>{t("mainSection.subtitle")}</h4>
        </div>

        <div className='profilePicture-container animate__animated animate__fadeIn'>
          <img 
            className={`animate__animated ${imageLoaded ? 'animate__fadeIn' : ''}`}
            src="./img/cv.PNG"
            alt="Ignacio Wolf"
            onLoad={handleImageLoad}
          />
        </div>    
    </section>
  )
}
