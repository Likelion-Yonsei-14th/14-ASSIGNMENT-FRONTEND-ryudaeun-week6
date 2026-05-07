import { create } from "zustand";
import type { Product } from "../types/product";

interface CartStore {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (index: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (index) =>
    set((state) => ({ cart: state.cart.filter((_, i) => i !== index) })),
}));
