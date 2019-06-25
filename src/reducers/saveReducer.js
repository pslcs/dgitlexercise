export default (state = {values: [0, 1, 2, 3, 4]}, action) => {
    switch (action.type) {
        case 'SAVE_VALUES':
            return {
                values: action.payload
            }
        default:
            return state
    }
}