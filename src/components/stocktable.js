import React from 'react';

function StockTable({ stocks, onDelete, onEdit }) {
    return (
        <table className="stock-table">
            <thead>
                <tr>
                    <th>Stock Name</th>
                    <th>Ticker</th>
                    <th>Quantity</th>
                    <th>Buy Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {stocks.map((stock) => (
                    <tr key={stock.id}>
                        <td>{stock.stockName}</td>
                        <td>{stock.ticker}</td>
                        <td>{stock.quantity}</td>
                        <td>${stock.buyPrice}</td>
                        <td className="actions">
                            <button
                                className="action-button edit"
                                onClick={() => onEdit(stock)}
                            >
                                Edit
                            </button>
                            <button
                                className="action-button delete"
                                onClick={() => onDelete(stock.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default StockTable;
