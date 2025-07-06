import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace the URL below with your actual Render backend API URL
    fetch('https://ecommerce-platform-ypjf.onrender.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Product List</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {products.map(product => (
              <li key={product.id}>
                {product.name} - ${product.price}
              </li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;
