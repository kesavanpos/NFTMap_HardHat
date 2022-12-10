import { default as Logo } from '../../assets/img/cut-us.svg';
import { ReactSVG } from 'react-svg'

import HelloWorld from "../../contracts/HelloWorld.json";
import HelloWorldToken from "../../contracts/helloWorld-address.json";

import MapCore from "../../contracts/MapCore.json";
import MapCoreToken from "../../contracts/mapcore-address.json";

import { ethers } from "ethers";

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
    Center,
    Image
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
  import toImg from 'react-svg-to-image';

  

  // Custom icons
  import {
    CartIcon,
    DocumentIcon,
    GlobeIcon,
    RocketIcon,
    StatsIcon,
    WalletIcon,
  } from "../../components/Icons/Icons.js";
  import React, { useEffect,useState } from "react";
  import Web3 from 'web3';

  import {
    barChartDataDefault,
    barChartOptionsDefault,
    lineChartDataDefault,
    lineChartOptionsDefault,
  } from "../../variables/charts";

  import { default as mintImg } from '../../assets/img/mint.jpg';
  import $ from 'jquery';
 
  const saveSvgAsPng = require('save-svg-as-png');

  // import contract from '../../contracts/MapCore.json';
  // import marketplaceContract from "../../contracts/MapMarketPlace.json";

  // // bsc contract address
  // let contractAddress = '0x8c0E2c84cb2e402d3D84599841cCF50DE14945EE';

  //let contractAddress = '0x7606c6A9Cd51c333Be0e71fF466A357D72A30159';
  // let marketContractAddress = contractAddress;
  // const abi = contract.abi;
  // const marketplaceabi = marketplaceContract.abi;

  let selectedMap = [];
  const imageOptions = {
    scale: 5,
    encoderOptions: 1,
    backgroundColor: 'white',
  }

  $(function() {  
    $('path').css('cursor','pointer');

    $('path').on('click',function (e) {                
      selectedMap.push(e.currentTarget.id.split("-")[1]);
    });
  });
 
const NFTMap = () =>{
  debugger;
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const [account, setAccount] = useState(); // state variable to set account.  
  
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please install MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      fetchHelloworld();

      console.log("Connected", accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchHelloworld = async () => {
    debugger;
    let contractAddress = HelloWorldToken.Token;
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      HelloWorld.abi,
      provider
    );

    const helloworld = await contract.message("work");
    const updateHelloWorld = await contract.update("work");
    const helloworld1 = await contract.message("work");
    console.log(helloworld1);
  };


  useEffect(() => {   
    connectWallet();
  }, [])

  const onMapClicked = () =>{

  }

    return(      
        <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }} mt={'10px'}>          
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
            <ReactSVG     
            onClick={onMapClicked}        
             src={Logo}/>
          </Box>        
        </Grid>
        <Grid
          templateColumns={{ sm: "1fr", lg: "0.8fr 2.2fr" }}
          gap="24px"
          mb={{ lg: "26px" }}
        >
          <Card p="28px 16px 0px" mb={{ sm: "26px", lg: "0px" }}>
          <Image src={mintImg} alt='Image' mb={'24px'} />
            <CardHeader mb="20px" ps="22px">
              <Flex direction="column" alignSelf="flex-start">
                <Center><Text fontSize="18px" color={textColor} fontWeight="bold" mb="6px">
                Select Your Pixels, Buy Mint and own a part of the Globe.

                </Text></Center>
                <Center>
               
                    </Center>
                    <Text fontSize="md" color={textColor} fontWeight="normal" mb="16px" mt="16px">
                    Let's make history together. Did you
ever dream of buying a piece of
realestate in any corner the world?
Now you have the chance to do that.
                </Text>
                
                <Center>
                <Button
                      type='submit'
                      bg='teal.300'                    
                      p='8px 32px'
                      mb={5}
                      mt={5}
                      _hover='teal.300'
                      color='white'
                      fontSize='md'  
                      borderRadius = {0}  
                      onClick={(e) => mintNFT(e.target)}
                      >
                      Buy With ETH
                    </Button>
                </Center>
  
              </Flex>
            </CardHeader>
            
          </Card>
        </Grid>
      </Flex>
    )
}
  

export default NFTMap;