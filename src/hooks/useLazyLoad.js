import { useEffect } from "react";

export const useLazyLoad = (imgId) => {
    useEffect(() => {
        const img = document.getElementById(imgId);
      
        const loaded = () => {
          img.classList.add('img-loaded');
        }
      
        if(img.complete){
          loaded();
        }else{
          img.addEventListener('load', loaded);
        }
      }, [])
}