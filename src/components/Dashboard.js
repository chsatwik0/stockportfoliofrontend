import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard({ totalValue, topStock, stocks, chartType }) {
  // Prepare data for the pie chart
  const chartData = {
    labels: stocks.map((stock) => stock.stockName),
    datasets: [
      {
        data: stocks.map((stock) => stock.quantity),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  return (
    <div className="dashboard">
      <div className="dashboard-summary">
        {/* Portfolio Summary */}
        <h2>Total Portfolio Value: ${totalValue.toFixed(2)}</h2>
        <h3>
          Top Performing Stock:{" "}
          {topStock ? `${topStock.stockName} (${topStock.ticker})` : "N/A"}
        </h3>
      </div>

      {/* Chart Display */}
      <div className="chart-container">
      <h4 class="stock-portfolio-distribution">Stock Portfolio Distribution</h4>
        {/* Render pie chart only if the chartType is "pie" */}
        {chartType === "pie" && (
          <Pie data={chartData} width={400} height={400} options={{ responsive: true }} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
