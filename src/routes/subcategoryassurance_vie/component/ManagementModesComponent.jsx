import {
  Box,
  VStack,
  Heading,
    HStack,
  Icon,
  Grid,
  GridItem,
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
  return (
    <Container maxW="container.xl" centerContent py={10}>
      <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} gap={6}>
        <GridItem>
          <VStack spacing={4} align="center">
            <HStack justify="center" w="full">
              <Icon as={FcManager} w={10} h={10} />
              <Heading size="md" textAlign="center">Gestion libre</Heading>
            </HStack>
            <List spacing={2} textAlign="center">
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
          </VStack>
        </GridItem>

        <GridItem>
          <VStack spacing={4} align="center">
            <HStack justify="center" w="full">
              <Icon as={FcAutomatic} w={10} h={10} />
              <Heading size="md" textAlign="center">Gestion pilotée</Heading>
            </HStack>
            <List spacing={2} textAlign="center">
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
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default ManagementModesComponent;
