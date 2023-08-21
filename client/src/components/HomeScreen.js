import { useEffect, useReducer, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "./Product";
import "./product.css";


function HomeScreen() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch user profile details from the backend API
    fetch('https://ebuy-dev-backend.onrender.com/api/product', {
      method: 'GET',
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
  }, []);

  return (
    <div>
      <h3 className="fw-normal mb-5" style={{ color: "#4835d4" }}>
        Recommended for you
        <div className="AdRibbon">Special Offer: Get 20% off on selected items!</div>
      </h3>
      <div className="products">
          <Row>
            {products.map((product) => (
              <Col key={product.itemID} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
      </div>
    </div>
  );
}
export default HomeScreen;
