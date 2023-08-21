import React, { useState, useEffect, useRef } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../components/UserProfile.css";
import {useParams} from "react-router-dom";
export default function UserProfile() {
  const id = useParams();
  console.log(id)
  const API = "https://ebuy-dev-backend.onrender.com/api/signUp/" + id.id;
  const [profilePicture, setProfilePicture] = useState(
    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
  );
  const [name, setName] = useState("Marie Horwitz");
  const [email, setEmail] = useState("info@example.com");
  const [phone, setPhone] = useState("123 456 789");
  const [address, setAddress] = useState("123 Main St, City, Country");
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedPhone, setUpdatedPhone] = useState("");
  const [updatedAddress, setUpdatedAddress] = useState("");

  const fileInputRef = useRef(null);

  useEffect(() => {
    
    console.log(API);
    // Fetch user profile details from the backend API
    fetch(API, {
      method: "GET",
      headers: {      },
    })
      .then((response) => response.json())
      .then((data) => {
        setName(data.username);
        setEmail(data.email);
        setPhone(data.phone);
        setAddress(data.address);
      })
      .catch((error) => console.error("Error fetching user profile:", error));
  }, []); // Empty dependency array to fetch once when the component mounts

  const handleProfilePictureChange = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpdateDetails = () => {
    setIsEditing(true);
    setUpdatedName(name);
    setUpdatedEmail(email);
    setUpdatedPhone(phone);
    setUpdatedAddress(address);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setName(updatedName);
    setEmail(updatedEmail);
    setPhone(updatedPhone);
    setAddress(updatedAddress);
    setIsEditing(false);
    // TODO: Implement logic to update details in the database
  };
  return (
    <section className="vh-100 section">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="profile-card">
              <MDBRow className="g-0">
                <MDBCol
                  md="4"
                  className="gradient-custom text-center text-white"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  <MDBCardImage
                    src={profilePicture}
                    alt="Avatar"
                    className="profile-picture"
                    fluid
                  />
                  <MDBTypography tag="h5">{name}</MDBTypography>
                  <MDBCardText>Web Designer</MDBCardText>
                  <MDBIcon far icon="edit edit-icon" />
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <button
                    className="btn btn-link"
                    onClick={handleProfilePictureChange}
                  >
                    Change Profile Picture
                  </button>
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    {isEditing ? (
                      <form onSubmit={handleFormSubmit}>
                        <MDBTypography tag="h6">Update Details</MDBTypography>
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-1">
                          <MDBCol size="6" className="mb-3">
                            <label>Name</label>
                            <input
                              type="text"
                              value={updatedName}
                              onChange={(e) => setUpdatedName(e.target.value)}
                              className="form-control"
                              required
                            />
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <label>Email</label>
                            <input
                              type="email"
                              value={updatedEmail}
                              onChange={(e) => setUpdatedEmail(e.target.value)}
                              className="form-control"
                              required
                            />
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="pt-1">
                          <MDBCol size="6" className="mb-3">
                            <label>Phone</label>
                            <input
                              type="tel"
                              value={updatedPhone}
                              onChange={(e) => setUpdatedPhone(e.target.value)}
                              className="form-control"
                              required
                            />
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <label>Address</label>
                            <input
                              type="text"
                              value={updatedAddress}
                              onChange={(e) =>
                                setUpdatedAddress(e.target.value)
                              }
                              className="form-control"
                              required
                            />
                          </MDBCol>
                        </MDBRow>
                        <div className="form-buttons">
                          <div>
                            <button type="submit" className="btn btn-primary">
                              Save Changes
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={() => setIsEditing(false)}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </form>
                    ) : (
                      <div>
                        <MDBTypography tag="h6">Information</MDBTypography>
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-1">
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Name</MDBTypography>
                            <MDBCardText className="text-muted">
                              {name}
                            </MDBCardText>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Email</MDBTypography>
                            <MDBCardText className="text-muted">
                              {email}
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="pt-1">
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Phone</MDBTypography>
                            <MDBCardText className="text-muted">
                              {phone}
                            </MDBCardText>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Address</MDBTypography>
                            <MDBCardText className="text-muted">
                              {address}
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <button
                          className="btn btn-link"
                          onClick={handleUpdateDetails}
                        >
                          Update Details
                        </button>
                      </div>
                    )}

                    <div className="d-flex justify-content-start mt-4">
                      <a href="#!">
                        <MDBIcon fab icon="facebook me-3" size="lg" />
                      </a>
                      <a href="#!">
                        <MDBIcon fab icon="twitter me-3" size="lg" />
                      </a>
                      <a href="#!">
                        <MDBIcon fab icon="instagram me-3" size="lg" />
                      </a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
