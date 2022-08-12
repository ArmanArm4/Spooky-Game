import React, { useEffect } from "react";
import "./componentsCss/StartButton.css";

function StartButton({ started, setStarted, setOnWhite }) {
  return (
    <button
      onMouseLeave={() => {
        if (started) {
          setOnWhite(false);
        }
      }}
      onMouseOver={() => {
        if (started) {
          setOnWhite(true);
        }
      }}
      onClick={() => {
        setStarted(true);
        setOnWhite(true);
      }}
      className={`startButton `}
    >
      {started ? "Go!" : "Start"}
    </button>
  );
}

export default StartButton;
