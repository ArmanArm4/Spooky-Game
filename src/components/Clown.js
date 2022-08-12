import React, { useRef, useEffect } from "react";
import "./componentsCss/Clown.css";
import { motion } from "framer-motion";
import ReactAudioPlayer from "react-audio-player";

const clownVariants = {
  show: {
    scale: 3,
    opacity: [1, 1, 0, 1],
    transition: { duration: 0.5, delay: 0.9 },
  },
  hidden: {
    scale: 1,
  },
};

function Clown() {
  return (
    <motion.div
      variants={clownVariants}
      initial="hidden"
      animate="show"
      className="clown"
    ></motion.div>
  );
}

export default Clown;
