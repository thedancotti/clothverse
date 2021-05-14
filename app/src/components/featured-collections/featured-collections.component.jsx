import React from 'react';

import Collection from '../collection/collection.component';

import FEATURED_COLLECTIONS from './featured-collections.data';

const FeaturedCollections = () => (
    <div className="featured-collections flex flex-column">
        {
            FEATURED_COLLECTIONS.map(
                collection => 
                    <Collection 
                        key={collection.id} 
                        name={collection.name} 
                        imageUrl={collection.imageUrl} 
                    />
            )
        }
    </div>
);

export default FeaturedCollections;