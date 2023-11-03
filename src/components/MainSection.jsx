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
    <section className='section-container min-h-screen px-5 md:px-0 pt-24 md:pt-36'>

        <div className='title-container'>
          <h2 className='title'>{t("mainSection.title")}</h2>
          <h4 className='subtitle mt-5'>{t("mainSection.subtitle")}</h4>
          <h4 className='subtitle'>{t("mainSection.subtitle2")}</h4>
        </div>

        <div className='flex justify-center mt-16 w-full'>
          <Link activeClass="activeSection" className='mr-10' to="aboutme" spy={true} smooth={true} offset={0} duration={600}>
            <button className='border-2 border-red-400 shadow-lg text-xl md:text-2xl p-3 font-normal font-kanit rounded-md hover:scale-110 hover:bg-red-400 hover:text-white transition-all w-36 md:w-40 select-none'>
              {t("mainSection.knowme")}
            </button>
          </Link>
          <Link activeClass="activeSection" to="contact" spy={true} smooth={true} offset={0} duration={600}>
            <button className='border-2 border-red-400 shadow-lg text-xl md:text-2xl p-3 font-normal font-kanit rounded-md hover:scale-110 hover:bg-red-400 hover:text-white transition-all w-36 md:w-40 select-none'>
              {t("mainSection.contactme")}
            </button>
          </Link>
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
