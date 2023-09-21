import { useLanguage } from '../hooks'

export const AboutSection = () => {
  const {t} = useLanguage();
  return (
    <section id='aboutme' className='section-container min-h-screen'>

      <div className='about-text-container'>
        <h2 className='greeting-text'>{t("aboutme.greeting")}</h2>
        <div className='description-container'>
          <p className='bio-text'>{t("aboutme.description")}</p>
        </div>
      </div>

      <div className='technologies-container'>
        <div className='box-technologies'>
          <div className='icon-container'>
            <div className='technology'>
              <img className='icon' src="./icons/html.png" alt="HTML5"/>
              <span>HTML 5</span>
            </div>
            <div className='technology'>
              <img className='icon' src="./icons/css.png" alt="CSS"/>
              <span>CSS</span>
            </div>
            <div className='technology'>
              <img className='icon' src="./icons/js.png" alt="JavaScript"/>
              <span>JavaScript</span>
            </div>
            <div className='technology'>
              <img className='icon' src="./icons/typescript.svg" alt="JavaScript"/>
              <span>TypeScript</span>
            </div>
            <div className='technology'>
              <img className='icon' src="./icons/react.png" alt="React"/>
              <span>React</span>
            </div>
            <div className='technology'>
              <img className='icon' src="./icons/angular.svg" alt="Angular"/>
              <span>Angular</span>
            </div>
            <div className='technology'>
              <img className='icon' src="./icons/node.svg" alt="NodeJS"/>
              <span>Node JS</span>
            </div>
            <div className='technology'>
              <img className='icon' src="./icons/mysql.svg" alt="MySql"/>
              <span>My SQL</span>
            </div>
            <div className='technology'>
              <img className='icon' src="./icons/mongo.svg" alt="MongoDB"/>
              <span>MongoDB</span>
            </div>
          </div>
          <div className='tech-text-container'>
            <div className='tech-description-container'>
              <p className='tech-text'>{t("aboutme.tech")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
