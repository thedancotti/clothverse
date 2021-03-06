import { CartActionTypes } from './cart.types';

import { addItemToCart, decreaseItemQty, increaseItemQty, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.INCREASE_ITEM_QTY:
            return {
                ...state,
                cartItems: increaseItemQty(state.cartItems, action.payload)
            }
        case CartActionTypes.DECREASE_ITEM_QTY:
            return {
                ...state,
                cartItems: decreaseItemQty(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
};

export default cartReducer;