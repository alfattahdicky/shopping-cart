import {
  Card,
  CardBody,
  Flex,
  Text,
  Image,
  Stack,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineMinus, AiFillRest } from "react-icons/ai";

const OrderCart = ({
  title,
  price,
  image,
  incrementProduct,
  decrementProduct,
  removeOrder,
  orderProduct
}) => {
  return (
    <Card w="100%">
      <Flex>
        <Image objectFit="cover" maxW="100px" src={image} />
        <CardBody>
          <Flex>
            <Box w="100%">
              <Text fontWeight="bold">{title}</Text>
              <Text>Rp {price}</Text>
            </Box>
            <Flex w="100%" alignItems="center" justifyContent="end">
              <IconButton
                icon={<AiOutlineMinus />}
                _hover={{ backgroundColor: "transparent" }}
                bgColor="transparent"
                fontSize="1.2rem"
                onClick={incrementProduct}
              />
              <Text>{orderProduct}</Text>
              <IconButton
                icon={<AiOutlinePlus />}
                _hover={{ backgroundColor: "transparent" }}
                bgColor="transparent"
                fontSize="1.2rem"
                onClick={decrementProduct}
              />
              <IconButton
                icon={<AiFillRest />}
                fontSize="1.2rem"
                _hover={{ backgroundColor: "transparent" }}
                bgColor="transparent"
                onClick={removeOrder}
              />
            </Flex>
          </Flex>
        </CardBody>
      </Flex>
    </Card>
  );
};

export default OrderCart;
