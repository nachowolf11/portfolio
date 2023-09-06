import { useDropdown, useLanguage } from '../hooks';
import * as Scroll from 'react-scroll';
import { Dropdown } from './Dropdown';

export const HeaderMobile = () => {
const {t} = useLanguage();
const {toggleOpen} = useDropdown('dropdown-list');
let Link = Scroll.Link;

  return (
    <div className='md:hidden fixed w-full bg-red-400 bg-opacity-90 z-50'>
        <div className='flex flex-row justify-between items-center relative w-full my-2'>
            <Link to="main" spy={true} smooth={true} offset={0} duration={600}>
                <span className='logo'>Ignacio Wolf</span>
            </Link>
            <div className='flex flex-row items-center mr-4'>
                <div><Dropdown/></div>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleOpen} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </div>

            <div id='dropdown-list' className='absolute top-12 left-0 w-full bg-red-100'>
                <ul className='flex flex-col items-center border-t-2 border-red-300 border-opacity-40'>
                    <li className='text-header-mobile'>
                        <Link activeClass="activeSection" to="aboutme" spy={true} smooth={true} offset={0} duration={600}>
                            {t("header.aboutme")}
                        </Link>
                    </li>
                    <li className='text-header-mobile'>
                        <Link activeClass="activeSection" to="proyects" spy={true} smooth={true} offset={0} duration={600}>
                            {t("header.proyects")}
                        </Link>
                    </li>
                    <li className='text-header-mobile'>
                        <Link activeClass="activeSection" to="contact" spy={true} smooth={true} offset={0} duration={600}>
                            {t("header.contact")}
                        </Link>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}
