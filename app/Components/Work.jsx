import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "framer-motion"

const Work = ({ isDarkMode }) => {
    const [visibleProjects, setVisibleProjects] = useState(4);
    
    // Variants untuk animasi proyek masuk
    const projectVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };

    // Variants untuk animasi container saat perubahan jumlah proyek
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    // Fungsi untuk toggle jumlah proyek yang ditampilkan
    const toggleShowMore = () => {
        setVisibleProjects(visibleProjects === 4 ? workData.length : 4);
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='w-full px-[12%] py-10 scroll-mt-20' 
            id='work'
        >
            <motion.h4 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center font-Ovo mb-2 text-lg'
            >
                My Portfolio
            </motion.h4>

            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'
            >
                My Latest Work
            </motion.h2>

            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
            >
                Berikut adalah beberapa proyek terbaru yang telah saya kerjakan. Setiap website dirancang dengan fokus pada estetika, fungsionalitas, dan pengalaman pengguna yang optimal. Saya selalu berusaha menghadirkan solusi digital yang inovatif dan berkualitas.
            </motion.p>

            {/* Bagian Proyek */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className='grid grid-cols-auto gap-5 my-10 dark:text-black'
            >
                {workData.slice(0, visibleProjects).map((project,index) => (
                    <motion.div 
                        key={index}
                        variants={projectVariants}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className='aspect-square bg-no-repeat bg-cover rounded-lg relative cursor-pointer group' 
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                    >
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-lg'>
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-gray-700 text-sm'>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:bg-lime-300 transition'>
                                <a href={project.link} target='_blank'><Image src={assets.send_icon} alt='' className='w-5'/></a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Tombol Show More / Show Less */}
            {workData.length > 4 && (
                <motion.button 
                    onClick={toggleShowMore}
                    className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-10 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover shadow-md'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                >
                    {visibleProjects === 4 ? "Show more" : "Show less"}
                    <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
                </motion.button>
            )}
        </motion.div>
    )
}

export default Work;
