import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
    productDetailsReducer,
    productListReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
    userRegisterReducer,
    userSigninReducer,
} from './reducers/userReducers';
import {
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
} from './reducers/orderReducers';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    },
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        shippingAddress: localStorage.getItem('shippingAddress')
            ? JSON.parse(localStorage.getItem('shippingAddress'))
            : {},
        paymentMethod: 'PayPal',
    },
};

const reducer = combineReducers({
    cart: cartReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    productDetails: productDetailsReducer,
    productList: productListReducer,
    userRegister: userRegisterReducer,
    userSignin: userSigninReducer,
    orderPay: orderPayReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
