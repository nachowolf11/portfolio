import { useEffect, useState } from "react";
import { useLanguage } from "../hooks"

export const ProyectCard = ({background, title, description, url, technologies}) => {
  const {t} = useLanguage('global');
  const [inProgress, setInProgress] = useState(false)

  useEffect(() => {
    url.length > 0 ? setInProgress(false) : setInProgress(true);
  }, [])
  

//   const icons = {
//     react: '/src/assets/icons/react.png',
//     node: '/src/assets/icons/node.svg',
//     mongodb: '/src/assets/icons/mongo.svg',
//   }
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 px-5 2xl:px-10 my-5 hover:scale-105 transition-all">
    {
        inProgress
        ?
            <div
                className="flex flex-col justify-center w-full h-72 rounded-xl relative shadow-xl overflow-hidden"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <h3 className="text-white font-kanit text-4xl text-center">{title}</h3>
                <div className="flex items-center justify-center absolute bg-stone-400 shadow-lg -rotate-45 w-full h-14 top-48 left-48">
                    <p className="text-white font-bold">{t('proyects.inProgress')}</p>
                </div>

                <div className="
                    flex flex-col items-center justify-center w-full h-full rounded-xl absolute bg-gradient-to-r from-rose-900 to-rose-950 opacity-0
                    hover:opacity-100 transition-opacity
                ">
                    <h3 className="text-white font-kanit text-justify px-10 text-lg md:text-xl">{t(description)}</h3>
                </div>


            </div>
        :
            <div
                className="flex flex-col justify-center w-full h-72 rounded-xl relative shadow-xl"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <h3 className="text-white font-kanit text-4xl text-center">{title}</h3>

                <div className="
                    flex flex-col items-center justify-center w-full h-full rounded-xl absolute bg-gradient-to-r from-rose-900 to-rose-950 opacity-0
                    hover:opacity-100 transition-opacity
                ">
                    <h3 className="text-white font-kanit text-justify px-10 text-lg md:text-xl">{t(description)}</h3>

                    {/* <div className="flex justify-around w-3/4 items-center rounded-xl p-5 mt-5">
                {technologies.map(item => (
                <img className="icon" src={icons[item]} alt="technology" />
                ))}
            </div> */}

                    <div className="flex items-center rounded-full border-2 border-rose-500 py-2 px-4 mt-5 sm:mt-8 hover:bg-rose-500">
                        <a className="text-xl text-white" href={url}>{t('proyects.visitWeb')}</a>
                    </div>
                </div>
            </div>
    }
    </div>
  )
}
