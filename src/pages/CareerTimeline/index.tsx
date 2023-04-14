import ExperiencesTimeline from "../../components/ExperiancisTimeline/ExperiancisTimeline";

export default function CareerTimeline() {
    const experienceData = [
        {
          titulo: 'WEB DEVELOPER',
          subtitulo: 'at ATIVA INVESTIMENTOS',
          texto: 'Chris Serrano posted a photo on your wall.',
        },
        {
          titulo: 'WEB DEVELOPER',
          subtitulo: 'at ATIVA INVESTIMENTOS',
          texto: 'Mia Redwood commented on your last post. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        {
          titulo: 'WEB DEVELOPER',
          subtitulo: 'at ATIVA INVESTIMENTOS',
          texto: 'Chris Serrano posted a photo on your wall.',
        },
        {
          titulo: 'WEB DEVELOPER',
          subtitulo: 'at ATIVA INVESTIMENTOS',
          texto: 'John Doe liked your post.',
        },
      ];
    
      return (
        <div>
          <h2>Career Timeline</h2>
          <ExperiencesTimeline experiences={experienceData} />
        </div>
      );
}