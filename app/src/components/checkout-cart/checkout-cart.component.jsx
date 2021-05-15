import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import { increaseItemQty, decreaseItemQty, removeItemFromCart} from '../../redux/cart/cart.actions';

const CheckoutCart = ({ 
    cartItems, 
    increaseItemQty, 
    decreaseItemQty, 
    removeItemFromCart,
    cartTotal,
  }) => {
    return (
        <div className="checkout-cart pa1">
            <div className="flex b f6 justify-around items-center"
                style={{borderBottom: "1px solid #a9a9a9"}}
            >
                <span className="w-50">Product</span>
                <span className="w-20">Qty</span>
                <span className="w-20">Subtotal</span>
                <span className="w-10">DEL</span>
            </div>
            {
                cartItems.map(
                    item => 
                        <div className="flex f6 mb2 pa1"
                        style={{borderBottom: "1px solid #a9a9a9"}}
                        >
                            <div className="w-50 flex items-center">
                                <img 
                                    className="w-50"
                                    src={item.imageUrl} 
                                    alt={item.name} 
                                />
                                <span>{item.name}</span>
                            </div>
                            <div className="w-20 flex flex-column justify-center items-center">
                                <button 
                                    className="f5"
                                    onClick={() => increaseItemQty(item.id)}
                                >
                                    +
                                </button>
                                <span className="f5">{item.qty}</span>
                                <button 
                                    className="f6"
                                    onClick={() => decreaseItemQty(item.id)}
                                >
                                    -
                                </button>
                            </div>
                            <div className="w-20 flex justify-center items-center">
                                <span>${item.subtotal}</span>
                            </div>
                            <span className="w-10 flex justify-center items-center">
                                <button 
                                    onClick={() => removeItemFromCart(item.id)}
                                >
                                    X
                                </button>
                            </span>
                            
                        </div>
                )
            }
            <h2 className="fr">TOTAL: <span>${cartTotal}</span></h2>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});

const mapDispatchToProps = dispatch => ({
    increaseItemQty: (itemID) => 
        dispatch(increaseItemQty(itemID)),

    decreaseItemQty: (itemID) => 
        dispatch(decreaseItemQty(itemID)),

    removeItemFromCart: (itemID) => 
        dispatch(removeItemFromCart(itemID))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutCart);