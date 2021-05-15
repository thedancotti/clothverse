import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (acc, { subtotal }) => acc += subtotal, 0)
);