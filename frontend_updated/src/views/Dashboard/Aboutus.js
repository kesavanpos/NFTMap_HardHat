/*!

=========================================================
* Purity UI Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/purity-ui-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design by Creative Tim & Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import {
    Box,
    Button,
    Flex,
    Grid,
    Icon,
    Image,
    Portal,
    Spacer,
    Stack,
    Stat,
    StatHelpText,
    StatLabel,
    StatNumber,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import CRMimage from "../../assets/img/CRM-image.png";
  import peopleImage from "../../assets/img/people-image.png";
  import EventCalendar from "../../components/Calendars/EventCalendar";
  import Card from "../../components/Card/Card.js";
  import CardBody from "../../components/Card/CardBody.js";
  import CardHeader from "../../components/Card/CardHeader.js";
  import LineChart from "../../components/Charts/LineChart";
  import IconBox from "../../components/Icons/IconBox";
  import { DocumentIcon, RocketIcon, SettingsIcon } from "../../components/Icons/Icons";
  import TransactionRow from "../../components/Tables/TransactionRow";
  import React, { useRef } from "react";
  import { BsArrowRight } from "react-icons/bs";
  import { FaPlus, FaRegCalendarAlt } from "react-icons/fa";
  import { RiArrowDropRightLine } from "react-icons/ri";
  import { calendarDataCRM } from "../../variables/calendar";
  import {
    lineChartDataCRM1,
    lineChartDataCRM2,
    lineChartOptionsCRM1,
    lineChartOptionsCRM2,
  } from "../../variables/charts";
  import { revenueCRM, transactionsCRM } from "../../variables/general";
  
  function AboutUs() {
    const textColor = useColorModeValue("gray.700", "white");
    const iconTeal = useColorModeValue("teal.300", "teal.300");
    const iconBoxInside = useColorModeValue("white", "white");
    const bgButton = useColorModeValue(
      "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
      "gray.800"
    );
    const overlayRef = useRef();
  
    return (
      <Flex direction="column" pt={{ sm: "120px", md: "75px" }}>        
        <Stack
          direction={{ sm: "column", lg: "row" }}
          spacing="24px"
          mt={{ sm: "24px", lg: "0px" }}
        >
          <Card>
            <CardHeader mb="12px">
              <Flex direction="column" w="100%">
                <Flex
                  direction={{ sm: "column", lg: "row" }}
                  justify={{ sm: "center", lg: "space-between" }}
                  align={{ sm: "center" }}
                  w="100%"
                  my={{ md: "12px" }}
                >
                  <Text
                    color={textColor}
                    fontSize={{ sm: "lg", md: "xl", lg: "lg" }}
                    fontWeight="bold"
                  >
                    Your Transactions
                  </Text>
                  <Flex align="center">
                    <Icon
                      as={FaRegCalendarAlt}
                      color="gray.400"
                      fontSize="md"
                      me="6px"
                    ></Icon>
                    <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                      23 - 30 March 2021
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex direction="column" w="100%" justify="center">
                {transactionsCRM.map((row, index) => {
                  return (
                    <TransactionRow
                      name={row.name}
                      logo={row.logo}
                      date={row.date}
                      price={row.price}
                      key={index}
                    />
                  );
                })}
              </Flex>
            </CardBody>
          </Card>
          <Card>
            <CardHeader mb="12px">
              <Flex direction="column" w="100%">
                <Flex
                  direction={{ sm: "column", lg: "row" }}
                  justify={{ sm: "center", lg: "space-between" }}
                  align={{ sm: "center" }}
                  w="100%"
                  my={{ md: "12px" }}
                >
                  <Text
                    color={textColor}
                    fontSize={{ sm: "lg", md: "xl", lg: "lg" }}
                    fontWeight="bold"
                  >
                    Revenue
                  </Text>
                  <Flex align="center">
                    <Icon
                      as={FaRegCalendarAlt}
                      color="gray.400"
                      fontSize="md"
                      me="6px"
                    ></Icon>
                    <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                      23 - 30 March 2021
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex direction="column" w="100%" justify="center">
                {revenueCRM.map((row, index) => {
                  return (
                    <TransactionRow
                      name={row.name}
                      logo={row.logo}
                      date={row.date}
                      price={row.price}
                      key={index}
                    />
                  );
                })}
              </Flex>
            </CardBody>
          </Card>
        </Stack>
      </Flex>
    );
  }
  
  export default AboutUs;
  