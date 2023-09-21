import React from 'react'
import { useLanguage } from '../hooks'
import { ProyectCard } from './ProyectCard';

export const ProyectSection = () => {
  const {t} = useLanguage('global');
  return (
    <section id='proyects' className='section-container min-h-screen pt-16 md:pt-32'>

      <div className='flex flex-col items-center'>
        <h2 className='font-kanit font-semibold text-5xl md:text-6xl opacity-80'>{t("proyects.title")}</h2>
        <p className='font-kanit font-extralight opacity-90 mt-5 text-xl text-center px-2 md:text-2xl'>{t("proyects.description")}</p>
      </div>

      <div className='flex flex-wrap w-full px-8 sm:px-20 md:px-10 2xl:px-20 mt-8 md:mt-16'>
        <ProyectCard 
          background={'./img/fondotwitter.png'}
          title={'Twitter Clone'}
          description={'proyects.twitter'}
          url={'https://twitterclone-av6b-dev.fl0.io'}
          technologies={['react','node','mongodb']}
        />
        <ProyectCard 
          background={'./img/fondotwitter.png'}
          title={'Twitter Clone'}
          description={'proyects.twitter'}
          url={'https://twitterclone-av6b-dev.fl0.io'}
          technologies={['react','node','mongodb']}
        />
                <ProyectCard 
          background={'./img/fondotwitter.png'}
          title={'Twitter Clone'}
          description={'proyects.twitter'}
          url={'https://twitterclone-av6b-dev.fl0.io'}
          technologies={['react','node','mongodb']}
        />
      </div>

    </section>
  )
}
