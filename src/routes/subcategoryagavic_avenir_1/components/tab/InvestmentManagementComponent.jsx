import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react';

const InvestmentManagementComponent = () => {
  return (
    <Box overflowX="auto">
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Gestion libre</Th>
            <Th>Gestion pilotée</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Text fontWeight="bold">Autonomie:</Text>
              Sélectionnez vous-même vos supports d'investissement...
            </Td>
            <Td>
              <Text fontWeight="bold">Tranquillité:</Text>
              Déléguez la gestion financière de votre contrat...
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text fontWeight="bold">Liberté:</Text>
              Arbitrez sans frais quand vous le souhaitez...
            </Td>
            <Td>
              <Text fontWeight="bold">Cohérence:</Text>
              Bénéficiez d'allocations en accord avec votre profil...
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text fontWeight="bold">Conseil:</Text>
              Bénéficiez à tout moment d'un coup de pouce...
            </Td>
            <Td>
              <Text fontWeight="bold">Suivi:</Text>
              Consultez les reportings réguliers où le gérant détaille...
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default InvestmentManagementComponent;
