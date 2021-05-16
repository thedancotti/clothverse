import { createSelector, createStructuredSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);

export const selectCurrentUserData = createSelector(
    [selectCurrentUser],
    currentUser => currentUser?.user
);