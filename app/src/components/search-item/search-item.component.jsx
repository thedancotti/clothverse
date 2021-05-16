import React from 'react';

const SearchItem = ({ item: { imageUrl, name, price} }) => {
    return (
        <div className="relative flex items-center bb b--light-gray">
            <div className="w-30 ma2">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="ma2">
                <p className="fw6">{name}</p>
                <p>${price}</p>
            </div>
        </div>
    )
};

export default SearchItem;