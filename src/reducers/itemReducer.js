const itemReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return state + action.payload;
    case "DELETE_ITEM":
      return state - action.payload;
    default:
      return state;
  }
};

export default itemReducer;
