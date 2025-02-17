import { useState, useRef } from "react";
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Box,
	Flex,
} from "@chakra-ui/react";
import { Button, useDisclosure } from "@chakra-ui/react";
import AddAlumniModal from "./AddAlumniModal";
import EditAlumniModal from "./EditAlumniModal";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
// import DeleteAlumniModal from "./DeleteAlumniModal";

function HomePageComponent() {
	const {
		isOpen: isEditModalOpen,
		onOpen: onEditModalOpen,
		onClose: onEditModalClose,
	} = useDisclosure();

	const {
		isOpen: isAddModalOpen,
		onOpen: onAddModalOpen,
		onClose: onAddModalClose,
	} = useDisclosure();

	const [selectedAlumni, setSelectedAlumni] = useState(null);

	// const handleEdit = () => {
	// 	setSelectedAlumni(alumniData[0]);
	// 	onEditModalOpen();
	// 	// Set the alumni data to be edited
	// 	console.log("Edit alumni:");
	// };

	// const handleAdd = () => {
	// 	onAddModalOpen();
	// };

	const initialRef = useRef(null);

	const alumniData = [
		{
			id: 1,
			fullName: "John Doe",
			companyName: "ABC Inc.",
			role: "Engineer",
			collegeName: "XYZ University",
			batchYear: "2018",
		},
		{
			id: 2,
			fullName: "Jane Smith",
			companyName: "DEF Corp.",
			role: "Designer",
			collegeName: "ABC College",
			batchYear: "2019",
		},
		{
			id: 3,
			fullName: "Jane Smith",
			companyName: "DEF Corp.",
			role: "Designer",
			collegeName: "ABC College",
			batchYear: "2019",
		},
		// ... more dummy data ...
	];

	const [specificalumniData, setSpecificAlumniData] = useState(alumniData);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [alumniToDelete, setAlumniToDelete] = useState(null);

	const handleDelete = (alumni) => {
		setAlumniToDelete(alumni);
		setDeleteModalOpen(true);
	};

	const onDelete = () => {
		// Remove the alumni from the table
		const updatedAlumniData = specificalumniData.filter(
			(alumni) => alumni.id !== alumniToDelete.id
		);
		setSpecificAlumniData(updatedAlumniData);
	};

	const onClose = () => {
		setDeleteModalOpen(false);
	};

	return (
		<>
			<Flex justifyContent="space-between" p={4}>
				<Box fontSize="lg" fontWeight="bold">
					Alumni Data
				</Box>
				<Button
					colorScheme="gray"
					border="1px solid #ddd"
					borderRadius="20px"
					padding="8px 16px"
					fontSize="14px"
					fontWeight="medium"
					color="#666"
					onClick={onAddModalOpen}
				>
					Add Alumni
				</Button>
			</Flex>

			<AddAlumniModal
				isOpen={isAddModalOpen}
				onClose={onAddModalClose}
				initialRef={initialRef}
			/>

			<EditAlumniModal
				isOpen={isEditModalOpen}
				onClose={onEditModalClose}
				alumni={selectedAlumni}
			/>

			<TableContainer>
				<Table variant="simple" fontSize="13px" width="full">
					<Thead>
						<Tr>
							<Th>Full Name</Th>
							<Th>Company Name</Th>
							<Th>Role</Th>
							<Th>College Name</Th>
							<Th isNumeric>Batch Year</Th>
							<Th width="120px" textAlign="center">
								Actions
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						{alumniData.map((alumni) => (
							<Tr key={alumni.id}>
								<Td>
									<Link to={`/profile`}>{alumni.fullName}</Link>
								</Td>
								<Td>{alumni.companyName}</Td>
								<Td>{alumni.role}</Td>
								<Td>{alumni.collegeName}</Td>
								<Td isNumeric>{alumni.batchYear}</Td>
								<Td textAlign="right">
									<Button
										colorScheme="gray"
										backgroundColor="#f7f7f7"
										borderRadius="10px"
										padding="8px 16px"
										fontSize="14px"
										fontWeight="medium"
										color="#666"
										leftIcon={<EditIcon />}
										onClick={onEditModalOpen}
										mr={2}
									>
										Edit
									</Button>
									<Button
										colorScheme="gray"
										backgroundColor="#f7f7f7"
										borderRadius="10px"
										padding="8px 16px"
										fontSize="14px"
										fontWeight="medium"
										color="#666"
										leftIcon={<DeleteIcon />}
										// onClick={handleDelete(alumni)}
									>
										Delete
									</Button>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>

				{/* <DeleteAlumniModal
					isOpen={deleteModalOpen}
					onClose={onClose}
					onDelete={onDelete}
				/> */}
			</TableContainer>
		</>
	);
}

export default HomePageComponent;
