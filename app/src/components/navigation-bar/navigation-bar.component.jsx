import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { ReactComponent as CartIcon } from '../../assets/cart-icon.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu-icon.svg';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const NavigationBar = ({ toggleCartHidden, hidden }) => (
    <div className="relative">
        <div className="flex justify-between items-center pa3">
            <MenuIcon />
            <div className="flex flex-column items-center">
                <Link to='/'>
                    <Logo style={{height: "30px"}}/>
                </Link>
                <Link to='/'>
                    <h1 className="f3 ma0 black">clothverse</h1>
                </Link>
            </div>
            <div className="flex">
                <SearchIcon className="mr2"/>
                <CartIcon onClick={toggleCartHidden}/>
            </div>
        </div>
        {
            !hidden ? <CartDropdown /> : null
        }
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);