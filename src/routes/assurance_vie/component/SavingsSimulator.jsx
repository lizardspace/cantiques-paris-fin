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
    Alert,
    AlertIcon,
    Card,
    CardBody,
} from '@chakra-ui/react';
import { FaMoneyBillWave, FaCalendarAlt, FaPercentage } from 'react-icons/fa';

const SavingsSimulator = () => {
    const [initialDeposit, setInitialDeposit] = useState(10000);
    const [monthlyDeposit, setMonthlyDeposit] = useState(200);
    const [investmentDuration, setInvestmentDuration] = useState(20);
    const [returnRate, setReturnRate] = useState(2);

    // Formulas
    const monthlyRate = returnRate / 100 / 12;
    const totalMonths = investmentDuration * 12;

    // Calculations
    const initialSavings = initialDeposit;
    const cumulativeMonthlyDeposits = monthlyDeposit * totalMonths;
    const cumulativeInitialAndMonthlyDeposits = initialSavings + cumulativeMonthlyDeposits;

    const initialInterests = initialSavings * ((1 + monthlyRate) ** totalMonths - 1);

    const monthlyFutureValue = monthlyDeposit * (((1 + monthlyRate) ** totalMonths - 1) / monthlyRate);
    const monthlyInterests = monthlyFutureValue - cumulativeMonthlyDeposits;

    const totalInterests = initialInterests + monthlyInterests;
    const totalFutureValue = initialSavings * (1 + monthlyRate) ** totalMonths + monthlyFutureValue;

    // Format numbers to remove decimal places
    const formattedCumulative = cumulativeInitialAndMonthlyDeposits.toFixed(0);
    const formattedInterests = totalInterests.toFixed(0);
    const formattedFutureValue = totalFutureValue.toFixed(0);

    return (
        <Box p={8}>
            <VStack spacing={8} align="center">
                <Heading as="h1" size="xl">
                    Simulateur d'épargne
                </Heading>
                <Box width="fit-content">
                    <Alert status="success">
                        <AlertIcon />
                        Un projet d'épargne?
                    </Alert>
                </Box>
                <Text textAlign="center" fontSize="lg">En fonction de votre capacité, simulez différents scénarios d'épargne.</Text>

                <Grid templateColumns="repeat(4, 1fr)" gap={8} width="100%" mt={8}>
                <Box>
                        <Card>
                            <CardBody>
                                <Flex align="center" mb={8}>
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
                                    <SliderMark value={initialDeposit} textAlign="center" bg="orange.300" color="white" mt="-10" ml="-5" w="18">
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
                                <Flex align="center" mb={8}>
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
                                <Flex align="center" mb={8}>
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
                                <Flex align="center" mb={8}>
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
                
                <Flex direction={['column', 'row']} justify="space-around" align="center" p={5} bg="gray.100">
                    <Box minW="200px" align="start">
                        <Text fontSize="sm" color="gray.500">
                            Économie de frais par rapport à votre banque:
                        </Text>
                        <Heading size="md">21 438 €</Heading>
                        <Text fontSize="xs" color="blue.500">> Voir le détail</Text>
                    </Box>
                    <Box minW="200px" align="start">
                        <Text fontSize="sm" color="gray.500">
                            Versements cumulés
                        </Text>
                        <Heading size="md">{formattedCumulative} €</Heading>
                    </Box>
                    <Box as="span" fontSize="3xl" p={2}>
                        +
                    </Box>
                    <Box minW="200px" align="start">
                        <Text fontSize="sm" color="gray.500">
                            Intérêts cumulés au terme
                        </Text>
                        <Heading size="md">{formattedInterests} €</Heading>
                    </Box>
                    <Box as="span" fontSize="3xl" p={2}>
                        =
                    </Box>
                    <Box minW="200px" align="start">
                        <Text fontSize="sm" color="gray.500">
                            Capital final
                        </Text>
                        <Heading size="md" bg="blue.500" color="white">{formattedFutureValue} €</Heading>
                    </Box>
                </Flex>
            </VStack>
        </Box>
    );
};

export default SavingsSimulator;
