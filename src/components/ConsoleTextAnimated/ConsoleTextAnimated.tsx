import { useEffect, useState } from "react";

export default function ConsoleTextAnimated() {

    const word = 'Hello World!';
    const interval = 100;
    
    const [typedWord, setTypedWord] = useState('');

    useEffect(() => {
      const timer = setInterval(() => {
        if (typedWord.length < word.length) {
          setTypedWord(word.substring(0, typedWord.length + 1));
        } else {
          setTypedWord('');
        }
      }, interval);
  
      return () => clearInterval(timer);
    }, [typedWord, word, interval]);

    return (
        <div className="console-container">
            <span id="text" />
            {typedWord}
            <div className="console-underscore" id="console">
                ▊
            </div>
        </div>
    );
}