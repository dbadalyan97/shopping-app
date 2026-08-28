import { create } from "zustand";
import { CartStoreActionType, CartStoreStateType } from "./types";
import { CartItemType } from "@/types/cart";
import { createJSONStorage } from "zustand/middleware";
import { persist } from "zustand/middleware";

const useCartStore = create<CartStoreStateType & CartStoreActionType>()(
  persist(
    (set) => ({
      cart: [],
      hasHydrated: false,
      addToCart: (product: CartItemType) =>
        set((state) => {
          const existingIndex = state.cart.findIndex((item) => {
            return (
              item.id === product.id &&
              item.selectedSize === product.selectedSize &&
              item.selectedColor === product.selectedColor
            );
          });
          if (existingIndex !== -1) {
            const updatedCart = [...state.cart];
            if (updatedCart[existingIndex]) {
              updatedCart[existingIndex].quantity += product.quantity || 1;
            }
            return { cart: updatedCart };
          }

          return {
            cart: [
              ...state.cart,
              {
                ...product,
                quantity: 1,
                selectedSize: product.selectedSize,
                selectedColor: product.selectedColor,
              },
            ],
          };
        }),
      removeFromCart: (product: CartItemType) =>
        set((state) => ({
          cart: state.cart.filter(
            (item) =>
              item.id !== product.id &&
              item.selectedSize === product.selectedSize &&
              item.selectedColor === product.selectedColor,
          ),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true;
        }
      },
    },
  ),
);

export default useCartStore;
