import React from 'react';
import { Link } from 'react-router-dom';

import SearchItem from '../search-item/search-item.component';

import './search-dropdown.styles.css';

const SearchDropdown = ({ items }) => {
    return (
        <div className="shadow-2 ma1 br2">
            <div className="search-dropdown-results">
                {
                    items.length > 0 ? (
                        <div className="description">
                            Products
                        </div>
                    ) : null
                }
                {
                    items.map((item, idx) =>
                        <Link 
                            key={idx}
                            className="link black"
                            to={`/shop/${item.category}/${item.name}`}>
                            <SearchItem item={item} />
                        </Link>
                        
                    )
                }
            </div>
        </div>
    )
};

export default SearchDropdown;