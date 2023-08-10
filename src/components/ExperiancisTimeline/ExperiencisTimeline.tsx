import React from 'react';
import { Experience as ExperienceType } from "../../types/Experience";
import './style.scss'


interface ExperiencesTimelineProps {
  experiences: ExperienceType[];
}

const ExperiencesTimeline: React.FC<ExperiencesTimelineProps> = ({ experiences }) => {
  return (
    <div className="rb-container">
      <ul className="rb">
        {experiences.map((experience, index) => (
          <li className="rb-item" key={index}>
            <div className="company-logo" style={{ backgroundImage: `url(${experience.company_logo})` }}></div>
            <div className="paragraph">
              <div className="title">{experience.title}</div>
              <div className="sub-title">{experience.subtitle}</div>
              <div className="text">{experience.text}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperiencesTimeline;