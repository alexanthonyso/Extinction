import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

import "../styles/chart.css";

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        // Détruire le graphique existant s'il y en a un
        chartInstance.current.destroy();
      }

      const myChartRef = chartRef.current.getContext("2d");

      chartInstance.current = new Chart(myChartRef, {
        type: "bar",
        data: {
          labels: data.labels.map(
            (label, index) => `${label} (${data.percentages[index]}%)`
          ),
          datasets: [
            {
              label: "PERCENTAGE",
              data: data.values,
              backgroundColor: "#D9D9D9", // Changer la couleur des barres en blanc
              borderColor: "#D9D9D9",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true, // Activer la responsivité
          scales: {
            y: {
              display: false,
            },
            x: {
              ticks: {
                callback: function (index) {
                  // Obtenez le premier élément de la constante data.labels
                  const firstElement = data.labels[index];

                  // Obtenez le pourcentage correspondant à l'index actuel
                  const percentage = data.percentages[index];

                  // Utilisez un saut de ligne pour placer le pourcentage en dessous du nom de l'élément
                  return [firstElement, percentage + "%"];
                },
                font: {
                  size: 14, // Changer la taille des étiquettes de l'axe x
                  weight: "bold",
                  family: "Hubballi", // Changer la police d'écriture
                },

                color: "#D9D9D9",
                maxRotation: 0, // Désactiver la rotation maximale
                minRotation: 0, // Désactiver la rotation minimale
                autoSkip: false, // Désactiver le saut automatique des étiquettes
              },
            },
          },
          animation: {
            duration: 2000, // Durée de l'animation en millisecondes
            easing: "easeInOutQuad", // Fonction d'interpolation pour l'animation
            animateRotate: true, // Activer l'animation de rotation pour les graphiques en secteurs (pie, doughnut)
            animateScale: true, // Activer l'animation d'échelle pour les graphiques en barres, lignes, et radar
          },
          plugins: {
            tooltip: {
              enabled: false, // Activer les tooltips
            },
            legend: {
              display: false, // Activer l'affichage de la légende
              position: "bottom", // Position de la légende (peut être 'top', 'bottom', 'left', 'right')
              labels: {
                font: {
                  size: 14, // Taille de la police de la légende
                },
              },
            },
          },
        },
      });
    }
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef} />
      <p>
        More than 44,000 species are threatened with extinction. That is still
        28% of all assessed species.
      </p>
      <p>SOURCE: IUCN</p>
    </div>
  );
};

export default ChartComponent;
