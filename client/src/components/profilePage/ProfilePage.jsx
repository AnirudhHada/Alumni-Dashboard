import React from "react";
import { useNavigate } from 'react-router-dom';

const UserProfilePage = () => {
  const userData = {
    name: "John Doe",
    company: "ABC Inc.",
    role: "Software Engineer",
    collegeName: "XYZ University",
    batchYear: "2018",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    linkedinUrl: "https://www.linkedin.com/in/yashagarwal28/",
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <div className="profile-page">
      <button onClick={handleGoBack}>Go Back</button>
      <h1>Profile Page</h1>
      <div className="profile-info">
        <h2>{userData.name}</h2>
        <p>
          <strong>Company:</strong> {userData.company}
        </p>
        <p>
          <strong>Role:</strong> {userData.role}
        </p>
        <p>
          <strong>College Name:</strong> {userData.collegeName}
        </p>
        <p>
          <strong>Batch Year:</strong> {userData.batchYear}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>Phone:</strong> {userData.phone}
        </p>
        <p>
          <strong>LinkedIn URL:</strong>
          <a
            href={userData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {userData.linkedinUrl}
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserProfilePage;
