import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

function Experience() {
  return (
    <div style={{marginTop:"50px"}}>
      <div>
        <h2 className='section__title'>Professional Experience</h2>
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#116466', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  #116466' }}
          date='2016'
          iconStyle={{ background: '#116466', color: '#fff' }}
          icon={
          
            <i classNa="gg-work-alt"/>
          }
        >
          <h3 className='vertical-timeline-element-title'>Started my journey as a CONSULTANT in Sutherland global solutions.</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#116466', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  #116466' }}
          date='2017'
          iconStyle={{ background: '#116466', color: '#fff' }}
          icon={
            <i classNa="gg-work-alt"/>
          }
        >
          <h3 className='vertical-timeline-element-title'>Started my journey as a PROGRAMMER ANALYST With Cognizant Technology Solutions.</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#116466', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  #116466' }}
          date='2018'
          iconStyle={{ background: '#116466', color: '#fff' }}
          icon={
            <i classNa="gg-work-alt"/>
          }
        >
          <h3 className='vertical-timeline-element-title'>Worked as a Qlikview support Engineer.</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#116466', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  #116466' }}
          date='2019'
          iconStyle={{ background: '#116466', color: '#fff' }}
          icon={
            <i classNa="gg-work-alt"/>
          }
        >
          <h3 className='vertical-timeline-element-title'>Moved to RPA - blueprism Technology.</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          contentStyle={{ background: '#116466', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  #116466' }}
          date='2020'
          iconStyle={{ background: '#116466', color: '#fff' }}
          icon={
            <i classNa="gg-work-alt"/>
          }
        >
          <h3 className='vertical-timeline-element-title'>
          Been responsible to support more than 30 BOTS in production.
          </h3>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          contentStyle={{ background: '#116466', color: 'black'}}
          contentArrowStyle={{ borderRight: '7px solid  #116466' }}
          date='2021'
          iconStyle={{ background: '#116466', color: '#fff' }}
          icon={
            <i classNa="gg-work-alt"/>
          }
        >
          <h3 className='vertical-timeline-element-title'>
          Started my Journey with MERN STACK Development.
          </h3>
          
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  )
}

export default Experience
