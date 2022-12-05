import { IconButton, Text, Box } from "@chakra-ui/react";

import { AiOutlineShoppingCart } from "react-icons/ai";

const ButtonCart = ({ total = 1 }) => {
  return (
    <>
      <Box position="relative">
        <IconButton
          bgColor="transparent"
          fontSize="1.4rem"
          icon={<AiOutlineShoppingCart />}
          _hover={{
            backgroundColor: "transparent",
            backgroundColor: "#09090909",
          }}
        />
        <Text
          bgColor="red.500"
          width="1.5rem"
          color="white"
          borderRadius="50%"
          height="1.5rem"
          textAlign="center"
          position="absolute"
          top="0"
          right="-0.5rem"
          opacity={total > 0 ? "1" : "0"}
          transition="opacity ease-in 0.3s"
        >
          {total}
        </Text>
      </Box>
    </>
  );
};

export default ButtonCart;
