import { SimpleGrid } from "@chakra-ui/react";
import useProductStore from "../../store/cartStore";
import CardCart from "./CardCart";

const ListCard = () => {
  const products = useProductStore((state) => state.products);
  const carts = useProductStore((state) => state.carts);
  const addCart = useProductStore((state) => state.addProducts);

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
            handleAddCart={() => addCart(id)}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default ListCard;
