let reducer = (state, { type, payload }) => {
  let oldItem = state.cart.find((e) => e.id == payload.id);
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartLength: state.cartLength + 1,
        cart: [
          ...state.cart.filter((e) => e.id != payload.id),
          oldItem ? { ...oldItem, quantity: oldItem.quantity + 1 } : payload,
        ],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartLength: state.cartLength - oldItem ? oldItem.quantity : 0,
        cart: [
          ...state.cart.filter((e) => e.id != payload.id),
          ...(oldItem?.quantity > 1
            ? [{ ...oldItem, quantity: oldItem.quantity - 1 }]
            : []),
        ],
      };
    case "Delete_FROM_CART":
      return {
        ...state,
        cartLength: state.cartLength - payload.quantity,
        cart: [...state.cart.filter((e) => e.id != payload.id)],
      };
    case "SAVE_FETHCED_DATA":
      return payload;

    default:
      break;
  }
};
export default reducer;