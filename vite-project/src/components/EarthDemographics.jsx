import { useState, useEffect } from "react";
import Papa from "papaparse";
import ChartComponent from "./ChartComponent";

// Generic data fetching function
const fetchData = (csvText) => {
  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      complete: (result) => {
        const names = [];
        const values = [];
        const colors = [];

        console.log("Parsed CSV Data:", result.data);

        result.data.forEach((row) => {
          if (row.Value > 0) { // Changed from Population to Value
            names.push(row.Name); // Changed from Religion to Name
            values.push(row.Value);
            colors.push(row.Color || "#000000");
          }
        });

        console.log("Processed Data:", { names, values, colors });
        resolve({ names, values, colors });
      },
      error: (error) => reject(error),
    });
  });
};

// Renamed and generalized component
const PieChart = ({ csvFilePath }) => {
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadChartData = async () => {
      try {
        const response = await fetch(csvFilePath);
        if (!response.ok) {
          throw new Error(`Failed to fetch CSV: ${response.statusText}`);
        }
        const csvText = await response.text();

        const { names, values, colors } = await fetchData(csvText);

        if (!names.length) {
          throw new Error("No valid data found in CSV");
        }

        setChartData({
          labels: names, // Generic labels
          datasets: [
            {
              data: values, // Generic data
              backgroundColor: colors,
            },
          ],
        });
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading data:", error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    loadChartData();
  }, [csvFilePath]); // Re-run effect if csvFilePath changes

  const chartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const label = tooltipItem.label;
            const value = tooltipItem.raw.toLocaleString();
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  const loaderStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  };

  if (isLoading) {
    return <div style={loaderStyle}>Loading...</div>;
  }

  if (error) {
    return <div style={loaderStyle}>Error: {error}</div>;
  }

  return (
    <div style={{ padding: "20px", zIndex: 15 }}>
      {chartData ? (
        <ChartComponent type="pie" data={chartData} options={chartOptions} />
      ) : (
        <div>No data available to display</div>
      )}
    </div>
  );
};

export default PieChart;