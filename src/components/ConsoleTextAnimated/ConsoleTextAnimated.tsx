import { useEffect, useState } from "react";

export default function ConsoleTextAnimated() {

    const text = 'Hello';
    
    const timeLetter = 300;
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
  

    useEffect(() => {
      const typingTimer = setInterval(() => {
        if (isTyping) {
          setCurrentText((prevText) => {
            if (prevText.length < text.length) {
              return prevText + text[currentIndex];
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
              return prevText;
            }
          });
          setCurrentIndex((prevIndex) => prevIndex - 1);
        }
      }, timeLetter);
  
      return () => {
        clearInterval(typingTimer);
      };
    }, [currentIndex, isTyping, text]);

    return (
        <div className="console-container">
            <span id="text" />
            {currentText}
            <div className="console-underscore" id="console">
                ▊
            </div>
        </div>
    );
}