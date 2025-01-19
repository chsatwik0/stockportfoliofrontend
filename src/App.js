// src/App.js
import React, { useState, useEffect } from "react";
import AppBar from "./components/appbar";
import Dashboard from "./components/Dashboard";
import StockForm from "./components/stockform";
import StockTable from "./components/stocktable";
import ErrorBoundary from "./components/errorboundary";
import StockService from "./services/stockservice";

function App() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chartType, setChartType] = useState("pie");

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const data = await StockService.getStocks();
      setStocks(data);
    } catch (error) {
      console.error("Error fetching stocks:", error);
      setError("Failed to fetch stock data");
    } finally {
      setLoading(false);
    }
  };

  const handleAddStock = async (stock) => {
    try {
      await StockService.addStock(stock);
      fetchStocks();
    } catch (error) {
      console.error("Error adding stock:", error);
    }
  };

  const handleDeleteStock = async (id) => {
    try {
      await StockService.deleteStock(id);
      fetchStocks();
    } catch (error) {
      console.error("Error deleting stock:", error);
    }
  };

  const totalValue = stocks.reduce(
    (sum, stock) => sum + stock.quantity * stock.buyPrice,
    0
  );

  const topStock =
    stocks.length > 0
      ? stocks.reduce((prev, current) =>
          prev.quantity * prev.buyPrice > current.quantity * current.buyPrice
            ? prev
            : current
        )
      : null;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <AppBar />
      <div id="add-stock">
        <StockForm onSubmit={handleAddStock} />
      </div>
      <div id="portfolio-table">
        <StockTable stocks={stocks} onDelete={handleDeleteStock} />
      </div>
      <ErrorBoundary>
        <div id="dashboard">
          <Dashboard
            totalValue={totalValue}
            topStock={topStock}
            stocks={stocks}
            chartType={chartType}
          />
        </div>
      </ErrorBoundary>
      <div>
        <button onClick={() => setChartType("pie")}>Pie Chart</button>
      </div>
    </div>
  );
}

export default App;
