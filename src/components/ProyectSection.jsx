import React from 'react'
import { useLanguage } from '../hooks'
import { ProyectCard } from './ProyectCard';

export const ProyectSection = () => {
  const {t} = useLanguage('global');
  return (
    <section className='section-container h-min-screen'>

      <div className='flex flex-col items-center pt-16 md:pt-32'>
        <h2 className='font-kanit font-semibold text-5xl md:text-6xl opacity-80'>{t("projects.title")}</h2>
        <p className='font-kanit font-extralight opacity-90 mt-5 text-xl text-center px-2 md:text-2xl'>{t("projects.description")}</p>
      </div>

      <div className='flex flex-wrap w-full px-8 sm:px-20 md:px-10 2xl:px-20 mt-8 md:mt-20 md:mb-20'>
        <ProyectCard 
          background={'./img/fondotwitter.png'}
          title={'Twitter Clone'}
          description={'projects.twitter'}
          url={'https://twitterclone-av6b-dev.fl0.io'}
          technologies={['react','node','mongodb']}
        />
        <ProyectCard 
          background={'./img/fondoPokeapp.png'}
          title={'Ecommerce'}
          description={'projects.ecommerce'}
          url={''}
          technologies={['react','node','mongodb']}
        />
      </div>

      <div className='w-11/12 border-t-2 border-black border-opacity-10 my-20'>
        <div className='flex flex-col items-center py-16 md:py-32'>
          <h6 className='text-4xl font-kanit font-medium opacity-80 text-black text-center'>{t('projects.actual')}</h6>
          <div className='flex flex-col sm:flex-row items-center sm:items-center sm:justify-center w-full md:w-10/12 xl:w-8/12 border-2 border-sky-200 shadow-lg bg-orange-50 bg-opacity-5 rounded-2xl mt-10 py-14
            px-12 min-[420px]:px-24 min-[550px]:px-32 sm:px-8 lg:px-24' 
          >
            <img className='sm:w-44 sm:mr-5 lg:w-56' src="./icons/thalamus.png" alt="thalamus" />
            <div className='flex flex-col lg:px-10'>
              <p className='font-kanit font-extralight text-xl text-justify mt-6 sm:mt-0'>{t('projects.thalamus')}</p>
              <p className='font-kanit font-extralight text-xl mt-6'>{t('projects.rolThalamus')}</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
