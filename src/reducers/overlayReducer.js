export default (state = {}, action) => {
    switch (action.type) {
        case 'OVERLAY_TOGGLE':
            return {
                overlayClass: ''
            }
        default:
            return {
                overlayClass: 'hidden'
            }
    }
}