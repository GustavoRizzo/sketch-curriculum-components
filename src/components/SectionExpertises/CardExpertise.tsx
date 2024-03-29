import { Expertise } from "../../types/Expertise";

export default function CardExpertise( {title, html_text, url_img, underline_class_css}:Expertise ) {
    return (
        <>
            <div className="card">
                <div className="card__icon">
                    <img
                        className="icon"
                        src={url_img}
                    />
                </div>
                <h2>
                    <span className={`chonky-underline ' + ${underline_class_css}`}>
                        {title}
                    </span>
                </h2>
                <p className="card__text" dangerouslySetInnerHTML={{__html: html_text}}></p>
            </div>
        </>
    );
}