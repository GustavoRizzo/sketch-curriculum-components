import { Expertise } from "../../types/Expertise";

export default function CardExpertise( {title, html_text, url_img, underline_class_css}:Expertise ) {
    return (
        <div className="card">
            <div className="card__icon">
                <img
                    className="icon"
                    src={url_img}
                    alt={title}
                />
            </div>
            <h2>
                <span className={`chonky-underline ${underline_class_css}`}>
                    {title}
                </span>
            </h2>
            <div className="card__text" dangerouslySetInnerHTML={{ __html: html_text }} />
        </div>
    );
}