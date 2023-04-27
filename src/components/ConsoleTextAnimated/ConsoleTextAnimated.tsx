import React, { useEffect } from "react";

type ConsolePhrase = {
  phrase: string, 
  color?: string | "#FFFFFF"
};

const ConsoleTextAnimated: React.FC = () => {

  var consoleInputs: ConsolePhrase[] = [];
  consoleInputs.push({phrase: "Hello World", color: "tomato"});
  consoleInputs.push({phrase: "Console Text", color: "rebeccapurple"});
  consoleInputs.push({phrase: "Made with Love", color: "lightblue"});

  useEffect(() => {
    consoleText(consoleInputs);
  }, []);  

  const consoleText = (consoleInputs: ConsolePhrase[]) => {
    let visible = true;
    let con = document.getElementById("console");
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    let target = document.getElementById("console-text-id");
    target!.setAttribute("style", "color:" + consoleInputs[0].color);

    window.setInterval(() => {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target!.innerHTML = consoleInputs[0].phrase.substring(0, letterCount);

        window.setTimeout(() => {
          let input = consoleInputs!.shift();
          consoleInputs.push(input!);
          x = 1;
          target!.setAttribute("style", "color:" + input!.color);
          letterCount += x;
          waiting = false;
        }, 100);
      } else if (letterCount === consoleInputs[0].phrase.length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(() => {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 3000);
      } else if (waiting === false) {
        target!.innerHTML = consoleInputs[0].phrase.substring(0, letterCount);
        letterCount += x;
      }
    }, 120);

    window.setInterval(() => {
      if (visible === true) {
        con!.className = "console-underscore hidden";
        visible = false;
      } else {
        con!.className = "console-underscore";
        visible = true;
      }
    }, 500);

  };

  return (
    <div className="console-container">
      <span id="console-text-id"></span>
      <div className="console-underscore" id="console">
        ▊
      </div>
    </div>
  );
};

export default ConsoleTextAnimated;