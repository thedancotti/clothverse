import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { signOut } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setCurrentUser } from '../../redux/user/user.actions';

import './dropdown-menu.styles.css';

import { ReactComponent  as CloseMenuIcon } from '../../assets/icon-close.svg';

const DropdownMenu = ({ toggleDropdownMenu, currentUser, setCurrentUser }) => {

    const handleSignOutClick = () => {
        toggleDropdownMenu();
        signOut();
        setCurrentUser(null);
    }

    return (
        <div className="dropdown-menu">
            <CloseMenuIcon 
                className="close-menu-icon"
                onClick={toggleDropdownMenu}
            />
            
                <div className="dropdown-menu-item">
                    {
                        currentUser ? (
                            <Link to='/my-profile' onClick={toggleDropdownMenu}>
                                <p className="b">{`Hello, ${currentUser.displayName}`}</p>
                            
                                <span className="icon">
                                    ❯
                                </span>
                            </Link>
                        ) : ( 
                            <Link to='/signin' onClick={toggleDropdownMenu}>
                                <p className="b">Hello, Sign In</p>
                            
                                <span className="icon">
                                    ❯
                                </span>
                            </Link>
                        )
                    }
                        
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
                {
                    currentUser ? (
                        <div className="dropdown-menu-item">
                            <Link to='/' onClick={handleSignOutClick}>
                                <p>Sign Out</p>
                            
                                <span className="icon">
                                    ❯
                                </span>
                            </Link>
                        </div>
                    ) : null
                }
            
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(DropdownMenu);