import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { ReactComponent as CartIcon } from '../../assets/cart-icon.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu-icon.svg';

const NavigationBar = () => (
    <div className="relative">
        <div className="flex justify-between items-center pa4">
            <MenuIcon />
            
            <div className="flex">
                <SearchIcon className="mr2"/>
                <CartIcon />
            </div>
        </div>
        <Link to='/'>
            <div className="flex flex-column items-center absolute top-1 w-100">
                <Logo style={{height: "30px"}}/>
                <h1 className="f3 ma0 black">clothverse</h1>
            </div>
        </Link>
        
    </div>
);

export default NavigationBar;