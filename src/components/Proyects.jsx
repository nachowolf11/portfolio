import { motion } from 'framer-motion'
import { useState } from "react"
import { ProyectsData } from "../utils/proyectsData"
import { useLanguage } from '../hooks'

export function Proyects() {
    const { t } = useLanguage('global');
    const [expandedIndex, setExpandedIndex] = useState(null)

    const handleClick = (id) => {
        setExpandedIndex(id === expandedIndex ? -1 : id)
    }

    const cardVariants = {
        expanded: {
            width: window.innerWidth > 880 ? "460px" : "340px",
            opacity: 1
        },
        collapsed: {
            width: window.innerWidth > 880 ? "350px" : "260px",
            opacity: 0.8
        }
    }

    return (
        <div>
            <div className="flex justify-center mb-16">
                <div>
                    <div className="flex flex-col items-center h-full gap-5 px-2 md:flex-row">
                        {ProyectsData.map(({ id, title, coverImage, appImage, description, skills, url }) => (
                            <motion.div key={id}
                                className={`cursor-pointer h-[400px] bg-cover bg-no-repeat bg-center rounded-[20px] mx-2 shadow-md shadow-slate-400 ${id === expandedIndex && 'expanded'}`}
                                initial={{ opacity: 1 }}
                                variants={cardVariants}
                                animate={id === expandedIndex ? 'expanded' : 'collapsed'}
                                exit={{
                                    opacity: 1
                                }}
                                transition={{ duration: 0.5 }}
                                onClick={()=>{handleClick(id)}}
                                style={{
                                    backgroundImage: `url(${id === expandedIndex ? appImage : coverImage})`
                                }}
                            >
                                <div className={`flex flex-col ${id === expandedIndex && url !== '' ? 'justify-between' : 'justify-end'} h-full`}>
                                    {id === expandedIndex && url !== '' && (
                                        <>
                                        <div className=' flex justify-center mt-32'>
                                            <a href={url} target='_blank'
                                                className='text-white font-normal select-none text-xl bg-gray-800 bg-opacity-75 font-kanit rounded-full px-5 py-3 hover:shadow-lg hover:shadow-white transition-all'>
                                                {t('projects.visitWeb')}
                                            </a>
                                        </div>
                                        </>
                                    )}
                                    <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center p-3">
                                        <h2 className="font-kanit text-xl font-semibold text-center text-white select-none">{title}</h2>
                                        {id === expandedIndex && (
                                            <>
                                                <p className='text-white font-kanit font-extralight text-lg select-none'>{t(description)}</p>
                                                <div className="flex gap-5 mt-3">
                                                    {skills.map((data, index) => (
                                                        <p key={index}>{data.icon}</p>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}