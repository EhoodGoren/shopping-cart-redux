import productsList from '../../productsData';
const initialState = {
    stocks: {}
}
for(const product of productsList) {
    initialState.stocks[product.item] = product.stock;
}
export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case 'REDUCE_STOCK':
            return {
                ...state,
                stocks: {
                    ...state.stocks,
                    [action.item]: state.stocks[action.item] - 1
                }
            }
        case 'INCREASE_STOCK':
            return {
                ...state,
                stocks: {
                    ...state.stocks,
                    [action.item]: state.stocks[action.item] + 1
                }
            }
        default:
            return state;
    }
}
