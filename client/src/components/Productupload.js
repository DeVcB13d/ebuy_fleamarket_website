import React, { useState } from 'react';
import './Productupload.css';
import signinimage from '../Wavy_Ppl-05_Single-09.jpg';
import axios from 'axios';



function ProductUploadPage() {
  const [productName, setproductName] = useState('');
  const [brandName, setbrandName] = useState('');
  const [category, setcategory] = useState('');
  const [price, setprice] = useState('');
  const [specs, setspecs] = useState('');
  const [contactNo, setcontactNo] = useState('');
  const [tags, settags] = useState('');
  const [photos, setphotos] = useState([]);
  const [condition, setcondition] = useState('');
  const [sellingStatus, setsellingStatus] = useState('');
  const [yearsUsed, setyearsUsed] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleproductName = (event) => {
    setproductName(event.target.value);
  };

  const handlebrandName = (event) => {
    setbrandName(event.target.value);
  };

  const handleyearsUsed = (event) => {
    setyearsUsed(event.target.value);
  };

  const handlecategoryChange = (event) => {
    setcategory(event.target.value);
  };

  const handlepriceChange = (event) => {
    setprice(event.target.value);
  };

  const handlespecsChange = (event) => {
    setspecs(event.target.value);
  };

  const handletagsChange = (event) => {
    settags(event.target.value);
  };

  const handlephotosChange = (event) => {
    const newPhotos = Array.from(event.target.files);
    setphotos(newPhotos);
  };

  const handleconditionChange = (event) => {
    setcondition(event.target.value);
  };

  const handlesellingStatusChange = (event) => {
    setsellingStatus(event.target.value);
  };

  const handlecontactNoChange = (event) => {
    setcontactNo(event.target.value);
  };

  const handleSubmit = async(e) => {
    // prevent refresh
		e.preventDefault();
		const itemID = Math.floor(Math.random() * 90000) + 10000;
    const sellerID = "AB100"
    const relevanceScore = 0
		const productData = {itemID,sellerID,productName,brandName,price,sellingStatus,specs,contactNo,tags,category,yearsUsed,relevanceScore}
		const formData = new FormData();
    formData.append('itemID',itemID)
    formData.append('image',image)
    const response = await fetch('https://ebuy-dev.onrender.com/api/product', {
				method: 'POST',
				body: JSON.stringify(productData),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const json = await response.json()
			if (!response.ok) {
				alert('The upload was not successful')
			}
			if (response.ok) {
				alert('The product addition was successful')
				console.log('user data added')
			}
			console.log(itemID);
      try {
        await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        setImageUrl(URL.createObjectURL(image));
      } catch (error) {
        console.error(error);
      }

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Name:
        <input type="text" value={productName} onChange={handleproductName} />
      </label>
      <br />
      <label>
        Brand Name:
        <input type="text" value={brandName} onChange={handlebrandName} />
      </label>
      <br />
      <label>
        Category:
        <select value={category} onChange={handlecategoryChange}>
          <option value="LAPTOPS">Laptops</option>
          <option value="BOOKS">Books</option>
          <option value="FURNITURE">Furniture</option>
          <option value="MOBILES">Mobiles</option>
          <option value="ELECTRONICS">Electronics</option>
        </select>
      </label>
      <br />
      <label>
        Price:
        <input type="number" value={price} onChange={handlepriceChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={specs} onChange={handlespecsChange} />
      </label>
      <br />

      <label>
        Add relevent tags related to product : 
        <textarea value={tags} onChange={handletagsChange} />
      </label>
      <br />
      <label>
        Photos:
        <input type="file" multiple onChange={(e) => setImage(e.target.files[0])} />
      </label>
        {imageUrl && <img src={imageUrl} alt="Product Image" />}
      <br />
      <br />
      <label>
        Condition:
        <select value={condition} onChange={handleconditionChange}>
          <option value="new">New</option>
          <option value="like-new">Like New</option>
          <option value="used">Used</option>
        </select>
      </label>
      <br />
      <label>
        Years Used : 
        <input type="number" value={yearsUsed} onChange={handleyearsUsed} />
      </label>
      <br />
      <label>
        Contact Number : 
        <input type="text" value={contactNo} onChange={handlecontactNoChange} />
      </label>
      <br />
      <label>
        Availability:
        <select value={sellingStatus} onChange={handlesellingStatusChange}>
          <option value="in-stock">In Stock</option>
          <option value="out-of-stock">Out of Stock</option>
        </select>
      </label>
      <br />
      <button type="submit">Upload Product</button>
      <div className="image-container" >
						<img
							src={signinimage}
							className="img-fluid"
							alt="Welcome to our eCommerce store!" />
						
					</div>
    </form>
    
    
  );
}

export default ProductUploadPage;
