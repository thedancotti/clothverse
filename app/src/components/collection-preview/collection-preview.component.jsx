import React from 'react';
import { Link } from 'react-router-dom';

const CollectionPreview = ({ collection }) => {
    console.log(collection)
    const { title, items, routeName } = collection;
    return (
        <div className="collection-preview mt3">
            
            <Link 
                className="f3 b link black ma3"
                to={`/shop/${routeName}`}
            >
                { title }
            </Link>
            <div className="mt2 flex flex-wrap flex-auto"
                style={{justifyContent: "space-evenly"}}
            >
                {
                    items
                    .filter((item, index) => index < 4)
                    .map(item => 
                        <div 
                            className="flex flex-column justify-center items-center"
                            style={{width: "45%", }}>
                           <div>
                                <img 
                                    className="w-100"
                                    style={{height:"250px"}}
                                    src={item.imageUrl}
                                    alt="" 
                                />
                           </div>
                            
                            <p className="mt1 b tc">{item.name}</p>
                        </div>
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