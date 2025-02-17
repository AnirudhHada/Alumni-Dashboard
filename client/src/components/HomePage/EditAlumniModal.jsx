import { useState } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	FormControl,
	FormLabel,
	Input,
} from "@chakra-ui/react";

const EditAlumniModal = ({ isOpen, onClose, alumni }) => {
	const [fullName, setFullName] = useState(alumni?.fullName);
	const [companyName, setCompanyName] = useState(alumni?.companyName);
	const [role, setRole] = useState(alumni?.role);
	const [collegeName, setCollegeName] = useState(alumni?.collegeName);
	const [batchYear, setBatchYear] = useState(alumni?.batchYear);
	const [email, setEmail] = useState(alumni?.email || "");
	const [phoneNumber, setPhoneNumber] = useState(alumni?.phoneNumber || "");
	const [linkedinLink, setLinkedinLink] = useState(alumni?.linkedinLink || "");

	const handleSubmit = (event) => {
		event.preventDefault();
		// Update the alumni data with the new values
		console.log("Update alumni data:", {
			fullName,
			companyName,
			role,
			collegeName,
			batchYear,
			email,
			phoneNumber,
			linkedinLink,
		});
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Edit Alumni</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<FormControl>
						<FormLabel>Full Name</FormLabel>
						<Input
							type="text"
							value={fullName}
							onChange={(event) => setFullName(event.target.value)}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Company Name</FormLabel>
						<Input
							type="text"
							value={companyName}
							onChange={(event) => setCompanyName(event.target.value)}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Role</FormLabel>
						<Input
							type="text"
							value={role}
							onChange={(event) => setRole(event.target.value)}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>College Name</FormLabel>
						<Input
							type="text"
							value={collegeName}
							onChange={(event) => setCollegeName(event.target.value)}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Batch Year</FormLabel>
						<Input
							type="text"
							value={batchYear}
							onChange={(event) => setBatchYear(event.target.value)}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input
							type="email"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Phone Number</FormLabel>
						<Input
							type="text"
							value={phoneNumber}
							onChange={(event) => setPhoneNumber(event.target.value)}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>LinkedIn Link</FormLabel>
						<Input
							type="url"
							value={linkedinLink}
							onChange={(event) => setLinkedinLink(event.target.value)}
						/>
					</FormControl>
				</ModalBody>
				<ModalFooter gap={4}>
					<Button variant="ghost" onClick={onClose}>
						Cancel
					</Button>
					<Button colorScheme="blue" onClick={handleSubmit}>
						Save
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default EditAlumniModal;
