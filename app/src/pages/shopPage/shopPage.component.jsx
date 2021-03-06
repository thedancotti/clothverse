import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collectionpage/collectionpage.component';

const ShopPage = ({ match }) => (
    <div className="shop-page"
        style={{
            marginTop: '140px'
        }}
    >
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

export default ShopPage;