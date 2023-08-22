import { useEffect } from "react";
import { ConsolePhrase } from "../../types/ConsolePhrase";

export default function ConsoleTextAnimated ({console_phrases}:{console_phrases: ConsolePhrase[]}) {

  useEffect(() => {
    consoleText(console_phrases);
  }, []);  

  const consoleText = (consoleInputs: ConsolePhrase[]) => {
    const timeBeforeStartNewPhrase = 1000;
    const timeBeforeStartErase = 2000;
    const timeOfEachLetter = 120;
    const timeCursorBlink = 500;

    let textElement = document.getElementById("console-text-id");
    textElement!.setAttribute("style", "color:" + consoleInputs[0].color); // starting color
    let letterCount = 1;
    let directional = 1;  // 1: typing forward, -1: typing backwards
    let waiting = false;
    let cursorElement = document.getElementById("console-cursor");
    let visible = true;    

    window.setInterval(() => {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        textElement!.innerHTML = consoleInputs[0].phrase.substring(0, letterCount);

        // Change Phrase
        window.setTimeout(() => {
          let input = consoleInputs!.shift();
          consoleInputs.push(input!);
          directional = 1;          
          letterCount += directional;
          waiting = false;
          // set the new color
          textElement!.setAttribute("style", "color:" + consoleInputs[0]!.color);
        }, timeBeforeStartNewPhrase);

      } else if (letterCount === consoleInputs[0].phrase.length + 1 && waiting === false) {
        // finished writing the phrase
        waiting = true;
        window.setTimeout(() => {
          directional = -1;
          letterCount += directional;
          waiting = false;
        }, timeBeforeStartErase);
      } else if (waiting === false) {
        textElement!.innerHTML = consoleInputs[0].phrase.substring(0, letterCount);
        letterCount += directional;
      }
    }, timeOfEachLetter);

    // Make the cursor blink
    window.setInterval(() => {
      if (visible === true) {
        cursorElement!.className = "console-underscore hidden";
        visible = false;
      } else {
        cursorElement!.className = "console-underscore";
        visible = true;
      }
    }, timeCursorBlink);

  };

  return (
    <div className="console-container">
      <span id="console-text-id"></span>
      <div className="console-underscore hidden" id="console-cursor">
        ▊
      </div>
    </div>
  );
};
