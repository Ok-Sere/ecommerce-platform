// filepath: api/index.js
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Sample products array
const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Headphones', price: 199 },
  { id: 3, name: 'Keyboard', price: 49 }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(3001, () => console.log('API running on port 3001'));