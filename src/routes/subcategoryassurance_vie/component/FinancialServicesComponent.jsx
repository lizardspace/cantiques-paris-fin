import { Flex, Text, Button, VStack } from '@chakra-ui/react';

function FinancialServicesComponent() {
  return (
    <Flex
      alignItems="center" // Vertically center
      justifyContent="center" // Horizontally center
    >
      <VStack spacing={4} align="stretch">
        <Text fontSize="sm" textAlign="center">
          Les unités de comptes qui comportent un risque de perte en capital.
        </Text>
        <Button colorScheme="teal" variant="outline">
          Comparer nos contrats d'assurance vie
        </Button>
        <Text fontSize="xs" textAlign="center">
          (1) +150 fonds labellisés et un engagement fort de la part de Suravenir
        </Text>
      </VStack>
    </Flex>
  );
}

export default FinancialServicesComponent;
