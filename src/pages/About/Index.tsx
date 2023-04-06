import perfil from "../../assets/images/perfil.png";
import linkedin from "../../assets/images/linkedin_logo.png";
import github from "../../assets/images/github_logo.png";
import './style.scss'
import ConsoleTextAnimated from "../../components/ConsoleTextAnimated/ConsoleTextAnimated";


export default function About() {
    return (
        <section className="about">
            <img
                className="about_img_perfil"
                src={perfil}
                alt="perfil"
            />
            <h1>Gustavo Rizzo S. M. de Albuquerque</h1>
            < ConsoleTextAnimated />
            <div className="list_contato">
                <a href="https://www.linkedin.com/in/gustavo-albuquerque/">
                    <img
                        className="linkedin"
                        src={linkedin}
                        alt="linkedin"
                    />
                </a>
                <a href="https://github.com/GustavoRizzo">
                    <img
                        className="github"
                        src={github}
                    />
                </a>
            </div>
        </section>
    );
}