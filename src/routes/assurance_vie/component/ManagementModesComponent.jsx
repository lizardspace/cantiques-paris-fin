import {
    Box,
    VStack,
    Heading,
    Text,
    Icon,
    List,
    ListItem,
    ListIcon,
    StackDivider,
    useBreakpointValue,
    Container
  } from '@chakra-ui/react';
  import { FcManager, FcAutomatic } from 'react-icons/fc';
  import { MdCheckCircle } from 'react-icons/md';
  
  function ManagementModesComponent() {
    const stackDirection = useBreakpointValue({ base: 'column', md: 'row' });
  
    return (
      <Container maxW="container.xl" centerContent py={10}>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
          direction={stackDirection}
        >
          <Box>
            <VStack spacing={3} align="center">
              <Icon as={FcManager} w={10} h={10} />
              <Heading size="md">Gestion libre</Heading>
            </VStack>
            <List spacing={2} mt={2} textAlign="center">
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Autonomie: Sélectionnez vous-même vos supports d'investissement
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Liberté: Arbitrez sans frais quand vous le souhaitez pour un contrat toujours en adéquation avec vos projets
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Conseil: Bénéficiez à tout moment d’un coup de pouce dans votre sélection grâce aux allocations stars Linxea et à nos conseillers en investissement financier
              </ListItem>
            </List>
          </Box>
  
          <Box>
            <VStack spacing={3} align="center">
              <Icon as={FcAutomatic} w={10} h={10} />
              <Heading size="md">Gestion pilotée</Heading>
            </VStack>
            <List spacing={2} mt={2} textAlign="center">
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Tranquillité: Déléguez la gestion financière de votre contrat un professionnel de la finance
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Cohérence: Bénéficiez d'allocations en accord avec votre profil de risque et vos objectifs de performances
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Suivi: Consultez les reportings réguliers où le gérant détaille sa stratégie et explique ses choix d'arbitrage.
              </ListItem>
            </List>
          </Box>
        </VStack>
      </Container>
    );
  }
  
  export default ManagementModesComponent;
  