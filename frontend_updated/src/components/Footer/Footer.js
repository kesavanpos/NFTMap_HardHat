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

import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent='space-between'
      px='30px'
      pb='20px'>
      <Text
        color='gray.400'
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}>
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as='span'>
          All rights reserved.
          {/* {document.documentElement.dir === "rtl"
            ? " مصنوع من ❤️ بواسطة"
            : "Made with ❤️ by "} */}
        </Text>
        <Link
          color='teal.400'
          href='https://www.creative-tim.com'
          target='_blank'>
          {document.documentElement.dir === "rtl"
            ? " توقيت الإبداعية"
            : " "}
        </Link>
        {/* & */}
        <Link color='teal.400' href='https://www.simmmple.com' target='_blank'>
          {document.documentElement.dir === "rtl" ? "سيممبل " : " "}
        </Link>
        {/* {document.documentElement.dir === "rtl"
          ? "للحصول على ويب أفضل"
          : " for a better web"} */}
      </Text>
      <List display='flex'>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link color='gray.400' href=''>
            {document.documentElement.dir === "rtl"
              ? "توقيت الإبداعية"
              : ""}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link color='gray.400' href='https://www.simmmple.com'>
            {document.documentElement.dir === "rtl" ? "سيممبل" : ""}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link color='gray.400' href='https://creative-tim.com/blog'>
            {document.documentElement.dir === "rtl" ? "مدونة" : ""}
          </Link>
        </ListItem>
        <ListItem>
          <Link color='gray.400' href='https://www.creative-tim.com/license'>
            {document.documentElement.dir === "rtl" ? "رخصة" : ""}
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
