const initialState = {
    total: 0
}
export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                total: state.total + action.price
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                total: state.total - action.price
            }
        default:
            return state;
    }
}