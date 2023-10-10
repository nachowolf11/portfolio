import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as Scroll from 'react-scroll';


export const MainSection = () => {
let Link = Scroll.Link;
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
        <Link activeClass="activeSection" className='text-center font-kanit text-xl' to="aboutme" spy={true} smooth={true} offset={0} duration={600}>
          <svg className='hover:cursor-pointer arrowdown' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
            <polygon points="10,30 50,70 90,30" fill="rgba(0, 0, 0, 0.77)" stroke="" stroke-width="5" />
            <polygon points="10,40 50,80 90,40" fill="rgba(0, 0, 0, 0.521)" stroke="" stroke-width="5" opacity="0.6" filter="url(#blur)" />
            <defs>
              <filter id="blur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
              </filter>
            </defs>
          </svg>
        </Link>
    </section>
  )
}
