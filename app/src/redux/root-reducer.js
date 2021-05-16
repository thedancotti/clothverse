import { combineReducers } from 'redux';

import shopReducer from './shop/shop.reducer';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
    shop: shopReducer,
    cart: cartReducer,
    user: userReducer
});

export default rootReducer;