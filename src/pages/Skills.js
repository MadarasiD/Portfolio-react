import React from 'react'
import {motion} from 'framer-motion'
import '../styles/Skills.css'
import {GrCompliance} from 'react-icons/gr'

const Skills = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >

         

          <div className='Myskills'>

            <section className='skill'>

            </section>

          </div>
         


     
        
    </motion.div>
  )
}

export default Skills