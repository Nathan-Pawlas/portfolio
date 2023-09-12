import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../style"
import { github, link } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants" 
import { fadeIn, textVariant } from '../utils/motion'


const ProjectCard = ({ index, name, description, tags, image, source_code_link, site_link, linkBool }) => {
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary bg-opacity-75 p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div
            className="absolute inset-0 flex justify-end m-3 card-img_hover"
          >
            <div
              
              onClick={() => window.open(site_link, "_blank")}
              className={`green-pink-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ${linkBool ? 'visible' : 'invisible'}`}
            >
              <img 
                src={link}
                alt="link"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className={"green-pink-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"}
            >
              <img 
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.p variants={textVariant()} className={` ${styles.sectionSubText}`}>My Works</motion.p>

      <motion.div variants={textVariant()} className={`mt-12 bg-black-100 bg-opacity-30 rounded-[20px] px-2 py-2`}>
        <div
          className={`bg-tertiary bg-opacity-50 rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>Projects</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            <p>
              I have worked on a wide variety of projects ranging from complex Fullstack websites to a recreation of minesweaper in Java.
              Many of my works are passion projects taken up in my spare time in order to learn new tools and techniques that excite me.
              I have a variety of smaller projects I have worked on such as the Galaga in pygame, a bus scheduler, and a server based chat system. 
              My main projects, however, are focused on the areas of web development, graphics programming, and game design.
            </p>
            <p className="mt-2">
              Below is a list of some more recent projects showing off my passions:
            </p>
          </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap gap-7 justify-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default SectionWrapper(Works, "projects")