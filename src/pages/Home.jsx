import React, { useEffect } from 'react'
import { BioSection, ContactSection, Header, MainSection, ProyectSection } from '../components'
import { useLanguage } from '../helpers/useLanguage'

//Ajustar acorde a la clase header en index.css
const headerHeight = '100px'

export const Home = () => {

  const { onLoadLanguage } = useLanguage();
  useEffect(() => {
    onLoadLanguage();
  }, [])
  

  return (
    <main className='home-container'>
        <Header/>
        <MainSection headerHeight={headerHeight}/>
        <BioSection headerHeight={headerHeight}/>
        <ProyectSection/>
        <ContactSection/>
    </main>
  )
}
