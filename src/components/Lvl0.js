import React, { useState, useEffect } from "react";
import "../components/componentsCss/lvl.css";
import StartButton from "./StartButton";
import FinishButton from "./FinishButton.js";
import Div from "./Div.js";

function Lvl0({ setLvl, lvl }) {
  const [started, setStarted] = useState(false);
  const [onWhite, setOnWhite] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (started && !onWhite) {
        setLvl(1);
      }
    }, 10);
    return () => clearTimeout(timer);
  }, [onWhite]);

  return (
    <section className="lvl lvl1">
      <StartButton
        setOnWhite={setOnWhite}
        onWhite={onWhite}
        started={started}
        setStarted={setStarted}
      ></StartButton>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={164}
        height={100}
        x={0}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={462}
        height={50}
        x={-149}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={48}
        height={100}
        x={-356}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={760}
        height={50}
        x={0}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={50}
        height={70}
        x={355}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={417}
        height={50}
        x={171}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={74}
        height={114}
        x={0}
      ></Div>
      <FinishButton
        started={started}
        setOnWhite={setOnWhite}
        setLvl={setLvl}
        nextLvl={2}
      ></FinishButton>
    </section>
  );
}

export default Lvl0;
