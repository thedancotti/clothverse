import { ShopActionTypes } from './shop.types'; 
import { createCollectionsFromFirestore } from './shop.utils';

const INITIAL_STATE = {
    collections: {}
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopActionTypes.SET_SHOP_DATA:
            return {
                ...state,
                collections: createCollectionsFromFirestore(action.payload)
            }
        default:
            return state;
    }
};

export default shopReducer;