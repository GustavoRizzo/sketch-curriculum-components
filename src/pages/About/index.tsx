import WhoAmI from '../../components/WhoAmI/WhoAmI';
import data from '../../data/data.json';
import { About as AboutType } from "../../types/About";
import { useEffect, useState } from 'react';


export default function About() {

    const [about, setAbout] = useState<AboutType>();
    useEffect(() => {
        setAbout(data.about);
      }, []);

    return (
        <>
            {about && (
                <WhoAmI 
                    name={about.name}
                    perfil_img={about.perfil_img}
                    url_linkedin={about.url_linkedin}
                    url_github={about.url_github}
                    console_phrases={about.console_phrases}
                />
            )}
        </>
    );
}