import React from 'react';
import { Box, Text, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';

const questionsAndAnswers = [
  {
    question: "Qu'est-ce qu'une SCPI de rendement ? Définition",
    answer: (
      <>
        <Text mb={2}>
          Vous souhaitez diversifier votre patrimoine et investir dans l’immobilier, mais l'achat d'un bien en direct vous freine ?
          Les SCPI (Sociétés Civiles de Placement Immobilier) pourraient être la solution idéale pour vous.
        </Text>
        <Text mb={2}>
          Une SCPI est un organisme de placement collectif qui investit dans l’immobilier locatif. En d'autres termes, elle collecte des fonds auprès d'épargnants
          comme vous et les utilise pour acheter des biens immobiliers (bureaux, commerces, entrepôts, résidences hôtelières, etc.) qui seront ensuite mis en location.
        </Text>
        <Text mb={2}>
          Les loyers que la SCPI perçoit sont alors redistribués aux investisseurs, généralement trimestriellement.
          Investir dans une SCPI, c'est investir dans la "pierre-papier". Vous n’avez pas à vous soucier de la recherche de biens, de la gestion locative ou des
          travaux d'entretien, tout est pris en charge par la société de gestion de la SCPI.
        </Text>
      </>
    ),
  },
  {
    question: "Quels sont les avantages d'investir dans une SCPI ?",
    answer: (
      <>
        <Text mb={2}>Accessibilité : Vous pouvez investir dans une SCPI à partir de quelques centaines d'euros.</Text>
        <Text mb={2}>Diversification : Votre patrimoine n'est pas concentré sur un seul bien immobilier.</Text>
        <Text mb={2}>Délégation : La gestion locative est entièrement déléguée à des professionnels.</Text>
        <Text mb={2}>Rendement : Les SCPI de rendement distribuent des revenus réguliers aux porteurs de parts.</Text>
        <Text mb={2}>
          L'investissement en SCPI doit être envisagé sur le long terme. La durée de détention recommandée est de 8 à 10 ans, mais les parts de SCPI sont
          généralement conservées beaucoup plus longtemps.
        </Text>
        <Text mb={2}>
          Avant de vous lancer, il est important de choisir une SCPI qui correspond à vos besoins. N'hésitez pas à contacter un de nos conseillers pour obtenir
          des conseils personnalisés.
        </Text>
        <Text mb={2}>
          A noter : Comme tout investissement, les SCPI comportent des risques (vacance locative, baisse du marché immobilier, etc.). Ni le rendement ni le
          capital de la SCPI ne peuvent faire l'objet d'une garantie, puisqu'ils sont soumis aux aléas du marché de l'immobilier.
        </Text>
      </>
    ),
  },
  {
    question: "Comment ça marche les SCPI ?",
    answer: (
      <>
        <Text mb={2}>
          Les SCPI constituent un moyen simple et accessible d'investir dans l’immobilier et de profiter de ses nombreux avantages.
        </Text>
        <Text mb={2}>
          Investir en SCPI, c'est avant tout devenir associé d'une société qui possède un patrimoine immobilier locatif. Mais comment ça se passe concrètement ?
        </Text>
        <Text mb={2} fontWeight="bold">Acquisition et gestion du patrimoine :</Text>
        <Text mb={2}>
          La SCPI, via sa société de gestion, achète des biens immobiliers (bureaux, commerces, hôtels, etc.) et les met en location. La société de gestion s'occupe de toutes les tâches liées à la gestion locative :
        </Text>
        <Text mb={2} pl={4}>
          - Recherche de locataires<br/>
          - Signature des baux<br/>
          - Collecte des loyers<br/>
          - Paiement des charges<br/>
          - Entretien des biens<br/>
          - Travaux éventuels
        </Text>
        <Text mb={2} fontWeight="bold">Détention de parts et droit aux revenus :</Text>
        <Text>
          En tant qu'associé, vous détenez des parts de SCPI proportionnelles à votre investissement. Vous percevez ensuite des revenus locatifs (loyers ou dividendes) au prorata des parts détenues, distribués mensuellement ou trimestriellement.
        </Text>
      </>
    ),
  },
  {
    question: "Immobilier : comment investir en SCPI ?",
    answer: <Text>Investir en SCPI est une démarche simple qui commence par...</Text>, // Add more detailed answer here
  },
  {
    question: "Est-ce rentable d'investir dans une SCPI ?",
    answer: <Text>La rentabilité d'une SCPI dépend de plusieurs facteurs, y compris...</Text>, // Add more detailed answer here
  },
  {
    question: "SCPI combien investir ?",
    answer: <Text>Le montant à investir dans une SCPI dépend de vos objectifs financiers et de votre tolérance au risque...</Text>, // Add more detailed answer here
  },
  {
    question: "Quelle fiscalité pour les SCPI ?",
    answer: <Text>Les revenus générés par les SCPI sont soumis à l'impôt sur le revenu et aux prélèvements sociaux...</Text>, // Add more detailed answer here
  },
  {
    question: "Quelle SCPI choisir en 2024 ?",
    answer: <Text>Le choix de la SCPI dépend de plusieurs critères, notamment de vos objectifs et de votre profil d'investisseur...</Text>, // Add more detailed answer here
  },
  {
    question: "Quelles sont les meilleures SCPI en 2024 ?",
    answer: <Text>Les meilleures SCPI en 2024 varient en fonction de différents critères tels que les rendements passés, la gestion et la diversification...</Text>, // Add more detailed answer here
  },
  {
    question: "SCPI : Capital fixe ou variable, quelle différence ?",
    answer: <Text>Le capital fixe et le capital variable sont deux modes de fonctionnement des SCPI qui influencent la liquidité et la flexibilité de votre investissement...</Text>, // Add more detailed answer here
  },
];

const SCPIQuestions = () => {
  return (
    <Box bg="white" py={10} px={6} borderRadius="lg" mx={4}>
      <VStack spacing={8} maxW="1200px" mx="auto" align="start">
        <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="blue.900">
          Questions/Réponses : Les SCPI
        </Text>
        <Accordion allowToggle w="100%">
          {questionsAndAnswers.map((item, index) => (
            <AccordionItem key={index} border="none">
              <h2>
                <AccordionButton _expanded={{ bg: 'blue.50', color: 'blue.900' }}>
                  <Box flex="1" textAlign="left" fontSize="lg" fontWeight="bold">
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {item.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </VStack>
    </Box>
  );
};

export default SCPIQuestions;
