import create from "zustand/react";
import Products from "../data/data";

const useProductStore = create((set, get) => ({
  products: Products,
  loading: false,
  cart: [],
  total: 0,
}));

export default useProductStore;