import React, { useEffect } from "react";

const ConsoleTextAnimated: React.FC = () => {
  useEffect(() => {
    consoleText(
      ["Hello World", "Console Text", "Made with Love"],
      "text",
      ["tomato", "rebeccapurple", "lightblue"]
    );
  }, []);

  

  const consoleText = (words: string[], id: string, colors: string[] | undefined) => {
    if (colors === undefined) colors = ["#fff"];
    let visible = true;
    let con = document.getElementById("console");
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    let target = document.getElementById(id);
    target!.setAttribute("style", "color:" + colors[0]);

    window.setInterval(() => {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target!.innerHTML = words[0].substring(0, letterCount);
        window.setTimeout(() => {
          let usedColor = colors!.shift();
          if(usedColor === undefined) usedColor = colors![0];
          colors!.push(usedColor);
          let usedWord = words.shift();
          words.push(usedWord!);
          x = 1;
          target!.setAttribute("style", "color:" + colors![0]);
          letterCount += x;
          waiting = false;
        }, 100);
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(() => {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 3000);
      } else if (waiting === false) {
        target!.innerHTML = words[0].substring(0, letterCount);
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
      <span id="text"></span>
      <div className="console-underscore" id="console">
        ▊
      </div>
    </div>
  );
};

export default ConsoleTextAnimated;