import React from "react";
import { createContext, useState } from "react";

const LvlContext = createContext();

export function LvlProvider({ children }) {
  const [lvl, setLvl] = useState(1);

  return (
    <LvlContext.Provider value={{ lvl, setLvl }}>
      {children}
    </LvlContext.Provider>
  );
}

export default LvlContext;
