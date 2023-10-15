import React from 'react'
import { useLanguage } from '../hooks';

export const CompanyCard = ({ img, name, description, rol }) => {
  const {t} = useLanguage('global');
  return (
        <div className='flex flex-col sm:flex-row items-center sm:items-center sm:justify-center w-full md:w-10/12 xl:w-8/12 border-2 shadow-lg bg-orange-50 bg-opacity-5 rounded-2xl mt-10 py-14
            px-12 min-[420px]:px-24 min-[550px]:px-32 sm:px-8 lg:px-24 border-red-300'
        >
            {
                img ?
                    <img className='sm:w-44 sm:mr-5 lg:w-56' src={img} alt={name} />
                :
                    <h2 className='sm:w-44 sm:mr-5 lg:w-56 font-kanit text-6xl'>{name}</h2>
            }

            <div className='flex flex-col lg:px-10'>
            <p className='font-kanit font-extralight text-xl text-justify mt-6 sm:mt-0'>{t(description)}</p>
            <p className='font-kanit font-extralight text-xl mt-6'>{t(rol)}</p>
            </div>
        </div>
  )
}
