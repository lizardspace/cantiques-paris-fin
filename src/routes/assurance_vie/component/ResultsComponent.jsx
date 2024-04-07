import { Box, Flex, Text, VStack, Heading } from '@chakra-ui/react';

const DataCard = ({ title, value, detail }) => {
  return (
    <VStack
      border="1px solid"
      borderColor="gray.200"
      borderRadius="md"
      p={4}
      align="start"
      bg="white"
      minW="200px"
      _hover={{ bg: 'gray.50' }}
    >
      <Text fontSize="sm" color="gray.500">
        {title}
      </Text>
      <Heading size="md">{value}</Heading>
      {detail && <Text fontSize="xs" color="blue.500">{detail}</Text>}
    </VStack>
  );
};

const ResultsComponent = () => {
  return (
    <Flex direction={['column', 'row']} justify="space-around" align="center" p={5} bg="gray.100">
      <DataCard
        title="Économie de frais par rapport à votre banque:"
        value="21 438 €"
        detail="> Voir le détail"
      />
      <DataCard
        title="Versements cumulés"
        value="169 000 €"
      />
      <Box as="span" fontSize="3xl" p={2}>
        +
      </Box>
      <DataCard
        title="Intérêts cumulés au terme"
        value="69 857 €"
      />
      <Box as="span" fontSize="3xl" p={2}>
        =
      </Box>
      <DataCard
        title="Capital final"
        value="238 857 €"
        bg="blue.500"
        color="white"
      />
    </Flex>
  );
};

export default ResultsComponent;
