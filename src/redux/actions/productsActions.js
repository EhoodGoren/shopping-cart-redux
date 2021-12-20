export const decreaseStock = (item) => ({
    type: 'REDUCE_STOCK',
    item,
})

export const increaseStock = (item) => ({
    type: 'INCREASE_STOCK',
    item,
})

export const productsCheckout = () => ({
    type: 'CHECKOUT'
})
