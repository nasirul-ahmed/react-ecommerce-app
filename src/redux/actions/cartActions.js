export const addToCart = (payload) => {
  return {
    type: "add_to_cart",
    payload: payload,
  };
};
export const removeFromCart = (payload) => {
  return {
    type: "remove_from_cart",
    payload: payload,
  };
};
