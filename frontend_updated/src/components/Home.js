// Chakra imports
import { ChakraProvider, Portal, useDisclosure } from "@chakra-ui/react";

// Layout components
// import AdminNavbar from "../components/Navbars/AdminNavbar.js";
// import Sidebar from "../components/Sidebar/Sidebar.js";
// import { SidebarContext } from "../contexts/SidebarContext";
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import theme from "../theme/theme.js";

const Home = () =>{
    return(
        <div>
            Welcome Home
        </div>
    )
}

export default Home;