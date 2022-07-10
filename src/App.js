import { useState, useEffect, useRef } from "react";
import Loading from "./components/Loading.js";
import Lvl0 from "./components/Lvl0.js";
import Lvl1 from "./components/Lvl1.js";
import Lvl2 from "./components/Lvl2.js";
import Lvl3 from "./components/Lvl3.js";
import Clown from "./components/Clown.js";

function App() {
  const [lvl, setLvl] = useState(1);
  const [displayLvl, setdisplayLvl] = useState(1);
  const [playAudio, setplayAudio] = useState(false);
  const audio = useRef();

  console.log(lvl);
  useEffect(() => {
    console.log(lvl);
    const timer = setTimeout(() => setdisplayLvl(lvl), 1000);

    if (lvl === 4) {
      console.log("Asd");
      setTimeout(() => audio.current.play(), 900);
    }

    return () => clearTimeout(timer);
  }, [lvl]);
  return (
    <>
      {lvl === 0 && <Loading />}
      {displayLvl === 0 && <Lvl0 lvl={lvl} setLvl={setLvl} />}
      {lvl === 1 && <Loading />}
      {displayLvl === 1 && <Lvl1 lvl={lvl} setLvl={setLvl} />}
      {lvl === 2 && <Loading />}
      {displayLvl === 2 && <Lvl2 setLvl={setLvl} />}
      {lvl === 3 && <Loading />}
      {displayLvl === 3 && <Lvl3 setLvl={setLvl} />}
      {lvl === 4 && <Clown />}
      <audio ref={audio} src={require("./images/scream.mp3")} autoPlay />
    </>
  );
}

export default App;
