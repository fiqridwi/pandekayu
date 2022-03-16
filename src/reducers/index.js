import itemReducer from "./itemReducer";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  itemReducer: itemReducer,
  cartReducer: cartReducer,
  productReducer: productReducer,
});
export default allReducers;
