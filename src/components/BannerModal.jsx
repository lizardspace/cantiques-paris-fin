import React from 'react';
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, Button, Text, Input } from '@chakra-ui/react';

const BannerModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Inscrivez-vous à notre newsletter et profitez de 50€ de bon d'achat!</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Inscrivez-vous maintenant et profitez de 50€ de bon d'achat!</ModalHeader>
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
    </>
  );
};

export default BannerModal;
