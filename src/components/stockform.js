import React, { useState } from "react";

function StockForm({ onAddStock }) {
  const [stockName, setStockName] = useState("");
  const [ticker, setTicker] = useState("");
  const [quantity, setQuantity] = useState("");
  const [buyPrice, setBuyPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!stockName || !ticker || !quantity || !buyPrice) {
      alert("Please fill out all fields");
      return;
    }

    const newStock = {
      id: Date.now(),
      stockName,
      ticker,
      quantity,
      buyPrice,
    };

    onAddStock(newStock);

    // Clear fields after adding
    setStockName("");
    setTicker("");
    setQuantity("");
    setBuyPrice("");
  };

  return (
    <div className="stock-form-container">
      <h2>Add Stock to Portfolio</h2>
      <form onSubmit={handleSubmit} className="stock-form">
        <div className="form-group">
          <label>Stock Name</label>
          <input
            type="text"
            value={stockName}
            onChange={(e) => setStockName(e.target.value)}
            placeholder="stock name"
          />
        </div>
        <div className="form-group">
          <label>Ticker</label>
          <input
            type="text"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            placeholder="ticker"
          />
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="quantity"
          />
        </div>
        <div className="form-group">
          <label>Buy Price</label>
          <input
            type="number"
            value={buyPrice}
            onChange={(e) => setBuyPrice(e.target.value)}
            placeholder="Buy Price"
          />
        </div>
        <button type="submit" className="add-stock-button">
          + Add to Portfolio
        </button>
      </form>
    </div>
  );
}

export default StockForm;
