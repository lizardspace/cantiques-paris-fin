import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Box,
  useTheme,
} from '@chakra-ui/react';

const feesData = [
  { name: 'Frais de dossier', value: '0%' },
  { name: 'Frais de versement', value: '0%' },
  { name: 'Frais d\'arbitrage', value: '0%' },
  { name: 'Frais d\'entrée sur les unités de compte (1)', value: '0%' },
  { name: 'Frais de gestion du fonds euro Suravenir Rendement 2 par an', value: '0,6%' },
  // Add more fees as needed...
];

function FeesTable() {
  const theme = useTheme();

  return (
    <Box maxW="md" mx="auto">
      <Table variant="simple">
        <Thead bg={theme.colors.blue[500]}>
          <Tr>
            <Th color="white">Type de frais</Th>
            <Th color="white" isNumeric>Montant des frais</Th>
          </Tr>
        </Thead>
        <Tbody>
          {feesData.map((fee, index) => (
            <Tr key={index} _even={{ bg: theme.colors.blue[50] }}>
              <Td fontWeight="semibold">{fee.name}</Td>
              <Td isNumeric>
                <Badge
                  px={2}
                  py={1}
                  borderRadius="full"
                  colorScheme={fee.value === '0%' ? 'blue' : 'orange'}
                  variant="solid"
                >
                  {fee.value}
                </Badge>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default FeesTable;
