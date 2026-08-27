import { create } from "zustand";
import { CartStoreActionType, CartStoreStateType } from "./types";
import { CartItemType } from "@/types/cart";
import { createJSONStorage } from "zustand/middleware";
import { persist } from "zustand/middleware";

const useCartStore = create<CartStoreStateType & CartStoreActionType>()(
  persist(
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
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCartStore;
