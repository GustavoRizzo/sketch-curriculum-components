import React from 'react';
import './style.scss'

interface Experience {
  titulo: string;
  subtitulo: string;
  texto: string;
}

interface ExperiencesTimelineProps {
  experiences: Experience[];
}

const ExperiencesTimeline: React.FC<ExperiencesTimelineProps> = ({ experiences }) => {
  return (
    <div className="rb-container">
      <ul className="rb">
        {experiences.map((experience, index) => (
          <li className="rb-item" key={index}>
            <div className="title">{experience.titulo}</div>
            <div className="sub-title">{experience.subtitulo}</div>
            <div className="text">{experience.texto}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperiencesTimeline;