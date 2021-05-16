import React from 'react';
import { Link } from 'react-router-dom';
import './dropdown-menu.styles.css';

import { ReactComponent  as CloseMenuIcon } from '../../assets/icon-close.svg';

const DropdownMenu = ({ toggleDropdownMenu }) => {
    return (
        <div className="dropdown-menu">
            <CloseMenuIcon 
                className="close-menu-icon"
                onClick={toggleDropdownMenu}
            />
            
                <div className="dropdown-menu-item">
                        <Link to='/signin' onClick={toggleDropdownMenu}>
                            <p className="b">Hello, Sign In</p>
                        
                            <span className="icon">
                                ❯
                            </span>
                        </Link>
                </div>
                <div className="dropdown-menu-item">
                    <Link to='/shop/womens' onClick={toggleDropdownMenu}>
                        <p>Women</p>
                    
                        <span className="icon">
                            ❯
                        </span>
                    </Link>
                </div>
                <div className="dropdown-menu-item">
                    <Link to='/shop/mens' onClick={toggleDropdownMenu}>
                        <p>Mens</p>
                    
                        <span className="icon">
                            ❯
                        </span>
                    </Link>
                </div>
                <div className="dropdown-menu-item">
                    <Link to='/shop/hats' onClick={toggleDropdownMenu}>
                        <p>Hats</p>
                    
                        <span className="icon">
                            ❯
                        </span>
                    </Link>
                </div>
                <div className="dropdown-menu-item">
                    <Link to='/shop/jackets' onClick={toggleDropdownMenu}>
                        <p>Jackets</p>
                   
                        <span className="icon">
                            ❯
                        </span>
                    </Link>
                </div>
                <div className="dropdown-menu-item">
                    <Link to='/shop/sneakers' onClick={toggleDropdownMenu}>
                        <p>Sneakers</p>
    
                        <span className="icon">
                            ❯
                        </span>
                    </Link>
                </div>
            
        </div>
    )
};

export default DropdownMenu;