import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent  as CloseMenuIcon } from '../../assets/icon-close.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';

import { selectCollectionsForPreview, selectItems } from '../../redux/shop/shop.selectors';
import SearchDropdown from '../search-dropdown/search-dropdown.component';

import './search-bar.styles.css';

const SearchBar = ({ items, setSearchBarStatus }) => {
    const [searchInput, setSearchInput] = useState("");
    const [searchMatches, setSearchMatch] = useState([]);

    const handleSearchBar = (event) => 
        setSearchInput(event.target.value)

    useEffect(() => {
        const itemNameMatches = items.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()));
        setSearchMatch(itemNameMatches);
    }, [searchInput]);    

    return (
        <React.Fragment>
            <div className="search-bar flex flex-column justify-center items-center">
                <div className="flex justify-center items-center w-100">
                    <SearchIcon className="search-icon ma1"/>
                    <input 
                        type="text" 
                        autoFocus 
                        autoComplete="off" 
                        autoCorrect="off"
                        autoCapitalize="off"
                        aria-label="Search"
                        className="w-80 pa3"
                        onChange={handleSearchBar}
                    />
                     <CloseMenuIcon 
                        className="close-search-icon ma1"
                        onClick={() => setSearchBarStatus(true)}
                    />
                </div>
                <SearchDropdown items={searchMatches} />
            </div>
            
        </React.Fragment>
        
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
    items: selectItems
})

export default connect(mapStateToProps)(SearchBar);