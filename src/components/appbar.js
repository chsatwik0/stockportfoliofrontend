import React from "react";
import "../App.css"; // Import styles for appbar

function AppBar() {
  const scrollToTable = () => {
    const tableSection = document.getElementById("portfolio-table");
    if (tableSection) {
      tableSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="appbar">
      <h1>Portfolio Tracker</h1>
      <div className="nav-links">
        <button onClick={() => (window.location.href = "#add-stock")} className="nav-btn">
          Home
        </button>
        <button onClick={() => (window.location.href = "#dashboard")} className="nav-btn">
          Dashboard
        </button>
        <button onClick={scrollToTable} className="view-portfolio-btn">
          View
        </button>
      </div>
    </div>
  );
}

export default AppBar;
