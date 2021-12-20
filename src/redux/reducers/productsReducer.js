import productsList from '../../productsData';

const initialState = {
    stocks: {},
    maxStocks: {}
}
for(const product of productsList) {
    initialState.stocks[product.item] = product.stock;
}
initialState.maxStocks = initialState.stocks;

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
        case 'CHECKOUT':
            return {
                ...state,
                maxStocks: state.stocks
            }
        default:
            return state;
    }
}
