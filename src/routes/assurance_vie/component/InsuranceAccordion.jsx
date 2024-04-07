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

function InsuranceAccordion() {
  return (
    <Accordion allowToggle>
      <AccordionItem border="none">
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
                    Comprendre l'assurance vie
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} px={5}>
              <Text mb={2}>
                On lit souvent que l’assurance vie est « le placement préféré des Français ». Et pour cause, ce placement répond à tous les projets – préparer sa retraite, faire fructifier un capital, protéger sa famille, anticiper un projet immobilier – le tout dans un cadre fiscal unique. Cerise sur le gâteau, votre argent reste disponible à tout moment sans frais, exactement comme sur un livret A. Pour débuter en épargne, l’assurance vie est un placement incontournable.
              </Text>
              <Text fontWeight="bold">
                Ses avantages principaux:
              </Text>
              <Text>
                - Le couteau suisse de l’épargne: l’assurance vie est une enveloppe qui vous permet d’investir sur tous les supports disponibles au contrat (OPCVM, SCPI, ETF, Actions en direct, produits structurés, Private Equity..)
              </Text>
              <Text>
                - La sécurité du fonds en euros: la part placée sur votre fonds euro est garantie (totalement ou partiellement), non plafonnée et disponible à tout moment
              </Text>
              <Text>
                - Une fiscalité très avantageuse: retraits et transmission peu voire pas taxés
              </Text>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}

export default InsuranceAccordion;
