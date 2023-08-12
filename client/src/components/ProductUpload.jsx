import React, {useState} from "react";
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
import axios from 'axios';



function ProductUploadPage() {
  
  const [itemID, setitemID] = useState('');
  const [sellerID, setsellerID] = useState('');
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
  
  const handlesellerID = (event) => {
    setsellerID(event.target.value);
  };


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
    const response = await fetch('/api/product', {
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
    <MDBContainer fluid className="h-custom">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12" className="m-5">
          <MDBCard
            className="card-registration card-registration-2"
            style={{ borderRadius: "15px" }}
          >
            <MDBCardBody className="p-0">
              <MDBRow>
                <MDBCol md="6" className="p-5 bg-white">
                  <h3 className="fw-normal mb-5" style={{ color: "#4835d4" }}>
                    General Infomation
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

                  <MDBRow className='align-items-center pt-4 pb-3'>


                <MDBCol md='9' className='pe-5'>
                  <MDBTextArea label='Specs' 
                  id='textAreaExample' 
                  rows={3} 
                  value={specs}
                  onChange={handlespecsChange}
                  placeholder="Enter Product Specifications"
                  />
                </MDBCol>

              </MDBRow>
                  <MDBRow>
                    <MDBCol md="6">
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
                    </MDBCol>
                    <MDBCol md='9' className='pe-5'>
                    <MDBTextArea label='Tags' 
                    id='textAreaExample' 
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
                  </MDBCol>

                  </MDBRow>
                  
                </MDBCol>

                <MDBCol md="6" className="bg-indigo p-5">
                  <h3
                    className="fw-normal mb-5 text-white"
                    style={{ color: "#4835d4" }}
                  >
                    Contact Details
                  </h3>
                  <MDBInput
                    wrapperClass="mb-4"
                    labelClass="text-white"
                    label="Street + Nr"
                    size="lg"
                    id="form5"
                    type="text"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    labelClass="text-white"
                    label="Additional Information"
                    size="lg"
                    id="form6"
                    type="text"
                  />

                  <MDBRow>
                    <MDBCol md="5">
                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        label="Zip Code"
                        size="lg"
                        id="form6"
                        type="text"
                      />
                    </MDBCol>

                    <MDBCol md="7">
                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        label="Place"
                        size="lg"
                        id="form7"
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass="mb-4"
                    labelClass="text-white"
                    label="Country"
                    size="lg"
                    id="form8"
                    type="text"
                  />

                  <MDBRow>
                    <MDBCol md="5">
                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        label="Code +"
                        size="lg"
                        id="form9"
                        type="text"
                      />
                    </MDBCol>

                    <MDBCol md="7">
                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        label="Phone Number"
                        size="lg"
                        id="form10"
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass="mb-4"
                    labelClass="text-white"
                    label="Your Email"
                    size="lg"
                    id="form8"
                    type="email"
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    id="flexCheckDefault"
                    labelClass="text-white mb-4"
                    label="I do accept the Terms and Conditions of your site."
                  />
                  <MDBBtn color="light" size="lg">
                    Register
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ProductUploadPage;
