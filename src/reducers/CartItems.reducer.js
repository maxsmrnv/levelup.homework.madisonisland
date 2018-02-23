const initState = [
    {
        itemId: 11,
        itemName: 'pink pillow',
        itemPhoto: require('../img/pinkpillow.png'),
        itemPrice: 140
    }
];

export default (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                state: [...state, action.user]
            };

        case 'INCREASE_QTY':
            return {};

        case 'DECREASE_QTY':
            return {};

        case 'REMOVE_ITEM':
            return {};

        default:
            return state;

    }
}