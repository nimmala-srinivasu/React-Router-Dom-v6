// this comp replaces three consecutive letters with "_"
import React, { useState } from "react";

const style = {
  letterContainer: {
    overflow: "auto",
    marginBottom: "10px",
  },
  letter: {
    float: "left",
    padding: "10px 10px",
    background: "#c9e4ed",
    borderRadius: "5px",
    marginRight: "5px",
    cursor: "pointer",
  },
};
function Tile({ letter, onClick }) {
  return (
    <button style={style.letter} onClick={() => onClick(letter)}>
      {letter}
    </button>
  );
}

function Application() {
  const [outputString, setOutputString] = useState("");

  const handleClick = (letter) => {
    const myStr = outputString + letter;
    const regex = new RegExp(`(${letter}{3,})`, "g");
    const updatedString = myStr.replace(regex, "_");
    setOutputString(updatedString);
  };

  return (
    <section>
      <aside style={style.letterContainer} id="letterContainer">
        {["A", "B", "C"].map((letter) => (
          <Tile key={letter} letter={letter} onClick={handleClick} />
        ))}
      </aside>
      <div id="outputString">{outputString}</div>
    </section>
  );
}
export default Application;
