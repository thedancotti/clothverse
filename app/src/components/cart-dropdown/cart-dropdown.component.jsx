import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.css';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="">
            {
                cartItems.map((item, index) =>
                    <CartItem key={index} item={item} />
                )
            }
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);