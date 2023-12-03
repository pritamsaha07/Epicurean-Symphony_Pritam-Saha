const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors()); 

const restaurantData = require('./restaurantData.json');

app.get('/api/restaurants', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
  res.json(restaurantData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
