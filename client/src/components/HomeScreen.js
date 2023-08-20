import { useEffect, useReducer, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "./Product";
import { Helmet } from "react-helmet-async";


function HomeScreen() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch user profile details from the backend API
    fetch('/api/product', {
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
      <Helmet>
        <title>Ebuy</title>
      </Helmet>
      <h1>Recommended Products</h1>
      <div className="products">
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
      </div>
    </div>
  );
}
export default HomeScreen;
