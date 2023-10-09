import { useLanguage } from '../hooks'

export const Dropdown = () => {

const {t, onChangeLanguage, useLang} = useLanguage();
  return (
    <>
    {
      useLang === 'en'
      ?
        <div>
          <img onClick={()=> onChangeLanguage('es')} className='w-10 cursor-pointer hover:scale-125 transition-all' src="./icons/spain.svg" alt=""/>
        </div>
      :
        <div>
          <img onClick={()=> onChangeLanguage('en')} className='w-10 cursor-pointer hover:scale-125 transition-all' src="./icons/uk.svg" alt=""/>
        </div>
    }
    </>
  )
}
