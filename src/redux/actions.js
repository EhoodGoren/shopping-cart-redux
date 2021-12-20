let itemCounter = 0;
export const addItem = (item, price) => ({
    type: 'ADD_ITEM',
    index: itemCounter++,
    item,
    price
})

export const removeItem = (item, price) => ({
    type: 'REMOVE_ITEM',
    item,
    price
})
