import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

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
			<h1
				style={{
					marginTop: "10px",
					marginBottom: "20px",
					textAlign: "center",
					fontSize: "1.5rem",
					fontWeight: "bold",
				}}
			>
				Profile Page
			</h1>
			<div
				className="profile-info"
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					width: "40%",
					margin: "0 auto",
					marginTop: "20px",
					padding: "20px",
					border: "1px solid #ddd",
					borderRadius: "10px",
					boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
				}}
			>
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
					<strong>LinkedIn URL: </strong>
					<a
						href={userData.linkedinUrl}
						target="_blank"
						rel="noopener noreferrer"
					>
						{userData.linkedinUrl}
					</a>
				</p>
			</div>
			<Button
				variant="solid"
				colorScheme="blue"
				onClick={handleGoBack}
				marginTop="1rem"
				marginLeft="50%"
				transform="translateX(-50%)"
			>
				Go Back
			</Button>
		</div>
	);
};

export default UserProfilePage;
