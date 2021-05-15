export const addItemToCart = (cart, item) => {
    const isItemInCart = cart.find(
        cartItem => cartItem.id === item.id
    );
    
    return isItemInCart !== undefined
        ? cart.map(cartItem => {
            return cartItem.id === isItemInCart.id
            ? {
                ...cartItem, 
                qty: cartItem.qty + 1, 
                subtotal: cartItem.subtotal + cartItem.price
            }
            : cartItem
            })
        : [...cart, { ...item, qty: 1, subtotal: item.price }]
};

export const removeItemFromCart = (cart, itemID) => {
    const indexOfItemInCart = cart.findIndex(
        cartItem => cartItem.id === itemID
    );
    const cartCopy = [].concat(cart);

    cartCopy.splice(indexOfItemInCart, 1);

    return cartCopy;
}

export const decreaseItemQty = (cart, itemID) => {
    const indexOfItemInCart = cart.findIndex(
        cartItem => cartItem.id === itemID
    );

    const cartCopy = [].concat(cart);
    const item = cartCopy[indexOfItemInCart];

    if (item.qty === 1) {
        cartCopy.splice(indexOfItemInCart, 1);

        return cartCopy;
    }

    item.qty--;
    item.subtotal = item.price * item.qty;

    return cartCopy;
}

export const increaseItemQty = (cart, itemID) => {
    const indexOfItemInCart = cart.findIndex(
        cartItem => cartItem.id === itemID
    );

    const cartCopy = [].concat(cart);
    const item = cartCopy[indexOfItemInCart];

    item.qty++;
    item.subtotal = item.price * item.qty;

    return cartCopy;
}