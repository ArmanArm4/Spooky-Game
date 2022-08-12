import React, { useState, useEffect } from "react";
import "../components/componentsCss/lvl.css";
import StartButton from "./StartButton";
import FinishButton from "./FinishButton";
import Div from "./Div.js";

function Lvl2({ setLvl }) {
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
    <section className="lvl lvl2">
      <StartButton
        setOnWhite={setOnWhite}
        started={started}
        setStarted={setStarted}
      ></StartButton>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={164}
        height={56}
        x={0}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={392}
        height={27}
        x={-114}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={36}
        height={155}
        x={-292}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={652}
        height={18}
        x={16}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={54}
        height={31}
        x={315}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={419}
        height={18}
        x={132}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={47}
        height={112}
        x={-54}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={323}
        height={29}
        x={-192}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={20}
        height={29}
        x={-343}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={390}
        height={29}
        x={-158}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={74}
        height={54}
        x={0}
      ></Div>
      <FinishButton
        started={started}
        setOnWhite={setOnWhite}
        setLvl={setLvl}
        nextLvl={3}
      ></FinishButton>
    </section>
  );
}

export default Lvl2;
