import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ collection }) => {
    const { title, items, routeName } = collection;
    return (
        <div className="collection-preview mt3">
            
            <Link 
                className="f3 b link black ma3"
                to={`/shop/${routeName}`}
            >
                { title }
            </Link>
            <div 
                className="mt2 flex flex-wrap flex-auto"
                style={{justifyContent: "space-evenly"}}
            >
                {
                    items
                    .filter((item, index) => index < 4)
                    .map((item, index) => 
                        <CollectionItem key={index} item={item} hidePrice />
                    )
                }
            </div>
            <Link to={`/shop/${routeName}`} className="db red tc">
                {`View all ${title}`}
            </Link>
        </div>
    )
};
export default CollectionPreview;