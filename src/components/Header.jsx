import React from 'react'
import { Dropdown } from './Dropdown'
import { useLanguage } from '../helpers/useLanguage'

export const Header = () => {
    const {t} = useLanguage();
  return (
    <header className='header'>
        <div><span className='font-bold text-4xl'>IW</span></div>
        <div className='flex flex-row items-center'>
            <ul className='nav'>
                <li>{t("header.aboutme")}</li>
                <li>{t("header.proyects")}</li>
                <li>{t("header.contact")}</li>
            </ul>
            <div className='ml-20'><Dropdown/></div>
        </div>
    </header>
  )
}
