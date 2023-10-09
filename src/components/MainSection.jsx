import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const MainSection = () => {
const {t} = useTranslation("global");

useEffect(() => {
  const img = document.getElementById('cv-img');

  const loaded = () => {
    img.classList.add('img-loaded');
  }

  if(img.complete){
    loaded();
  }else{
    img.addEventListener('load', loaded);
  }
}, [])


  return (
    <section className='section-container min-h-screen pt-28 md:pt-40'>

        <div className='title-container'>
          <h2 className='title'>{t("mainSection.title")}</h2>
          <h4 className='subtitle'>{t("mainSection.subtitle")}</h4>
        </div>


        <div className='profilePicture-container'>
          <img
            id='cv-img'
            src="./img/cv2.png"
            alt="Ignacio Wolf"
            loading='lazy'
            className='img-not-loaded'
          />
        </div>    
    </section>
  )
}
