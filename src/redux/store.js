import {configureStore} from '@reduxjs/toolkit'
import { adminReducer } from './reducers/adminReducer';
import { cartReducer } from './reducers/cartRedecer';
import { orderReducer, ordersReducer } from './reducers/orderReducer';
import { authReducer } from './reducers/userReducer';
// import {authReducer} from './reducers/userReducer.js'



const store = configureStore({

    reducer: {
        auth: authReducer,
        cart: cartReducer,
        order:orderReducer,
        orders: ordersReducer,
        admin:adminReducer
    },
});

export default store;

export const server = 'https://mbaburgerwaala.herokuapp.com/api/v1'