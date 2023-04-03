import perfil from "../../assets/images/perfil.png";
import linkedin from "../../assets/images/linkedin_logo.png";
import github from "../../assets/images/github_logo.png";
import github2 from "../../assets/images/github_logo2.png";
import './style.scss'


export default function About() {
    return (
        <section className="about">
            <img
                className="about_img_perfil"
                src={perfil}
                alt="perfil"
            />
            <h1>Gustavo Rizzo S. M. de Albuquerque</h1>
            <div className="console-container">
                <span id="text" />
                <div className="console-underscore" id="console">
                    ▊
                </div>
            </div>
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
                        src={github2}
                    />
                </a>
            </div>
        </section>
    );
}