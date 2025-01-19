import axios from 'axios';

// Base URL for API (adjust based on your backend API URL)
const BASE_URL = 'http://localhost:8080/api/stocks';

const StockService = {
    // Fetch all stocks
    getStocks: async () => {
      try {
        const response = await axios.get(BASE_URL);
        return response.data;
      } catch (error) {
        console.error("Error fetching stocks", error);
        throw error;
      }
    },
  
    // Add a new stock
    addStock: async (stock) => {
      try {
        const response = await axios.post(BASE_URL, stock);
        return response.data;
      } catch (error) {
        console.error("Error adding stock", error);
        throw error;
      }
    },
  
    // Delete a stock by ID
    deleteStock: async (id) => {
      try {
        await axios.delete(`${BASE_URL}/${id}`);
      } catch (error) {
        console.error("Error deleting stock", error);
        throw error;
      }
    },
  
    // Update an existing stock
    updateStock: async (id, updatedStock) => {
      try {
        const response = await axios.put(`${BASE_URL}/${id}`, updatedStock);
        return response.data;
      } catch (error) {
        console.error("Error updating stock", error);
        throw error;
      }
    },
  };
  
  export default StockService;
  