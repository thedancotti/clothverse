import React from 'react';
import { connect } from 'react-redux';

import { addItemToCart } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem, ...otherProps }) => { 
    const { name, price, imageUrl } = item;

    return (
        <div
            className="flex flex-column justify-center items-center"
            style={{width: "45%", }}
        >
            <div>
                <img 
                    className="w-100"
                    style={{height:"250px"}}
                    src={imageUrl}
                    alt="" 
                />
            </div>
            <div className="flex flex-column items-center">
                <p className="mt1 b tc mb0">{name}</p>
                {
                    !otherProps.hidePrice ? (
                        <React.Fragment>
                            <p className="tc mt1 mb3">
                                { `$${price}`}
                            </p>
                            <button 
                                className="f6 link dim ph3 pv2 mb2 dib white bg-black mb4"
                                onClick={() => addItem(item)}
                            >
                                Add to Cart
                            </button>
                        </React.Fragment>
                        
                    ) : <div className="mb4"></div>
                }
            </div>
            
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);