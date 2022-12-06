import {
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  Text,
  Stack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import useProductStore from "../../store/cartStore";
import OrderCart from "./OrderCart";

const PopoverCart = ({ children, orders }) => {
  const removeOrder = useProductStore((state) => state.removeProduct);
  const incrementProduct = useProductStore(
    (state) => state.incrementProductOrder
  );
  const decrementProduct = useProductStore(
    (state) => state.decrementProductOrder
  );
  const totalProduct = useProductStore((state) => state.totalProductOrder);
  const total = useProductStore((state) => state.totalOrder);

  useEffect(() => {
    totalProduct();
  }, [orders]);

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
                const { id, title, price, image, orderProduct } = order;
                return (
                  <OrderCart
                    key={id}
                    title={title}
                    price={price}
                    image={image}
                    orderProduct={orderProduct}
                    incrementProduct={() => incrementProduct(id, -1)}
                    decrementProduct={() => decrementProduct(id, 1)}
                    removeOrder={() => removeOrder(id)}
                  />
                );
              })
            )}
          </Stack>
        </PopoverBody>
        <PopoverFooter>Total : Rp {total}</PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverCart;
