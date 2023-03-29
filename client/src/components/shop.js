import React from "react";


const FleaMarket = () => {
  const products = [
    {
      id: 1,
      name: "Vintage Watch",
      price: 50,
      image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Frobbreport.com%2Fwp-content%2Fuploads%2F2017%2F05%2Fcarousel_1-_patek.jpg&tbnid=PfElJ52NEViVAM&vet=12ahUKEwih0ruJyYD-AhUb-XMBHct0AT8QMygdegUIARCoAg..i&imgrefurl=https%3A%2F%2Frobbreport.com%2Fstyle%2Fwatch-collector%2F3-gorgeous-vintage-watches-headed-christies-auction-block-271020%2F&docid=8yE5QOKv3M71AM&w=1400&h=795&q=vintage%20watches&ved=2ahUKEwih0ruJyYD-AhUb-XMBHct0AT8QMygdegUIARCoAg",
    },
    {
      id: 2,
      name: "Antique Lamp",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Retro Radio",
      price: 75,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Handmade Pottery",
      price: 30,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="flea-market">
      <header>
        <h1>Welcome to our store</h1>

      </header>
      <p>Here we provide you with all your necessities at a reasonable price enjoy shopping</p>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{`RS${product.price}`}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FleaMarket;
