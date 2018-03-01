import shopItems from '../db'

const initState = shopItems;

export default (state = initState, action) => {
    switch (action.type) {
        default:
            return state;

    }
}