# Stock Portfolio Frontend
This is the frontend application for managing stocks in a portfolio, built using React. It interacts with the backend to display, add, and remove stocks from the portfolio. It features charts and tables to visualize stock data and portfolio value.

Technologies Used
React: JavaScript library for building user interfaces.
Axios: For making HTTP requests to the backend API.
Material UI: React UI framework for building responsive and stylish components.
Chart.js: A charting library for visualizing stock data with pie charts and other types of charts.
Setup
Prerequisites
Node.js (LTS version recommended)
npm or yarn (npm comes bundled with Node.js)
Steps to Set Up
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/stockportfoliofrontend.git
cd stockportfoliofrontend
Install dependencies: Install the required npm packages:

bash
Copy
Edit
npm install
Run the application: Start the development server:

bash
Copy
Edit
npm start
The frontend will be accessible at http://localhost:3000.

Configure the backend API endpoint: Make sure the backend is running (at http://localhost:8080) and the frontend makes requests to this endpoint. If needed, adjust the endpoint URL in src/services/stockservice.js.

Folder Structure
src/components: Contains all React components, including the dashboard, stock form, table, etc.
src/services: Contains the service to interact with the backend API (stockservice.js).
src/App.js: Main component that manages state and renders the entire app.
src/App.css: Contains global CSS for styling the application.
Key Features
Dashboard: Displays the total value of the stock portfolio and the top stock by value.
Stock Form: A form to add new stocks to the portfolio.
Stock Table: Displays a table of all stocks with options to delete.
Charts: Visualizes the portfolio data with Pie and other chart types.
API Endpoints
The frontend interacts with the following API endpoints in the backend:

GET /stocks: Retrieves all stocks in the portfolio.
POST /stocks: Adds a new stock to the portfolio.
DELETE /stocks/{id}: Deletes a stock by ID.
Screenshots

Future Enhancements
Add a user authentication system for personalized portfolio management.
Implement stock price tracking by integrating an external stock price API.
Add support for updating stock data.
