import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { restaurantReducer} from "./reducers/restaurantReducer";
import { menuReducer } from "../src/reducers/menuReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
    authReducer,
    forgotPasswordReducer,
    userReducer,
} from "./reducers/userReducer";
import { newOrderReducer,
  myOrdersReducer,
  orderDetailsReducer 
} from "./reducers/orderReducer";
const reducer = combineReducers({
  restaurants: restaurantReducer,
  menus: menuReducer,
  cart: cartReducer,
  auth: authReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  });
let initialState = {
  cart:{cartItems:localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  :[],
  deliveryInfo:localStorage.getItem("deliveryInfo")
  ?JSON.parse(localStorage.getItem("deliveryInfo"))
  :[],
},
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlware = [thunk];
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(...middlware))
);
export default store;