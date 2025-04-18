import React from "react";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import zoomPlugin from 'chartjs-plugin-zoom';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  zoomPlugin,
);

const ChartComponent = ({ type = "line", data, options }) => {
  const renderChart = () => {
    switch (type) {
      case "line":
        return <Line data={data} options={options} />;
      case "bar":
        return <Bar data={data} options={options} />;
      case "pie":
        return <Pie data={data} options={options} />;
      case "doughnut":
        return <Doughnut data={data} options={options} />;
      default:
        return <p>Invalid chart type</p>;
    }
  };

  return (
    <div style={{ minWidth: "600px", margin: "20px auto" }}>
      {renderChart()}
    </div>
  );
};

export default ChartComponent;
