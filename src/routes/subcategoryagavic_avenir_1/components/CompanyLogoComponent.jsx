import React from 'react';
import { Box, Image, Text, Stack, Icon } from '@chakra-ui/react';
import { SiSurveymonkey } from 'react-icons/si'; // Exemple d'icône, choisissez l'icône appropriée

const CompanyLogoComponent = () => {
  return (
    <Box textAlign="center" p={5}>
      {/* Image logo, remplacez 'path-to-your-image.png' avec le chemin réel de votre image */}
      <Image src="path-to-your-image.png" alt="Linxea Avenir" boxSize="150px" m="auto" />
      
      <Text fontSize="xl" fontWeight="bold" mt={4}>Linxea Avenir2</Text>
      
      {/* Icône, si vous avez une icône spécifique pour "assuré par", remplacez 'SiSurveymonkey' avec celle-ci */}
      <Stack direction="row" justify="center" align="center" mt={2}>
        <Icon as={SiSurveymonkey} w={6} h={6} />
        <Text fontSize="sm">assuré par</Text>
      </Stack>
      
      <Text fontSize="sm" color="gray.500" mt={2}>
        UNE FILIALE DU Crédit Mutuel ARKEA
      </Text>
    </Box>
  );
};

export default CompanyLogoComponent;
