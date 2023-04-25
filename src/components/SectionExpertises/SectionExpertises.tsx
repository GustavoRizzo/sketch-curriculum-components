import './style.scss'
import CardExpertise from './CardExpertise';
import { Expertise } from '../../types/Expertise';
import data from '../../data/data.json';
import { useEffect, useState } from 'react';

export default function SectionExpertises() {

    const [expertises, setExpertises] = useState<Expertise[]>([]);
    useEffect(() => {
        setExpertises(data.expertises);
      }, []);

    return (
        <section className="especialidades">
            <h1>Especialidades</h1>
            <div className="especialidades__grid">

                {expertises.map((item, index) => (
                    <CardExpertise 
                        title={item.title} 
                        html_text={item.html_text}
                        url_img={item.url_img} 
                        underline_class_css= {item.underline_class_css}
                    />
                ))}

            </div>
        </section>
    );
}