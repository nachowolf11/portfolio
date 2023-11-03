import { motion } from 'framer-motion'
import { useState } from "react"
import { ProyectsData } from "../utils/proyectsData"
import { useLanguage } from '../hooks'

export function Proyects() {
    const { t } = useLanguage('global');
    const [expandedIndex, setExpandedIndex] = useState(null)

    const handleClick = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index)
    }

    const cardVariants = {
        expanded: {
            width: window.innerWidth > 880 ? "460px" : "340px",
            opacity: 1
        },
        collapsed: {
            width: window.innerWidth > 880 ? "300px" : "260px",
            opacity: 0.2
        }
    }

    return (
        <div>
            <div className="flex justify-center mb-16">
                <div>
                    <div className="flex flex-col items-center h-full gap-5 px-2 md:flex-row">
                        {ProyectsData.map(({ id, title, imageUrl, description, skills }) => (
                            <motion.div key={id}
                                className={`cursor-pointer h-[400px] bg-auto bg-no-repeat bg-center rounded-[20px] mx-2 ${id === expandedIndex && 'expanded'}`}
                                initial={{ opacity: 1 }}
                                variants={cardVariants}
                                animate={id === expandedIndex ? 'expanded' : 'collapsed'}
                                exit={{
                                    opacity: 1
                                }}
                                transition={{ duration: 0.5 }}
                                onClick={() => handleClick(id)}
                                style={{
                                    backgroundImage: `url(${imageUrl})`
                                }}
                            >
                                <div className="flex flex-col justify-end h-full">
                                    <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center p-3">
                                        <h2 className="font-kanit text-xl font-semibold text-center text-white">{title}</h2>
                                        {id === expandedIndex && (
                                            <>
                                                <p className='text-white font-kanit font-extralight text-lg'>{t(description)}</p>
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