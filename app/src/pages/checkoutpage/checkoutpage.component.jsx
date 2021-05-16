import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckout from 'react-stripe-checkout';

import CheckoutCart from '../../components/checkout-cart/checkout-cart.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

const CheckoutPage = ({ cartItems, cartTotal }) => {

    const onToken = (token) => {
        console.log(token);
    }

    return (
        <div className="checkout-page"
        style={{
            marginTop: '140px'
        }}
        >
            <CheckoutCart cartItems={cartItems} />
            {
                cartTotal > 0
                ? (
                    <div className="cb tc">
                        <StripeCheckout
                            token={onToken}
                            stripeKey={process.env.REACT_APP_STRIPE_KEY}
                            name="clothverse LTD."
                            description="Some Description Here"
                            ComponentClass="div"
                            panelLabel="Give Money"
                            amount={cartTotal * 100}
                            currency="USD"
                            shippingAddress
                            billingAddress={true}
                            zipCode={false}
                        />
                        <div className="pa3">
                            <p className="f3 red">
                                * Please use the following test card for payments*
                            </p>
                            <p className="f3 black">
                                4242 4242 4242 4242
                            </p>
                            <p className="f3 black">
                            Exp: 01/25 - CVV: 123
                            </p>
                        </div>
                        
                    </div>
                )
                : null
            }
        </div>
    )
    
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);