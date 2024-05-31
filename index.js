const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); 

const app = express();


app.use(cors());


app.get('/', async (req, res) => {
  try {
    
    const response = await axios.get(process.env.API_URL);
    
    console.log(response);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});


app.listen(4500, () => {
  console.log(`Server is running`);
});