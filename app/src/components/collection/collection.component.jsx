import React from 'react';
import { Link } from 'react-router-dom';

import './collection.styles.css';

const Collection = ({ name, imageUrl }) => (
    <Link to={`/shop/${name}`}>
        <div 
            className="collection relative flex justify-center items-center"
            style={{height: "240px"}}
        >
            <div className="w-100 h-100 cover"
                style={{backgroundImage: `url(${imageUrl})`}}>
            </div>
            <div className="absolute">
                <h1 className="collection-text"
                    style={{opacity: "0.85"}}
                >
                    {name}
                </h1>
            </div>
        </div>
    </Link>
    
);

export default Collection;