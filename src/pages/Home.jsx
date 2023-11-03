import { useEffect } from 'react'
import { AboutSection, ContactSection, Header, MainSection, ProyectSection } from '../components'
import { useAnimateSections, useLanguage } from '../hooks'
import { SectionWithAnimation } from '../components/SectionWithAnimation';

const sectionsData = [
  { id: 'main', title: 'MainSection', component: MainSection },
  { id: 'aboutme', title: 'AboutSection', component: AboutSection },
  { id: 'proyects', title: 'ProjectSection', component: ProyectSection },
  { id: 'contact', title: 'ContactSection', component: ContactSection },
];

export const Home = () => {

  const { onLoadLanguage } = useLanguage();
  useEffect(() => {
    onLoadLanguage();
  }, [])

  const { isVisible, sectionRefs } = useAnimateSections(sectionsData);

  return (
    <main className='home-container'>
      <Header />
      {sectionsData.map((section, index) => {
        const SectionComponent = section.component;
        return (
            <SectionWithAnimation key={section.id} id={section.id} isVisible={isVisible[section.id]} ref={sectionRefs[index]}>
              <SectionComponent />
            </SectionWithAnimation>
        );
      })}
    </main>
  );
}