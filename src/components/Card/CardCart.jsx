import {
  Image,
  Card,
  Flex,
  Button,
  CardBody,
  Stack,
  Heading,
} from "@chakra-ui/react";
const CardCart = ({ image, title, price, handleAddCart }) => {
  return (
    <Card maxW="xs" borderRadius="10px" boxShadow="lg">
      <Image borderRadius="10px 10px 0 0" objectFit="cover" width="100%" src={image} />
      <CardBody paddingInline="2rem">
        <Stack w="100%">
          <Heading as="h1" fontSize="1.5rem" fontWeight="medium">
            {title}
          </Heading>
          <Heading as="h2" fontSize="1.3rem" fontWeight="bold">
            Rp {price}
          </Heading>
          <Flex alignItems="center" justifyContent="end">
            <Button
              width="max-content"
              bgColor="#6ECCAF"
              onClick={handleAddCart}
            >
              Add Cart
            </Button>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CardCart;
