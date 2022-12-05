import create from "zustand";
import Products from "../data/data";

const useProductStore = create((set, get) => ({
  products: Products,
  loading: false,
  carts: [],
  addProducts: (id) => {
    const state = get();
    const mapProduct = state.products.filter((product) => product.id === id);
    const cartProducts = [...state.carts, ...mapProduct];
    set({ carts: cartProducts });
  },
  removeProduct: (id) => {
    const state = get();
    const removeCart = state.carts.filter((product) => product.id !== id);
    console.log(state.carts);
    set({ carts: removeCart });
  },
}));

export default useProductStore;
