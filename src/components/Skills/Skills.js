import uniqid from 'uniqid'
import SkillBar  from 'react-skillbars'
import { skills } from '../../portfolio'
import './Skills.css'
const Skills = () => {
  if (!skills.length) return null

  return (
    
    <section >
    <h2 className='section__title'>Skills</h2>
      <SkillBar skills={skills} height={25} style={{width:"80%"}}/> 
  </section>
  )
}

export default Skills
