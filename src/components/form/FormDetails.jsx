import React, { useState } from "react";
import "./FormDetails.css";
import { useNavigate, useLocation } from "react-router-dom";

const FormDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    image: "",
    linkedIn: "",
    github: "",
    contactNo: "",
  });
  const [file, setFile] = useState(null);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataWithFile = new FormData();
    formDataWithFile.append("file", file);
    formDataWithFile.append("username", formData.username);
    formDataWithFile.append("email", formData.email);
    formDataWithFile.append("linkedIn", formData.linkedIn);
    formDataWithFile.append("github", formData.github);
    formDataWithFile.append("contactNo", formData.contactNo);

    try {
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formDataWithFile,
      });

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }

      const data = await response.json();
      console.log("File uploaded successfully:", data.filePath);
      navigate("/userview"); // Navigate to UserView after successful upload
    } catch (error) {
      console.error("Error uploading file:", error.message);
      // Handle error state or display error message to the user
    }
  };

  // Autofill username and email if coming from signup or login
  React.useEffect(() => {
    if (location.state && location.state.user) {
      const { username, email } = location.state.user;
      setFormData((prevData) => ({
        ...prevData,
        username: username,
        email: email,
      }));
    }
  }, [location.state]);

  return (
    <div className="blueprint-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            readOnly // Prevents editing if autofilled
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            readOnly // Prevents editing if autofilled
            required
          />
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            accept="image/*" // Restrict to image files
            required
          />
          <input
            type="text"
            name="linkedIn"
            placeholder="LinkedIn"
            value={formData.linkedIn}
            onChange={handleChange}
          />
          <input
            type="text"
            name="github"
            placeholder="Github"
            value={formData.github}
            onChange={handleChange}
          />
          <input
            type="text"
            name="contactNo"
            placeholder="Contact No"
            value={formData.contactNo}
            onChange={handleChange}
          />
          <button type="submit">GENERATE QR</button>
        </form>
      </div>
    </div>
  );
};

export default FormDetails;
