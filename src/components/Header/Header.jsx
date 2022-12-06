import { Flex, Heading, Box } from "@chakra-ui/react";
import useProductStore from "../../store/cartStore";
import ButtonCart from "./ButtonCart";
import PopoverCart from "./PopoverCart";

const color = "#6ECCAF";

const Header = () => {
  const orders = useProductStore(state => state.carts);
  return (
    <Box bg={color} py="1rem">
      <Flex
        minWidth="max-content"
        alignItems="center"
        justifyContent="space-between"
        paddingInline="10rem"
      >
        <Heading as="h1" fontWeight="bold" fontSize="2rem">
          Shopping Cart
        </Heading>
        <PopoverCart orders={orders}>
          <Box>
            <ButtonCart total={orders.length} />
          </Box>
        </PopoverCart>
      </Flex>
    </Box>
  );
};

export default Header;
