import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../style"
import { github, itch } from "../assets"
import { SectionWrapper } from "../hoc"
import { games, projects } from "../constants" 
import { fadeIn, textVariant } from '../utils/motion'


const GameCard = ({ index, name, description, tags, image, source_code_link, site_link, linkBool }) => {
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
                src={itch}
                alt="link"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="green-pink-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
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

const Games = () => {
  return (
    <>
    <motion.div variants={textVariant()} className={`mt-12 bg-black-100 bg-opacity-30 rounded-[20px] px-2 py-2`}>
        <div
          className={`bg-tertiary bg-opacity-50 rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}></p>
            <h2 className={styles.sectionHeadText}>Games</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            <p>
              I have had a passion for games and game design since childhood. As a kid I used to design board/card games
              for fun. In recent years I have taken up game programming as a hobby to express my passion for games. I am
              currently the Head of Directors for the UVA Student Game Developers, where I help many of my fellow peers in
              the game creation process. I am also directing my own game this semester with a team of 15+ students.
            </p>
            <p className="mt-2">
              Below is a seletion of games from Student Game Developers I have worked on:
            </p>
          </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {games.map((games, index) => (
          <GameCard
            key={`game-${index}`}
            index={index}
            {...games}
          />
        ))}
        </div>
      </motion.div>
    </>
  );
}

export default SectionWrapper(Games, "games")