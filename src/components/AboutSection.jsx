import { useLanguage } from '../hooks'

export const AboutSection = () => {
  const {t} = useLanguage();
  return (
    <section id='aboutme' className='section-container bg-red-400'>
      <div className='about-text-container'>
        <h2 className='greeting-text'>{t("aboutme.greeting")}</h2>
        <div className='description-container'>
          <p className='bio-text'>{t("aboutme.description")}</p>
        </div>

      </div>
    </section>
  )
}
