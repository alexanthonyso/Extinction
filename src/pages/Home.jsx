import React from "react";

import "../styles/main.css";
import { motion } from "framer-motion";
import Splide from "../components/Splide";
import Header from "../components/Header";

const galleryVariants = {
  initial: {
    opacity: 0,
    x: "100%", // Initialisation à l'extérieur de l'écran à droite
  },
  animate: {
    opacity: 1,
    x: 0, // Déplacement vers la gauche (position normale)
    transition: {
      duration: 1.0,
    },
  },
  exit: {
    opacity: 0,
    x: "-100%", // Déplacement vers la gauche (à l'extérieur de l'écran)
    transition: {
      duration: 1.0,
    },
  },
};
function Home() {
  return (
    <main>
      <Header />
      <motion.div
          variants={galleryVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        > 
      <Splide />
      </motion.div>
    </main>
  );
}

export default Home;
