const initState = [];


export default (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, {...action.item, qty: 1}];

        case 'INCREASE_QTY':
            return [
                ...state.slice(0, action.itemIndex),
                {...action.item, qty: state[action.itemIndex].qty + 1},
                ...state.slice(action.itemIndex + 1)
            ];

        case 'DECREASE_QTY':
            if (state[action.itemIndex].qty - 1 === 0) {
                return [
                    ...state.slice(0, action.itemIndex),
                    ...state.slice(action.itemIndex + 1)
                ];
            }
            else {
                return [
                    ...state.slice(0, action.itemIndex),
                    {...action.item, qty: state[action.itemIndex].qty - 1},
                    ...state.slice(action.itemIndex + 1)
                ]
            }

        case 'REMOVE_ITEM':
            return [
                ...state.slice(0, action.itemIndex),
                ...state.slice(action.itemIndex + 1)
            ];

        default:
            return state;
    }
}