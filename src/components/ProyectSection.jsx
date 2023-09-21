import React from 'react'
import { useLanguage } from '../hooks'
import { ProyectCard } from './ProyectCard';

export const ProyectSection = () => {
  const {t} = useLanguage('global');
  return (
    <section id='proyects' className='section-container min-h-screen pt-32'>

      <div className='flex flex-col items-center'>
        <h2 className='font-kanit font-semibold text-6xl opacity-80'>{t("proyects.title")}</h2>
        <p className='font-kanit font-extralight opacity-90 mt-5 text-2xl'>{t("proyects.description")}</p>
      </div>

      <div className='flex flex-wrap mt-20 w-3/4'>
        <ProyectCard 
          background={'./src/assets/img/fondotwitter.png'}
          title={'Twitter Clone'}
          description={'proyects.twitter'}
          url={'https://twitterclone-av6b-dev.fl0.io'}
          technologies={['react','node','mongodb']}
        />
      </div>

    </section>
  )
}
