const cartItems = [];

const cartReducers = (state = cartItems, action) => {
  switch (action.type) {
    case "add_to_cart":
      console.log(action.payload)
      return [...state, action.payload];

    case "remove_from_cart":
      return (state = state.filter((item) => {
        return item.id !== action.payload.id;
      }));

    default:
      return state;
  }
};

export default cartReducers;
