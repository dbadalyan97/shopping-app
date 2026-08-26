import { create } from "zustand";
import { CartStoreActionType, CartStoreStateType } from "./types";
import { CartItemType } from "@/types/cart";

const useCartStore = create<CartStoreStateType & CartStoreActionType>(
  (set) => ({
    cart: [],
    addToCart: (product: CartItemType) =>
      set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (productId: CartItemType["id"]) =>
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== productId),
      })),
    clearCart: () => set({ cart: [] }),
  }),
);

export default useCartStore;
