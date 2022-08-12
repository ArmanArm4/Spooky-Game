import React from "react";
import "./componentsCss/Loading.css";
import { motion } from "framer-motion";

const backgroundContainer = {
  show: {
    y: ["100vh", "0vh", "0vh", "0vh", "-100vh"],
    transition: { duration: 2.5 },
  },
};
const AstroContainer = {
  //   hidden: { y: "100px" },
  show: {
    y: ["100vh", "0vh", "0vh", "0vh", "-100vh"],
    transition: { duration: 2.4, delay: 0.1 },
  },
};
function Loading() {
  return (
    <div className="Loading">
      <motion.div
        variants={backgroundContainer}
        animate="show"
        className="background"
      ></motion.div>
      <motion.div
        variants={AstroContainer}
        animate="show"
        className="astronaut"
      ></motion.div>
      <motion.div
        variants={backgroundContainer}
        animate="show"
        className="astronaut_bg"
      ></motion.div>
    </div>
  );
}

export default Loading;
