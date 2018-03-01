const initState = [];

const INCREASE_SCALE = 1;

const DECREASE_SCALE = -1;


let updateQty = (state, item, scale) => {
    let index = getItemIndex(state, item);
    return [
        ...state.slice(0, index),
        {...item, qty: state[index].qty + scale},
        ...state.slice(index + 1)
    ]
};

let removeItem = (state, item) => {
    let index = getItemIndex(state, item);
    return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
    ];
};

let getItemIndex = (state, item) => {
    for (let i = 0; i < state.length; i++) {
        if (state[i].itemId === item.itemId) {
            return i
        }
    }
};

export default (state = initState, action) => {

    switch (action.type) {
        case 'ADD_ITEM':
            if (getItemIndex(state, action.item) !== undefined) {

                return updateQty(state, action.item, INCREASE_SCALE)
            }
            else {
                return [...state, {...action.item, qty: 1}]
            }

        case 'INCREASE_QTY':
            return updateQty(state, action.item, INCREASE_SCALE);

        case 'DECREASE_QTY':
            if (state[getItemIndex(state, action.item)].qty - 1 === 0) {
                return removeItem(state, action.item)
            }
            else {
                return updateQty(state, action.item, DECREASE_SCALE);
            }

        case 'REMOVE_ITEM':
            return removeItem(state, action.item);

        default:
            return state;
    }
}