import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
          flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] 
        max-w-3xl leading-[30px] bg-[#303234] bg-opacity-30 rounded-lg px-2 py-2 indent-6'
      >
        <p>
          I'm <span className='text-[20px] text-green-300'>Nathan Pawlas</span>. A third year student studying Computer Science at the University of Virginia.
          I have experience in <span className='text-[20px] text-pink-300'>Web Development</span> through various personal projects as well as internships.
          I primarily focus on <span className='text-[20px] text-pink-300'>Frontend Development</span> but I have experience working on backends of various codebases.
        </p>
        <p className='mt-3'>
          I also have a passion for <span className='text-[20px] text-pink-300'>Game Development</span>. I am the Head of Directors for the University of Virginia's 
          Student Game Developer's club. There I over see the organization, progress, and general cohesion of development teams.
          This semester I am also directing a team myself. Along with my passion for creating Games I enjoy learning about the more
          minute processes that go into how games functions, namely Graphics. I have created various projects in my journey to learn
          the fundamentals of <span className='text-[20px] text-pink-300'>Graphics Programming</span>.
        </p>
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")