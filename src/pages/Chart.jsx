import React from "react";
import "../styles/about.css";
import Header from "../components/Header";
import ChartComponent from "../components/ChartComponent";


const data = {
  labels: [
    "41%",
    "37%",
    "36%",
    "34%",
    "28%",
    "26%",
    "21%",
    "12%",
  ],
  values: [41, 37, 36, 34, 28, 26, 21, 12],


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
