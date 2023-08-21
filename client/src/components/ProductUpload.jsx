import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBDropdown,
  MDBInput,
  MDBCheckbox,
  MDBTextArea,
} from "mdb-react-ui-kit";
import Carousel from "./Carousel";
import { useHistory } from "react-router-dom";

import {useEffect, useRef } from 'react';


function ProductUploadPage() {

  
  
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

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]); // array of files
  const [imageUrl, setImageUrl] = useState(null);
  const [images, setImages] = useState([]);
  const history = useHistory();


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

  const handlesellingStatusChange = (event) => {
    setsellingStatus(event.target.value);
  };

  const handlecontactNoChange = (event) => {
    setcontactNo(event.target.value);
  };

  const handleFileChange = (event) => {
    console.log("File Change", event.target.files[0]);
    var img_url = URL.createObjectURL(event.target.files[0]);
    console.log("Image URL: ", img_url);

  };

  const handleSubmit = async (e) => {
    // prevent refresh
    e.preventDefault();

  
    const itemID = Math.floor(Math.random() * 90000) + 10000;
    const sellerID = "AB100";
    const relevanceScore = 0;
    const sellingStatus = "Available";
    const productData = {
      itemID,
      sellerID,
      productName,
      brandName,
      price,
      sellingStatus,
      specs,
      contactNo,
      tags,
      category,
      yearsUsed,
      relevanceScore,
      images,
    };
    const formData = new FormData();
    formData.append("itemID", itemID);
    formData.append("images", images);
    const response = await fetch("https://ebuy-dev-backend.onrender.com/api/product", {
      method: "POST",
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      alert("The upload was not successful");
    }
    if (response.ok) {
      alert("The product addition was successful");
      console.log("product data added \n Product ID: ", itemID);
      let url = "/Product/" + itemID;
      history.push(url);
      window.location.reload();
    }
    console.log(itemID);
  };

  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
      cloudinaryRef.current = window.cloudinary
      widgetRef.current = cloudinaryRef.current.createUploadWidget({
          cloudName: "dvh8nacab",
          uploadPreset: "wsizna94"
      },function(error, result) {
          console.log("results",result);
          if (!error && result && result.event === "success") {
              console.log("Done! Here is the image info: ", result.info.url);
              //add image url to images array
              images.push(result.info.url);
              console.log("images",images);
          }
      }
      );
  }, [])


  return (
      <MDBRow className="d-flex justify-content-center align-items-center w-100">
        <MDBCardBody className="w-200">
          <MDBRow>
            <MDBCol
              md="10"
              className="p-5 bg-white justify-content-center align-items-center"
            >
              <h3 className="fw-normal mb-5" style={{ color: "#4835d4" }}>
                Fill in the details of the product you want to sell
              </h3>

              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Product Name"
                    size="lg"
                    id="form1"
                    type="text"
                    value={productName}
                    onChange={handleproductName}
                    placeholder="Enter Product Name"
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Brand Name"
                    size="lg"
                    id="form2"
                    type="text"
                    value={brandName}
                    onChange={handlebrandName}
                    placeholder="Enter Brand Name"
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Price (Rs.)"
                size="lg"
                id="form3"
                type="number"
                value={price}
                onChange={handlepriceChange}
                placeholder="Enter Price"
              />

              <MDBTextArea
                label="Specs"
                id="textAreaExample"
                rows={3}
                value={specs}
                onChange={handlespecsChange}
                placeholder="Enter Product Specifications"
              />

              <MDBInput
                wrapperClass="mb-4"
                label="Contact No."
                size="lg"
                id="form4"
                type="text"
                value={contactNo}
                onChange={handlecontactNoChange}
                placeholder="Enter Contact No."
              />

              <MDBTextArea
                label="Tags"
                id="textAreaExample"
                rows={3}
                value={tags}
                onChange={handletagsChange}
                placeholder="Enter tags seperated by spaces"
              />

              <MDBInput
                wrapperClass="mb-4"
                label="Years Used"
                size="lg"
                id="form3"
                type="number"
                value={yearsUsed}
                onChange={handleyearsUsed}
                placeholder="Enter Years Used"
              />

              <MDBContainer className="container-fluid">
                <Carousel images={images} />
              </MDBContainer>

              <button class="btn btn-primary btn-lg btn-block" onClick={() => widgetRef.current.open()}>
                Upload Image
            </button>
            
            <div>
            </div>
              <button
                type="submit"
                class="btn btn-primary btn-lg btn-block"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBRow>
  );
}

export default ProductUploadPage;
