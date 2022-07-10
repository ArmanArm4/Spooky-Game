import React, { useEffect } from "react";

function ClownDiv({ width, height, x, setOnWhite, started, setLvl }) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: `translateX(${x}px)`,
      }}
      onMouseEnter={() => {
        if (started) {
          setOnWhite(true);
          setLvl(4);
        }
      }}
    ></div>
  );
}

export default ClownDiv;
