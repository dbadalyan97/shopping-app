import { CartItemsType, CartItemType } from "@/types/cart";

export interface CartStoreStateType {
  cart: CartItemsType;
}

export type CartStoreActionType = {
  addToCart: (product: CartItemType) => void;
  removeFromCart: (productId: CartItemType["id"]) => void;
  clearCart: () => void;
};
