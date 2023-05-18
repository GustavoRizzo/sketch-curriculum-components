import linkedin from '../../assets/images/linkedIn_logo.png';
import github from "../../assets/images/github_logo.png";
import './style.scss'
import ConsoleTextAnimated from "../../components/ConsoleTextAnimated/ConsoleTextAnimated";
import { About } from "../../types/About";


export default function WhoAmI( {name, perfil_img, url_linkedin, url_github, console_phrases}:About ) {

    const imgUrl = new URL(perfil_img, import.meta.url).href

    return (
        <section className="about">
            <img
                className="about_img_perfil"
                src={imgUrl}
                alt="perfil"
            />
            <h1>{name}</h1>
            < ConsoleTextAnimated console_phrases={console_phrases} />
            <div className="list_contato">
                <a href={url_linkedin}>
                    <img
                        className="linkedin"
                        src={linkedin}
                        alt="linkedin"
                    />
                </a>
                <a href={url_github}>
                    <img
                        className="github"
                        src={github}
                        alt="github"
                    />
                </a>
            </div>
        </section>
    );
}