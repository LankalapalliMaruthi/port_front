import React from 'react';
import PageHeader from '../../components/pageheader';
import { BsInfoCircleFill } from 'react-icons/bs';
import { data } from './util';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./style.scss";
import {MdWork} from'react-icons/md'

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeader
        headerText="My Resume"
        icon={<BsInfoCircleFill size={30} />}
      />

      <div className="timeline">
        {/* Education Section */}
        <div className="timeline-education">
          <h3 className="timeline-education-header">Education</h3>
          <VerticalTimeline layout="1-column" lineColor="var(--yellow-theme-main-color)">
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline-education-vertical-timeline-element"
                contentStyle={{ background: '#1e1e1e', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid var(--yellow-theme-main-color)' }}
                iconStyle={{ background: 'var(--yellow-theme-main-color)', color: '#fff' }} icon={<MdWork></MdWork>}
                
              ><div className='vertical-timeline-element-content-arrow'></div>
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">{item.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.subTitle}</h4>
                  <p>{item.description}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {/* Experience Section */}
        <div className="timeline-experience">
          <h3 className="timeline-experience-header">Experience</h3>
          <VerticalTimeline layout="1-column" lineColor="var(--yellow-theme-main-color)">
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline-experience-vertical-timeline-element"
                contentStyle={{ background: '#1e1e1e', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid var(--yellow-theme-main-color)' }}
                iconStyle={{ background: 'var(--yellow-theme-main-color)', color: '#fff' }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">{item.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.subTitle}</h4>
                  <p className='vertical-timeline-element-title-wrapper-description'>{item.description}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
