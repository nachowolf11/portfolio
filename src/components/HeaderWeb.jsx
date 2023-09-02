import React from 'react'
import { Dropdown } from './Dropdown'
import { useLanguage } from '../helpers/useLanguage'
import * as Scroll from 'react-scroll';


export const HeaderWeb = () => {
const {t} = useLanguage();
let Link = Scroll.Link;
  return (
    <header className='header'>
    <div>
      <Link to="main" spy={true} smooth={true} offset={0} duration={600}>
        <span className='logo'>Ignacio Wolf</span>
      </Link>
    </div>
    <div className='flex flex-row items-center'>
        <ul className='nav'>
            <li>
              <Link activeClass="activeSection" to="aboutme" spy={true} smooth={true} offset={0} duration={600}>
                {t("header.aboutme")}
              </Link>
            </li>
            <li>
              <Link activeClass="activeSection" to="proyects" spy={true} smooth={true} offset={0} duration={600}>
                {t("header.proyects")}
              </Link>
            </li>
            <li>
              <Link activeClass="activeSection" to="contact" spy={true} smooth={true} offset={0} duration={600}>
                {t("header.contact")}
              </Link>
            </li>
        </ul>
        <div className='ml-20'><Dropdown/></div>
    </div>
</header>
  )
}
