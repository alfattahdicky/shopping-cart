import { Flex, Heading, Button, Box } from "@chakra-ui/react";
import React from "react";
import ButtonCart from "./ButtonCart";

const color = "#E8F3D6";

const Header = () => {
  return (
    <Box bg={color} py="1rem" >
      <Flex minWidth="max-content" alignItems="center" justifyContent="space-around">
        <Heading as="h1" fontWeight="bold" fontSize="2rem">
          Shopping Cart
        </Heading>
        <ButtonCart />
      </Flex>
    </Box>
  );
};

export default Header;
