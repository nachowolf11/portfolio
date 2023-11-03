import { useLanguage } from '../hooks'
import { Proyects } from './';
import { CompanyCard } from './CompanyCard';

export const ProyectSection = () => {
  const {t} = useLanguage('global');
  return (
    <section className='section-container h-min-screen'>

      <div className='flex flex-col items-center pt-32 md:pt-32 md:mb-24 mb-14'>
        <h2 className='font-kanit font-semibold text-5xl md:text-6xl opacity-80'>{t("projects.title")}</h2>
        <p className='subtitle mt-5'>{t("projects.description")}</p>
      </div>

      <Proyects/>

      <div className='w-11/12 border-t-2 border-black border-opacity-10 my-20'>
        <div className='flex flex-col items-center py-16 md:py-32'>
          <h6 className='text-4xl font-kanit font-medium opacity-80 text-black text-center'>{t('projects.actual')}</h6>

          <CompanyCard name={'Thalamus'} img={"./icons/thalamus.png"} description={'projects.thalamus.description'} rol={'projects.thalamus.rol'}/>
          
          <CompanyCard name={'Pronova'} description={'projects.pronova.description'} rol={'projects.pronova.rol'}/>

        </div>
      </div>

    </section>
  )
}
