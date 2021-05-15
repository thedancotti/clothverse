import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItemToCart = (item) => ({
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: item
});

export const increaseItemQty = (itemID) => ({
    type: CartActionTypes.INCREASE_ITEM_QTY,
    payload: itemID
});

export const decreaseItemQty = (itemID) => ({
    type: CartActionTypes.DECREASE_ITEM_QTY,
    payload: itemID
});

export const removeItemFromCart = (itemID) => ({
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: itemID
})