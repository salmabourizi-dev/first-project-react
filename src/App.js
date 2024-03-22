import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  }, []);

  return (
    <div className="App" style={{ textAlign: "left" }}>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <h4>{product.price}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;
