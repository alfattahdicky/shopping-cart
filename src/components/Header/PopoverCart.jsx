import {
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Text,
  Stack,
} from "@chakra-ui/react";
import useProductStore from "../../store/cartStore";
import OrderCart from "./OrderCart";

const PopoverCart = ({ children, orders }) => {
  const removeOrder = useProductStore((state) => state.removeProduct);
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent w="400px">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Order Shopping</PopoverHeader>
        <PopoverBody>
          <Stack>
            {orders.length === 0 ? (
              <Text>No Orders</Text>
            ) : (
              orders.map((order) => {
                const { id, title, price, image } = order;
                return (
                  <OrderCart
                    key={id}
                    title={title}
                    price={price}
                    image={image}
                    removeOrder={() => removeOrder(id)}
                  />
                );
              })
            )}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverCart;
