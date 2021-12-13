import GitHubIcon from '@material-ui/icons/GitHub'

import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about


  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a
          href="https://drive.google.com/file/d/1ANu5ta_ZyyQ-Wc1KJYiruwajHpnQFJSZ/view?usp=sharing" target="_blank"
          aria-label='github'
          className='link link--icon'
        >
          Resume
        </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            
          </>
        )}
      </div>
    </div>
  )
}

export default About
