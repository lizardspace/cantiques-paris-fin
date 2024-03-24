import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    VStack,
    Link,
    Text,
  } from '@chakra-ui/react';
  
  const ContactForm = () => {
    return (
      <VStack
        spacing={4}
        border="1px solid"
        borderColor="gray.200"
        p={4}
        borderRadius="md"
        w="100%"
        maxWidth="400px" // Adjust the width as needed
        m="auto"
      >
        <Text>Une question ? Contactez-nous ici.</Text>
        <Link color="blue.500" href="#">
          Accédez à notre guide des tailles en cliquant ici
        </Link>
        <Text>
          N'hésitez pas à nous demander l'envoi gratuit (France uniquement) par courrier d'un baguier
          en nous communiquant nom, prénom, numéro de téléphone et adresse de livraison
        </Text>
        <FormControl id="name">
          <FormLabel>Nom</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="phone">
          <FormLabel>Numéro de téléphone</FormLabel>
          <Input type="tel" />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea />
        </FormControl>
        <Button colorScheme="blue" w="full">
          Envoyer
        </Button>
      </VStack>
    );
  };
  
  export default ContactForm;
  