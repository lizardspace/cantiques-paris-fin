import React from 'react';
import { Flex, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, Button, Input } from '@chakra-ui/react';

// Modal component
const BannerModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Boostez votre épargne* Visez entre 4,50% et 5% de rendement net en 2024 sous conditions.</ModalHeader>
        <ModalBody>
          <Text mb={4}>Veuillez entrer votre email pour vous inscrire:</Text>
          <Input placeholder='Email' />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Inscrivez-vous maintenant
          </Button>
          <Button variant="ghost" onClick={onClose}>Non, merci</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

// Banner component
const FullWidthBanner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        width="100%"
        bg="blue.500"
        color="white"
        justifyContent="center"
        alignItems="center"
        p={4}
        onClick={onOpen}
        cursor="pointer"
      >
        <Text textAlign="center" fontWeight="bold">
        Boostez votre épargne* Visez entre 4,50% et 5% de rendement net en 2024 sous conditions.
        </Text>
      </Flex>
      
      <BannerModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default FullWidthBanner;
