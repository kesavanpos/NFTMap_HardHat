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
  import React, { useRef,useEffect } from "react";
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

  import contract from '../../contracts/MapCore.json';
  import marketplaceContract from "../../contracts/MapMarketPlace.json";
  import Web3 from 'web3';

  let contractAddress = '0x8B315d689F3b524D80e43495FA57527162705CAc';
  let marketContractAddress = contractAddress;
  const abi = contract.abi;
  const marketplaceabi = marketplaceContract.abi;

  let firstAddress;
  
  function MarketPlace() {
    var instance:any;
    const web3 = new Web3(Web3.givenProvider);
    window.ethereum.enable().then(function(accounts){
      firstAddress = accounts[0];
      instance = new web3.eth.Contract(abi,contractAddress,{from:accounts[0],gas:100000});
      contractCatalog();
    });

  //Appending cats for catalog
  async function appendMap(id) {    
    let formatId = parseInt(id);
    var Map = await instance.methods.getMap(formatId).call();    
    checkOffer(formatId);
    MapByOwner(firstAddress);
    sellMap(formatId);
    buyMap(formatId,0.3);
  }

  async function sellMap(id) {  
    var price = 0.2;
    var amount = web3.utils.toWei(price, "ether")
    try {
      let resSell = await instance.methods.setOffer(amount,id).send();
      console.log(resSell);
    } catch (err) {
      console.log(err);
    }
  }
  
  async function buyMap(id, price) {
    var amount = web3.utils.toWei(price, "ether")
    try {
      let resBuy = await instance.methods.buyMap(id).send({ value: amount });
      console.log(resBuy);
    } catch (err) {
      console.log(err);
    }
  }

  // Get all the kitties from address
  async function MapByOwner(address) {

    let res;
    try {
      res = await instance.methods.tokensOfOwner(address).call();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  async function checkOffer(id) {

    let res;
    try {
  
      res = await instance.methods.getOffer(id).call();
      var price = res['price'];
      var seller = res['seller'];
      var onsale = false;

      //If price more than 0 means that cat is for sale
      if (price > 0) {
        onsale = true
      }
      //Also might check that belong to someone
      price = Web3.utils.fromWei(price, 'ether');
      var offer = { seller: seller, price: price, onsale: onsale }
      return offer
  
    } catch (err) {
      console.log(err);
      return
    }
  }

    async function contractCatalog() {
      try{
        var arrayId = await instance.methods.getAllTokenOnSale().call();        
        for (let i = 0; i < arrayId.length; i++) {
          if(arrayId[i] != "0"){
            appendMap(arrayId[i]);
          }    
        }
      }
      catch(e){
        console.log(e);
      }
      
    }
    
    useEffect (() => {
      // Update the document title using the browser API
      
    });

    const textColor = useColorModeValue("gray.700", "white");
    const iconTeal = useColorModeValue("teal.300", "teal.300");
    const iconBoxInside = useColorModeValue("white", "white");
    const bgButton = useColorModeValue(
      "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
      "gray.800"
    );
    const overlayRef = useRef();
  
    return (
          <div className="cardContainer">
      <div className="cards">
                <Image className="card-img-top" src="https://www.cambridgemaths.org/Images/The-trouble-with-graphs.jpg"
                    alt="Card image cap">                    
                </Image>
                <div className="card-body">
                    <div className="card-title"><span class="spncountry">United State</span><span
                            className="spanHighlighted">BSC</span></div>

                    <div className="buy-detail">
                        <span className="buy-now"><button className="btnBuy">Buy Now</button></span>
                        <span className="spnprice"><span class="icon">
                        </span>$4000 USD</span>
                    </div>
                </div>
        </div>
        </div>        
    );
  }

  export default MarketPlace;
  