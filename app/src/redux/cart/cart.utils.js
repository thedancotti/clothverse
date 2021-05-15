export const addItemToCart = (cart, item) => {
    const isItemInCart = cart.find(
        cartItem => cartItem.id === item.id
    );
    
    return isItemInCart !== undefined
        ? cart.map(cartItem => {
            return cartItem.id === isItemInCart.id
            ? {...cartItem, qty: cartItem.qty + 1}
            : cartItem
            })
        : [...cart, { ...item, qty: 1 }]
};