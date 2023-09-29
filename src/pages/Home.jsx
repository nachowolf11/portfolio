import { useEffect, useRef, useState } from 'react'
import { AboutSection, ContactSection, Header, MainSection, ProyectSection } from '../components'
import { useLanguage } from '../hooks'
import { SectionWithAnimation } from '../components/SectionWithAnimation';

const sectionsData = [
  // Define los datos de tus secciones aquí
  // Por ejemplo:
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

  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = sectionsData.map(() => useRef(null)); // Utiliza una matriz de referencias

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const sectionObservers = {};

    sectionsData.forEach((section, index) => {
      sectionObservers[section.id] = new IntersectionObserver(
        ([entry]) => {
          setIsVisible((prev) => ({
            ...prev,
            [section.id]: entry.isIntersecting,
          }));
        },
        observerOptions
      );

      if (sectionRefs[index].current) {
        sectionObservers[section.id].observe(sectionRefs[index].current);
      }
    });

    return () => {
      Object.values(sectionObservers).forEach((observer) => {
        observer.disconnect();
      });
    };
  }, [sectionRefs]);

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