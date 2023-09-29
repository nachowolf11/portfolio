import { useEffect, useRef, useState } from "react";

export const useAnimateSections = (sectionsData) => {
    const [isVisible, setIsVisible] = useState({});
    const sectionRefs = sectionsData.map(() => useRef(null));

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
    return{
        isVisible,
        sectionRefs
    }
}