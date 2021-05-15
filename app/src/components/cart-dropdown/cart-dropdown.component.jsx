import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.css';

const CartDropdown = ({ cartItems, toggleCartHidden }) => (
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
        <Link to="/checkout" onClick={toggleCartHidden}>
            <CustomButton
                customStyle=""
            >
                GO TO CHECKOUT
            </CustomButton>
        </Link>
        
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);