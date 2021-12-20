const initialState = {
    total: 0,
    items: {}
}
export default function cartReducer(state = initialState, action) {
    const actionItem = `${action.item} - ${action.price}`;
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                total: state.total + action.price,
                items: {
                    ...state.items,
                    [actionItem]: state.items[actionItem] ? state.items[actionItem] + 1 : 1
                }
            }
        case 'REMOVE_ITEM':
            if(!state.items[actionItem]) return state;
            const updatedItems = {
                ...state.items,
                [actionItem]: state.items[actionItem] - 1
            };
            if(updatedItems[actionItem] === 0){
                delete updatedItems[actionItem];
            }
            return {
                ...state,
                total: state.total - action.price,
                items: updatedItems
            }
        default:
            return state;
    }
}