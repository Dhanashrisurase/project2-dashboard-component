import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./paichart.css";

const data = {
  labels: ["Male", "Female", "Unknown"],
  datasets: [
    {
      label: "Clicks and Conversions",
      data: [348, 692, 105],
      backgroundColor: ["#FFA500", "#87CEEB", "#000000"],
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
  options: {
    cutoutPercentage: 70, 
    plugins: {
      legend: {
        display: true,
        position: "right", 
        align: "center",
        labels: {
          padding: 10,
        },
      },
    },
  },
};

const Pie = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, config);

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [config]);

  return (
    <div className="chart-container">
      <canvas ref={chartRef} width="150" height="150"></canvas>
    </div>
  );
};

export default Pie;
