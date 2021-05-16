export const createCollectionsFromFirestore = (querySnapshot) => {
    const collectionsObj = {};

    querySnapshot.forEach(doc => {
        collectionsObj[doc.id] = doc.data();
        
        // append category property to each item
        const newArray = collectionsObj[doc.id].items.map(item => ({...item, category: doc.id}));
        collectionsObj[doc.id].items = newArray;
    });

    return collectionsObj;
}