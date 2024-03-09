import React from "react";
import "../styles/about.css";
import Header from "../components/Header";
import ChartComponent from "../components/ChartComponent";
import image1 from "../assets/logo/frog.png";

const data = {
  labels: [
    "AMPHIBIANS",
    "SHARKS & RAYS",
    "REEF CORALS",
    "CONIFERS",
    "CRUSTACEANS",
    "MAMMALS",
    "REPTILES",
    "BIRDS",
  ],
  values: [41, 37, 36, 34, 28, 26, 21, 12],

  percentages: [41, 37, 36, 34, 28, 26, 21, 12],


  images: [
    image1,
    
    // Ajoutez les variables d'images importées correspondant à chaque étiquette
  ],


};

const About = () => {
  return (
    <div>
      <main>
        <Header />

        <div className="chart">
          <ChartComponent data={data} />
        </div>

        <div />
      </main>
    </div>
  );
};

export default About;
