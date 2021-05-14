import { combineReducers } from 'redux';

import shopReducer from './shop/shop.reducer';
import cartReducer from './cart/cart.reducer';

const rootReducer = combineReducers({
    shop: shopReducer,
    cart: cartReducer
});

export default rootReducer;