import create from "zustand";
import Products from "../data/data";

const useProductStore = create((set, get) => ({
  products: Products,
  carts: [],
  orderProduct: 1,
  total: 0,
  error: "",
  addProduct: (id) => {
    const state = get();
    const mapProduct = state.products.filter((product) => product.id === id);
    const checkProduct = state.carts.filter(
      (cart) => cart.id === mapProduct[0].id
    ).length;

    if (checkProduct) {
      set({ error: "The Product is already in the cart" });
      return;
    }

    const orderProduct = Object.assign(...mapProduct, {
      orderProduct: state.orderProduct,
    });
    const cartProducts = [...state.carts, orderProduct];
    // console.log(cartProducts);
    set({ carts: cartProducts, error: "" });
  },
  removeProduct: (id) => {
    const state = get();
    const removeCart = state.carts.filter((product) => product.id !== id);
    // console.log(state.carts);
    set({ carts: removeCart });
  },
  incrementProductOrder: (id, value) => {
    const state = get();
    const initialPrice = state.products.filter((product) => product.id === id);
    const mapOrder = state.carts.map((cart) => {
      if (cart.id === id && cart.orderProduct > 1) {
        console.log(cart.orderProduct - value);
        return {
          ...cart,
          orderProduct: cart.orderProduct + value,
          price: Number(cart.price - initialPrice[0].price),
        };
      } else {
        return cart;
      }
    });
    console.log(mapOrder);
    set({ carts: mapOrder });
  },
  decrementProductOrder: (id, value) => {
    const state = get();
    const initialPrice = state.products.filter((product) => product.id === id);
    const mapOrder = state.carts.map((cart) => {
      if (cart.id === id && cart.orderProduct <= cart.total) {
        return {
          ...cart,
          orderProduct: cart.orderProduct + value,
          price: Number(cart.price + initialPrice[0].price),
        };
      } else {
        return cart;
      }
    });
    // console.log(mapOrder);
    set({ carts: mapOrder });
  },
  totalProductOrder: () => {
    const state = get();
    if (state.carts.length > 0) {
      const totalReduce = state.carts.reduce(
        (acc, current) => acc + current.price,
        0
      );
      set({
        totalOrder:
          typeof totalReduce === "object" ? totalReduce.price : totalReduce,
      });
    } else {
      set({ totalOrder: 0 });
    }
  },
}));

export default useProductStore;
