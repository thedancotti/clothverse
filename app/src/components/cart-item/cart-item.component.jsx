import React from 'react';

const CartItem = ({ item: { imageUrl, name, qty, price } }) => (
    <div className="flex justify-center ma3">
        <img 
            className="w-30"
            src={imageUrl} 
            alt={name} 
        />
        <div className="flex flex-column justify-center w-70 pa3">
            <p className="ma0">{name}</p>
            <p className="ma0">{`${qty} x $${price}`}</p>
        </div>
    </div>
);

export default CartItem;