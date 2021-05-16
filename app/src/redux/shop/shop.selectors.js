import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
);

export const selectItems = createSelector(
    [selectCollectionsForPreview],
    collections => collections.reduce((acc, collection) =>
        acc.concat(collection.items), [])
);

// export const selectTargetItems = createSelector(
//     [selectCollectionsForPreview],
//     collections => 
// )