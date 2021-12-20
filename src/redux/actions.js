let itemCounter = 0;
export const addItem = (item, price) => ({
    type: 'ADD_ITEM',
    index: itemCounter++,
    item,
    price
})