import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Container } from "./styles/Container";
import { MdPhoneIphone } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";

const SingleProduct = () => {
  const { id } = useParams();
  const API = "/api/product/" + id;

  const [itemID, setitemID] = useState("");
  const [sellerID, setsellerID] = useState("");
  const [productName, setproductName] = useState("");
  const [brandName, setbrandName] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [specs, setspecs] = useState("");
  const [contactNo, setcontactNo] = useState("");
  const [tags, settags] = useState("");
  const [sellingStatus, setsellingStatus] = useState("");
  const [yearsUsed, setyearsUsed] = useState("");
  const [relevanceScore, setrelevanceScore] = useState("");
  const [images, setimages] = useState([]);
  const [imgs, setimgs] = useState([]); // array of files

  // Getting the single product data
  useEffect(() => {
    console.log(API);
    // Fetch user profile details from the backend API
    fetch(API, {
      method: "GET",
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => {
		console.log(data);
		setitemID(data.itemID);
		setsellerID(data.sellerID);
		setproductName(data.productName);
		setbrandName(data.brandName);
		setprice(data.price);
		setsellingStatus(data.sellingStatus);
		setspecs(data.specs);
		setcontactNo(data.contactNo);
		settags(data.tags);
		setcategory(data.category);
		setyearsUsed(data.yearsUsed);
		setrelevanceScore(data.relevanceScore);
		setimages(data.images);
		console.log(data.images);

      })
      .catch((error) => console.error("Error fetching user profile:", error));
  }, []);

  return (
    <Wrapper>
      <Container className="container">
        <div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
		  	<img src={images[0]} style={{ width: 300, height: 300 }} className="card-img-top" alt={productName} />
          </div>
          {/* product dAta  */}
          <div className="product-data">
            <h2>{productName}</h2>
			<p className="product-data-info">
				Brand :<span> {brandName} </span>
		  	</p>
            <p className="product-data-info">
              MRP: {price + price * 0.1}
            </p>
            <p className="product-data-info product-data-real-price">
              Deal of the Day: {price} 
            </p>
            <p>{specs}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Near to you</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p> Years Used : {yearsUsed}</p>
              </div>

              <div className="product-warranty-data">
                <MdPhoneIphone className="warranty-icon" />
                <p>CONTACT : {contactNo} </p>
              </div>

			  <div className="product-warranty-data">
			  <TbReplace className="warranty-icon" />
			  <p>Assured Quality</p>
			</div>
            </div>

            <div className="product-data-info">
              <p>
                Availablity:
                <span> {sellingStatus}</span>
              </p>
            </div>
            <hr />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default SingleProduct;
