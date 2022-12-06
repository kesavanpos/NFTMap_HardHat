
// Chakra imports
import {
  Box,
  Flex,
  Grid,
  Progress,
  SimpleGrid,
  Spacer,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Button,
  Center
} from "@chakra-ui/react";
// Custom components
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import BarChart from "../../components/Charts/BarChart";
import LineChart from "../../components/Charts/LineChart";
import Globe from "../../components/Globe/Globe";
import IconBox from "../../components/Icons/IconBox";
import Maps from "../../components/Maps/Map"

import { Link } from "react-router-dom";

// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "../../components/Icons/Icons.js";
import React from "react";
import {
  barChartDataDefault,
  barChartOptionsDefault,
  lineChartDataDefault,
  lineChartOptionsDefault,
} from "../../variables/charts";

export default function Default() {
  // Chakra Color Mode
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  
  
  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <Text
        color={textColor}
        fontWeight="bold"
        fontSize="3xl"
        mb="30px"
        ps="20px"
      >
        Map
      </Text>
      <Grid
        templateColumns={{ sm: "4fr 1fr", xl: "1.2fr 1fr" }}
        gap="32px"
        maxW="100%"
        w="100%"
      >
        <Box
          minW="700px"
          h="700px"
          position="absolute"
          right="30px"
          top="14%"
          display={{ sm: "none", md: "block" }}
        >
          <Globe />
        </Box>        
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.7fr 1.3fr" }}
        gap="24px"
        mb={{ lg: "26px" }}
      >
        <Card p="28px 10px 0px 0px" mb={{ sm: "26px", lg: "0px" }}>
          <CardHeader mb="20px" ps="22px">
            <Flex direction="column" alignSelf="flex-start">
              <Center><Text fontSize="62px" color={textColor} fontWeight="bold" mb="6px" className="font-league">
              BLOCKCHAIN TECHNOLOGY
              </Text></Center>
              <Center>
              <Button
                    type='submit'
                    bg='teal.300'                  
                    p='8px 32px'
                    mt={5}
                    mb={5}
                    _hover='teal.300'
                    color='white'
                    fontSize='md'
                    onClick={() => { window.location.href="#/admin/dashboard/NFTMap"}}         
                    >
                   Click here
                  </Button>
                  </Center>
                  <Text fontSize="md" color={textColor} fontWeight="normal" mb="6px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
              </Text>
              
              <Center>
              <Button
                    type='submit'
                    bg='blue.300'                    
                    p='8px 32px'
                    mb={5}
                    mt={5}
                    _hover='teal.300'
                    color='white'
                    fontSize='md'                        
                    >
                    Learn More
                  </Button>
              </Center>

            </Flex>
          </CardHeader>
          
        </Card>
      </Grid>
    </Flex>
  );
}
