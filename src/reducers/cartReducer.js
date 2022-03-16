const initialState = {
  products: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, action.payload] };
    case "DELETE_PRODUCT":
      return {
        products: state.products.filter((product) => {
          return product.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
