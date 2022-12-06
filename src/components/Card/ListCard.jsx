import { SimpleGrid, useToast } from "@chakra-ui/react";
import useProductStore from "../../store/cartStore";
import CardCart from "./CardCart";

const ListCard = () => {
  const products = useProductStore((state) => state.products);
  const addCart = useProductStore((state) => state.addProduct);
  const error = useProductStore((state) => state.error);
  const toast = useToast();

  const handleAddCart = (id) => {
    addCart(id);
    if(error.length != 0) {
      toast({
        title: error,
        status: "error",
        position: "bottom-left",
        duration: 1000
      })
    }
  }

  return (
    <SimpleGrid columns="3" mx="auto" my="1rem" spacing={8}>
      {products.map((product) => {
        const { id, title, image, price } = product;
        return (
          <CardCart
            key={id}
            title={title}
            image={image}
            price={price}
            handleAddCart={() => handleAddCart(id)}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default ListCard;
