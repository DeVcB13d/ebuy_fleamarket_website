import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './product.css';

function Product(props) {
  const { product } = props;
  const itemID = product.itemID;
  const itemURL = '/product/${itemID}';
  const history = useHistory();

  return (
    <Card className="Card">
      {product.isOnSale && <div className="SaleBadge">Sale</div>}
      <Link to={itemURL}>
        <img src={product.images[0]} className="card-img-top" alt={product.name} />
      </Link>
      
      <div className="DetailsOverlay">
        <p>{product.productName}</p>
        <p>₹{product.price}</p>
        <Button
          className="Button"
          variant="light"
          onClick={() => {
            history.push(itemURL);
            window.location.reload();
          }}
        >
          View
        </Button>
      </div>
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card.Text>{product.brandName}</Card.Text>
        <Card.Text>₹{product.price}</Card.Text>
        <Button 
          variant="primary"
          onClick={() => {
            history.push(itemURL) 
            window.location.reload()
          }}
        >
          View
        </Button>
      </Card.Body>
    </Card>
    
  );
}

export default Product;
