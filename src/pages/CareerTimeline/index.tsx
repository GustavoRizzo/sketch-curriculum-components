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
        <section style={{ display: 'grid', justifyItems: 'center', alignContent: 'center' }}>
          <h1>Career Timeline</h1>
          <ExperiencesTimeline experiences={expertises} />
        </section>
      );
}