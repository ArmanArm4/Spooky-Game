import React, { useState, useEffect } from "react";
import "../components/componentsCss/lvl.css";
import StartButton from "./StartButton";
import FinishButton from "./FinishButton";
import Div from "./Div.js";
import ClownDiv from "./ClownDiv";

function Lvl3({ setLvl }) {
  const [started, setStarted] = useState(false);
  const [onWhite, setOnWhite] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (started && !onWhite) {
        setLvl(2);
      }
    }, 10);
    return () => clearTimeout(timer);
  }, [onWhite]);

  return (
    <section className="lvl lvl3">
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
        width={229}
        height={14}
        x={32}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={22}
        height={93}
        x={136}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={374}
        height={18}
        x={-40}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={54}
        height={31}
        x={-200}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={469}
        height={18}
        x={7}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={47}
        height={45}
        x={218}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={623}
        height={22}
        x={-70}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={20}
        height={96}
        x={-371}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={210}
        height={20}
        x={-276}
      ></Div>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={10}
        height={34}
        x={-176}
      ></Div>
      <ClownDiv
        setLvl={setLvl}
        started={started}
        setOnWhite={setOnWhite}
        width={218}
        height={10}
        x={-72}
      ></ClownDiv>
      <Div
        started={started}
        setOnWhite={setOnWhite}
        width={6}
        height={24}
        x={0}
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
        nextLvl={1}
      ></FinishButton>
    </section>
  );
}

export default Lvl3;
