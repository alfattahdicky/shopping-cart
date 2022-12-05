import { IconButton, Text, Box, Button } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";

const ButtonCart = forwardRef(({ total }, refButton) => {
  return (
    <Box position="relative" ref={refButton}>
      <IconButton
        bgColor="transparent"
        fontSize="1.4rem"
        icon={<AiOutlineShoppingCart />}
        _hover={{
          backgroundColor: "#09090909",
        }}
      />
      <Text
        bgColor="red.500"
        width="max-content"
        paddingInline="0.4rem"
        paddingBlock="0.15rem 0.1rem"
        color="white"
        borderRadius="50%"
        height="60%"
        textAlign="center"
        position="absolute"
        top="-0.4rem"
        right="-0.55rem"
        fontSize="0.95rem"
        opacity={total > 0 ? "1" : "0"}
        transition="opacity ease-in 0.3s"
      >
        {total}
      </Text>
    </Box>
  );
});

export default ButtonCart;
