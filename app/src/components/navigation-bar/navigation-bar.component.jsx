import React, { useState } from 'react';
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
import DropdownMenu from '../dropdown-menu/dropdown-menu.component';

const NavigationBar = ({ toggleCartHidden, isCartHidden }) => {
    const [isDropdownMenuHidden, setDropdownMenuStatus] = useState(true);
    
    const toggleDropdownMenu = () => 
        setDropdownMenuStatus(!isDropdownMenuHidden);

    return (
        <div className="relative">
            <div className="flex justify-between items-center pa3">
                { !isDropdownMenuHidden 
                  ? <MenuIcon onClick={toggleDropdownMenu} style={{visibility: "hidden"}}/>
                  : <MenuIcon onClick={toggleDropdownMenu} style={{visibility: "visible"}}/>
                }
                <div className="flex flex-column items-center">
                    <Link to='/'>
                        <Logo style={{height: "20px"}}/>
                    </Link>
                    <Link to='/' className="link">
                        <h1 className="f5 ma0 black">clothverse</h1>
                    </Link>
                </div>
                <div className="flex">
                    <SearchIcon className="mr2"/>
                    <CartIcon onClick={toggleCartHidden}/>
                </div>
            </div>

            { !isCartHidden ? <CartDropdown /> : null }
            { !isDropdownMenuHidden ? <DropdownMenu toggleDropdownMenu={toggleDropdownMenu} /> : null }
            
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    isCartHidden: selectCartHidden
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);