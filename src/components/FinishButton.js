import React, { useEffect } from "react";

function FinishButton({ setOnWhite, nextLvl, started, setLvl }) {
  return (
    <div
      className="finish btn"
      onMouseOver={() => {
        if (started) {
          setOnWhite(true);
        }
      }}
      onMouseEnter={() => {
        if (started) {
          setLvl(nextLvl);
        }
      }}
    >
      <p>Finish</p>
    </div>
  );
}

export default FinishButton;
