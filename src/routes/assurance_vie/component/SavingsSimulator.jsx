import React, { useState } from 'react';
import {
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Text,
  Grid,
  Heading,
  VStack,
  Flex,
  IconButton,
  Tooltip,
  Image,
  Card,
  CardBody,
} from '@chakra-ui/react';
import { FaMoneyBillWave, FaCalendarAlt, FaPercentage } from 'react-icons/fa';

export default function SavingsSimulator() {
  const [initialDeposit, setInitialDeposit] = useState(10000);
  const [monthlyDeposit, setMonthlyDeposit] = useState(200);
  const [investmentDuration, setInvestmentDuration] = useState(20);
  const [returnRate, setReturnRate] = useState(2);

  return (
    <Box p={8}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="xl">
          Simulateur d'épargne
        </Heading>
        <Text textAlign="center">Un projet d'épargne? En fonction de votre capacité, simulez différents scénarios d'épargne.</Text>

        <Grid templateColumns="repeat(4, 1fr)" gap={6} width="100%">
          <Box>
            <Card>
              <CardBody>
                <Flex align="center">
                  <IconButton
                    aria-label="Initial Deposit"
                    icon={<FaMoneyBillWave />}
                    variant="outline"
                    size="lg"
                    mr={2}
                  />
                  <Text fontSize="lg" fontWeight="bold">Versement initial</Text>
                </Flex>
                <Slider
                  aria-label="slider-ex-1"
                  defaultValue={initialDeposit}
                  min={1000}
                  max={300000}
                  step={1000}
                  onChange={(val) => setInitialDeposit(val)}
                >
                  <SliderMark value={initialDeposit} textAlign="center" bg="orange.300" color="white" mt="-10" ml="-5" w="12">
                    {initialDeposit}€
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack bg="orange.300" />
                  </SliderTrack>
                  <SliderThumb boxSize={6} />
                </Slider>
              </CardBody>
            </Card>
          </Box>

          <Box>
            <Card>
              <CardBody>
                <Flex align="center">
                  <IconButton
                    aria-label="Monthly Deposit"
                    icon={<FaMoneyBillWave />}
                    variant="outline"
                    size="lg"
                    mr={2}
                  />
                  <Text fontSize="lg" fontWeight="bold">Versements mensuels</Text>
                </Flex>
                <Slider
                  aria-label="slider-ex-2"
                  defaultValue={monthlyDeposit}
                  min={0}
                  max={1500}
                  step={50}
                  onChange={(val) => setMonthlyDeposit(val)}
                >
                  <SliderMark value={monthlyDeposit} textAlign="center" bg="orange.300" color="white" mt="-10" ml="-5" w="12">
                    {monthlyDeposit}€
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack bg="orange.300" />
                  </SliderTrack>
                  <SliderThumb boxSize={6} />
                </Slider>
              </CardBody>
            </Card>
          </Box>

          <Box>
            <Card>
              <CardBody>
                <Flex align="center">
                  <IconButton
                    aria-label="Investment Duration"
                    icon={<FaCalendarAlt />}
                    variant="outline"
                    size="lg"
                    mr={2}
                  />
                  <Text fontSize="lg" fontWeight="bold">Durée de l'investissement</Text>
                </Flex>
                <Slider
                  aria-label="slider-ex-3"
                  defaultValue={investmentDuration}
                  min={1}
                  max={20}
                  onChange={(val) => setInvestmentDuration(val)}
                >
                  <SliderMark value={investmentDuration} textAlign="center" bg="orange.300" color="white" mt="-10" ml="-5" w="12">
                    {investmentDuration} ans
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack bg="orange.300" />
                  </SliderTrack>
                  <SliderThumb boxSize={6} />
                </Slider>
              </CardBody>
            </Card>
          </Box>

          <Box>
            <Card>
              <CardBody>
                <Flex align="center">
                  <IconButton
                    aria-label="Return Rate"
                    icon={<FaPercentage />}
                    variant="outline"
                    size="lg"
                    mr={2}
                  />
                  <Text fontSize="lg" fontWeight="bold">Rendement de votre épargne</Text>
                </Flex>
                <Slider
                  aria-label="slider-ex-4"
                  defaultValue={returnRate}
                  min={0.5}
                  max={5}
                  step={0.1}
                  onChange={(val) => setReturnRate(val)}
                >
                  <SliderMark value={returnRate} textAlign="center" bg="orange.300" color="white" mt="-10" ml="-5" w="12">
                    {returnRate}%/an
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack bg="orange.300" />
                  </SliderTrack>
                  <SliderThumb boxSize={6} />
                </Slider>
              </CardBody>
            </Card>
          </Box>
        </Grid>
      </VStack>
    </Box>
  );
}
