import { useEffect } from 'react'
import { AboutSection, ContactSection, Header, MainSection, ProyectSection } from '../components'
import { useLanguage } from '../hooks'

export const Home = () => {

  const { onLoadLanguage } = useLanguage();
  useEffect(() => {
    onLoadLanguage();
  }, [])
  

  return (
    <main className='home-container'>
        <Header/>
        <MainSection/>
        <AboutSection/>
        <ProyectSection/>
        <ContactSection/>
    </main>
  )
}
