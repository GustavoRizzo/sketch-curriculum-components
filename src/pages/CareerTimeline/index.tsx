import ExperiencesTimeline from "../../components/ExperiancisTimeline/ExperiencisTimeline";
import { Experience as ExperienceType } from "../../types/Experience";
import data from '../../data/data.json';
import { useEffect, useState } from 'react';

export default function CareerTimeline() {
      const [expertises, setExperiences] = useState<ExperienceType[]>([]);
      useEffect(() => {
        setExperiences(data.experiences);
        }, []);
      console.log('expertises:', expertises);
    
      return (
        <div>
          <h2>Career Timeline</h2>
          <ExperiencesTimeline experiences={expertises} />
        </div>
      );
}