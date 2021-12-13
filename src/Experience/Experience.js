import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <div style={{ marginTop: "50px" }}>
      <div>
        <h2 className="section__title">Professional Experience</h2>
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#116466", color: "#FFFAFA" }}
          contentArrowStyle={{ borderRight: "7px solid  #FFFAFA" }}
          date="Jun 2021"
          iconStyle={{ background: "#116466", color: "white" }}
        >
          <h3 className="vertical-timeline-element-title">
            Started my journey With MERN Stack Development.
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#116466", color: "	#FFFAFA" }}
          contentArrowStyle={{ borderRight: "7px solid  #FFFAFA" }}
          date="May 2019"
          iconStyle={{ background: "#116466", color: "white" }}
          icon={<i classNa="gg-work-alt" />}
        >
          <h3 className="vertical-timeline-element-title">
            Been Primary Support for more than 30 Bots in Production.
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#116466", color: "#FFFAFA" }}
          contentArrowStyle={{ borderRight: "7px solid  #FFFAFA" }}
          date="Jan 2019"
          iconStyle={{ background: "#116466", color: "white" }}
          icon={<i classNa="gg-work-alt" />}
        >
          <h3 className="vertical-timeline-element-title">
            Moved to RPA-Blueprism Technology.
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#116466", color: "#FFFAFA" }}
          contentArrowStyle={{ borderRight: "7px solid  #FFFAFA" }}
          date="2018"
          iconStyle={{ background: "#116466", color: "white" }}
          icon={<i classNa="gg-work-alt" />}
        >
          <h3 className="vertical-timeline-element-title">
           Worked as a Qlikview Support Engineer.
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#116466", color: "#FFFAFA" }}
          contentArrowStyle={{ borderRight: "7px solid  #FFFAFA" }}
          date="Feb 2017"
          iconStyle={{ background: "#116466", color: "white" }}
          icon={<i classNa="gg-work-alt" />}
        >
          <h3 className="vertical-timeline-element-title">
            Programmer Analyst- Cognizant Technology Solutions.
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#116466", color: "#FFFAFA" }}
          contentArrowStyle={{ borderRight: "7px solid  #FFFAFA" }}
          date="Sep 2016"
          iconStyle={{ background: "#116466", color: "white" }}
          icon={<i classNa="gg-work-alt" />}
        >
          <h3 className="vertical-timeline-element-title">
            Consultant - Sutherland Global Solutions.
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
