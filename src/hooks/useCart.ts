import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeItem } from "../slices/cartSlice";

export function useCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);

  const add = (item: any) => dispatch(addToCart(item));
  const remove = (id: number) => dispatch(removeItem(id));

  return { cart, add, remove };
}
