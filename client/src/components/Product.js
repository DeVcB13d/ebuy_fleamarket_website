import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { useHistory } from "react-router-dom";

function Product(props) {
  const { product } = props;
  const itemID = product.itemID;
  const itemURL = "https://ebuy-dev-backend.onrender.com/product/" + itemID;

  const history = useHistory();

  return (
    <Card>
      <Link to={`/product/${product.itemID}`}>
        <img src={product.images[0]} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card.Text>{product.brandName}</Card.Text>
        <Card.Text>₹{product.price}</Card.Text>
          <Button 
            variant="primary"
            onClick={() => {
              history.push(itemURL) 
              window.location.reload()
              }
            }
          >
            View
          </Button>
      </Card.Body>
    </Card>
  );
}
export default Product;
