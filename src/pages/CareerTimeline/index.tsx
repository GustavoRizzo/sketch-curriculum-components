import ExperiencesTimeline from "../../components/ExperiencesTimeline/ExperiencesTimeline";
import { Experience as ExperienceType } from "../../types/Experience";
import data from '../../data/data.json';
import { useEffect, useState } from 'react';

export default function CareerTimeline() {
      const [experiences, setExperiences] = useState<ExperienceType[]>([]);
      useEffect(() => {
        setExperiences(data.experiences);
        }, []);

      return (
        <section style={{ display: 'grid', justifyItems: 'center', alignContent: 'center' }}>
          <h1>Career Timeline</h1>
          <ExperiencesTimeline experiences={experiences} />
        </section>
      );
}