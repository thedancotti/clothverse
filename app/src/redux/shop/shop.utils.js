export const createCollectionsFromFirestore = (querySnapshot) => {
    const collectionsObj = {};

    querySnapshot.forEach(doc => {
        collectionsObj[doc.id] = doc.data();
    });

    return collectionsObj;
}