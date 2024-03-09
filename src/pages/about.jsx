import React from "react";
import "../styles/about.css";
import Header from "../components/Header";
import { motion } from "framer-motion";

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
const About = () => {
  return (
    <div>
      <main>
        <Header />
        <motion.div
          variants={galleryVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="about">
            <h1>ABOUT</h1>
            <p>
              "Welcome to our website dedicated to endangered species! Discover
              the global populations of these vulnerable animals. Although the
              site is under construction, our goal is to raise awareness about
              the world's most endangered species in a simple and accessible
              way."
            </p>
            <p className="about-more">
              "The majority of the information on our website comes from the
              official website of WWF (World Wide Fund for Nature). As a
              renowned organization in biodiversity conservation, WWF provides
              accurate and reliable data on environmental issues. We rely on
              these resources to ensure our visitors receive authentic and
              up-to-date information."
            </p>
          </div>
        </motion.div>
        <div />
      </main>
    </div>
  );
};

export default About;
