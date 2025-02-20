import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Flex,
} from "@chakra-ui/react";

const AddAlumniModal = ({ isOpen, onClose, initialRef }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2021 + 1 }, (_, i) => 2021 + i);

  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Alumni</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Flex>
            <FormControl flex={7}>
              <FormLabel>Alumni Name</FormLabel>
              <Input placeholder="Enter alumni name" />
            </FormControl>
            <FormControl flex={3} ml={2}>
              <FormLabel>Grad Year</FormLabel>
              <Select>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Flex>

          <FormControl mt={4}>
            <FormLabel>Company Name</FormLabel>
            <Input placeholder="Enter company name" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Role</FormLabel>
            <Input placeholder="Enter role" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>College Name</FormLabel>
            <Input placeholder="Enter college name" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter email address" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Phone Number</FormLabel>
            <Input type="tel" placeholder="Enter phone number" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>LinkedIn URL</FormLabel>
            <Input type="url" placeholder="Enter LinkedIn profile URL" />
          </FormControl>

        </ModalBody>

        <ModalFooter justifyContent="space-between">
          <Button
            colorScheme="gray"
            border="1px solid #ddd"
            borderRadius="20px"
            padding="8px 16px"
            fontSize="14px"
            fontWeight="medium"
            color="#666"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            colorScheme="gray"
            border="1px solid #ddd"
            borderRadius="20px"
            padding="8px 16px"
            fontSize="14px"
            fontWeight="medium"
            color="#333"
          >
            Add Alumni
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddAlumniModal;
