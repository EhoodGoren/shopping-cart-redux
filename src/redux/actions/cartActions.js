export const addItem = (item, price) => ({
    type: 'ADD_ITEM',
    item,
    price
})

export const removeItem = (item, price) => ({
    type: 'REMOVE_ITEM',
    item,
    price
})
