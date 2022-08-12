import React, { useEffect } from "react";

function Div({ width, height, x, setOnWhite, started }) {
  return (
    <div
      onMouseLeave={() => {
        if (started) {
          setOnWhite(false);
          console.log("durs");
        }
      }}
      onMouseOver={() => {
        if (started) {
          setOnWhite(true);
          console.log("ners");
        }
      }}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: `translateX(${x}px)`,
      }}
    ></div>
  );
}

export default Div;
