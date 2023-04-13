import { useEffect, useState } from "react";

export default function ConsoleTextAnimated() {

    const text = 'Hello';
    const words = [
      { word: 'Olá', color: 'red' },
      { word: 'Mundo', color: 'green' },
      { word: 'React', color: 'blue' },
      { word: 'Componente', color: 'purple' },
    ];
    
    const timeLetter = 100;
    
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
  
    useEffect(() => {
      const typingTimer = setInterval(() => {
        if (isTyping) {
          setCurrentText((prevText) => {
            if (prevText.length < words[currentWordIndex].word.length) {
              return prevText + words[currentWordIndex].word[currentIndex];
            } else {
              setIsTyping(false);
              return prevText;
            }
          });
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setCurrentText((prevText) => {
            if (prevText.length > 0) {
              return prevText.slice(0, -1);
            } else {
              setIsTyping(true);
              setCurrentIndex(0);
              setCurrentWordIndex((prevWordIndex) => {
                const nextWordIndex = prevWordIndex + 1;
                return nextWordIndex < words.length ? nextWordIndex : 0;
              });
              return prevText;
            }
          });
          setCurrentIndex((prevIndex) => prevIndex - 1);
        }
      }, timeLetter);
  
      return () => {
        clearInterval(typingTimer);
      };
    }, [currentIndex, currentWordIndex, isTyping, words]);

    return (
        <div className="console-container">
            <span style={{ color: words[currentWordIndex].color }}>
              {currentText}
            </span>
            <div className="console-underscore" id="console">
                ▊
            </div>
        </div>
    );
}