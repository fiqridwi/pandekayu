export const addItem = (payload) => {
  return {
    type: "ADD_ITEM",
    payload,
  };
};

export const deleteItem = (payload) => {
  return {
    type: "DELETE_ITEM",
    payload,
  };
};

export const addProduct = (payload) => {
  return {
    type: "ADD_PRODUCT",
    payload,
  };
};

export const deleteProduct = (id) => {
  return {
    type: "DELETE_PRODUCT",
    payload: id,
  };
};

export const setProduct = (payload) => {
  return {
    type: "SET_PRODUCT",
    payload,
  };
};

export const fetchProductData = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://my-json-server.typicode.com/fiqridwi/pandekayu-database/products"
    );
    const data = await response.json();
    dispatch(setProduct(data));
  };
};
