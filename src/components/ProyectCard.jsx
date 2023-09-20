import { useLanguage } from "../hooks"

export const ProyectCard = ({background, title, description, url, technologies}) => {
  const {t} = useLanguage('global');

  const icons = {
    react: '/src/assets/icons/react.png',
    node: '/src/assets/icons/node.svg',
    mongodb: '/src/assets/icons/mongo.svg',
  }
  return (
    <div 
        className="flex flex-col justify-center w-1/3 h-72 rounded-xl relative shadow-xl"
        style={{ 
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize:'cover'
        }}
    >
        <h3 className="text-white font-kanit text-4xl text-center">{title}</h3>

        <div className="
            flex flex-col items-center w-full h-full rounded-xl absolute bg-gradient-to-r from-rose-900 to-rose-950 opacity-0
            hover:opacity-100 transition-opacity
        ">
            <h3 className="text-white font-kanit mt-10 text-xl text-justify px-10">{t(description)}</h3>

            {/* <div className="flex justify-around w-3/4 items-center rounded-xl p-5 mt-5">
                {technologies.map(item => (
                <img className="icon" src={icons[item]} alt="technology" />
                ))}
            </div> */}

            <div className="flex items-center rounded-full border-2 border-rose-500 py-2 px-4 mt-14 hover:bg-rose-500">
                <a className="text-xl text-white" href={url}>{t('proyects.visitWeb')}</a>
            </div>
        </div>
    </div>
  )
}
