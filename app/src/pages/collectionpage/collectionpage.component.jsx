import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
    const { items } = collection;
    return (
        <div className="collection-page">
            <h1 className="ml2">{collection.title}</h1>
            <div 
                className="mt2 flex flex-wrap flex-auto"
                style={{justifyContent: "space-evenly"}}
            >
                {
                    items.map((item, index) =>
                        <CollectionItem key={index} item={item} />
                    )
                }   
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);