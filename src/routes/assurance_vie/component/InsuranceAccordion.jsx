import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text
} from '@chakra-ui/react';

    const accordionData = [
        {
          title: "Introduction à l'assurance vie",
          description: "Découvrez les bases de l'assurance vie, un outil financier polyvalent et indispensable pour préparer l'avenir. Cette section explore les multiples facettes de l'assurance vie, de son utilité dans la planification financière à ses avantages fiscaux attrayants."
        },
        {
          title: "Principe de fonctionnement",
          description: "Plongez dans le fonctionnement interne de l'assurance vie et comprenez comment cette forme d'investissement vous permet de protéger votre avenir financier. Explorez les mécanismes qui régissent l'assurance vie, des primes aux bénéficiaires, et découvrez comment elle peut être adaptée à vos besoins spécifiques."
        },
        {
          title: "Le cadre fiscal avantageux de l'assurance vie",
          description: "Explorez les avantages fiscaux exceptionnels offerts par l'assurance vie. Découvrez comment cette forme d'épargne peut vous aider à optimiser votre situation fiscale, en minimisant les impôts sur les gains et les transmissions. Cette section vous éclairera sur les stratégies fiscales intelligentes à adopter avec l'assurance vie."
        },
        {
          title: "Quels sont les frais de l'assurance vie ?",
          description: "Démystifiez les frais associés à l'assurance vie et apprenez à les comprendre pour prendre des décisions financières éclairées. Cette section examine les différents frais liés à l'assurance vie, des frais de gestion aux frais d'entrée, et vous aide à évaluer leur impact sur vos investissements."
        },
        {
          title: "Halte aux idées reçues sur l’assurance vie",
          description: "Débarrassez-vous des idées fausses et des préjugés sur l'assurance vie. Cette section démystifie les mythes courants entourant l'assurance vie, comme son prétendu manque de liquidité ou son utilité limitée. Découvrez la vérité sur l'assurance vie et comment elle peut vraiment être un pilier solide de votre stratégie financière."
        },
        {
          title: "Questions fréquentes sur l'assurance vie",
          description: "Trouvez des réponses à vos questions les plus fréquentes sur l'assurance vie. Cette section aborde les préoccupations courantes des souscripteurs d'assurance vie, des modalités de paiement des primes aux options de gestion des bénéficiaires. Obtenez des éclaircissements pour prendre des décisions éclairées sur votre avenir financier."
        }
      ];

function InsuranceAccordion() {
  return (
    <Accordion allowToggle>
      {accordionData.map((item, index) => (
        <AccordionItem key={index} border="none">
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  _expanded={{ bg: 'blue.100', color: 'blue.800' }}
                  px={5}
                  py={4}
                >
                  <Box flex="1" textAlign="left">
                    <Heading as="h3" size="lg">
                      {item.title}
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} px={5}>
                <Text mb={2}>
                  {item.description}
                </Text>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default InsuranceAccordion;
