# Frontend application for a restaurant

This is a dynamic, full-stack web application that revolutionizes the way users explore and interact with restaurant information, menus, and customer reviews while seamlessly integrating blockchain technology. Developed using React for the frontend and Express.js for the backend, the project provides a captivating user interface for discovering and engaging with restaurant details.

The backend, powered by Express.js, employs a RESTful API to fetch restaurant data stored in a JSON file. The server, equipped with CORS support, ensures secure and efficient communication between the frontend and backend. The restaurant data includes essential information such as name, location, ambiance, menu items, and customer reviews.

This project takes a step further by integrating blockchain functionality using Ethereum. Users can connect their Ethereum wallet through Metamask, enabling secure and transparent cryptocurrency transactions. The Express.js backend facilitates this interaction by serving as a bridge between the frontend and the Ethereum blockchain.

Through a combination of modern web technologies and decentralized blockchain principles, It creates an immersive and innovative dining experience. Explore restaurant offerings, connect with the Ethereum network, and contribute effortlessly to your favorite establishments.


## Demo

https://drive.google.com/file/d/1-1aAo7Qe9Doo02F_TxcHQOXI6A8cEGsL/view?usp=drive_link

## Documentation
Frontend (React)

* App.js: Main React component containing the application logic, state management, and UI structure.

* CSS File: App.css to enhance the visual presentation of the application.

Backend (Express.js)

* Server.js: Express.js server setup with CORS middleware to handle API requests.
* restaurantData.json: Sample JSON file containing restaurant details.

Ethereum Smart Contract (Solidity)

* Roxw.sol: Ethereum smart contract written in Solidity. Includes a function to handle donations.

Ethereum Interaction (Web3.js)
* Web3.js Integration: The project integrates with Web3.js in the React frontend to interact with the Ethereum smart contract.



## Installation

Install Express.js

```bash
npm install express
```

Install React.js

```bash
  npx create-react-app restaurant-app
  cd restaurant-app
```

Install axios to fetch the data from Rest Api

```bash
 npm install axios

```

Install web3.js to integrate frontend with Blockchain

```bash
 npm install --save web3

```


## API Reference

* Base URL: http://localhost:3001 : The server is running locally on port 3001.

* Endpoint: GET /api/restaurants: Retrieves a details of the restaurant.
* Response Format: JSON

* CORS Configuration: Cross-Origin Resource Sharing (CORS) is enabled using the cors middleware.

* Middleware: express.json(): Parses incoming requests with JSON payloads.

* Data Source: Restaurant data is sourced from a file named restaurantData.json.


* Server Start Message: When the server starts, a message is logged to the console: "Server is running on port 3001."
## Deployment




Run the mock server and the React app concurrently

```bash
 npm install concurrently
```

Update package.json to start both the frontend and backend:

```bash
   "scripts": {
  "start": "react-scripts start",
  "server": "node server.js",
  "dev": "concurrently \"npm run server\" \"npm start\""
}
```
To run the server and React app together

```bash
  npm run dev
```


## Features

* Dynamic Restaurant Information
* Interactive Menu Presentation
* Cryptocurrency Payment Support
* Responsive Design
* Google Maps Integration




## Screenshots
![Screenshot 2023-12-03 1516511](https://github.com/pritamsaha07/Epicurean-Symphony_Pritam-Saha/assets/82364650/d9050d3e-f597-4592-83eb-ad2373f43c33)
![Screenshot 2023-12-03 1517242](https://github.com/pritamsaha07/Epicurean-Symphony_Pritam-Saha/assets/82364650/a91c1d25-f10f-4285-bba2-4d90ae0e72aa)
![Screenshot 2023-12-03 1518494](https://github.com/pritamsaha07/Epicurean-Symphony_Pritam-Saha/assets/82364650/e0189c91-e241-4a73-8056-bc09ea5ba5f5)
![Screenshot 2023-12-03 1519197](https://github.com/pritamsaha07/Epicurean-Symphony_Pritam-Saha/assets/82364650/5b40511c-1a50-4915-a3fe-1d250fbdeca9)

