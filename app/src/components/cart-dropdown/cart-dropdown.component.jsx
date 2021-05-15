import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.css';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown flex flex-column">
        <div className="pre" style={{height: "300px"}}>
            {
                cartItems.length > 0 
                ? cartItems.map((item, index) =>
                    <CartItem key={index} item={item} />
                ) : (
                    <div className="flex flex-column justify-center items-center pa3">
                        <p>Your cart is empty.</p>
                        <p className="tc">To add an item to cart, please click on the <span className="b">"Add to Cart"</span> button below your desired product.</p>
                    </div>
                )
                
            }
        </div>
        <CustomButton
            customStyle=""
        >
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);