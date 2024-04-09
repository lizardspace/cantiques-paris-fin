import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react';

const InvestmentManagementComponent = () => {
  return (
    <Box overflowX="auto">
      <Table variant="striped" colorScheme="blue">
        <Thead>
          <Tr>
            <Th>Gestion libre</Th>
            <Th>Gestion pilotée</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Text fontWeight="bold" color="#3182ce">Autonomie:</Text>
              Sélectionnez vous-même vos supports d'investissement...
            </Td>
            <Td>
              <Text fontWeight="bold" color="#3182ce">Tranquillité:</Text>
              Déléguez la gestion financière de votre contrat...
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text fontWeight="bold" color="#3182ce">Liberté:</Text>
              Arbitrez sans frais quand vous le souhaitez...
            </Td>
            <Td>
              <Text fontWeight="bold" color="#3182ce">Cohérence:</Text>
              Bénéficiez d'allocations en accord avec votre profil...
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text fontWeight="bold" color="#3182ce">Conseil:</Text>
              Bénéficiez à tout moment d'un coup de pouce...
            </Td>
            <Td>
              <Text fontWeight="bold" color="#3182ce">Suivi:</Text>
              Consultez les reportings réguliers où le gérant détaille...
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <style>
        {`
          .chakra-table tbody tr:nth-of-type(odd) {
            background-color: #e5f2ff; // Light blue color
          }
        `}
      </style>
    </Box>
  );
};

export default InvestmentManagementComponent;
