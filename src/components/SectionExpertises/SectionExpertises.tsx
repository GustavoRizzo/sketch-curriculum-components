import './style.scss'
import CardExpertise from './CardExpertise';

export default function SectionExpertises() {

    const expertises = [
        {
            title: 'Desenvolvimento WEB',
            html_text: 'Atuai durente anos com a tecnologias. para fornte e para back',
            url_img: 'https://cdn-icons-png.flaticon.com/32/9423/9423061.png',
            underline_class_css: 'underline-megenta',
        },
        {
            title: 'Analise de Dados',
            html_text: 'Atuai durente anos com a tecnologias. para fornte e para back',
            url_img: 'https://cdn-icons-png.flaticon.com/32/2329/2329087.png',
            underline_class_css: 'underline-blue', 
        },
        {
            title: 'Gerente de Projeto',
            html_text: 'Atuai durente anos com a <b>tecnologias</b>. para fornte e para back',
            url_img: 'https://cdn-icons-png.flaticon.com/32/1556/1556324.png',
            underline_class_css: 'underline-orange', 
        }
    ]

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