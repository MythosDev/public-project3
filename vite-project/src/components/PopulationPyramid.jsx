import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Papa from 'papaparse';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Generic data fetching function
const fetchData = (csvText) => {
  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      complete: (result) => {
        const ageGroups = [];
        const malePopulation = [];
        const femalePopulation = [];
        const femaleSurplus = [];

        console.log("Parsed CSV Data:", result.data);

        // Process each row of the CSV
        result.data.forEach((row) => {
          if (row.MalePopulation > 0 && row.FemalePopulation > 0) {
            ageGroups.push(row.AgeGroup);
            malePopulation.push(-row.MalePopulation); // Negative for males (left side)
            femalePopulation.push(row.FemalePopulation); // Positive for females (right side)
            // Calculate female surplus
            const surplus = row.FemalePopulation > row.MalePopulation
              ? row.FemalePopulation - row.MalePopulation
              : 0;
            femaleSurplus.push(surplus);
          }
        });

        console.log("Processed Data:", { ageGroups, malePopulation, femalePopulation, femaleSurplus });
        resolve({ ageGroups, malePopulation, femalePopulation, femaleSurplus });
      },
      error: (error) => reject(error),
    });
  });
};

// Population Pyramid component
const PopulationPyramid = ({ csvFilePath }) => {
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

        const { ageGroups, malePopulation, femalePopulation, femaleSurplus } = await fetchData(csvText);

        if (!ageGroups.length) {
          throw new Error("No valid data found in CSV");
        }

        setChartData({
          labels: ageGroups,
          datasets: [
            {
              label: 'Males',
              data: malePopulation,
              backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
            {
              label: 'Females',
              data: femalePopulation,
              backgroundColor: 'rgba(255, 99, 132, 0.6)', // Red
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
            {
              label: 'Female surplus',
              data: femaleSurplus,
              backgroundColor: 'rgba(255, 99, 132, 1)', // Darker red
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
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
  }, [csvFilePath]);

  const chartOptions = {
    indexAxis: 'y', // Horizontal bars
    scales: {
      x: {
        title: {
          display: true,
          text: 'Population',
        },
        ticks: {
          callback: (value) => Math.abs(value).toLocaleString(), // Show absolute values
        },
        min: -5_000_000,
        max: 5_000_000,
      },
      y: {
        title: {
          display: true,
          text: 'Age',
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'South America – 2023',
      },
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label;
            const value = Math.abs(context.raw);
            return `${label}: ${value.toLocaleString()}`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  };

  if (isLoading) {
    return <div style={loaderStyle}>Loading...</div>;
  }

  if (error) {
    return <div style={loaderStyle}>Error: {error}</div>;
  }

  return (
    <div style={{ padding: '20px', height: '600px', width: '100%' }}>
      {chartData ? (
        <Bar data={chartData} options={chartOptions} />
      ) : (
        <div>No data available to display</div>
      )}
    </div>
  );
};

export default PopulationPyramid;